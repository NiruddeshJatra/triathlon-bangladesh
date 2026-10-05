# docs/CONTENT.md — Canonical Event Content

Human-readable spec mirroring `src/data/event.ts`. **`event.ts` is the live source of truth.** If these two disagree, trust `event.ts` and update this file.

## Event Identity

| Field | Value |
|---|---|
| Name | Chatto Metro Half Marathon |
| Year | 2026 |
| Tagline | "Feel the pulse of the port city." |
| Date | Friday, 10 July 2026 |
| Flag-off (21.1K) | 05:00 AM BST — ⚠️ CONFIRM: 05:00 vs 05:30 with race director |
| Venue (short) | Karnaphuli Riverside, Chattogram |
| Venue (long) | Bastuhara, Khetchar (নতুন রাস্তা), Chattogram |
| Organizer | Triathlon Bangladesh |
| Target runners | 600 |
| Register URL | https://coxsbazartriathletes.com |

## Contact

- Phone: 01303358202
- Email: triathlonbangladesh.swimbikerun@gmail.com

## Race Categories

### 21.1 KM — Half Marathon
- Flag-off: 05:00
- Prize pool: 54,000 BDT
  - General Male: 20,500 · General Female: 10,500
  - Veteran Male: 12,500 · Veteran Female: 10,500
- Jersey: green colourway · Medal: gold

### 10 KM — 10K Run
- Flag-off: 05:05
- Prize pool: 50,000 BDT
  - General Male: 14,500 · General Female: 10,500
  - Veteran Male: 14,500 · Veteran Female: 10,500
- Jersey: blue colourway · Medal: silver

### 5 KM — Beginners Run
- Flag-off: 05:10
- Prize pool: 3,000 BDT (Top-3 finisher gift)
- Jersey: burgundy colourway · Medal: bronze

## Schedule

| Time | Item |
|---|---|
| 04:30 | Reporting & Bib Collection — gate opens at the start village |
| 04:50 | Warm-up Session — group warm-up led by the race crew |
| 04:55 | Opening Remarks — Triathlon Bangladesh |
| 05:00 | 21.1 KM Flag-Off |
| 05:05 | 10 KM Flag-Off |
| 05:10 | 5 KM Run — beginners & families |
| 09:00 | Finishers Arrival — final runners welcomed at the line |
| 09:20 | Prize Giving & Cultural Program |
| 10:00 | Closing Ceremony |

## Entitlements (all categories)

- Finisher Medal — ship's-wheel hardware, gold/silver/bronze by distance
- Event Jersey — per-distance colourway in sublimated fabric
- Bib + Timing Chip — subject to availability via Total Active Sports
- E-Certificate — issued post-race with chip time
- Refreshments — on-course & at the finish
- Medical Support — first aid every 5 KM

## On-Course Support

- Every 2 KM: Water station
- Every 1 KM: Distance marker
- Every 5 KM: First aid

## Course & Route

Flat, riverside, western bank of the Karnaphuli. Out-and-back from Bastuhara to Bangladesh Maritime University.

| # | Label | Location |
|---|---|---|
| 1 | START | Bastuhara · Khetchar (নতুন রাস্তা) |
| 2 | MIDPOINT | Khetchar Jame Mosque & Forkania Madrasa |
| 3 | TURN | Bangladesh Maritime University |

## Team

| Role | Name |
|---|---|
| Race Director | Md. Abdul Matin |
| Race Marshal | Shak Nahid Uddin |
| Race Co-ordinator | Rajesh Chakma |
| Ambassador | Md. Sultan Mahmud |
| Ambassador | Dr. Nasrin Akter Shimu |
| Influencer | Tridip Bahadur Roy |
| Influencer | Shaila Kabir |
| Guest of Honor | Nripen Chowdhury |

## Pacers

| Distance | Name | Target |
|---|---|---|
| 21 KM | Zinnia Mahjabin | 3:00 hrs |
| 10 KM | Sumaiya Hasan | 90 minutes |

## Previous Events

| Year | Event | Date | Runners |
|---|---|---|---|
| 2026 | Kutubdia Island Half Marathon | 27 March 2026 | 400 |
| 2025 | Moheshkhali Island Half Marathon | 12 September 2025 | 320 |
| 2024–25 | Kutubdia Channel Swimming | Two editions | — |
| — | Boot Camps · CRB | Ongoing | 140 |

Notes: Kutubdia 2026 title sponsor Infinity Mega Mall. Boot camps: 2nd largest in Chattogram; largest swimming bootcamp (25+).

## Multi-Event Structure (added 2026-05-31)

`event.ts` now exports a multi-event shape alongside all existing named exports.

### org object
| Field | Value |
|---|---|
| name | Triathlon Bangladesh |
| tagline | Swim · Bike · Run |
| mission | (same as `about.mission`) |
| pillars | (same as `about.pillars`) |
| contact | (same as `event.contact`) |

### events[] array (updated 2026-06-04)

| Slug | Name | Status | Date |
|---|---|---|---|
| `chatto-metro` | Chatto Metro Half Marathon 2026 | current | 10 Jul 2026 |
| `duathlon-2026` | Chattogram Duathlon 2026 | upcoming | 6 Nov 2026 |
| `kutubdia-2027` | Kutubdia Island Half Marathon 2027 | upcoming | 8 Jan 2027 |
| `kutubdia-2026` | Kutubdia Island Half Marathon 2026 | previous | 27 Mar 2026 |
| `moheshkhali-2025` | Moheshkhali Island Half Marathon 2025 | previous | 12 Sep 2025 |
| `bootcamp-kutubdia-2026` | Bootcamp for Kutubdia Island HM | previous (program) | 23 Jan 2026 |
| `bootcamp-swimming-2026` | Swimming Bootcamp 2026 | previous (program) | 27 Jan 2026 |

Helper functions: `getCurrentEvent()`, `getUpcomingEvents()`, `getPreviousEvents()`, `getEventBySlug(slug)`.

---

## New Events — Canonical Data (added 2026-06-04)

### Kutubdia Island Half Marathon 2026 (`kutubdia-2026`, previous)
- Date: 27 March 2026 · Location: Kutubdia Island, Cox's Bazar District
- Tagline: "Run for Kutubdia Embankment, Save Kutubdia"
- Categories: 21.1K (1200 BDT, 3h30m) · 10K (1000 BDT, 2h) · 2.1K Kids Run (500 BDT, 40m)
- Entitlements: Exclusive T-shirt, BIB, Finisher Medal (China Medal), E-Certificate, Chip Timing, Podium Prize Money, Hydration, Refreshment, Washroom
- Organizer: Cox's Bazar Triathletes · Supported by: Upazila Administration, Kutubdia
- Archive reg URL: https://forms.gle/twrm5cNg2epk69TE6
- Theme: Climate justice — Kutubdia shrunk from ~250 sq km to ~37 sq km; 60,000+ displaced.

### Moheshkhali Island Half Marathon 2025 (`moheshkhali-2025`, previous)
- Date: 12 September 2025 · Location: Moheshkhali Island, Cox's Bazar District
- Tagline: "Miles for Moheshkhali, Stand for Salt and Betel Farmer"
- Reporting: 5:30 AM · Start: 6:00 AM
- Categories: 21.1K (999 BDT, 150 slots, 3h30m) · 10K (799 BDT, 350 slots, 2h) · 2.1K Kids (250 BDT, 100 slots, 40m)
- Podium: 10K (M/F), 21.1K (M/F), Veteran 45+ (M/F) — Champion/1st RU/2nd RU; min 10 per category or crest only
- Entitlements: Exclusive T-shirt, Commemorative Medal (finishers), BIB, E-Certificate (finishers), Medical, Hydration, Snacks, Prayer, Washroom, Photography
- Organizer: Cox's Bazar Triathletes · Contact: coxsbazartriathletes@gmail.com

### Bootcamp for Kutubdia Island Half Marathon (`bootcamp-kutubdia-2026`, previous, program)
- Date: 23 January 2026, 6:30 AM · Location: CRB, Chattogram
- Collaboration: Cox's Bazar Triathletes × Chattala Runners
- Open: beginners through intermediate. Guided warm-ups, form coaching, pacing tips, nutrition/recovery, mentor Q&A.

### Swimming Bootcamp 2026 (`bootcamp-swimming-2026`, previous, program)
- Date: 27 January 2026, 6:40 AM · Location: Agrabad Deba, Chattogram
- Free. Covers basics, technique, floating, hydrotherapy, Bangla Channel motivation.
- Archive reg URL: https://freeshort.info/kMeBeb

### Chattogram Duathlon 2026 (`duathlon-2026`, upcoming)
- Date: 6 November 2026 (moved from 13 November) · Location: Bakolia Stadium, Noman College Road, Chattogram
- Entry fee: 3,200 BDT (revised from 3,500) · 250 slots · Bike check-in + kit expo 5 November 2026
- First duathlon in Chattogram, second in Bangladesh
- Distance: Standard/Olympic — 10K Run · 40K Bike · 5K Run
- Categories: Open 18–39 (Male/Female), Masters 40+ (Male/Female)

### Kutubdia Island Half Marathon 2027 (`kutubdia-2027`, upcoming)
- Date: 8 January 2027 · Location: Kutubdia Island, Cox's Bazar District
- Tagline: "Run for Kutubdia Embankment, Save Kutubdia"
- Categories: 3K Kids · 10K · 21.1K
- Entitlements: T-shirt, Kit Bag, Photography, Medal (finishers), Chip Timing, Washroom, Prayer Room, Dressing Room
- Podium: Kids 3K — Crest + Gift each; 10K/21.1K Open M/F/Veteran M 45+ — Crest + Prize Money each

### Mirsharai Coastal Marathon 2027 (`mirsharai-coastal-marathon-2027`, upcoming)
- Date: Friday, 5 February 2027 · Location: Bhuiarhat Beribandh, Katachara, Mirsharai Economic Zone, Chattogram
- Motto: "Beyond the Miles. Beyond the Horizon. Where Nature Meets the Future."
- Organised by Triathlon Bangladesh · Supported by Young Power in Social Action (YPSA)
- Register URL: https://register.triathlonbangladesh.com/register/mirsharai-coastal-marathon-2027 — opens 10 October 2026
- Categories: Full Marathon 42.2K (1,700 BDT, 250 slots, flag-off 05:00) · Half Marathon 21.1K (1,500 BDT, 350 slots, 05:30) · 10K (1,400 BDT, 400 slots, 06:00)
- Route: one out-and-back, single lap — turns at 21.1 KM / 10.55 KM / 5 KM
- Podium: Male/Female General and Male/Female Veteran (50+), top 3, all distances
- Prize money (cash, 1st/2nd/3rd): 42.2K — GM 8,000/6,000/3,000 · GF 6,000/4,000/3,000 · VM and VF 5,000/4,000/3,000. 21.1K — GM and GF 5,000/4,000/2,500 · VM and VF 4,000/3,000/2,500. 10K — GM 5,000/3,500/2,000 · GF 4,500/3,000/2,000 · VM and VF 4,000/3,000/2,000. Crests for 4th–5th (10K: 4th).
- Timeline: 04:00 reporting & bib collection · 04:50 warm-up · 05:00 opening remarks · 05:00 42.2K · 05:30 21.1K · 06:00 10K · 09:00 finishers arrival · 09:20 prize giving & cultural program · 10:00 closing
- Benefits: chip timing, both-way shuttle bus, race jersey, finisher medal, post-race food, finisher certificate, race photography, hydration, medical support, washrooms, kit bag & gift, raffle draw at kit expo
- On course: water every 2 KM, distance marker every 1 KM, first aid every 5 KM
- Crew: Race Director Md. Abdul Matin · Race Marshal Shak Nahid Uddin · Race Mentors Shamsud Douza Nayan, Dr. Md. Arifur Rahman (Founder and CEO of YPSA) · Ambassador Dr. Nasrin Akter Shimu
- Media partners (per sponsorship deck): Jamuna TV, Cplus TV, Somoy News, News24, Chattogram24, Ekhon TV
- Not yet supplied: cut-off times, jersey/medal artwork, route map

## Stats (from event.ts)

- 720 runners hosted across past events
- 4 years of organizing endurance events
- 6 coastal & island races delivered
- 21.1 KM along the Karnaphuli

## Sponsors

| Role | Name | Asset |
|---|---|---|
| Timing Solution Partner | Total Active Sports | logo pending |
| Race Crew Partner | D-Chokrozan | `/assets/sponsor-chokrozan.jpg` |
| Promotional Partner | NextGen Doctors | `/assets/sponsor-nextgen.jpg` |

Media partners: Jamuna TV, Cplus TV, Somoy News, News24, Chattogram24, Ekhon TV

## Mission

"Build the Karnaphuli into the country's signature port-city endurance race — a yearly homecoming for runners, swimmers, and triathletes from across Bangladesh."

Pillars: Health & Fitness · Karnaphuli Tourism · Eco-Adventure · Community
