# Personal Site

My personal portfolio and blog, hosted at [maazhassan.net](https://maazhassan.net/).

## Tech Stack

- **Main site** — React 19, TypeScript, Vite, Tailwind CSS, react-spring
- **Blog** ([/blog](https://maazhassan.net/blog/)) — Astro, React, Tailwind CSS, MDX

The blog lives in the [`blog/`](blog/) subdirectory and builds into `public/blog/` so it's served as a subfolder of the main site.

## Getting Started

```sh
npm install          # install main site dependencies
cd blog && npm install  # install blog dependencies
```

### Development

```sh
npm run dev          # start main site dev server (localhost:5173)
cd blog && npm run dev  # start blog dev server (localhost:4321)
```

### Building

```sh
npm run build        # build both blog and main site for production
```

The build pipeline (`predeploy`) builds the blog first into `public/blog/`, then builds the main Vite app — so the final `dist/` output contains everything.

### Deploying

```sh
npm run deploy       # deploy dist/ to GitHub Pages
```

Uses [gh-pages](https://www.npmjs.com/package/gh-pages) to publish the `dist/` folder. The custom domain is configured via `public/CNAME`.

## Project Structure

```
├── src/                  # Main React app
│   ├── components/       # UI components
│   ├── hooks/            # Animation hooks (react-spring)
│   ├── contexts/         # React contexts
│   ├── images/           # Project screenshots
│   └── types.ts          # Shared TypeScript types
├── blog/                 # Astro blog (see blog/README.md)
├── public/               # Static assets (favicon, CNAME, etc.)
└── index.html            # Vite entry point
```
