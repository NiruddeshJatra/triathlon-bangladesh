# docs/PROGRESSION.md — Running Changelog

Most recent first.

---

## 2026-05-27 — Conventions + Docs + Visual Revision Pass

**Files created:**
- `AGENTS.md` — tool-agnostic working contract for all coding agents
- `docs/CLAUDE.md` — Claude Code entry point (commands, file map, islands table)
- `docs/DECISIONS.md` — locked decisions: stack, structure, motions, palette, content rules, open items
- `docs/CONTENT.md` — human-readable mirror of `event.ts` content
- `docs/DESIGN_BRIEF.md` — design direction, palette, typography, signature motions, accessibility
- `docs/PROGRESSION.md` — this changelog
- `src/islands/WheelSpin.tsx` — scroll-based rAF-throttled wheel rotation island

**Files edited:**
- `src/components/Hero.astro` — recomposed for balance (Option B, no meta grid): reduced title size, increased spacing, added slim single-line meta under CTAs
- `src/components/TheCourse.astro` — replaced static JPG+overlay with animated inline SVG route map; pins positioned via `getPointAtLength`; JPG retained as `prefers-reduced-motion` + no-JS fallback via `<noscript>`
- `src/pages/index.astro` — added `<WheelSpin client:idle />`
- `src/styles/global.css` — adjusted hero title size + CTA spacing; added `.cmhm-meta-line`; added `.route-svg-wrap` + `.route-img-fallback` + reduced-motion swap; removed orphaned `.route-overlay` rules

**Confirmed unchanged:** `src/data/event.ts`, `src/layouts/Layout.astro`, `astro.config.mjs`

**Open items:**
- ⚠️ Flag-off time: `event.ts` says `05:00` — confirm 05:00 vs 05:30 with race director before publishing
- ⚠️ CCC (Chittagong City Corporation) logo — not yet available
- ⚠️ Total Active Sports logo — not yet available
- ⚠️ Action photography — no race-day photos yet

---

## 2026-05 (approx.) — Review Fixes

- Reduced wheel dividers to 4 (scarcity principle; motif kept special)
- Single countdown ring (removed duplicate instance)
- Route section consolidated: ScrollRoute edge overlay + TheCourse map kept as separate intentional elements
- ScrollRoute rAF-throttled for 60fps performance
- Build scaffolding and unused components stripped

---

## 2026-05 (approx.) — Astro Rebuild

- Ported initial Claude design draft to clean Astro 5 + Tailwind 3 + TypeScript
- Islands-only JS pattern established (CountdownRing, ScrollRoute, MedalCarousel)
- All content moved to `src/data/event.ts` (single source of truth)
- Fontsource self-hosted fonts adopted (Oswald + Inter)
- Sitemap + SEO meta added via Layout.astro

---

## 2026-04/05 (approx.) — Initial Design Draft

- Visual design established: dark + premium port-city identity
- Brand palette locked (forest-green / gold, swim/ride/run distance accents)
- Typography: Oswald display + Inter body
- Section structure defined
- Two signature motions conceived: ScrollRoute edge + rotating ship's-wheel dividers
