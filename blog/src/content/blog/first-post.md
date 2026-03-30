---
title: Building a Blog with Astro
description: A walkthrough of how I built this blog using Astro, Tailwind CSS, and content collections.
date: 2026-03-10
tags: [astro, webdev, blog]
draft: false
---

When I set out to build a blog, I wanted something fast, minimal, and easy to maintain. After evaluating a handful of frameworks, I landed on **Astro**.

## Why Astro?

Astro ships **zero JavaScript by default**. That means every page is static HTML until you explicitly opt into interactivity. For a blog, this is exactly what you want:

- Blazing fast page loads
- Great SEO out of the box
- Markdown-first content workflow
- Simple deployment to any static host

## Setting Up Content Collections

Astro's content collections give you type-safe access to your Markdown frontmatter. Here's what a basic schema looks like:

```typescript
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

This gives you autocompletion and validation for every post's frontmatter.

## Writing Posts in Markdown

Posts are just `.md` files with YAML frontmatter. Here's the workflow:

1. Create a new `.md` file in `src/content/blog/`
2. Add your frontmatter (title, description, date, tags)
3. Write your content
4. The build system handles the rest

### Code Blocks

Astro has built-in syntax highlighting via Shiki. Here's an example:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("world"));
```

### Lists and Formatting

Things I like about this setup:

- **Simplicity**: Markdown files, no database
- **Speed**: static HTML, no client-side rendering
- **Flexibility**: Astro Islands for interactive bits
- **Portability**: works as an Obsidian vault too

> The best blog engine is the one that gets out of your way and lets you write.

## What's Next

A few things on the roadmap:

1. Add syntax highlighting themes for light/dark mode
2. Implement related posts suggestions
3. Add an open graph image generator
4. Set up automatic deployments

---

If you're thinking about starting a blog (and want to build it yourself like me), give Astro a try. The developer experience is excellent, and the performance is hard to beat.
