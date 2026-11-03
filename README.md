# Salaro — Next.js site

A six-page marketing site (Home, Practice, Work, Studio, Writing, Contact) for the
fictional AI-native web consultancy **Salaro**, built with the Next.js App Router.

## Stack
- Next.js 14 (App Router)
- Plain JavaScript — every component is a `.js` file (no TypeScript / `.tsx`)
- A single global stylesheet: `app/globals.css`
- No CSS-in-JS and no CSS Modules

## Getting started
```bash
npm install
npm run dev
```
Then open http://localhost:3000

Build for production:
```bash
npm run build
npm run start
```

## Structure
```
app/
  layout.js          Root layout, imports globals.css
  globals.css        All styles. Each page's rules are scoped under a
                     page class (.p-home, .p-work, ...) so nothing collides.
  page.js            Home
  practice/page.js
  work/page.js
  studio/page.js
  writing/page.js
  contact/page.js
```

## Notes
- Each page is a Client Component (`'use client'`) because the original
  scroll-reveal, chart animations, carousel and accordion behaviour run in a
  `useEffect` after mount.
- Fonts (Fraunces, Instrument Sans, JetBrains Mono) load from Google Fonts via an
  `@import` at the top of `globals.css`.
- All hero data-visualisations are hand-built with CSS/SVG and respect
  `prefers-reduced-motion`.
