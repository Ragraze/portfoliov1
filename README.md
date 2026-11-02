# Portfolio 1.0

Personal portfolio of **Rakan Fadhil Prayata**, an IT graduate from Universitas Brawijaya. The site presents professional experience, technical skills, projects, certificates, and contact links.

[Live website](https://rakanfadhil.com) · [GitHub repository](https://github.com/Ragraze/portfoliov1)

## Features

- Responsive single-page layout with scroll-aware navigation.
- Animated introduction, section decorations, and scrolling tech stack.
- Professional experience timeline with keyboard-accessible detail dialogs.
- Project filtering for web development, data science/AI, networking, and digital content.
- Shared fullscreen image viewer for projects and certificates, with keyboard navigation.
- Draggable certificate carousel with automatic scrolling.
- English and Indonesian content with a saved language preference.
- Online CV with PDF download and print formatting, contact links, and a scroll-to-top button that reveals audio and language controls on hover, keyboard focus, or touch.

## Tech stack

| Purpose      | Technology                                      |
| ------------ | ----------------------------------------------- |
| Framework    | Next.js 16, App Router                          |
| UI           | React 19, TypeScript                            |
| Styling      | Tailwind CSS 4, tailwind-merge                  |
| Animation    | Framer Motion                                   |
| Icons        | Simple Icons, local SVG assets, SVGR, Heroicons |
| Code quality | Biome, TypeScript, Prettier                     |

Development and production builds use Webpack to preserve the SVG loader configuration. Tailwind's theme, responsive variants, and container settings live in `src/app/globals.css`, including the existing RGB colors and tablet orientation queries.

Tailwind CSS 4 requires Safari 16.4+, Chrome 111+, or Firefox 128+. Responsive checks cover mobile, tablet portrait and landscape, and desktop layouts in Chromium with touch and pointer emulation.

Biome runs the recommended Next.js and React lint rules. It replaces the ESLint Next plugin, whose dependency tree still includes the unpatched `braces` advisory GHSA-vfj7-8cjw-p6xm. Prettier keeps the existing formatting rules.

`npm run audit:production` reports no production advisories on 2026-11-03. The full audit reports three low-severity entries from the same unpatched `deepmerge` advisory through the development-only SVGR build chain ([GHSA-gcqx-w48m-w2h4](https://github.com/advisories/GHSA-gcqx-w48m-w2h4)). SVGR processes checked-in icons and local configuration; it is not a runtime upload endpoint. Avoid `npm audit fix --force`, which proposes downgrading SVGR across major versions.

## Getting started

Use Node.js 24.22.1 and npm 11.19.1. The Node version is pinned in `.nvmrc`; with nvm installed, run `nvm install` and `nvm use` before installing dependencies.

```sh
git clone --branch main https://github.com/Ragraze/portfoliov1.git
cd portfoliov1
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). No environment variables, database, or backend service are required. The initial build needs internet access to fetch the Inter and Calistoga fonts through `next/font/google`.

Next.js also allows `127.0.0.1`, the server's assigned IPv4 addresses, and the portfolio's `rakanfadhil.com` host for development resources through `allowedDevOrigins`. Add an exact hostname there when using another development tunnel.

### Including archived assets

To get the application from `main` and the backup assets from `master` in one local folder, use this sequence for a fresh clone:

```sh
git clone --branch main https://github.com/Ragraze/portfoliov1.git
cd portfoliov1
git restore --source=origin/master --worktree --overlay -- src/assets public/certificates public/curriculum-vitae
npm ci
npm run dev
```

`--overlay` adds the archived assets and preserves existing application files. The working branch stays on `main`, and its README is preserved. The archive files are ignored by `.gitignore` on `main`. The previous AgriSense preview is named `agrisense-previous.webp` so restoring the archive preserves the active transparent image.

## Commands

| Command                    | Description                                           |
| -------------------------- | ----------------------------------------------------- |
| `npm run dev`              | Start the development server.                         |
| `npm run build`            | Create a production build.                            |
| `npm start`                | Serve the production build.                           |
| `npm run lint`             | Run Biome checks, including Next.js and React rules.  |
| `npm run typecheck`        | Check types and unused declarations or parameters.    |
| `npm run audit`            | Audit all dependencies for known vulnerabilities.     |
| `npm run audit:production` | Audit production dependencies.                        |
| `npm run format`           | Format source code, configuration, and documentation. |
| `npm run format:check`     | Check formatting without changing files.              |

Next.js uses `.next/dev/` for development and `.next/` for production output. The application type check uses `tsconfig.check.json` to keep generated Next.js validators outside the unused-code checks; production builds also validate Next.js route types.

Before committing, run:

```sh
npm run format:check
npm run lint
npm run typecheck
npm run build
npm run audit
```

## Project structure

```text
public/
  audio/             Background audio
  certificates/      Certificate images
  backgrounds/       Precomputed SVG dot patterns
  .well-known/       ARD manifest
  llms.txt           Portfolio summary and links for agents
  robots.txt         Crawler directives and sitemap
  sitemap.xml        Canonical page index
src/
  app/            Routes, page composition, metadata, and global CSS
  assets/         Images and local SVG icons
  components/     Shared UI and interactive components
    sections/     Homepage sections
  data/           Translations, CV content, and section assets
  hooks/          Shared React hooks
  providers/      Language state and motion configuration
  lib/            Navigation and deferred motion feature bundles
```

## Updating content

- **Text and translations:** edit both languages in `src/data/translations.ts` and keep their keys and arrays aligned.
- **Introduction and CV:** edit the introduction in `src/data/translations.ts`. The hero links to `/curriculum-vitae`; its content and external PDF link live in `src/data/curriculum-vitae.ts`. Keep the online CV aligned with the current documents at `https://s.id/rakan-curriculum-vitae`. Screen and print styles live in `src/app/curriculum-vitae/curriculum-vitae.css`. The old PDF is archived only on `master`.
- **Biography and tech stack:** edit the text in `src/data/translations.ts` and the toolbox lists in `src/data/toolbox.ts`.
- **Experience:** update `experienceAssets` in `src/data/experiences.ts` and the matching translation IDs.
- **Projects:** update `projectAssets` in `src/data/projects.ts`, the matching translation IDs, and the images in `src/assets/images/`.
- **Certificates:** add images to `public/certificates/`, update `certificateAssets` in `src/data/certificates.ts`, and add the matching translation IDs. Array order controls display order.
- **Contact links:** edit `src/components/sections/Hero.tsx` and `src/components/Footer.tsx`.
- **Metadata and theme:** edit `src/app/layout.tsx` and `src/app/globals.css`.

All content is stored locally. Keep existing section IDs and their mappings in `Header.tsx` and `next.config.mjs` synchronized when changing navigation.

Use lowercase, hyphen-separated asset filenames and update their imports or public URLs when renaming them. The archived CV keeps the filename `CV_Rakan Fadhil Prayata.pdf` on `master`.

Use the existing WebP versions for content images and certificate URLs. The shared grain texture uses AVIF to reduce its transfer size. The `main` branch contains the application and its active assets. Original PNG, JPG, and JPEG images, retired WebP previews, the unused LinkedIn SVG icon, and the old CV PDF are archived on the `master` branch. These backups may remain locally and are excluded by `.gitignore` and `.dockerignore` on `main`. Icons supplied by Simple Icons and Heroicons are imported from dependencies; six active local SVG icons remain in `src/assets/icons/`.

The routes compose sections; sections read typed local data and use shared UI. Browser state belongs in providers and hooks. This static portfolio does not need repository or service layers.

Dot patterns are precomputed in `public/backgrounds/`; their geometry matches the original generated patterns. The loader waits for fonts and eager images, while lazy images keep their native loading behavior. Navigation caches section positions when their sizes change, and timeline scrolling uses cached row thresholds. Motion animation features load asynchronously; drag features and per-slide animation subscriptions activate when the certificate carousel approaches the viewport.

Next.js still includes its own client runtime and compatibility polyfills. A Lighthouse unused/legacy JavaScript warning can include those framework files; do not strip them with Webpack aliases or patch `node_modules` to clear the audit. Measure production builds, because development bundles are intentionally larger.

### Local performance check (2026-11-03)

Separate Lighthouse mobile runs against production builds, with optimized image caches warmed:

| Metric                      |        Before |        After |
| --------------------------- | ------------: | -----------: |
| Performance                 |            79 |           91 |
| Accessibility               |            96 |          100 |
| LCP                         |        2.83 s |       1.32 s |
| Total blocking time         |        350 ms |       352 ms |
| HTML transfer               | 109,236 bytes | 92,687 bytes |
| Estimated unused JavaScript |        57 KiB |       56 KiB |
| Unattributed forced reflow  |      62.95 ms |     63.71 ms |

These are single local measurements, not live PageSpeed or field results. The shared grain asset decreased from 78,684 to 33,487 bytes. The footer passes the Lighthouse contrast audit. Framework compatibility code still accounts for about 12 KiB of the legacy JavaScript warning; unattributed reflow remains and needs a deployment trace before assigning a cause. Script transfer increased slightly (242,115 to 243,789 bytes) with the deferred chunks, while carousel animation subscriptions no longer initialize outside the viewport.

Browser checks cover both languages at mobile, tablet, and desktop sizes, and separately check 320px, tablet landscape, dialogs, keyboard focus, carousel motion, language persistence, and the CV without JavaScript. Content arrays, translation files, CV data, SVG geometry, links, section dimensions, and project card dimensions match the baseline.

## Routes and deployment

`/about`, `/experience`, `/project`, and `/certificates` rewrite to the main page. Client-side navigation scrolls to the matching section and updates the URL.

`/curriculum-vitae` is a separate, server-rendered CV page with a Back link and a Download PDF link to `https://s.id/rakan-curriculum-vitae`. The link is configured through `cvPdfUrl` in `src/data/curriculum-vitae.ts`; the old PDF is retained on `master` and is not shipped with the application. The page uses its own dot pattern and rotating diamond outlines, sharing the homepage's pointer interactions and star cursor with reduced-motion support. The profile photo is cropped to a 3:4 ratio. The CV remains readable and its PDF link works without JavaScript. Browser print styles retain an A4 layout with a white background.

### Search and agent discovery

The canonical origin is `https://rakanfadhil.com`. The homepage metadata includes a canonical URL, Open Graph metadata, and Schema.org `ProfilePage` / `Person` JSON-LD. Section routes share the homepage canonical because they render the same document. The CV has its own canonical URL; `public/sitemap.xml` lists `/` and `/curriculum-vitae`. No synthetic modification dates or separate language URLs are published.

- `/llms.txt` follows the [llms.txt proposal](https://llmstxt.org/) and provides a short portfolio summary, section links, repositories, and contact links. `/llm.txt` permanently redirects to it.
- `/.well-known/ard.json` follows the [ARD v0.91 manifest format](https://github.com/ards-project/ard-spec/blob/main/spec/ard.md). Its `entries` array is empty because the portfolio does not expose any callable agentic resources. Add entries only when a real MCP server, A2A agent, skill, or other agent service is published, with its actual descriptor URL and media type.
- `robots.txt` allows crawling and advertises the sitemap through `Sitemap`. It uses only fields supported by Google's robots.txt parser. HTML head links advertise the summary, ARD manifest, and sitemap; the manifest is also discoverable at its well-known URL.

When changing the domain, update `src/app/layout.tsx`, the JSON-LD in `src/app/page.tsx`, and these public discovery files together. Keep `llms.txt` synchronized with the content in `src/data/translations.ts` and the project links in `src/data/projects.ts` and contact links in the components. The public files are copied into the Docker image with the other public assets.

Deploy with a hosting provider that supports Next.js, or run it on a Node.js server:

```sh
npm ci
npm run build
npm start
```

Use the Next.js runtime for route rewrites and image optimization. A plain static file server does not provide those features.

### Docker

Build and run the production image from the project root:

```sh
docker build -t portfolio:local .
docker run --rm --init --name portfolio -p 3000:3000 portfolio:local
```

Open [localhost:3000](http://localhost:3000). If the development server is already using port 3000, use `-p 3001:3000` and open port 3001 instead.

The Dockerfile uses Node.js 24.22.1 and npm 11.19.1, builds with Webpack, and serves the standalone Next.js output as the non-root `node` user. Public assets and optimized image support are included. `PORTFOLIO_STANDALONE=true` is set by the Docker build stage; ordinary local builds keep their existing output mode. The build needs internet access for npm dependencies, the base image, and Google Fonts.

## Credits and license

The portfolio acknowledges **Frontend Tribe** as a learning and design reference, matching the credit in the existing site metadata.

Original source-code contributions by Rakan Fadhil Prayata are available under the [MIT License](LICENSE). This grant does not cover the CV, certificates, personal photographs, company materials, project screenshots, music, brand logos, or other third-party assets. Those materials remain subject to their respective owners' rights and are included as portfolio content. Replace them with your own materials when adapting the project. Third-party code and dependencies retain their own licenses.
