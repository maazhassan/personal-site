---
title: Building a Distributed KV Store in Go with Raft
description: A deep dive into building a distributed in-memory key-value store from scratch in Go, implementing simplified Raft consensus for leader election and log replication.
date: 2026-03-23
tags: [go, distributed-systems, raft, backend]
draft: false
---

I recently built a [distributed in-memory key-value store](https://github.com/maazhassan/go-kv-store) in Go from scratch, with no external dependencies beyond the standard library. It uses HTTP RPCs and a simplified version of the Raft consensus algorithm to coordinate a cluster of nodes.

This post goes through the implementation, the bugs I ran into, and some Go patterns that were useful along the way.

## What It Does

Three (or more) nodes form a cluster. One is elected leader. All writes go through the leader, get replicated to a majority of followers via a Raft log, and only then are applied to each node's in-memory store. If the leader dies, a new election happens within ~300ms and the cluster continues.

```
Client -> POST /set {"key":"color","value":"blue"}
  |
  v
Leader (node1)
  |-- Appends LogEntry to local log
  |-- Sends AppendEntries RPC to node2, node3 (concurrently)
  |-- Waits for majority acknowledgment
  |-- Advances commitIndex
  +-- Responds 200 to client

Meanwhile, each node's apply loop:
  for lastApplied < commitIndex {
      lastApplied++
      store.Set(log[lastApplied].Key, log[lastApplied].Value)
  }
```

Reads are served from any node. This means they can be slightly stale (a follower might not have applied the latest commit yet), but for a learning project that tradeoff is worth the simplicity.

## Why Go?

Go turned out to be a natural fit for this kind of project. A few reasons:

**Goroutines are cheap.** When the leader replicates an entry, it fires one goroutine per peer. When it sends heartbeats, same thing. In Java or Python, you'd think twice about spawning threads this casually. In Go, goroutines cost ~2KB of stack each, so you really can just spin them up whenever you need to.

**`sync.RWMutex` is the right primitive.** The KV store uses a reader-writer lock, allowing multiple goroutines to read concurrently, but writes are exclusive. This maps perfectly to a read-heavy workload. The Raft state machine uses a regular `sync.Mutex` since almost every operation mutates state.

**Channels for coordination.** The election timer doesn't use `time.Sleep` in a loop. Instead, it uses `select` over three channels: a timeout, a reset signal, and a stop signal:

```go
select {
case <-time.After(randomTimeout()):
    r.runElection()
case <-r.resetCh:
    continue // heartbeat received, restart timer
case <-r.stopCh:
    return // shutdown
}
```

This is the idiomatic Go way to multiplex concurrent events, and it completely eliminates the need for polling, callbacks, or event loops.

**`context.Context` everywhere.** Every HTTP handler, every RPC call, every store operation takes a context. It isn't heavily used right now, but it means adding timeouts, tracing, or cancellation later is just a matter of passing a different context with no interface changes.

## How the Raft Implementation Works

The real [Raft paper](https://raft.github.io/raft.pdf) is ~15 pages. Our version implements the two core mechanisms and intentionally skips the harder parts.

### What Was Implemented

**Leader election** follows the paper's core mechanism. Random election timeouts (150-300ms) prevent split votes. Terms are monotonically increasing, and every RPC carries a term number. The election typically converges in one round. On top of the basics, we also added three safety extensions that turned out to be essential without persistent state: a **leader lease** (SS6), **Pre-Vote** (thesis SS9.6), and **log-up-to-date checks** (SS5.4.1) in `RequestVote`. More on why these were necessary in the "No persistence" section below.

**Log replication** follows the paper's structure: leader appends, replicates, waits for majority, commits, then each node applies. The key insight is that committing and applying are decoupled: the commit is a network consensus operation, while applying is a local state machine operation.

### What Was Simplified

**No log consistency checks.** Real Raft includes `prevLogIndex` and `prevLogTerm` in AppendEntries so followers can detect gaps or conflicts. We skip this entirely and assume logs stay aligned. This works as long as there are no weird crash-recovery edge cases, which there won't be since our state is in-memory anyway.

**No log compaction.** The log grows forever. In a production system, you'd snapshot the KV store state periodically and truncate the log. For a project that runs for minutes at a time during demos, this doesn't matter.

**Separate heartbeat and AppendEntries RPCs.** In real Raft, heartbeats are just empty AppendEntries. We kept them as separate endpoints because it makes the code much easier to read; you can look at the heartbeat handler and understand it immediately without mentally filtering out "is this a heartbeat or a real replication?"

**No persistence.** If a node crashes and restarts, it comes back with an empty log and no memory of its previous term or vote. Real Raft writes these to disk before responding to any RPC. Our version is purely in-memory; crash = data loss for that node.

This ended up being a bigger deal than I expected. A restarted node starts at term 0 and immediately begins running elections, incrementing its term each time it fails. Within a few cycles, its term is higher than the current leader's. You might think the leader would just ignore these stale vote requests, and I did add a **leader lease** check (SS6) for exactly that. But the inflated term still leaked through: when the leader sent a heartbeat to the restarted node, it got back a response carrying the inflated term and stepped down. The actual fix was the **Pre-Vote protocol** from SS9.6 of the Raft thesis. Before incrementing its term, a node first asks peers "would you vote for me?" without any state changes on either side. If the answer is no (because a leader is active), the node's term never increments, and the next heartbeat from the real leader brings it back in as a follower. I also added **log-up-to-date checks** to `RequestVote` (SS5.4.1) so that a node with a stale log can't win an election over nodes with more recent entries.

### The Commit Propagation Bug

I hit an interesting bug during development. The leader would commit an entry (majority-acknowledged), apply it locally, but followers would never apply it. The health endpoint showed the leader had the data but followers didn't.

The root cause: when the leader sends `AppendEntries`, it includes its _current_ `commitIndex`. But at the time of sending, `commitIndex` hasn't advanced yet - it only advances _after_ collecting majority acks. So followers received `LeaderCommit: -1`, saw that `-1 > -1` was false, and never advanced their own commit index.

The fix was to piggyback the leader's `commitIndex` on heartbeats. Since heartbeats fire every 75ms, followers learn about commits almost immediately after they happen. This is actually close to what real Raft does, which is that commit information propagates via the next round of AppendEntries/heartbeats.

## Go Patterns Worth Knowing

A few patterns came up repeatedly that are worth knowing if you write Go:

### Snapshot-then-release for locks

```go
func (r *Raft) applyEntries() {
    r.mu.Lock()
    entries := make([]types.LogEntry, commit-start+1)
    copy(entries, r.log[start:commit+1])
    r.lastApplied = commit
    r.mu.Unlock() // release BEFORE calling applyFn

    for _, entry := range entries {
        r.applyFn(entry) // this acquires the KVStore lock
    }
}
```

If `applyFn` acquires the KVStore lock while we're holding the Raft lock, and some other code path acquires them in the opposite order, that's a deadlock. The fix is to copy what you need, release the lock, then do the work. You see this pattern constantly in concurrent Go code.

### Non-blocking channel sends

```go
select {
case r.applyCh <- struct{}{}:
default: // channel full - signal already pending
}
```

The apply channel has a buffer of 1. If the apply loop is already awake and processing, we don't need to queue more signals. One pending "wake up" is enough. The `default` case prevents the sender from blocking.

### Callback-based dependency inversion

```go
type ApplyFunc func(entry types.LogEntry)

// In main.go:
raftNode := raft.New(node, client, func(entry types.LogEntry) {
    switch entry.Command {
    case "SET":
        store.Set(ctx, entry.Key, entry.Value)
    case "DELETE":
        store.Delete(ctx, entry.Key)
    }
})
```

The `raft` package never imports `storage`. Instead, `main.go` passes a closure that captures the store. This keeps the dependency graph clean. Raft depends on types, not on storage. Go interfaces would also work here, but a function type is simpler when there's only one method.

### Structured logging without a library

```go
func (r *Raft) logf(format string, args ...any) {
    r.mu.Lock()
    prefix := fmt.Sprintf("[%s][Term %d][%s]", r.node.ID, r.currentTerm, r.state)
    r.mu.Unlock()
    log.Printf("%s %s", prefix, fmt.Sprintf(format, args...))
}
```

Every log line starts with `[node1][Term 5][leader]`. This makes `grep` incredibly powerful. You can filter by node, term, or role with a single command. For a project this size, this is more practical than pulling in `slog` or `zap`.

## The `internal/` Directory

Go has a special rule: packages under `internal/` can only be imported by code in the parent module. This means if someone `go get`s your module, they can use your public API but can't reach into `internal/storage` or `internal/raft`. It's Go's built-in mechanism for "these are implementation details, not a public contract." The project uses this for every package except `cmd/server`.

## Running It

The whole cluster runs with Docker Compose:

```bash
docker compose up --build
```

Three nodes come up on ports 8081-8083. Within a few hundred milliseconds, one wins the election. You can write to the leader, read from any node, kill the leader, and watch a new one get elected:

```bash
# Write to leader
curl -X POST localhost:8081/set -d '{"key":"color","value":"blue"}'

# Read from follower
curl "localhost:8083/get?key=color"

# Kill leader, new election happens in ~300ms
docker stop node1

# Check who's leader now
curl -s localhost:8082/health | jq .state
```

## What I'd Do Differently Next Time

**Use gRPC instead of HTTP/JSON.** The Raft RPCs fire dozens of times per second (heartbeats alone are ~13/sec per peer). JSON serialization and HTTP overhead add latency. gRPC with protobuf would be faster and also give us proper streaming for things like log catch-up.

**Add proper tests from the start.** The modular structure (interfaces, dependency injection) makes the code testable, but I didn't write tests as I went. A test harness that simulates network partitions and node failures would have caught the commit propagation bug much earlier.

**Implement log consistency checks.** Skipping `prevLogIndex` / `prevLogTerm` works for the happy path, but it means a follower that misses a few AppendEntries (due to a network blip) will have a gap in its log that never gets filled. Real Raft handles this with the leader tracking each follower's next index and retrying from there.

---

Building this taught me more about distributed consensus than reading about it ever did. Once you've debugged election duels and term inflation at the log level, the design decisions in tools like etcd and CockroachDB start to make a lot more sense.
