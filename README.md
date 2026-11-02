# Portfolio asset archive

This branch stores original images, retired WebP previews, unused icons, and the old curriculum vitae PDF.

The complete application, configuration, documentation, and active assets are on the [main branch](https://github.com/Ragraze/portfoliov1/tree/main).

## Contents

- `public/certificates/`: 27 original JPG, JPEG, and PNG certificate images.
- `src/assets/images/`: 23 original JPG and PNG project, profile, and decorative images, plus 3 retired WebP previews.
- `src/assets/icons/`: the unused LinkedIn SVG icon.
- `public/curriculum-vitae/`: the old curriculum vitae PDF. The application on `main` links to the current CV through `https://s.id/rakan-curriculum-vitae`.

The 53 raster images, one SVG asset, and the PDF retain their original paths, except the previous preview (`agrisense-previous.webp`) and the newer transparent source (`agrisense-transparent.png`), named separately to preserve both versions and the active image when restoring this archive. The application uses WebP images, dependency icons, and six active local SVG icons kept on `main`. Icons supplied by Simple Icons and Heroicons are imported from dependencies.

## Using the application

```sh
git clone --branch main https://github.com/Ragraze/portfoliov1.git
cd portfoliov1
npm ci
npm run dev
```

## Asset rights

The curriculum vitae, certificates, personal photographs, company materials, project screenshots, and brand logos remain subject to their respective owners' rights. These files are retained as portfolio backups; the source-code MIT license does not grant rights to these assets.
