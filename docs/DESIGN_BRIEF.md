# docs/DESIGN_BRIEF.md — Design Direction

## Mood & Identity

Dark, premium, port-city. The Karnaphuli River and Chattogram's working port are the visual identity — container ships, pre-dawn river light, industrial silhouettes. This is a race site that feels like the city at 5 AM: quiet authority, river mist, anticipation.

## Palette

| Token | Hex | Role |
|---|---|---|
| `--bg-base` | `#08140E` | Deep forest-night background |
| `--bg-elev` / `--bg-card` | `#0E1F16` / `#12251A` | Elevated surfaces, cards |
| `--green-bright` | `#2E9E54` | Primary green — CTAs, 21K |
| `--gold` | `#D4AF37` | Gold accent — eyebrows, rules, headings |
| `--gold-soft` | `#E8C766` | Gradient partner |
| `--swim-blue` | `#1E88E5` | 10K accent |
| `#A23B4D` | — | 5K accent (burgundy) |
| `--text` | `#F2F7F3` | Body text |
| `--text-muted` | `#A9C2B4` | Secondary text |
| `--text-dim` | `#6F8A7E` | Caption / metadata text |

## Typography

- **Display / headings:** Oswald 700 — uppercase, tight tracking, strong rhythm
- **Body:** Inter 400/500 — clean, readable
- **Numbers:** Oswald 700 — tabular numerals, large key stats
- No CDN fonts. Both loaded via `@fontsource/*` (self-hosted).

## Two Signature Motions

These are the site's two personality-defining animations. They are intentionally separate — do not merge, remove, or multiply them.

**1. Edge ScrollRoute overlay** (`ScrollRoute.tsx`)
Fixed right-edge SVG that traces the race route as the user scrolls the page. Ambient, whole-page context. Hidden on viewports ≤ 1100px. Reduced-motion: hidden.

**2. Rotating wheel dividers** (4 × `WheelDivider.astro` + `WheelSpin.tsx`)
Ship's-wheel SVGs between sections. Each wheel spins clockwise as the user scrolls down past it, counter-clockwise on scroll up. Rotation is proportional to scroll, driven by a single rAF-throttled island. Reduced-motion: static. The wheel references the ship's-wheel finisher medals directly.

## Section Architecture

```
Hero            full-height · river map BG · countdown ring · CTAs
QuickFacts      5-column strip · key numbers
[wheel: THE DISTANCES]
Categories      3 race cards (21K / 10K / 5K)
Schedule        timeline
[wheel: THE COURSE]
TheCourse       animated SVG route map · waypoints · on-course support
Entitlements    medal carousel · entitlements grid
[wheel: THE CREW]
Team            4-column photo grid · pacer row
PreviousEvents  stats block · history list
About           mission · pillars grid
Sponsors        sponsor cards · media partners strip
FAQ             collapsible list
[wheel: REGISTER]
RegisterBand    full-width CTA band
Footer          multi-column
```

## Principle: One Signature, Rest Clean

The two signature motions are the site's character. Everything else is invisible structure — clean type, consistent spacing, predictable cards. Do not add decorative elements, additional scroll animations, or "signature" flourishes to other sections. Scarcity is what makes the signature motifs work.

## Reduced Motion

All animations must have a static fallback:

- Wheel dividers → static, no rotation
- Course route draw → pre-drawn (dashoffset = 0, pins visible)
- CountdownRing → static ring display
- ScrollRoute → hidden
- CSS blanket: `animation-duration: .001s !important` in `@media (prefers-reduced-motion: reduce)`

## Accessibility

- Landmark elements: `<header>` (Hero), `<nav>`, `<section>` (each section), `<footer>`
- `aria-hidden="true"` on all decorative SVGs and wheel dividers
- Meaningful `alt` text on all content images
- Gold `focus-visible` outline on all interactive elements
- CSS-only mobile nav (no JS required)
- Keyboard-navigable throughout

## Asset Status

- Team photos: 10 in place (`/assets/team-*.jpg`)
- Medals: gold/silver/bronze front+back in place
- Jerseys: 3 colourways in place
- Sponsors: D-Chokrozan + NextGen logos in place; CCC + Total Active Sports logos pending
- Action photography: none yet — use jersey/medal imagery as primary race visuals
