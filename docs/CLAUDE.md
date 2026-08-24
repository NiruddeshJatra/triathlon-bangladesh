# docs/CLAUDE.md — Claude Code Entry Point

Read `AGENTS.md` (repo root) for the full working contract and scope rules. Read `docs/DECISIONS.md` before any structural changes.

## Project

**Triathlon Bangladesh** — dark-premium multi-page Astro site. Brand homepage at `/`; per-event detail pages at `/events/[slug]`; static pages `/team`, `/terms`, `/join`. Current flagship event: Chattogram Duathlon 2026, 6 November 2026, Bakolia Stadium, Chattogram — registration open, own decorated page + skin at `/events/duathlon-2026` (see "Duathlon skin" below). Chatto Metro Half Marathon 2026 (21 August 2026) has ended; its `events[]` entry is still `status: 'current'` and an archive page is pending.

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
│   ├── BrandHero.astro        # Homepage brand hero (`tb-hero`) — river SVG bg, org identity, wide shield logo. No countdown/event card (see DualEventFeature)
│   ├── DualEventFeature.astro # Homepage — replaces old TwoRegisterCTAs+UpcomingEventsList. One feature card (duathlon chartreuse/open; chatto-metro card removed after the race ended) + "Also on the calendar" strip from getUpcomingEvents()
│   ├── PreviousEventsList.astro  # Card grid for previous events from events[]
│   ├── CommunityInvolvement.astro  # Homepage section for community/rescue-partner events (eventType:'community')
│   ├── OrgAbout.astro         # Org mission + pillars (homepage brand section)
│   ├── PartnersSlideshow.astro   # Per-event partners — infinite marquee, prefers-reduced-motion honored
│   ├── Hero.astro             # Event-detail hero (Chatto Metro full experience, used in [slug].astro only)
│   ├── QuickFacts.astro · Categories.astro · Schedule.astro  # Chatto Metro event detail sections
│   ├── TheCourse.astro · Entitlements.astro · Team.astro     # Chatto Metro event detail sections
│   ├── FAQ.astro · RegisterBand.astro                        # Chatto Metro event detail sections
│   ├── Nav.astro              # Site nav — page-level links (Home, Events, Our Team, Join, Terms, Register). Events + Register point at the featured event via getEventBySlug('duathlon-2026'), not getCurrentEvent()
│   ├── WheelDivider.astro     # Gold ship's-wheel section divider (4 max per page; chainring is the duathlon-page equivalent, see below)
│   ├── Footer.astro           # Site footer — links to /events/chatto-metro anchors + page links
│   └── duathlon/              # Chattogram Duathlon 2026 page — chartreuse skin, scoped via `.dua-page` wrapper, NOT used elsewhere
│       ├── Chainring.astro    # Toothed-cog SVG primitive (replaces ship's wheel on this page)
│       ├── GearDivider.astro  # Section divider using Chainring — same slot as WheelDivider
│       ├── RBRStrip.astro     # Run-Bike-Run proportional strip (10/40/5 km), used in hero + distances
│       ├── ComingSoon.astro   # Placeholder block (dashed border, spinning chainring, EN/BN "Coming Soon") — block/compact/frame variants
│       ├── DiagonalTape.astro # Rotated marquee tape band
│       ├── DuaHero.astro · DuaQuickFacts.astro · DuaDistances.astro · DuaCategories.astro
│       ├── DuaPrizes.astro · DuaEntitlements.astro · DuaFacilities.astro · DuaSchedule.astro
│       ├── DuaRules.astro · DuaPacers.astro · DuaFAQ.astro · DuaRegisterBand.astro
│       └── DuaFooter.astro    # Chartreuse-skinned footer for this page only (site Footer.astro unaffected)
├── data/
│   └── event.ts               # SINGLE SOURCE OF TRUTH — all content. Exports: event, categories,
│                              #   schedule, entitlements, team, pacers, sponsors, faq, about, medals,
│                              #   org, events[], orgTeam[], chattoMetroPartners[], plus helpers:
│                              #   getCurrentEvent(), getUpcomingEvents(), getPreviousEvents(), getCommunityEvents(), getEventBySlug()
│                              #   EventEntry fields: slug, name, eventType?('race'|'program'|'community'), status,
│                              #   date, dateDisplay, location, tagline, registerUrl, registrationOpen?,
│                              #   facebookEvent?, regFee?, heroImage, gallery?[], summary, runners?,
│                              #   dist?, note?, partners?
│                              #   Duathlon-specific content (all `dua`-prefixed, mirrors the CMHM exports above):
│                              #   duaMeta, duaQuickFacts, duaLegs, duaCategories, duaPrizeNote,
│                              #   duaEntitlements, duaFacilities, duaScheduleKnown, duaRules, duaFaq
├── islands/                   # React interactive components (islands pattern)
├── layouts/
│   └── Layout.astro           # HTML shell, meta tags, font imports — do not touch SEO
├── pages/
│   ├── index.astro            # Brand homepage: BrandHero → CTAs → UpcomingEvents → PreviousEvents → CommunityInvolvement → OrgAbout
│   ├── events/
│   │   └── [slug].astro       # Dynamic event detail — full rich layout for ALL events (hero, facts, CTAs, gallery)
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
│                              # All 4 favicon files generated from assets/triathlon-bd-shield-white.png
│                              #   (badges-only crop, padded to square). logo-nobg.png below is the OLD
│                              #   Chatto-Metro-specific favicon source — no longer used, kept for history.
├── cmhm-logo-for-dark.png     # dark-bg nav logo (unused — superseded by assets/triathlon-bd-shield-white.png)
├── logo-nobg.png              # OLD bg-removed favicon source — superseded, see note above
├── assets/
│   ├── triathlon-bd-shield-white.png  # THE org logo/icon — used everywhere: Nav, BrandHero, Footer, OrgAbout, DuaFooter, favicon
│   ├── triathlon-bd-shield.png        # Dark-on-light variant of the same mark (same badge artwork, black wordmark)
│   ├── events/
│   │   ├── <slug>/            # Per-event images: poster.jpg, logo.jpg, gallery-*.jpg, eligibility.jpg
│   │   └── kutubdia-swimming-crew/  # Community event assets — descriptively named (team-banner.jpeg, rescue-*.jpeg, crew-*.jpeg)
│   ├── team-*.jpg / .jpeg     # Team member photos (event crew + org team)
│   ├── jersey-*.jpg · medal-*.jpg  # Event merchandise images
│   └── sponsor-*.jpg          # Partner logos
```

## Islands (React, client-rendered)

| File | Directive | Purpose |
|---|---|---|
| `CountdownRing.tsx` | `client:idle` | Live countdown to flag-off (homepage + event detail). Takes `nowMs={Date.now()}` from the parent `.astro` to seed SSR time and avoid a hydration mismatch on the SVG ring |
| `ScrollRoute.tsx` | `client:visible` | Fixed right-edge scroll-progress overlay (event detail only) |
| `MedalCarousel.tsx` | `client:visible` | Medal/jersey carousel with tabs |
| `WheelSpin.tsx` | `client:idle` | Scroll-based rAF-throttled wheel rotation (4 max per page) |
| `CountUp.tsx` | `client:visible` | Animated stat counters |
| `ChainringCountdown.tsx` | `client:idle` | Duathlon-page hero countdown — same pattern as `CountdownRing.tsx` but chartreuse + chainring visual, `/events/duathlon-2026` only |
| `ChainringSpin.tsx` | `client:idle` | Scroll-based rotation for `.dua-divider` chainrings — duathlon-page equivalent of `WheelSpin.tsx` |
| `DuaFAQAccordion.tsx` | `client:idle` | Duathlon FAQ — one-open-at-a-time accordion (unlike the CMHM FAQ's native `<details>`, which allows multiple open) |

## Key Constraints

- `src/data/event.ts` — single source of truth. All user-facing strings, event data, team, org, partners come from here. Never hardcode facts in components.
- `eventType: 'community'` — events we participated in but did not organise (e.g. rescue partner roles). `getPreviousEvents()` excludes these; use `getCommunityEvents()` instead. Community events render via the standard non-current `[slug].astro` template.
- `orgTeam[]` role field drives color-coded badge on `/team`. Role → CSS class: `Founder Admin`→`org-role-founder`, `Mentor`→`org-role-mentor`, `Co-ordinator`→`org-role-coordinator`, `Social Media Manager`→`org-role-social`. Each class sets `--role-color`.
- New content shape: `org` (brand, includes `org.socials.facebook`), `events[]` (EventEntry — card-level data), `orgTeam[]` (OrgMember — /team page), `chattoMetroPartners[]` (Partner[]). All existing named exports retained for backward compat.
- `src/layouts/Layout.astro` — do not touch SEO/meta unless asked. Canonical + `og:url` are **per-page** via `new URL(Astro.url.pathname, Astro.site)` — never hardcode to a single `siteUrl` (that canonicalizes every subpage to the homepage and drops them from Google's index). Accepts optional `eventJsonLd`/`breadcrumbName` props to override the default SportsEvent JSON-LD (used by `/events/duathlon-2026` — see `[slug].astro`); omit them to keep the default Chatto Metro schema.
- `EventEntry.registrationOpen` (default true when omitted) gates every Register CTA (Hero, RegisterBand, Categories, Nav, TwoRegisterCTAs, `[slug].astro`) — set `false` to render a "Registration Closed" state instead of adding ad-hoc conditionals per component.
- `astro.config.mjs` — do not touch build config without approval. `site` = apex `https://triathlonbangladesh.com` (non-www); www must redirect to apex
- `vercel.json` — security headers; do not modify without approval. CSP `script-src` MUST keep `'unsafe-inline'` — Astro emits island-hydration bootstrap and hoisted `.astro` `<script>` inline; bare `'self'` kills all JS (invisible in `astro dev`, only breaks on Vercel)
- Pacer cards (`Team.astro`) render the full poster image uncropped (poster already contains name/distance/time); no text column. Pacer `img` assets are full event posters, not headshots
- Do not add packages not already in `package.json`
- All animations require a `prefers-reduced-motion` static fallback
- 4 wheel dividers maximum per page (homepage uses 3, event detail uses 4)
- `ScrollRoute` island lives on event detail page only — not homepage
- **Duathlon skin is fully scoped** — every duathlon-specific CSS rule lives under `.dua-page` / `dua-*` class names in `global.css`, and `[slug].astro` wraps the whole `duathlon-2026` branch in `<div class="dua-page">`. Never let `--chart`/`--chart-dim`/`--ink` tokens or `dua-*` classes leak onto the homepage or Chatto Metro page. Class names that collide with existing CMHM names were deliberately renamed (`cat-name`→`dcat-name`, `cat-cta`→`dcat-cta`, `fq`/`fnum`/`fchev`/`fa`→`dfq`/`dfnum`/`dfchev`/`dfa`) — do not rename them back, it restores a specificity collision.
- Homepage wheel dividers: 2 (`TRACK RECORD`, `THE MISSION`) — the old `UPCOMING` divider was removed when `DualEventFeature` replaced `TwoRegisterCTAs`+`UpcomingEventsList` (the Fable dual-event section has no divider before it). Event detail page (Chatto Metro) still uses 4.
