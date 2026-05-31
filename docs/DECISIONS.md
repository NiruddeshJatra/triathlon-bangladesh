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

## Open Items (not yet decided)

- ⚠️ **Flag-off time: 05:00 or 05:30?** Current `event.ts` has `05:00`. Confirm with race director before publishing.
- ⚠️ **Total Active Sports logo** — not yet available; placeholder text used
- ⚠️ **Action photography** — no race-day photos yet; team photos are in place
