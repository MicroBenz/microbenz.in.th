# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server
npm run build     # Build production site to ./dist/
npm run preview   # Preview the built site locally
```

No test suite exists — this is a static site.

## Architecture

**Astro 4** static site with **MDX**, **Tailwind CSS**, and **TypeScript**. Deployed to Firebase Hosting (`microbenz-in-th` project) from the `dist/` directory.

### Content System

Blog posts live in `src/content/blog/` as numbered directories (e.g., `31-first-home-ep1/`). Each directory contains `index.md` plus any images referenced by the post. The content collection schema is defined in `src/content/config.ts` and enforces: `title`, `date`, `featuredImage`, `tags`, and optional `slug`.

Frontmatter pattern:
```yaml
title: Post title
date: 'YYYY-MM-DDTHH:MM:SS.sssZ'
slug: url-slug          # optional override; defaults to directory name
featuredImage: './image.png'
tags: ['Category']
```

### Page Routing

- `src/pages/index.astro` — homepage, shows top 2 posts in 2-col then rest in 3-col grid
- `src/pages/blog/[...slug].astro` — dynamic route for all blog posts
- `src/pages/rss.xml.js` — RSS feed

Legacy Medium/old-blog URLs are redirected in `astro.config.mjs` via the `redirects` config.

### Key Files

- `src/consts.ts` — site title and description constants
- `src/layouts/PageLayout.astro` — main layout wrapper; includes GTM and Rybbit analytics
- `src/components/BaseHead.astro` — all `<head>` meta, OpenGraph, Twitter cards, fonts
- `tailwind.config.cjs` — custom fonts (Poppins + IBM Plex Sans Thai Looped), custom color palette, typography plugin

### Styling

Tailwind-only. The custom color palette uses names like `space-cadet`, `celestial-blue`, `bittersweet`. Prose content is styled via Tailwind Typography (`prose-lg`/`prose-xl`). No separate CSS files beyond `src/styles/global.css` (which only has Tailwind directives).
