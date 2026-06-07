# docs/DECISIONS.md — Locked Decisions

These decisions are settled. Do not re-open without explicit human approval.

## Stack

- **Astro 5** — static site generator, zero JS by default
- **Tailwind CSS 3** — utility classes; prefer CSS token system for design-sensitive values
- **TypeScript** — strict mode; all islands typed
- **React 18** — islands only; no React in static Astro components
- **Self-hosted fonts** — `@fontsource/oswald` (display) + `@fontsource/inter` (body). No CDN URLs.
- **No new packages** without explicit approval

## Site Structure

- Brand-first, single-page. One event, one URL. No sub-routes.
- Section order (locked):
  `Nav → Hero → QuickFacts → [wheel: THE DISTANCES] → Categories → Schedule → [wheel: THE COURSE] → TheCourse → Entitlements → [wheel: THE CREW] → Team → PreviousEvents → About → Sponsors → FAQ → [wheel: REGISTER] → RegisterBand → Footer`
- **4 wheel dividers only.** Scarcity keeps the motif special. Do not add a fifth.

## Signature Motions

Two intentionally distinct elements — do not merge them:

1. **Edge ScrollRoute overlay** (`ScrollRoute.tsx`, `client:visible`) — fixed right-edge SVG tracing the race route as the user scrolls. Ambient, whole-page context. Never interacts with section content.
2. **Rotating wheel dividers** (4 × `WheelDivider.astro` + `WheelSpin.tsx` island) — section punctuation that spins clockwise as the user scrolls down, counter-clockwise up. Proportional to scroll position.

## Palette Tokens (`global.css` `:root`)

| Token | Value | Use |
|---|---|---|
| `--bg-base` | `#08140E` | Page background |
| `--green-bright` | `#2E9E54` | Primary CTA, 21K accent |
| `--gold` | `#D4AF37` | Eyebrows, rules, accents |
| `--gold-soft` | `#E8C766` | Gradient partner |
| `--swim-blue` | `#1E88E5` | 10K accent |
| `--d-5k` | `#A23B4D` | 5K accent (burgundy) |
| `--text` | `#F2F7F3` | Body text |
| `--text-muted` | `#A9C2B4` | Secondary text |

## Content

- **`src/data/event.ts` is the single source of truth.** All facts in components must come from there via import.
- **Never invent content** — no fake people, sponsors, stats, dates, or times anywhere in code or docs.
- Content is structured for a future Bangla language toggle (strings in data, not components).

## Registration & Payment

- Registration links to `coxsbazartriathletes.com` (external, managed by Total Active Sports).
- Online payment is **deferred** — pending merchant-account setup by the team. Do not add a payment flow.

## Images

- `public/assets/` — static images served as-is
- Use `astro:assets` for images that go through the Astro image optimization pipeline

## Site Structure (updated 2026-05-31)

**Brand-first, multi-page.** Locked decisions from the 2026-05-31 restructure:

- **Homepage (`/`)** — org/brand hub. Not event-specific. Sections: BrandHero, TwoRegisterCTAs, UpcomingEventsList, PreviousEventsList, OrgAbout.
- **Event detail (`/events/[slug]`)** — full event experience via dynamic Astro route. Current event (chatto-metro) renders all sections. Previous/upcoming events render a simple info page.
- **`src/data/event.ts`** is now multi-event: `org`, `EventEntry[]`, `events[]`, helper functions. All prior named exports retained (backward compat).
- **Team page is public** (`/team`) — not an admin panel. Powered by `orgTeam[]` from `event.ts`.
- **Join page has no form** — contact CTA only. Form deferred until race director confirms availability.
- **Partners scoped per event** — `EventEntry.partners?: Partner[]` field. Chatto Metro uses `chattoMetroPartners` derived from existing `sponsors` object.
- **3 wheel dividers on homepage** (UPCOMING, TRACK RECORD, THE MISSION). Event detail page retains original 4 (THE DISTANCES, THE COURSE, THE CREW, REGISTER). Neither page exceeds the 4-max rule.
- **ScrollRoute island on event detail only** — removed from homepage (race-specific, brand homepage has no course to trace).

## Locked Decisions (added 2026-06-04)

- **"Bike" not "Ride"** — In all triathlon-discipline contexts, use "Bike". Never "Ride". `org.tagline` is "Swim · Bike · Run". Do not revert.
- **Chatto Metro canonical address** — "Bastuhara, Khetchar, Behind Noman College, Left of Shah Amanat Bridge Junction, Chattogram". Used in `event.ts` EventEntry location, JSON-LD streetAddress, and any copy. Do not shorten.
- **Nav brand mark = Triathlon Bangladesh** — Nav logo is `triathlon-bd-shield-white.png` (org shield). Event logos belong on per-event pages only, not in the nav.
- **Frosted-glass navbar** — `rgba(255,255,255,0.07)` + `backdrop-filter:blur(14px)`. Pending client review (applied 2026-06-04). Revert: change background to `rgba(8,20,14,.6)` and remove `@media (prefers-reduced-transparency)` block.
- **Bootcamps as `eventType: 'program'`** — Non-race events (bootcamps, training sessions) use `eventType: 'program'` on `EventEntry`. Race-only fields remain optional; program cards render a distinct variant.

## Open Items (not yet decided)

- ✅ **Flag-off time: 05:00 AM BST** — confirmed by race director (2026-06-01). `event.ts` value correct.
- ⚠️ **Total Active Sports logo** — not yet available; placeholder text used
- ⚠️ **Action photography** — no race-day photos yet; team photos are in place
- ⚠️ **Duathlon 2026** — date, venue, tagline all `// TODO` in `event.ts`. Confirm with race director.
- ⚠️ **Terms & Conditions** — draft in `src/pages/terms.astro`; all sections marked `<!-- CLIENT REVIEW -->`. Must be legally reviewed before publishing.
- ⚠️ **Join Our Team roles** — placeholder list in `join.astro`. Move to `event.ts` as `rolesAvailable[]` once confirmed.
- ⚠️ **Orphaned components** — `About.astro`, `PreviousEvents.astro`, `Sponsors.astro` no longer imported. Delete only with explicit approval.
