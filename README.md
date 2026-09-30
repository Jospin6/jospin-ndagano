# Jospin Ndagano — portfolio

An AI engineering portfolio built with Next.js, React, TypeScript, and a locally hosted Manrope font.

## Development

```sh
npm install
npm run dev
```

## Production checks

```sh
npm run lint
npm run build
```

The static site is exported to `out/`. Use a static host that resolves extensionless paths such as `/work/cvcomet` to their HTML files. Development uses `.next-dev/`; production uses `.next/`, so a running preview does not overwrite build manifests.

## Editing content

- `lib/content.ts`: selected projects, project-page content, source links, and articles.
- `lib/site.ts`: identity, contact details, and site metadata.
- `components/sections/about-section.tsx`: personal profile and engineering approach.
- `app/page.tsx`: page composition and structured data.
- `app/globals.css`: layout, colors, typography, and responsive behavior.
- `public/`: portrait and résumé; current project screenshots live in `public/projects/`.

Project pages are generated from the project data. Adding a project also adds it to the sitemap. Keep descriptions specific and checkable, and add outcome figures only when they are supported by evidence.

## Content provenance

The four projects are Doc Chat, Jenga, CVComet, and Movie Recommendations. Their descriptions, technologies, and screenshots follow the owner’s current project brief. Python/scikit-learn and FastAPI/Next.js are the supplied stack for Movie Recommendations. Public source links and the four live demo URLs follow the links supplied by the owner.

The site presents an AI Engineer profile independently of any employer, covering LLMs, RAG, agentic systems, machine learning, AI infrastructure, and backend architecture. The selected projects illustrate this work without defining the limits of the profile. Project pages describe supplied functionality without invented performance figures or speculative work presented as completed.

## Design references

The editorial composition was informed by [Kamil’s portfolio on Dribbble](https://dribbble.com/shots/24817423-Minimalist-Editorial-Portfolio-Website). The emphasis on concrete experience and projects was informed by [Brittany Chiang’s portfolio](https://brittanychiang.com/). The implementation, layout, and copy here are specific to Jospin.

Manrope is hosted locally under the SIL Open Font License; see `public/fonts/OFL.txt`.

## Google Search

See [the Google indexing guide](docs/google-search.md) for production deployment, Search Console verification, sitemap submission, and monitoring. Optional environment variables are documented in `.env.example`; changing them requires a new build.
