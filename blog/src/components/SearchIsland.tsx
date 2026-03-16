import { useState, useMemo, useRef, useEffect } from 'react';

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: number;
}

interface Props {
  posts: Post[];
  basePath: string;
}

export default function SearchIsland({ posts, basePath }: Props) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: / to focus search
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === '/' && !focused && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape' && focused) {
        inputRef.current?.blur();
        setQuery('');
      }
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [focused]);

  const filtered = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();

    return posts
      .map((p) => {
        let score = 0;
        const title = p.title.toLowerCase();
        const desc = p.description.toLowerCase();

        if (title === q) score += 100;
        else if (title.startsWith(q)) score += 75;
        else if (title.includes(q)) score += 50;

        if (p.tags.some((t) => t.toLowerCase() === q)) score += 40;
        else if (p.tags.some((t) => t.toLowerCase().includes(q))) score += 20;

        if (desc.includes(q)) score += 10;

        return { post: p, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.post);
  }, [query, posts]);

  return (
    <div className="mb-10">
      <div className="relative">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-12 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-accent/40 focus:bg-white focus:shadow-[0_0_0_3px_rgba(99,102,241,0.08)] dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-600 dark:focus:border-accent/40 dark:focus:bg-gray-900 dark:focus:shadow-[0_0_0_3px_rgba(99,102,241,0.15)]"
        />
        {!query && !focused && (
          <kbd className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500">
            /
          </kbd>
        )}
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {filtered !== null && (
        <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50/50 p-2 dark:border-gray-800 dark:bg-gray-900/50">
          {filtered.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-gray-400 dark:text-gray-500">
              No posts matching &ldquo;{query}&rdquo;
            </p>
          ) : (
            <div>
              {filtered.map((post, i) => (
                <a
                  key={post.slug}
                  href={`${basePath}posts/${post.slug}`}
                  className="group flex items-start justify-between gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-white dark:hover:bg-gray-800/50"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-indigo-500 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="mt-0.5 line-clamp-1 text-xs text-gray-500 dark:text-gray-400">
                      {post.description}
                    </p>
                  </div>
                  <span className="mt-0.5 shrink-0 text-xs text-gray-400 dark:text-gray-500">
                    {post.readingTime} min
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
