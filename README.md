# Portfolio 1.0

Personal portfolio of **Rakan Fadhil Prayata**, an IT graduate from Universitas Brawijaya. The site presents professional experience, technical skills, projects, certificates, and contact links.

[Live website](https://rakanfadhil.com) · [GitHub repository](https://github.com/Ragraze/portfoliov1)

## Features

- Responsive single-page layout with scroll-aware navigation.
- Animated introduction, section decorations, and scrolling tech stack.
- Professional experience timeline with keyboard-accessible detail dialogs.
- Project filtering for web development, data science/AI, networking, and videography.
- Shared fullscreen image viewer for projects and certificates, with keyboard navigation.
- Draggable certificate carousel with automatic scrolling.
- CV download, contact links, audio controls, and a scroll-to-top button.

## Tech stack

| Purpose      | Technology                        |
| ------------ | --------------------------------- |
| Framework    | Next.js 14, App Router            |
| UI           | React 18, TypeScript              |
| Styling      | Tailwind CSS 3, tailwind-merge    |
| Animation    | Framer Motion                     |
| Icons        | Local SVG assets, SVGR, Heroicons |
| Code quality | ESLint, TypeScript, Prettier      |

## Getting started

Use Node.js and npm. Next.js 14 requires Node.js 18.17 or newer; validation for this repository uses Node.js 24.21.0.

```sh
git clone https://github.com/Ragraze/portfoliov1.git
cd portfoliov1
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). No environment variables, database, or backend service are required. The initial build needs internet access to fetch the Inter and Calistoga fonts through `next/font/google`.

## Commands

| Command                | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `npm run dev`          | Start the development server.                         |
| `npm run build`        | Create a production build.                            |
| `npm start`            | Serve the production build.                           |
| `npm run lint`         | Run Next.js ESLint checks.                            |
| `npm run typecheck`    | Check types and unused declarations or parameters.    |
| `npm run format`       | Format source code, configuration, and documentation. |
| `npm run format:check` | Check formatting without changing files.              |

Next.js uses the default `.next/` directory for development and production build output.
Stop the development server before running `npm run build`.

Before committing, run:

```sh
npm run format:check
npm run lint
npm run typecheck
npm run build
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
  components/     Reusable cards, headers, dialogs, image viewers, and controls
  sections/       Navbar, Hero, About, Experiences, Projects, Certificates, Footer
next.config.mjs   Section route rewrites and SVG loader configuration
tailwind.config.ts
```

## Updating content

- **Introduction and CV:** edit `src/sections/Hero.tsx`; the PDF lives at `public/curriculum-vitae/CV_Rakan Fadhil Prayata.pdf`.
- **Biography and tech stack:** edit `src/sections/About.tsx`.
- **Experience:** update the `experiences` array in `src/sections/Experiences.tsx`.
- **Projects:** update `portfolioProjects` in `src/sections/Projects.tsx` and place project images in `src/assets/images/`.
- **Certificates:** add images to `public/certificates/` and update the `certificates` array in `src/sections/Certificates.tsx`. Array order controls display order.
- **Contact links:** edit `src/sections/Hero.tsx` and `src/sections/Footer.tsx`.
- **Metadata and theme:** edit `src/app/layout.tsx`, `src/app/globals.css`, and `tailwind.config.ts`.

All content is stored locally. Keep existing section IDs and their mappings in `Navbar.tsx` and `next.config.mjs` synchronized when changing navigation.

Use lowercase, hyphen-separated asset filenames and update their imports or public URLs when renaming them. The CV keeps the filename `CV_Rakan Fadhil Prayata.pdf`.

Use the existing WebP versions for image imports and certificate URLs. Keep the original PNG, JPG, and JPEG files alongside them.

## Routes and deployment

`/about`, `/experience`, `/project`, and `/certificates` rewrite to the main page. Client-side navigation scrolls to the matching section and updates the URL.

Deploy with a hosting provider that supports Next.js, or run it on a Node.js server:

```sh
npm ci
npm run build
npm start
```

Use the Next.js runtime for route rewrites and image optimization. A plain static file server does not provide those features.

## Credits and license

The portfolio acknowledges **Frontend Tribe** as a learning and design reference, matching the credit in the existing site metadata.

Original source-code contributions by Rakan Fadhil Prayata are available under the [MIT License](LICENSE). This grant does not cover the CV, certificates, personal photographs, company materials, project screenshots, music, brand logos, or other third-party assets. Those materials remain subject to their respective owners' rights and are included as portfolio content. Replace them with your own materials when adapting the project. Third-party code and dependencies retain their own licenses.
