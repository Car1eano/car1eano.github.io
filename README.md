# Carleano Chang — personal website

A single-page React portfolio, styled with Sass and built with Vite. Content comes from Carleano's CV. No router or backend is needed.

## Local development

Use Node.js 22.12+ (or 20.19+).

```sh
npm ci
npm run dev
```

Open the URL shown in the terminal. Vite updates the page when source files change.

```sh
npm run build
npm run preview
```

## Publishing

In GitHub Settings → Pages → Build and deployment, select **GitHub Actions**. Push to `main` to build and deploy with `.github/workflows/pages.yml`. The URL is https://car1eano.github.io/.

## Editing

- `src/content.js`: experience and skills.
- `src/main.jsx`: introduction, education, contact, React components.
- `src/styles.scss`: typography, layout, responsive styles.
- `public/assets/documents/Carleano-Chang-Resume.pdf`: downloadable CV.

## Design and references

Typography inspired by https://leerob.com/: Iowan Old Style with Palatino/Georgia fallbacks. Font appearance depends on available system fonts; no font files are copied from the reference site.

Interactions draw on the supplied single-page assignment design requirements: sticky/shrinking navigation, active reading position (including the bottom of the page), smooth scrolling, three-column skills, centered full-width sections, fixed landscape background, native modal, transitions, CSS-masked SVG social icons.

The landscape is an original SVG illustration. The assignment is a design reference, not a requirement to include every feature.

Company images go in `public/assets/images/experience/`; school images go in `public/assets/images/education/`. See `public/assets/README.md` for suggested filenames.

## Formatting

Use `npm run format` to format the project, or `npm run format:check` to check consistency. Prettier uses two-space indentation and a 100-character line width. `.editorconfig` supplies consistent editor defaults.
