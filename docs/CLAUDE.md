# docs/CLAUDE.md — Claude Code Entry Point

Read `AGENTS.md` (repo root) for the full working contract and scope rules. Read `docs/DECISIONS.md` before any structural changes.

## Project

**Chatto Metro Half Marathon 2026** — dark-premium single-page Astro site for Triathlon Bangladesh's flagship event, 10 July 2026, Karnaphuli Riverside, Chattogram. Brand-first, content-as-data, designed for a future Bangla toggle.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server → http://localhost:4321
npm run build        # production build → dist/
npm run preview      # preview built output
```

## src/ Layout

```
src/
├── components/        # 15 static Astro components (one per section)
├── data/
│   └── event.ts       # SINGLE SOURCE OF TRUTH — all event content; never modify
├── islands/           # React interactive components (islands pattern)
├── layouts/
│   └── Layout.astro   # HTML shell, meta tags, font imports — do not touch SEO
├── pages/
│   └── index.astro    # Page composition — imports all components
└── styles/
    └── global.css     # Design tokens (:root vars) + all component styles
```

## Islands (React, client-rendered)

| File | Directive | Purpose |
|---|---|---|
| `CountdownRing.tsx` | `client:load` | Live countdown to flag-off |
| `ScrollRoute.tsx` | `client:visible` | Fixed right-edge scroll-progress overlay |
| `MedalCarousel.tsx` | `client:visible` | Medal/jersey carousel with tabs |
| `WheelSpin.tsx` | `client:idle` | Scroll-based rAF-throttled wheel rotation (4 dividers) |

## Key Constraints

- `src/data/event.ts` — read-only; never modify content, only import from it
- `src/layouts/Layout.astro` — do not touch SEO/meta unless asked
- `astro.config.mjs` — do not touch build config without approval
- Do not add packages not already in `package.json`
- All animations require a `prefers-reduced-motion` static fallback
