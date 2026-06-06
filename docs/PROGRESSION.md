# docs/PROGRESSION.md — Running Changelog

Most recent first.

---

## 2026-06-04 — 8 events seeded; asset folderization; copy + nav + JSON-LD fixes; frosted-glass nav proposal

### What changed
- **`src/data/event.ts`** — added `eventType?: 'race' | 'program'` to `EventEntry` interface. Replaced 4-entry `events[]` with 9-entry array:
  - Current: `chatto-metro` (location refined to full street address)
  - Upcoming: `chatto-metro-relay-2026`, `moheshkhali-ultra-2026`, `duathlon-2026` (real date/data), `kutubdia-2027`
  - Previous: `kutubdia-2026`, `moheshkhali-2025`, `bootcamp-kutubdia-2026` (program), `bootcamp-swimming-2026` (program)
  - Old placeholder slugs `kutubdia-hm-2026` and `moheshkhali-hm-2025` replaced with canonical slugs from DATA SPEC.
  - `org.tagline` changed from `"Swim · Ride · Run"` → `"Swim · Bike · Run"`.
- **`src/components/OrgAbout.astro`** — alt text: "Swim · Ride · Run" → "Swim · Bike · Run".
- **`src/components/Nav.astro`** — brand logo swapped from `cmhm-logo-for-dark.png` → `triathlon-bd-shield-white.png` (Triathlon Bangladesh org mark).
- **`src/styles/global.css`** — navbar frosted-glass proposal: `rgba(8,20,14,.6)` → `rgba(255,255,255,0.07)` + `backdrop-filter:blur(14px)`. `@media (prefers-reduced-transparency: reduce)` fallback to solid `var(--bg-base)`. Mobile stays solid `var(--bg-base)` (unchanged).
- **`src/layouts/Layout.astro`** — JSON-LD `streetAddress`: "Bastuhara, Khetrochar" → "Bastuhara, Khetrochar, Karnaphuli Bank Road".
- **`public/assets/events/`** — 8 per-event subfolders created (empty, ready for image assignment).
- **`docs/CONTENT.md`** — tagline + 8 new events appended.
- **`docs/DECISIONS.md`** — 5 new locked decisions appended.

### Asset inventory (ambiguous — human assignment required)
All 50+ loose Facebook/WhatsApp/numbered images in `public/assets/` could not be confidently classified without visual inspection. Files left in place:
- `517959411_...`, `526487671_...`, `547xxx_...` (7 files), `548xxx_...` (1 file), `549xxx_...` (1 file)
- `615276172_...`, `616xxx_...` (3 files), `617xxx_...` (5 files), `618xxx_...` (3 files), `619xxx_...` (4 files), `621xxx_...`, `622xxx_...` (2 files), `623364294_...`, `674601241_...`
- `WhatsApp Image 2026-06-01 at 1.09.43 PM.jpeg`
- `WhatsApp Image 2026-06-03 at ...` (14 files)
**Action required:** View each image and move to the appropriate `public/assets/events/<slug>/` subfolder with a clean name (e.g., `poster.jpg`, `gallery-1.jpg`, `medal-finisher.jpg`).

### Null fields (human to fill in later)
- `chatto-metro-relay-2026`: `registerUrl` = '' (not yet open)
- `moheshkhali-ultra-2026`: `registerUrl` = '' · eligibility criteria = TBC
- `duathlon-2026`: `tagline` = '' · `registerUrl` = ''
- `kutubdia-2027`: `registerUrl` = ''
- All new events: `heroImage` = null (no classified images yet)

### Build
- 13 pages built · 16.26 s · zero errors · sitemap regenerated
- Routes: `/` `/events/chatto-metro` `/events/chatto-metro-relay-2026` `/events/moheshkhali-ultra-2026` `/events/duathlon-2026` `/events/kutubdia-2027` `/events/kutubdia-2026` `/events/moheshkhali-2025` `/events/bootcamp-kutubdia-2026` `/events/bootcamp-swimming-2026` `/team` `/terms` `/join`

---

## 2026-05-31 — Brand-first multi-page restructure

### What changed
- **Site structure** — single-page (`/`) exploded into brand-hub homepage + per-event detail pages + 3 static pages.
- **Homepage** (`src/pages/index.astro`) — rewritten as brand hub: `BrandHero → TwoRegisterCTAs → [WheelDivider UPCOMING] → UpcomingEventsList → [WheelDivider TRACK RECORD] → PreviousEventsList → [WheelDivider THE MISSION] → OrgAbout → Footer`. 3 wheel dividers (within 4-max rule). ScrollRoute removed from homepage (race-specific; lives on event detail page only).
- **Event detail page** (`src/pages/events/[slug].astro`) — dynamic route generated for all events. For the current event (chatto-metro), renders the full original experience: `Nav → Hero → QuickFacts → [WheelDivider THE DISTANCES] → Categories → Schedule → [WheelDivider THE COURSE] → TheCourse → Entitlements → [WheelDivider THE CREW] → Team → PartnersSlideshow → FAQ → [WheelDivider REGISTER] → RegisterBand → Footer`. For previous/upcoming events (limited data), renders a simple info page.
- **`src/data/event.ts`** — appended multi-event structure. Existing named exports (event, categories, schedule, etc.) unchanged for backward compat. Added: `org`, `Partner` interface, `EventEntry` interface, `events[]` array (4 entries: chatto-metro current, duathlon-2026 upcoming placeholder, kutubdia-hm-2026 previous, moheshkhali-hm-2025 previous), `chattoMetroPartners[]`, helper functions `getCurrentEvent()`, `getUpcomingEvents()`, `getPreviousEvents()`, `getEventBySlug()`.
- **Nav** (`src/components/Nav.astro`) — replaced anchor links (Race, Route, Schedule, Team, About) with page-level links: Home (`/`) · Events (`/events/{slug}`) · Our Team (`/team`) · Join Our Team (`/join`) · Terms (`/terms`) · Register (external, unchanged). Brand link changed from `#top` to `/`.

### New files created
| File | Purpose |
|---|---|
| `src/pages/events/[slug].astro` | Dynamic event detail route |
| `src/pages/team.astro` | Public team page (org-level, not "admin panel") |
| `src/pages/terms.astro` | Draft T&C — CLIENT REVIEW markers inline |
| `src/pages/join.astro` | Static join-the-crew page, no form |
| `src/components/BrandHero.astro` | Brand-level hero with org identity + current event card + countdown |
| `src/components/TwoRegisterCTAs.astro` | Primary (external register) + Secondary (event detail page) CTA pair |
| `src/components/UpcomingEventsList.astro` | Card grid for upcoming events from `events[]` |
| `src/components/PreviousEventsList.astro` | Card grid for previous events from `events[]` |
| `src/components/OrgAbout.astro` | Brand-level org intro (mission + pillars); replaces About.astro on homepage |
| `src/components/PartnersSlideshow.astro` | Per-event partners slideshow with prev/next + pause; prefers-reduced-motion honored |

### Orphaned components (NOT deleted — awaiting approval)
- `src/components/PreviousEvents.astro` — superseded by `PreviousEventsList.astro` on homepage; still used on event detail page implicitly (no, it's not — report only)
- `src/components/About.astro` — superseded by `OrgAbout.astro`
- `src/components/Sponsors.astro` — superseded by `PartnersSlideshow.astro` on event detail page

### Build
- 8 pages built · 4.21s · zero errors · sitemap regenerated with all new routes
- Routes: `/` `/events/chatto-metro` `/events/duathlon-2026` `/events/kutubdia-hm-2026` `/events/moheshkhali-hm-2025` `/team` `/terms` `/join`

### Open items (client must provide)
- ⚠️ `terms.astro` — all sections marked `<!-- CLIENT REVIEW: ... -->` must be reviewed and approved before publishing. Refund percentage and exact jurisdiction are placeholders.
- ⚠️ `join.astro` — roles list is a placeholder derived from standard endurance event roles. Must be confirmed with race director and added to `event.ts` as `rolesAvailable[]`.
- ⚠️ `duathlon-2026` event entry — date, venue, tagline all `// TODO`. Confirm with race director.
- ⚠️ Action photos for event cards — `ev-card-img-placeholder` gradient shown where no `heroImage` is available.
- ⚠️ Flag-off time 05:00 — still unconfirmed (see prior entries).

---

## 2026-05-31 — Logo & favicon refresh

- **Nav logo** — `src/components/Nav.astro`: swapped from `logo_transparent.png` → `cmhm-logo-for-dark.png` (user-supplied variant optimised for dark backgrounds); sized `height:42px / width:auto / max-width:180px`
- **Background removal** — processed `Chatto Metro Half Marathon_Logo.png` via Sharp raw-pixel pass (threshold R/G/B > 230 → alpha 0); output saved as `public/logo-nobg.png`
- **Favicon set regenerated** — all 4 icons rebuilt from bg-removed logo: `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png` (180×180), `favicon.ico` (proper multi-size ICO via `png-to-ico`)
- **Dependency added** — `png-to-ico` (devDependency) for proper `.ico` generation (previous `.ico` was PNG-in-disguise)

---

## 2026-05-29 — Conditional Vercel deployment & SSR adapter config

- **Conditional Vercel configuration** — `astro.config.mjs`: configured Astro to conditionally use `adapter: vercel(...)` and `output: 'server'` when the `VERCEL` environment variable is detected. Otherwise, it defaults to `output: 'static'` without forcing SSR or requiring Vercel runtime.
- **Fixed package dependencies** — restored the correct matching Astro 5.x dependency set that was broken during forced audits, ensuring the local dev server and static builds function seamlessly.

---

## 2026-05-28 — Mobile QA fixes, content integrity restore, SEO pass

### Content integrity (A — done first)
- **Removed 3 invented people** from `src/data/event.ts` that escaped prior review passes:
  - Shaila Kabir (Influencer) — removed from `team` array
  - Zinnia Mahjabin (21 KM Pacer) — removed
  - Sumaiya Hasan (10 KM Pacer) — removed
  - `pacers` array now empty; pacer names to be added once provided by race director
- `src/components/Team.astro` — pacers section guarded with `{pacers.length > 0 && (...)}` — no "Pacers on course" heading rendered when array is empty
- `docs/CONTENT.md` — truth-up: Shaila Kabir row removed from team table; pacers table replaced with "no confirmed pacers" note

### Mobile bugs fixed (B — 6 issues from Android Chrome real-device QA)
- **Bug #1 (Nav)** — `src/styles/global.css`: mobile nav drawer changed from `transform:translateY(-110%)` (incomplete hide) to `display:none`/`display:flex`. Nav bar background changed to solid `var(--bg-base)` below 900px. Closed menu fully removed from hit-testing.
- **Bug #2 (Prose)** — `src/styles/global.css`: `.about-mission`, `.route-support`, `.cat-blurb` capped at `1rem` / `1.55` line-height under 640px.
- **Bug #3 (Route map labels)** — `src/components/TheCourse.astro`: added `.course-mobile-legend` div (numbered 1/2/3 markers) below the map. `src/styles/global.css`: SVG `.cmhm-pinlabel` / `.cmhm-pinsub` hidden on mobile; `.hr-badge` START/TURN overlays hidden; `rcp-card` gets `min-height:240px`; legend shown. Desktop layout unchanged.
- **Bug #4 (CountUp stuck at 0)** — `src/islands/CountUp.tsx`: IntersectionObserver threshold changed from `0.4` to `{ threshold: 0, rootMargin: '0px 0px -10% 0px' }` so counters fire on first entry into viewport.
- **Bug #5 (MedalCarousel buttons)** — `src/islands/MedalCarousel.tsx`: added `type="button"` to prev/next nav buttons to prevent accidental form submission behavior.
- **Bug #6 (Countdown ring gap)** — `src/islands/CountdownRing.tsx`: ShipWheel inner radius reduced from `size/2 - 6` to `size/2 - 10` (r=34 for size=88), giving ~20px breathing room to progress ring inner edge. Knob spokes now stay within SVG viewBox.

### SEO additions (C — no visible copy changed)
- **Meta description** — `src/layouts/Layout.astro`: rewritten with target keywords (half marathon, Chittagong, Chattogram, Karnaphuli, 21.1K, 10K, 5K, registration) — 158 chars.
- **JSON-LD** — 3 blocks added to `<head>`: `SportsEvent` (name, startDate, endDate, location with GeoCoordinates, organizer, offers, sport, image), `Organization` (name, url, logo, contactPoint), `BreadcrumbList`.
- **Geo + locale meta** — added `geo.region`, `geo.placename`, `geo.position`, `ICBM`, `content-language` meta tags.
- **SR-only keywords** — `src/components/Categories.astro`: SR-only span after H2 "Half Marathon, 10K, and 5K races in Chattogram". `src/components/About.astro`: SR-only paragraph "Triathlon Bangladesh organises endurance events — marathons, triathlons, open-water swims — across Chattogram and coastal Bangladesh." `src/styles/global.css`: `.sr-only` utility class added.

### Deferred (unchanged)
- Production DNS cutover
- Action photos from race day
- Total Active Sports vector logo — logo pending
- Pacer names — to be added to event.ts once provided by race director (do NOT invent)
- `astro:assets` migration (post-launch)

---

## 2026-05-28 — Pre-deploy pass: OG image, favicons, security headers, robots.txt

**Files created:**
- `public/og-image.jpg` — 1200×630 JPG OG image (105 KB), produced externally
- `public/favicon.ico`, `public/favicon-32.png`, `public/favicon-16.png`, `public/apple-touch-icon.png` — full favicon set, produced externally
- `public/logo_transparent.png` — chromakey-cleaned transparent brand logo for nav
- `vercel.json` — standard static-site security headers: CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- `public/robots.txt` — updated: added `Sitemap: https://triathlonbangladesh.com/sitemap-index.xml`

**Files edited:**
- `src/layouts/Layout.astro` — OG image → `/og-image.jpg` with width/height/type; Twitter image → `/og-image.jpg`; favicon set expanded to 4 tags (ico, 32px, 16px, apple-touch-icon); `og:image:type` added
- `src/components/Nav.astro` — brand logo src changed from `/cmhm-logo.png` → `/logo_transparent.png`

**Files deleted:**
- `public/cmhm-logo.png` — replaced by dedicated favicon set + transparent nav logo

**Build:** 1 page · 37 modules · 4.31 s · zero errors · sitemap generated

**DEFERRED — post-launch:**
- P1-P2: `astro:assets` migration — move all `/public/assets/` images to `src/assets/`, replace raw `<img>` with Astro `<Image />` for WebP conversion + responsive srcset. Estimated 2–4 hr effort. Current optimized JPGs + Vercel Edge CDN are accepted as launch-adequate.

---

## 2026-05-27 — Audit Fixes (autoplan review)

**P0 fixed:**
- `src/pages/index.astro` — added `<main>` landmark wrapping all sections between Nav and Footer
- `src/components/Footer.astro` — removed Legal column with placeholder `href="#"` links (Terms/Privacy/Refund)

**P1 fixed:**
- `src/data/event.ts` — added `medals` export (Medal interface + 3 medal objects); added `ROUTE_PATH`, `routePinXY` exports; added `Medal` interface
- `src/islands/MedalCarousel.tsx` — removed hardcoded `slides`; now imports `medals` from event.ts; added `prefers-reduced-motion` check; added `onFocus`/`onBlur` pause; added visible pause/play button for keyboard users (WCAG 2.2.2)
- `src/islands/CountdownRing.tsx` — added `prefers-reduced-motion` check; skips `setInterval` when reduced motion active
- `src/components/Hero.astro`, `RegisterBand.astro`, `ScrollRoute.tsx` — hardcoded `"05:00"` / `"05:00 BST"` replaced with `categories[0].flagOff` / `event.flagOffDisplay`

**P2 fixed:**
- `src/layouts/Layout.astro` — body class uses `bg-bg-base text-text-base` (token aliases); added canonical link; fixed `og:url` to use `Astro.site`; added Twitter card meta; added `og:locale`
- `src/components/Hero.astro` — removed dead `ROUTE_PATH`, `pinXY`, `pins` local variables (were never rendered); `client:load` → `client:idle` on CountdownRing
- `src/components/TheCourse.astro` — imports `ROUTE_PATH` and `routePinXY` from event.ts
- `src/islands/CountUp.tsx` — added `prefers-reduced-motion` check; snaps to final value when active
- `src/islands/ScrollRoute.tsx` — removed `willChange: 'contents'` from wrapper div
- `src/components/Nav.astro` — focus moved to first menu item on open; focus returned to toggle on close
- `src/styles/global.css` — `--text-dim` lightened to `#8BA69A` (≥4.5:1 contrast); font imports narrowed to latin+latin-ext only (removed Cyrillic, Greek, Vietnamese subsets); removed `background-attachment: fixed`; removed dead `.cmhm-meta` grid CSS; removed dead `.route-pins` CSS; footer grid column count corrected to 3 columns; added `.medal-cx-pause` button style
- `public/assets/` — deleted orphaned `route-render.jpg`, `hero-seafront.jpg`, `triathlon-bd-mark.png`, duplicate `cmhm-logo.png`

**P3 fixed:**
- All external links — `rel="noreferrer"` → `rel="noopener noreferrer"`
- `src/components/Team.astro` — alt text includes role (`"Race Director — Md. Abdul Matin"`)
- `docs/CLAUDE.md` — islands table updated: CountdownRing now `client:idle`; CountUp added

**Still needs manual work (can't fix programmatically):**
- `public/cmhm-logo.png` (1.1 MB PNG) — needs optimized OG image (1200×630 JPG/WebP) and proper favicon set
- `astro:assets` migration — images still in `public/assets/` as static files, not going through Astro image pipeline

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
