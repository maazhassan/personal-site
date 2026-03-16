# Blog

The blog for [maazhassan.net/blog](https://maazhassan.net/blog/), built with [Astro](https://astro.build/).

## Tech Stack

Astro 6, React, Tailwind CSS, MDX, content collections, RSS feed generation.

## Development

```sh
npm install
npm run dev          # starts dev server at localhost:4321
```

## Building

The blog is typically built as part of the root project's build pipeline (see root `README.md`). To build standalone:

```sh
npm run build        # outputs to ../public/blog/
```

The Astro config sets `base: '/blog/'` and `outDir: '../public/blog'` so the built output integrates into the main site's `public/` folder before Vite bundles everything.

## Structure

```
├── src/
│   ├── content/          # Blog posts (MDX/MD content collections)
│   ├── components/       # React components (search, theme toggle, etc.)
│   ├── layouts/          # Page layouts
│   ├── pages/            # Astro pages and RSS endpoint
│   ├── styles/           # Global styles
│   └── utils/            # Helpers (reading time, etc.)
└── astro.config.mjs      # Astro configuration
```

## Adding a Post

Add a new `.md` or `.mdx` file to `src/content/posts/` with frontmatter:

```md
---
title: "Post Title"
description: "A short description."
date: 2026-03-16
tags: ["tag1", "tag2"]
---

Post content here.
```

The post will appear automatically on the blog index and in the RSS feed.
