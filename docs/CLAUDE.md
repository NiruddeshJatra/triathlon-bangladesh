# docs/CLAUDE.md — Claude Code Entry Point

Read `AGENTS.md` (repo root) for the full working contract and scope rules. Read `docs/DECISIONS.md` before any structural changes.

## Project

**Triathlon Bangladesh** — dark-premium multi-page Astro site. Brand homepage at `/`; per-event detail pages at `/events/[slug]`; static pages `/team`, `/terms`, `/join`. Current flagship event: Chatto Metro Half Marathon 2026, 10 July 2026, Karnaphuli Riverside, Chattogram.

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
├── components/
│   ├── BrandHero.astro        # Homepage brand hero — org identity + current event card + countdown
│   ├── TwoRegisterCTAs.astro  # Two CTA buttons (external register + event detail link)
│   ├── UpcomingEventsList.astro  # Card grid for upcoming events from events[]
│   ├── PreviousEventsList.astro  # Card grid for previous events from events[]
│   ├── OrgAbout.astro         # Org mission + pillars (homepage brand section)
│   ├── PartnersSlideshow.astro   # Per-event partners — infinite marquee, prefers-reduced-motion honored
│   ├── Hero.astro             # Event-detail hero (full experience, used in [slug].astro only)
│   ├── QuickFacts.astro · Categories.astro · Schedule.astro  # Event detail sections
│   ├── TheCourse.astro · Entitlements.astro · Team.astro     # Event detail sections
│   ├── FAQ.astro · RegisterBand.astro                        # Event detail sections
│   ├── Nav.astro              # Site nav — page-level links (Home, Events, Our Team, Join, Terms, Register)
│   ├── WheelDivider.astro     # Ship's-wheel section divider (4 max per page)
│   └── Footer.astro           # Site footer — links to /events/chatto-metro anchors + page links
├── data/
│   └── event.ts               # SINGLE SOURCE OF TRUTH — all content. Exports: event, categories,
│                              #   schedule, entitlements, team, pacers, sponsors, faq, about, medals,
│                              #   org, events[], orgTeam[], chattoMetroPartners[], plus helpers:
│                              #   getCurrentEvent(), getUpcomingEvents(), getPreviousEvents(), getEventBySlug()
├── islands/                   # React interactive components (islands pattern)
├── layouts/
│   └── Layout.astro           # HTML shell, meta tags, font imports — do not touch SEO
├── pages/
│   ├── index.astro            # Brand homepage: BrandHero → CTAs → UpcomingEvents → PreviousEvents → OrgAbout
│   ├── events/
│   │   └── [slug].astro       # Dynamic event detail — full experience for 'current', simple for others
│   ├── team.astro             # Public org team page (uses orgTeam[] from event.ts)
│   ├── terms.astro            # Draft T&C — CLIENT REVIEW markers inline
│   └── join.astro             # Join Our Team — static, no form
└── styles/
    └── global.css             # Design tokens (:root vars) + all component styles
```

## public/ Assets

```
public/
├── og-image.jpg · favicon.ico · favicon-32.png · favicon-16.png · apple-touch-icon.png
├── cmhm-logo-for-dark.png     # dark-bg nav logo
├── logo-nobg.png              # bg-removed source (favicon generation)
├── assets/
│   ├── team-*.jpg / .jpeg     # Team member photos (event crew + org team)
│   ├── jersey-*.jpg · medal-*.jpg  # Event merchandise images
│   └── sponsor-*.jpg          # Partner logos
```

## Islands (React, client-rendered)

| File | Directive | Purpose |
|---|---|---|
| `CountdownRing.tsx` | `client:idle` | Live countdown to flag-off (homepage + event detail) |
| `ScrollRoute.tsx` | `client:visible` | Fixed right-edge scroll-progress overlay (event detail only) |
| `MedalCarousel.tsx` | `client:visible` | Medal/jersey carousel with tabs |
| `WheelSpin.tsx` | `client:idle` | Scroll-based rAF-throttled wheel rotation (4 max per page) |
| `CountUp.tsx` | `client:visible` | Animated stat counters |

## Key Constraints

- `src/data/event.ts` — single source of truth. All user-facing strings, event data, team, org, partners come from here. Never hardcode facts in components.
- New content shape: `org` (brand), `events[]` (EventEntry — card-level data), `orgTeam[]` (OrgMember — /team page), `chattoMetroPartners[]` (Partner[]). All existing named exports retained for backward compat.
- `src/layouts/Layout.astro` — do not touch SEO/meta unless asked
- `astro.config.mjs` — do not touch build config without approval
- `vercel.json` — security headers; do not modify without approval
- Do not add packages not already in `package.json`
- All animations require a `prefers-reduced-motion` static fallback
- 4 wheel dividers maximum per page (homepage uses 3, event detail uses 4)
- `ScrollRoute` island lives on event detail page only — not homepage
