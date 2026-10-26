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
- CV download, contact links, and a scroll-to-top button that reveals audio and language controls on hover, keyboard focus, or touch.

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
git restore --source=origin/master --worktree --overlay -- src/assets public/certificates
npm ci
npm run dev
```

`--overlay` adds the archived assets and preserves existing application files. The working branch stays on `main`, and its README is preserved. The archive files keep their original paths and are ignored by `.gitignore` on `main`.

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
  curriculum-vitae/  Downloadable curriculum vitae
  robots.txt         Crawler directives
src/
  app/            Page composition, layout, metadata, and global CSS
  assets/
    icons/        SVG icons imported as React components
    images/       Profile, project, company, and decorative images
  components/     Page sections, cards, headers, dialogs, image viewers, and controls
  lib/            Language context, translations, hydration hook, and navigation helper
biome.json        Lint rules
next.config.mjs   Section route rewrites and SVG loader configuration
tsconfig.check.json
```

## Updating content

- **Text and translations:** edit both languages in `src/lib/translations.ts` and keep their keys and arrays aligned.
- **Introduction and CV:** edit the text in `src/lib/translations.ts` and the link in `src/components/Hero.tsx`; the PDF lives at `public/curriculum-vitae/CV_Rakan Fadhil Prayata.pdf`.
- **Biography and tech stack:** edit the text in `src/lib/translations.ts` and the toolbox lists in `src/components/About.tsx`.
- **Experience:** update `experienceAssets` in `src/components/Experiences.tsx` and the matching translation IDs.
- **Projects:** update `projectAssets` in `src/components/Projects.tsx`, the matching translation IDs, and the images in `src/assets/images/`.
- **Certificates:** add images to `public/certificates/`, update `certificateAssets` in `src/components/Certificates.tsx`, and add the matching translation IDs. Array order controls display order.
- **Contact links:** edit `src/components/Hero.tsx` and `src/components/Footer.tsx`.
- **Metadata and theme:** edit `src/app/layout.tsx` and `src/app/globals.css`.

All content is stored locally. Keep existing section IDs and their mappings in `Navbar.tsx` and `next.config.mjs` synchronized when changing navigation.

Use lowercase, hyphen-separated asset filenames and update their imports or public URLs when renaming them. The CV keeps the filename `CV_Rakan Fadhil Prayata.pdf`.

Use the existing WebP versions for image imports and certificate URLs. The `main` branch contains the application and its active assets. Original PNG, JPG, and JPEG images, unused WebP previews, and unused local SVG icons are archived on the `master` branch. These backup files may remain locally and are ignored on `main`.

## Routes and deployment

`/about`, `/experience`, `/project`, and `/certificates` rewrite to the main page. Client-side navigation scrolls to the matching section and updates the URL.

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
