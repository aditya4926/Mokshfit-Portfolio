# Mokshfit — Digital Growth Partner

A premium, dark, editorial marketing site for Mokshfit, built with React, Vite,
Tailwind CSS v4 and Framer Motion. Content is sourced directly from
`mokshfit_ppt.pdf`; anything the deck didn't specify is marked with a clearly
labelled placeholder (e.g. `[Add contact email]`).

## Tech stack

- React 19 + Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`, no separate config file needed)
- Framer Motion for animation
- Lucide React for icons

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Production build

```bash
npm run build
```

Outputs a static build to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, "Add New Project" → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist` (Vercel detects these automatically).
4. Deploy.

Or via CLI:

```bash
npm i -g vercel
vercel
```

## Project structure

```
src/
├── assets/
├── components/        # one component per section
├── data/               # content.js, services.js, industries.js, caseStudies.js
├── App.jsx
├── main.jsx
└── index.css           # design tokens (@theme) + base styles
```

Content lives in `src/data/`, separate from the presentational components, so
copy can be edited without touching JSX.

## Placeholders to replace with real Mokshfit information/assets

The presentation did not contain the following — search `[Add ...]` in the
codebase to find every instance:

- Contact email, phone number and business address (`src/data/content.js` → `contact`)
- Instagram handle and LinkedIn URL (`src/data/content.js` → `contact.socials`, and `Footer.jsx`)
- Industry for the "Aplihs" case study (`src/data/caseStudies.js`)
- Descriptions for each "Brutally Specific Differentiation" point (`src/data/content.js` → `edge`) — the deck listed only the six headline points (Business-First Strategy, Data-Led Optimization, Digital Ecosystem, AI-Enabled Ops, Local Expertise, One Growth Partner) without supporting copy
- Real Open Graph image at `public/og-image.jpg` (not present — add a 1200×630 image)
- Favicon: a simple placeholder SVG (`public/favicon.svg`) stands in for a real brand mark
- Contact form submission: the form is fully validated (client-side) but the submit handler is a placeholder timeout — wire it to EmailJS, a serverless function, or your backend of choice in `src/components/Contact.jsx`
- Diagnostics scores are the example scorecard shown in the deck (Google Presence 42, Social Media 61, Reviews & Trust 35, Conversion 32, Overall 43) — presented explicitly as an illustrative framework, not a real client's score. Edit `src/data/content.js` → `diagnostics` to adjust.

## Notes

- No revenue figures, ROI percentages, testimonials, or awards were invented — the deck didn't contain any, so the site doesn't claim any.
- Client names in Trust/Proof and Work sections (Hayosha, Aplihs, Melghat Resort, Vrindavan Airbnb, Lalit Cafe, KOEC, Beyond You Fitness) are reproduced as shown in the presentation.
