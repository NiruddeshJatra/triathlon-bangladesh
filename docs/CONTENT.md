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
| `chatto-metro-relay-2026` | Chatto Metro Relay Race 2026 | upcoming | 25 Sep 2026 |
| `moheshkhali-ultra-2026` | Moheshkhali Island Ultra 2026 | upcoming | 26 Sep 2026 |
| `duathlon-2026` | Chattogram Duathlon 2026 | upcoming | 13 Nov 2026 |
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

### Chatto Metro Relay Race 2026 (`chatto-metro-relay-2026`, upcoming)
- Date: 25 September 2026 · Location: Karnaphuli Riverside (2nd outer ring road), Chattogram
- Format: 4-runner relay · 4 × 800 m = 3200 m per team
- Reporting: 5:00 AM · Start: 5:30 AM · Slots: 10 teams · Fee: 5000 BDT/team
- Each team: 4 runners + 2 additional members

### Moheshkhali Island Ultra 2026 (`moheshkhali-ultra-2026`, upcoming)
- Date: 26 September 2026 · Location: Moheshkhali Island, Cox's Bazar District
- Tagline: "Run to Save Moheshkhali's Mangrove Forest"
- Distance: 55K · Slots: 100 · Eligibility criteria: TBC
- Reporting: 4:00 AM · Start: 4:30 AM · Cut-off: 9 hours
- Entitlements: T-shirt, Medal (finisher), Certificate (finisher), Medical (Ambulance + First Aid + Physio), Home Delivery Race Kit, Lunch, Hydration, Pre-Race Light Breakfast, Chip Timing

### Chattogram Duathlon 2026 (`duathlon-2026`, upcoming)
- Date: 13 November 2026 · Location: Chattogram (venue TBC)
- First duathlon in Chattogram, second in Bangladesh
- Distance: Standard/Olympic — 10K Run · 40K Bike · 5K Run
- Categories: Open 18–39 (Male/Female), Masters 40+ (Male/Female)

### Kutubdia Island Half Marathon 2027 (`kutubdia-2027`, upcoming)
- Date: 8 January 2027 · Location: Kutubdia Island, Cox's Bazar District
- Tagline: "Run for Kutubdia Embankment, Save Kutubdia"
- Categories: 3K Kids · 10K · 21.1K
- Entitlements: T-shirt, Kit Bag, Photography, Medal (finishers), Chip Timing, Washroom, Prayer Room, Dressing Room
- Podium: Kids 3K — Crest + Gift each; 10K/21.1K Open M/F/Veteran M 45+ — Crest + Prize Money each

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
