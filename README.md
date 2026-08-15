# mir8077faiyaz.github.io

Personal academic site for Mir Faiyaz Hossain — built with [Astro](https://astro.build), deployed on GitHub Pages.

Live at: **https://mir8077faiyaz.github.io**

## Stack

- Astro 5 (static site, no client-side framework needed)
- Content collections (YAML files) for Experience / Projects / Research / Publications / News
- Vanilla CSS with design tokens (light + dark mode via `prefers-color-scheme` + manual toggle, persisted in `localStorage`)
- Self-hosted fonts: Fraunces (display), Inter (body), IBM Plex Mono (labels/dates)

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to ./dist
npm run preview   # preview the production build locally
```

## Adding content (no code required)

Everything editable lives in `src/content/` as one YAML file per entry, or in `src/data/site.ts` for site-wide details.

| To add a...       | Do this |
|--------------------|---------|
| New project        | Copy any file in `src/content/projects/`, rename it, edit the fields. |
| New publication     | Copy any file in `src/content/publications/`, rename it, edit the fields. |
| New research entry | Copy any file in `src/content/research/`, rename it, edit the fields. |
| New experience item | Copy any file in `src/content/experience/`, rename it, edit the fields. |
| News item           | Copy any file in `src/content/news/`, rename it, edit the fields. |
| Bio, email, socials, CV link | Edit `src/data/site.ts` directly. |

Each YAML file has an `order` field — lower numbers show first within their section. Fields are validated by `src/content/config.ts`; if you misspell a field or forget a required one, `npm run dev` will show a clear error telling you exactly what's wrong and where.

### Adding your own images

Drop image files into `public/images/` (see `public/images/README.md` for the exact filenames the site expects), or update the `image:` field in a project's YAML file to point to a new path. Recommended: ~1200×675px JPG/WebP, under ~300KB each.

### Adding your CV

Drop your CV PDF into `public/cv/` and make sure the filename matches `cvUrl` in `src/data/site.ts` (or update `cvUrl` to match your filename).

## Deployment

This repo auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`. See the setup instructions provided separately for the one-time GitHub Pages configuration.
