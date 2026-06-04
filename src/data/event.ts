export const event = {
  name: "Chatto Metro Half Marathon",
  year: 2026,
  tagline: "Feel the pulse of the port city.",
  date: "2026-07-10",
  dateDisplay: "10 July 2026",
  dateShort: "10 JUL 2026",
  weekday: "Friday",
  flagOffISO: "2026-07-10T05:00:00+06:00",
  endISO: "2026-07-10T10:00:00+06:00",
  flagOffDisplay: "05:00 AM BST",
  venueShort: "Karnaphuli Riverside, Chattogram",
  venueLong: "Bastuhara, Khetrochar (নতুন রাস্তা), Chattogram",
  organizer: "Triathlon Bangladesh",
  targetRunners: 600,
  registerUrl: "https://coxsbazartriathletes.com",
  contact: {
    phone: "01303358202",
    email: "triathlonbangladesh.swimbikerun@gmail.com",
  },
  venueGeo: { lat: 22.3569, lng: 91.7832 },
} as const;

export const quickFacts = [
  { k: "10 July 2026", s: "Friday · Race Day" },
  { k: "Bastuhara, Khetrochar", s: "Karnaphuli Bank Road · Chattogram" },
  { k: "21.1 / 10 / 5", s: "Kilometres" },
  { k: "≈600", s: "Runners" },
] as const;

export interface Category {
  id: string;
  distance: string;
  name: string;
  color: string;
  colorHex: string;
  flagOff: string;
  cutoff: string;
  regFee: string;
  slots: number;
  prizePool: string;
  prizeBreakdown: string[];
  jersey: string;
  medal: string;
  blurb: string;
}

export const categories: Category[] = [
  {
    id: "21k",
    distance: "21.1 KM",
    name: "Half Marathon",
    color: "var(--d-21k)",
    colorHex: "#2E9E54",
    flagOff: "05:00",
    cutoff: "4 hrs",
    regFee: "1,250 BDT",
    slots: 350,
    prizePool: "54,000 BDT",
    prizeBreakdown: [
      "General Male — 20,500",
      "General Female — 10,500",
      "Veteran Male — 12,500",
      "Veteran Female — 10,500",
    ],
    jersey: "/assets/jersey-21k.jpg",
    medal: "/assets/medal-gold-front.jpg",
    blurb: "The full Karnaphuli — flag-off in port-city pre-dawn, riverside out to Bangladesh Maritime University and back.",
  },
  {
    id: "10k",
    distance: "10 KM",
    name: "10K Run",
    color: "var(--d-10k)",
    colorHex: "#1E88E5",
    flagOff: "05:05",
    cutoff: "2 hrs",
    regFee: "1,150 BDT",
    slots: 250,
    prizePool: "50,000 BDT",
    prizeBreakdown: [
      "General Male — 14,500",
      "General Female — 10,500",
      "Veteran Male — 14,500",
      "Veteran Female — 10,500",
    ],
    jersey: "/assets/jersey-10k.jpg",
    medal: "/assets/medal-silver-front.jpg",
    blurb: "The riverside loop. Same air, same light — half the distance, all of the city.",
  },
  {
    id: "5k",
    distance: "5 KM",
    name: "Beginners Run",
    color: "var(--d-5k)",
    colorHex: "#A23B4D",
    flagOff: "05:10",
    cutoff: "60 min",
    regFee: "1,050 BDT",
    slots: 50,
    prizePool: "3,000 BDT",
    prizeBreakdown: ["Top-3 finisher gift"],
    jersey: "/assets/jersey-5k.jpg",
    medal: "/assets/medal-bronze-front.jpg",
    blurb: "First start line. A short, friendly opener along the river — for new runners, families, and the Port-City curious.",
  },
];

export interface ScheduleItem {
  time: string;
  title: string;
  note: string;
  accent?: "21k" | "10k" | "5k";
}

export const schedule: ScheduleItem[] = [
  { time: "04:30", title: "Reporting & Bib Collection", note: "Gate opens at the start village." },
  { time: "04:50", title: "Warm-up Session", note: "Group warm-up led by the race crew." },
  { time: "04:55", title: "Opening Remarks", note: "Welcome from Triathlon Bangladesh" },
  { time: "05:00", title: "21.1 KM Flag-Off", note: "Half marathon starts.", accent: "21k" },
  { time: "05:05", title: "10 KM Flag-Off", note: "10K runners released.", accent: "10k" },
  { time: "05:10", title: "5 KM Run", note: "Beginners & families.", accent: "5k" },
  { time: "09:00", title: "Finishers Arrival", note: "Final runners welcomed at the line." },
  { time: "09:20", title: "Prize Giving & Cultural Program", note: "Awards, music, port-city culture." },
  { time: "10:00", title: "Closing Ceremony", note: "Race wraps. See you next year." },
];

export interface Entitlement {
  k: string;
  s: string;
  img: string | null;
}

export const entitlements: Entitlement[] = [
  { k: "Finisher Medal", s: "Ship's-wheel hardware — gold, silver, bronze by distance.", img: "/assets/medal-gold-front.jpg" },
  { k: "Event Jersey", s: "Per-distance colourway in sublimated fabric.", img: "/assets/jersey-21k.jpg" },
  { k: "Bib + Timing Chip", s: "Subject to availability via Total Active Sports.", img: null },
  { k: "E-Certificate", s: "Issued post-race with chip time.", img: null },
  { k: "Refreshments", s: "On-course & at the finish.", img: null },
  { k: "Medical Support", s: "First aid every 5 KM on course.", img: null },
];

export const onCourse = [
  { k: "Every 2 KM", s: "Water station" },
  { k: "Every 1 KM", s: "Distance marker" },
  { k: "Every 5 KM", s: "First aid" },
] as const;

export const ROUTE_PATH = "M 95 480 C 150 440 165 380 250 360 C 320 345 335 305 305 255 C 285 218 305 178 365 170 C 440 162 478 144 565 138";

export const routePinXY: [number, number][] = [
  [95, 480],
  [305, 255],
  [565, 138],
];

export const routePins = [
  { label: "START", sub: "Bastuhara · Khetrochar (নতুন রাস্তা)", t: 0.0 },
  { label: "MIDPOINT", sub: "Khetrochar Jame Mosque & Forkania Madrasa", t: 0.55 },
  { label: "TURN", sub: "Bangladesh Maritime University", t: 1.0 },
] as const;

export interface TeamMember {
  role: string;
  name: string;
  bio: string[];
  img: string;
  pos: string;
}

export const team: TeamMember[] = [
  {
    role: "Race Director",
    name: "Md. Abdul Matin",
    bio: ["Triathlete", "Long-distance swimmer", "Ultra marathoner"],
    img: "/assets/team-matin.jpg",
    pos: "50% 28%",
  },
  {
    role: "Race Marshal",
    name: "Shak Nahid Uddin",
    bio: ["National athlete", "IRONMAN 70.3 finisher", "Bangladesh Railway gold medalist", "68+ medals"],
    img: "/assets/team-nahid.jpg",
    pos: "62% 28%",
  },
  {
    role: "Race Co-ordinator",
    name: "Rajesh Chakma",
    bio: ["Triathlete", "IRONMAN 70.3 finisher", "Ultra marathon runner"],
    img: "/assets/team-rajesh.jpg",
    pos: "62% 30%",
  },
  {
    role: "Ambassador",
    name: "Md. Sultan Mahmud",
    bio: ["Pacer", "Cyclist · Runner"],
    img: "/assets/team-sultan.jpg",
    pos: "50% 42%",
  },
  {
    role: "Ambassador",
    name: "Dr. Nasrin Akter Shimu",
    bio: ["Dhaka Medical College doctor", "Pacer"],
    img: "/assets/team-nasrin.jpg",
    pos: "50% 56%",
  },
  {
    role: "Influencer",
    name: "Tridip Bahadur Roy",
    bio: ["IRONMAN", "Ultra marathoner"],
    img: "/assets/team-tridip.jpg",
    pos: "50% 42%",
  },
  {
    role: "Influencer",
    name: "Shaila Kabir",
    bio: ["Trail runner", "Community lead"],
    img: "/assets/team-shaila.jpg",
    pos: "50% 50%",
  },
  {
    role: "Guest of Honor",
    name: "Nripen Chowdhury",
    bio: ["Marathoner", "Master athlete"],
    img: "/assets/team-nripen.jpg",
    pos: "62% 38%",
  },
  {
    role: "Mentor",
    name: "Shamsud Douza Nayan",
    bio: ["Ultra Marathon Runner", "Cyclist"],
    img: "/assets/team-doha.jpeg",
    pos: "50% 20%",
  },
  {
    role: "Mentor",
    name: "Shahriar Morshed Siddiqui",
    bio: [],
    img: "/assets/team-shahriar.jpeg",
    pos: "50% 20%",
  },
];

export interface Pacer {
  distance: string;
  name: string;
  time: string;
  img: string;
  pos: string;
}

export const pacers: Pacer[] = [
  { distance: "21 KM", name: "Zinnia Mahjabin", time: "3:00 hrs", img: "/assets/team-zinnia.jpg", pos: "50% 32%" },
  { distance: "10 KM", name: "Sumaiya Hasan", time: "90 minutes", img: "/assets/team-sumaiya.jpg", pos: "50% 35%" },
];

export const previousEvents = [
  { year: "2026", title: "Kutubdia Island Half Marathon", date: "27 March 2026", runners: 400, dist: "21K · 10K · Kids 2.1K", note: "Motto: Run for Kutubdia Embankment, Save Kutubdia" },
  { year: "2025", title: "Moheshkhali Island Half Marathon", date: "12 September 2025", runners: 320, dist: "21K · 10K · Kids 2.1K", note: "Motto: Miles for Moheshkhali, Stand for Salt & Betel Farmers" },
  { year: "2024–25", title: "Kutubdia Channel Swimming", date: "Two editions", runners: null as number | null, dist: "Open water", note: "Rescue & support" },
  { year: "—", title: "Boot Camps · CRB", date: "Ongoing", runners: 140, dist: "2nd largest in Chattogram", note: "Largest swimming bootcamp: 25+" },
];

export const stats = [
  { n: 720, l: "Runners hosted across past events", suffix: "" },
  { n: 4, l: "Years of organizing endurance events", suffix: "" },
  { n: 6, l: "Coastal & island races delivered", suffix: "" },
  { n: 21.1, l: "Kilometres along the Karnaphuli", suffix: " KM" },
];

export const sponsors = {
  timing: { name: "Total Active Sports", role: "Timing Solution Partner", logo: null as string | null },
  crew: { name: "D-Chokrozan", role: "Race Crew Partner", logo: "/assets/sponsor-chokrozan.jpg" },
  promo: { name: "NextGen Doctors", role: "Promotional Partner", logo: "/assets/sponsor-nextgen.jpg" },
  media: ["Jamuna TV", "Cplus TV", "Somoy News", "News24", "Chattogram24", "Ekhon TV"],
};

export interface Medal {
  id: string;
  name: string;
  distance: string;
  finish: string;
  front: string;
  back: string;
  color: string;
  glow: string;
  blurb: string;
}

export const medals: Medal[] = [
  {
    id: '21k',
    name: 'Half Marathon',
    distance: '21.1 KM',
    finish: 'GOLD',
    front: '/assets/medal-gold-front.jpg',
    back: '/assets/medal-gold-back.jpg',
    color: '#D4AF37',
    glow: 'rgba(212,175,55,.32)',
    blurb: 'The full Karnaphuli. Antique gold with high-relief enamel — Shah Amanat bridge, container terminal, the city clocktower, and the runner cresting the wave.',
  },
  {
    id: '10k',
    name: '10K Run',
    distance: '10 KM',
    finish: 'SILVER',
    front: '/assets/medal-silver-front.jpg',
    back: '/assets/medal-silver-back.jpg',
    color: '#C6CDD0',
    glow: 'rgba(198,205,208,.32)',
    blurb: 'Riverside loop. Antique silver with the same hand-painted enamel scene — half the distance, the full hardware.',
  },
  {
    id: '5k',
    name: 'Beginners Run',
    distance: '5 KM',
    finish: 'BRONZE',
    front: '/assets/medal-bronze-front.jpg',
    back: '/assets/medal-bronze-back.jpg',
    color: '#B5743A',
    glow: 'rgba(181,116,58,.32)',
    blurb: "Your first start line. Antique bronze — same ship's-wheel rim, same enamel river. Cross the finish, take the helm.",
  },
];

export const faq = [
  {
    q: "When and where is the race?",
    a: "Friday, 10 July 2026. The start village is at Bastuhara, Khetrochar (নতুন রাস্তা), Chattogram — Karnaphuli riverside. Reporting opens 04:30 BST; 21.1K flag-off is at 05:00.",
  },
  {
    q: "Which distances can I enter?",
    a: "Three categories: 21.1 KM (Half Marathon), 10 KM, and 5 KM (Beginners). Pick one when you register.",
  },
  {
    q: "What's included with my entry?",
    a: "Event jersey, bib + timing chip (subject to availability), finisher medal, e-certificate, refreshments, and on-course medical support.",
  },
  {
    q: "How do I register?",
    a: "Registration runs on coxsbazartriathletes.com — the Register Now button takes you straight there. Online payment in the coming cycle.",
  },
  {
    q: "What's the course like?",
    a: "Flat, riverside, mostly on the western bank of the Karnaphuli. Start in Bastuhara, pass the Khetrochar Jame Mosque & Forkania Madrasa near the midpoint, turn at Bangladesh Maritime University.",
  },
  {
    q: "What on-course support is there?",
    a: "Water station every 2 KM, distance marker every 1 KM, first aid every 5 KM. Race marshals throughout the course.",
  },
  {
    q: "Where do I collect my bib?",
    a: "Bib collection is at the start village from 04:30 on race day. Walk-in details by email closer to the event.",
  },
];

export const about = {
  mission: "Build the Karnaphuli into the country's signature port-city endurance race — a yearly homecoming for runners, swimmers, and triathletes from across Bangladesh.",
  pillars: [
    { k: "Health & Fitness", s: "Move the city. A monthly drumbeat of running, swimming, and triathlon for everyone." },
    { k: "Karnaphuli Tourism", s: "The river is the venue. Container ships, the Shah Amanat bridge, the working port — the moat nobody can copy." },
    { k: "Eco-Adventure", s: "Coastal and island races — Kutubdia, Moheshkhali — on land and in open water." },
    { k: "Community", s: "Boot camps, pacers, mentors. The largest swim bootcamp in Chattogram is ours." },
  ],
};

// ─── Multi-event structure ────────────────────────────────────────────────────

export const org = {
  name: "Triathlon Bangladesh",
  tagline: "Swim · Bike · Run",
  mission: about.mission,
  pillars: about.pillars,
  contact: event.contact,
} as const;

export interface Partner {
  name: string;
  role: string;
  logo: string | null;
  tier: 'title' | 'gold' | 'silver' | 'media';
}

export interface EventEntry {
  slug: string;
  name: string;
  eventType?: 'race' | 'program';
  status: 'upcoming' | 'current' | 'previous';
  date: string;
  dateDisplay: string;
  location: string;
  tagline: string;
  registerUrl: string;
  heroImage: string | null;
  gallery?: string[];
  summary: string;
  runners?: number | null;
  dist?: string;
  note?: string;
  partners?: Partner[];
}

export const chattoMetroPartners: Partner[] = [
  { name: sponsors.timing.name, role: sponsors.timing.role, logo: sponsors.timing.logo, tier: 'silver' },
  { name: sponsors.crew.name, role: sponsors.crew.role, logo: sponsors.crew.logo, tier: 'silver' },
  { name: sponsors.promo.name, role: sponsors.promo.role, logo: sponsors.promo.logo, tier: 'silver' },
  ...sponsors.media.map((m): Partner => ({ name: m, role: 'Media Partner', logo: null, tier: 'media' })),
];

export const events: EventEntry[] = [
  // ── current ──────────────────────────────────────────────────────────────
  {
    slug: 'chatto-metro',
    name: 'Chatto Metro Half Marathon 2026',
    status: 'current',
    date: event.date,
    dateDisplay: event.dateDisplay,
    location: 'Bastuhara, Khetrochar, Karnaphuli Bank Road, Chattogram',
    tagline: event.tagline,
    registerUrl: event.registerUrl,
    heroImage: null,
    summary: '21.1K, 10K, and 5K along the Karnaphuli riverside — a port-city dawn run on 10 July 2026.',
    dist: '21.1K · 10K · 5K',
    partners: chattoMetroPartners,
  },

  // ── upcoming ─────────────────────────────────────────────────────────────
  {
    slug: 'chatto-metro-relay-2026',
    name: 'Chatto Metro Relay Race 2026',
    status: 'upcoming',
    date: '2026-09-25',
    dateDisplay: '25 September 2026',
    location: 'Karnaphuli Riverside (2nd outer ring road), Chattogram',
    tagline: 'Four runners. One river. One team.',
    registerUrl: '',
    heroImage: '/assets/events/chatto-metro-relay-2026/logo.jpg',
    gallery: [],
    summary: 'Four-runner relay along the Karnaphuli — a fast 4×800m team challenge.',
    dist: '4 × 800 m = 3200 m',
    note: 'Relay format. 10 teams. 5000 BDT per team. Reporting 5:00 AM · Start 5:30 AM.',
  },
  {
    slug: 'moheshkhali-ultra-2026',
    name: 'Moheshkhali Island Ultra 2026',
    status: 'upcoming',
    date: '2026-09-26',
    dateDisplay: '26 September 2026',
    location: 'Moheshkhali Island, Cox\'s Bazar District',
    tagline: 'Run to Save Moheshkhali\'s Mangrove Forest',
    registerUrl: '',
    heroImage: '/assets/events/moheshkhali-ultra-2026/poster.jpg',
    gallery: ['/assets/events/moheshkhali-ultra-2026/eligibility.jpg'],
    summary: '55-kilometre ultra protecting Moheshkhali\'s mangrove forest — 100 slots, eligibility-based.',
    dist: '55K',
    // NOTE: early poster showed Feb 7 2026; Sep 26 2026 is the confirmed race date per DATA SPEC
    note: 'Eligibility (last 6 months): 1 ultra marathon (50K+ sub-8h) OR 2 marathons (sub-6h each) OR 3 half marathons sub-2:30 (including Moheshkhali HM 2025). 100 slots. Reporting 4:00 AM · Start 4:30 AM · Cut-off 9 hours.',
  },
  {
    slug: 'duathlon-2026',
    name: 'Chattogram Duathlon 2026',
    status: 'upcoming',
    date: '2026-11-13',
    dateDisplay: '13 November 2026',
    location: 'Karnaphuli Riverside, Chattogram',
    tagline: 'Run. Bike. Run. Chattogram.',
    registerUrl: '',
    heroImage: '/assets/events/duathlon-2026/poster.jpg',
    gallery: [],
    summary: 'Chattogram\'s first standard-distance duathlon — 10K run, 40K bike, 5K run.',
    dist: '10K Run · 40K Bike · 5K Run',
    note: 'First duathlon in Chattogram, second in Bangladesh. Olympic distance. Categories: Open 18–39 (M/F), Masters 40+ (M/F).',
  },
  {
    slug: 'kutubdia-2027',
    name: 'Kutubdia Island Half Marathon 2027',
    status: 'upcoming',
    date: '2027-01-08',
    dateDisplay: '8 January 2027',
    location: 'Kutubdia Island, Cox\'s Bazar District',
    tagline: 'Run for Kutubdia Embankment, Save Kutubdia',
    registerUrl: '',
    heroImage: null,
    // NOTE: gallery-1.jpg in this folder appears to be a Moheshkhali 2025 race image — may be misplaced
    gallery: [],
    summary: 'Return of the Kutubdia Half Marathon — climate-justice race continues into 2027.',
    dist: '21.1K · 10K · 3K Kids',
    note: 'Entitlements: T-shirt, Kit Bag, Photography, Medal (finishers), Chip Timing, Washroom, Prayer Room, Dressing Room.',
  },

  // ── previous ─────────────────────────────────────────────────────────────
  {
    slug: 'kutubdia-2026',
    name: 'Kutubdia Island Half Marathon 2026',
    status: 'previous',
    date: '2026-03-27',
    dateDisplay: '27 March 2026',
    location: 'Kutubdia Island, Cox\'s Bazar District',
    tagline: 'Run for Kutubdia Embankment, Save Kutubdia',
    registerUrl: 'https://forms.gle/twrm5cNg2epk69TE6',
    heroImage: '/assets/events/kutubdia-2026/poster.jpg',
    gallery: [
      '/assets/events/kutubdia-2026/medal-render.jpg',
      '/assets/events/kutubdia-2026/medals-beach.jpg',
      '/assets/events/kutubdia-2026/medals-all.jpg',
      '/assets/events/kutubdia-2026/gallery-1.jpg',
      '/assets/events/kutubdia-2026/gallery-2.jpg',
      '/assets/events/kutubdia-2026/gallery-3.jpg',
      '/assets/events/kutubdia-2026/gallery-4.jpg',
      '/assets/events/kutubdia-2026/gallery-5.jpg',
      '/assets/events/kutubdia-2026/gallery-6.jpg',
      '/assets/events/kutubdia-2026/gallery-7.jpg',
      '/assets/events/kutubdia-2026/gallery-8.jpg',
    ],
    summary: 'Climate-justice half marathon on the shrinking island of Kutubdia, demanding a permanent sea embankment.',
    dist: '21.1K · 10K · Kids 2.1K',
    note: 'Kutubdia has shrunk from ~250 sq km to ~37 sq km; 60,000+ people displaced as climate refugees. Organizer: Cox\'s Bazar Triathletes. Supported by: Upazila Administration, Kutubdia.',
  },
  {
    slug: 'moheshkhali-2025',
    name: 'Moheshkhali Island Half Marathon 2025',
    status: 'previous',
    date: '2025-09-12',
    dateDisplay: '12 September 2025',
    location: 'Shaplapur, Moheshkhali, Cox\'s Bazar',
    tagline: 'Miles for Moheshkhali, Stand for Salt and Betel Farmers',
    registerUrl: '',
    heroImage: '/assets/events/moheshkhali-2025/start-line.jpg',
    gallery: [
      '/assets/events/moheshkhali-2025/poster.jpg',
      '/assets/events/moheshkhali-2025/medal.jpg',
      '/assets/events/moheshkhali-2025/flag-off.jpg',
      '/assets/events/moheshkhali-2025/kids-start.jpg',
      '/assets/events/moheshkhali-2025/prize-giving.jpg',
      '/assets/events/moheshkhali-2025/gallery-1.jpg',
      '/assets/events/moheshkhali-2025/gallery-2.jpg',
      '/assets/events/moheshkhali-2025/gallery-3.jpg',
    ],
    summary: 'Hilly-island half marathon through salt fields, mangroves and betel farms, raising voices for Moheshkhali\'s farmers.',
    dist: '21.1K · 10K · Kids 2.1K',
    note: 'Venue: Shaplapur High School. Organizer: Cox\'s Bazar Triathletes. Reporting 5:30 AM · Start 6:00 AM. Contact: coxsbazartriathletes@gmail.com',
  },
  {
    slug: 'bootcamp-kutubdia-2026',
    eventType: 'program',
    name: 'Bootcamp for Kutubdia Island Half Marathon',
    status: 'previous',
    date: '2026-01-23',
    dateDisplay: '23 January 2026',
    location: 'CRB Hill, Chattogram',
    tagline: 'Train together. Run further.',
    registerUrl: '',
    heroImage: '/assets/events/bootcamp-kutubdia-2026/group-photo.jpg',
    gallery: [
      '/assets/events/bootcamp-kutubdia-2026/poster.jpg',
      '/assets/events/bootcamp-kutubdia-2026/leader.jpg',
      '/assets/events/bootcamp-kutubdia-2026/warmup-1.jpg',
      '/assets/events/bootcamp-kutubdia-2026/warmup-2.jpg',
      '/assets/events/bootcamp-kutubdia-2026/gallery-1.jpg',
      '/assets/events/bootcamp-kutubdia-2026/gallery-2.jpg',
      '/assets/events/bootcamp-kutubdia-2026/gallery-3.jpg',
      '/assets/events/bootcamp-kutubdia-2026/gallery-4.jpg',
      '/assets/events/bootcamp-kutubdia-2026/gallery-5.jpg',
      '/assets/events/bootcamp-kutubdia-2026/gallery-6.jpg',
      '/assets/events/bootcamp-kutubdia-2026/gallery-7.jpg',
    ],
    summary: 'Training boot camp for the Kutubdia Island Half Marathon, in collaboration with Chattala Runners.',
    note: 'Time: 6:30 AM. Boot camp leader: Shak Nahid Uddin (National Athlete, IRONMAN 70.3 Finisher). Collaboration: Cox\'s Bazar Triathletes × Chattala Runners. Open to beginners through intermediate runners.',
  },
  {
    slug: 'bootcamp-swimming-2026',
    eventType: 'program',
    name: 'Swimming Bootcamp 2026',
    status: 'previous',
    date: '2026-01-27',
    dateDisplay: '27 January 2026',
    location: 'Agrabad Deba, Chattogram',
    tagline: 'From basics to the Bangla Channel.',
    registerUrl: 'https://freeshort.info/kMeBeb',
    heroImage: '/assets/events/bootcamp-swimming-2026/group-photo.jpg',
    gallery: [
      '/assets/events/bootcamp-swimming-2026/leader.jpg',
      '/assets/events/bootcamp-swimming-2026/group-photo-2.jpg',
      '/assets/events/bootcamp-swimming-2026/gallery-1.jpg',
      '/assets/events/bootcamp-swimming-2026/gallery-2.jpg',
      '/assets/events/bootcamp-swimming-2026/gallery-3.jpg',
      '/assets/events/bootcamp-swimming-2026/gallery-4.jpg',
      '/assets/events/bootcamp-swimming-2026/gallery-5.jpg',
    ],
    summary: 'Free swimming boot camp — basics through Bangla Channel motivation, organised by Cox\'s Bazar Triathletes.',
    note: 'Time: 6:40 AM. Boot camp leader: Homaed Ishaque Moon (Bangla Channel Conqueror, IRONMAN 70.3 Finisher). Free. Covers basics, technique, floating, hydrotherapy, form coaching, nutrition/recovery, mentor Q&A.',
  },
];

// ─── Org-level team (for /team page) ─────────────────────────────────────────

export interface OrgMember {
  name: string;
  role?: string;   // TODO: fill in once confirmed
  bio?: string;    // TODO: fill in once confirmed
  img: string;
}

export const orgTeam: OrgMember[] = [
  { name: "Nesarul Hoque Suja", img: "/assets/team-suja.jpeg" },
  { name: "Md Shahidul Islam",   img: "/assets/team-shahid.jpeg" },
  { name: "Mahbubul Islam",      img: "/assets/team-mahbub.jpeg" },
  { name: "Mohammad Ziaul Haque", img: "/assets/team-zia.jpeg" },
  { name: "Nasiful Alam",        img: "/assets/team-nasif.jpeg" },
];

export function getCurrentEvent(): EventEntry | undefined {
  return events.find(e => e.status === 'current');
}

export function getUpcomingEvents(): EventEntry[] {
  return events.filter(e => e.status === 'upcoming');
}

export function getPreviousEvents(): EventEntry[] {
  return events.filter(e => e.status === 'previous');
}

export function getEventBySlug(slug: string): EventEntry | undefined {
  return events.find(e => e.slug === slug);
}
