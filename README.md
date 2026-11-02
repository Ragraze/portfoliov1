# Portfolio asset archive

This branch stores original images, retired WebP previews, and a backup of the curriculum vitae PDF.

The complete application, configuration, documentation, and active assets are on the [main branch](https://github.com/Ragraze/portfoliov1/tree/main).

## Contents

- `public/certificates/`: 27 original JPG, JPEG, and PNG certificate images.
- `src/assets/images/`: 22 original JPG and PNG project, profile, and decorative images, plus 2 retired WebP previews.
- `public/curriculum-vitae/`: the original curriculum vitae PDF, also used by the application on `main`.

The 51 archived images and the PDF retain their original paths. The application uses WebP images, dependency icons, and seven active local SVG icons kept on `main`. Icons supplied by Simple Icons and Heroicons are imported from dependencies.

## Using the application

```sh
git clone --branch main https://github.com/Ragraze/portfoliov1.git
cd portfoliov1
npm ci
npm run dev
```

## Asset rights

The curriculum vitae, certificates, personal photographs, company materials, project screenshots, and brand logos remain subject to their respective owners' rights. These files are retained as portfolio backups; the source-code MIT license does not grant rights to these assets.
