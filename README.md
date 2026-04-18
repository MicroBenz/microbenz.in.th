# MicroBenz — microbenz.in.th

Personal blog and sharing space at [microbenz.in.th](https://microbenz.in.th). Covers life, tech, gaming, and everything in between.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Writing Blog Posts](#writing-blog-posts)
- [Architecture](#architecture)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Astro](https://astro.build) 6 (static output) |
| **Content** | MDX via `@astrojs/mdx` |
| **Styling** | Tailwind CSS v4 + `@tailwindcss/typography` |
| **Language** | TypeScript (strict mode) |
| **Hosting** | Firebase Hosting (`microbenz-in-th`) |
| **CI/CD** | GitHub Actions |
| **Analytics** | Google Tag Manager + Rybbit |
| **Fonts** | Poppins, IBM Plex Sans Thai Looped, IBM Plex Mono |

---

## Prerequisites

- **Node.js** 18 or higher
- **npm** (bundled with Node.js)

No database, no backend, no environment variables required. This is a fully static site.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/MicroBenz/microbenz.in.th.git
cd microbenz.in.th
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Dev Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser. The site hot-reloads on file changes.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

There is no test suite — this is a static site with no server-side logic to test.

---

## Writing Blog Posts

Blog posts live in `src/content/blog/` as numbered directories.

### Create a New Post

1. Create a new directory following the numbering convention:
   ```
   src/content/blog/32-your-post-slug/
   ```

2. Add an `index.md` (or `index.mdx` for JSX components) with the required frontmatter:
   ```yaml
   ---
   title: 'Your Post Title'
   date: '2026-04-18T10:00:00.000Z'
   slug: your-post-slug
   featuredImage: './cover.jpg'
   tags: ['Tech']
   ---

   Your content here...
   ```

3. Place the featured image (and any inline images) in the same directory alongside `index.md`.

### Frontmatter Reference

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Post title displayed as heading |
| `date` | ISO 8601 string | Yes | Publication date |
| `featuredImage` | relative path | Yes | Hero image shown on card and post |
| `tags` | string[] | Yes | Category tags (e.g., `['Tech', 'Life']`) |
| `slug` | string | No | URL override; defaults to directory name |

### URL Structure

Posts are served at `/blog/<slug>`. The `slug` field in frontmatter overrides the directory name. Legacy URLs (old Medium slugs and old blog URLs with Thai characters) are redirected in `astro.config.mjs`.

---

## Architecture

### Directory Structure

```
├── .github/
│   └── workflows/
│       ├── deploy-live.yml       # Auto-deploy to prod on push to main
│       └── deploy-preview.yml    # Manual preview channel deploy
├── public/
│   └── assets/
│       ├── favicon/              # Favicon files
│       ├── images/               # Site-wide images (OG image, photos)
│       └── logo/                 # Brand logos
├── src/
│   ├── components/
│   │   ├── card/
│   │   │   └── BlogCard.astro    # Featured and regular blog card variants
│   │   ├── BaseHead.astro        # <head> with meta, OG, Twitter cards, fonts
│   │   ├── FormattedDate.astro   # Locale-aware date renderer
│   │   ├── Header.astro          # Fixed nav (72px) with backdrop blur
│   │   ├── HeaderLink.astro      # Nav link with active-state underline
│   │   └── Footer.astro          # Footer with links and copyright
│   ├── content/
│   │   └── blog/                 # Blog post directories (01-ywc14/, 02-…/)
│   ├── layouts/
│   │   └── PageLayout.astro      # Main layout: GTM, Rybbit, Header, Footer
│   ├── pages/
│   │   ├── index.astro           # Homepage with featured + grid layout
│   │   ├── blog/
│   │   │   └── [...slug].astro   # Individual post page
│   │   └── rss.xml.js            # RSS feed
│   ├── styles/
│   │   └── global.css            # Tailwind v4 directives + @theme tokens
│   ├── consts.ts                 # SITE_TITLE, SITE_DESCRIPTION
│   └── content.config.ts         # Content collection schema (Zod)
├── astro.config.mjs              # Astro config: integrations, redirects, Vite
├── firebase.json                 # Firebase Hosting config (public: "dist")
├── tailwind.config.cjs           # Tailwind config (fonts, colors)
└── tsconfig.json                 # Strict TypeScript config
```

### Content System

Posts are loaded via Astro's content collections API using a `glob` loader:

```typescript
// src/content.config.ts
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.string().or(z.date()).transform((val) => new Date(val)),
    featuredImage: image(),       // processed by Astro Image for optimization
    tags: z.array(z.string()),
    slug: z.string().optional(),
  }),
});
```

### Page Routing

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/index.astro` | Homepage: hero + featured post + 3-col grid |
| `/blog/<slug>` | `src/pages/blog/[...slug].astro` | Individual post with hero image and related posts |
| `/rss.xml` | `src/pages/rss.xml.js` | RSS feed for all posts |

### Design System

Colors and fonts are defined as CSS custom properties in `src/styles/global.css` using Tailwind v4's `@theme` syntax:

| Token | Value | Usage |
|---|---|---|
| `--color-space-cadet` | `#173057` | Dark navy — footer background, headings |
| `--color-celestial-blue` | `#518ECB` | Bright blue — links, tags, accents |
| `--color-bittersweet` | `#F26A5D` | Coral — highlights, call-to-action |
| `--color-main-bg` | `#d9e6f2` | Light blue — page background |
| `--font-sans` | Poppins | Body text |
| `--font-thai` | IBM Plex Sans Thai Looped | Thai language content |
| `--font-mono` | IBM Plex Mono | Code blocks |

Prose content (blog post body) is styled via the `@tailwindcss/typography` plugin with `prose-lg` / `prose-xl` classes.

### Legacy URL Redirects

`astro.config.mjs` contains 20+ redirect rules mapping old Medium URLs (with Thai characters) and old blog slugs to current `/blog/<slug>` routes. These are handled at build time as static redirects.

---

## Deployment

The site deploys to **Firebase Hosting** (`microbenz-in-th`) from the `./dist/` directory.

### Automatic Deployment (CI/CD)

Push to `main` triggers `.github/workflows/deploy-live.yml`, which:

1. Checks out the code
2. Installs dependencies (`npm install`)
3. Builds the site (`npm run build`)
4. Deploys `./dist/` to Firebase Hosting (live channel)

Required GitHub secret: `FIREBASE_SERVICE_ACCOUNT_MICROBENZ_IN_TH`

### Preview Deployment

`.github/workflows/deploy-preview.yml` is triggered manually via `workflow_dispatch`. It deploys to a temporary preview channel (`preview-<sha>`) without affecting production — useful for reviewing changes before merging.

### Manual Deployment

```bash
# Install Firebase CLI if not already installed
npm install -g firebase-tools

# Authenticate
firebase login

# Build
npm run build

# Deploy
firebase deploy --project microbenz-in-th
```

### Build Output

Astro generates a fully static site — no Node.js server required. The `dist/` directory contains plain HTML, CSS, JS, and optimized images ready to serve from any static host.

---

## Troubleshooting

### Port Already in Use

```
Error: listen EADDRINUSE: address already in use :::4321
```

Kill the process using port 4321 or run on a different port:

```bash
npm run dev -- --port 3000
```

### Image Optimization Errors

Astro processes images referenced in frontmatter (`featuredImage`) at build time. If an image is missing from the post directory, the build will fail with a module resolution error. Ensure the image file path in frontmatter exactly matches the filename (case-sensitive).

### Build Fails After Adding a Post

Check that all required frontmatter fields are present and the `featuredImage` path is a valid relative path starting with `./`. The Zod schema in `src/content.config.ts` will throw a descriptive error indicating which field is missing or invalid.

### Tailwind Classes Not Applying

This project uses Tailwind CSS v4, which scans source files automatically. If custom classes from `global.css` (like `.eyebrow` or `.font-thai`) don't apply, verify:

1. The `@import "tailwindcss"` directive is at the top of `src/styles/global.css`
2. `global.css` is imported in `src/components/BaseHead.astro`

### Fonts Not Loading

Google Fonts are loaded via `<link>` tags in `src/components/BaseHead.astro`. This requires an internet connection. Fonts fall back to system `sans-serif` when offline — this is expected behavior.
