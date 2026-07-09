export const event = {
  name: "Chatto Metro Half Marathon",
  year: 2026,
  tagline: "Feel the pulse of the port city.",
  date: "2026-08-21",
  dateDisplay: "21 August 2026",
  dateShort: "21 AUG 2026",
  weekday: "Friday",
  flagOffISO: "2026-08-21T05:00:00+06:00",
  endISO: "2026-08-21T10:00:00+06:00",
  flagOffDisplay: "05:00 AM BST",
  venueShort: "Karnaphuli Riverside, Chattogram",
  venueLong: "Bastuhara, Khetchar, Behind Noman College, Left of Shah Amanat Bridge Junction, Chattogram",
  organizer: "Triathlon Bangladesh",
  targetRunners: 600,
  registerUrl: "https://coxsbazartriathletes.com",
  registrationOpen: false,
  previousDate: "2026-07-10",
  contact: {
    phone: "01303358202",
    email: "triathlonbangladesh.swimbikerun@gmail.com",
  },
  venueGeo: { lat: 22.3569, lng: 91.7832 },
} as const;

export const quickFacts = [
  { k: "21 August 2026", s: "Friday · Race Day" },
  { k: "Bastuhara, Khetchar", s: "Behind Noman College · Shah Amanat Bridge" },
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
  { label: "START", sub: "Bastuhara · Khetchar (Behind Noman College)", t: 0.0 },
  { label: "MIDPOINT", sub: "Khetchar Jame Mosque & Forkania Madrasa", t: 0.55 },
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
    name: "Emranul Haque",
    bio: ["Wellness advocate"],
    img: "/assets/team-emranul.jpg",
    pos: "50% 50%",
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
    bio: ["Fitness Enthusiast"],
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
  { distance: "21.1 KM", name: "MD Masudul Hoque", time: "2:10 hrs", img: "/assets/team-masud.jpg", pos: "50% 32%" },
  { distance: "21.1 KM", name: "Biplob Barua", time: "2:30 hrs", img: "/assets/team-biplob.jpg", pos: "50% 32%" },
  { distance: "21.1 KM", name: "Mehedi Hasan Danny", time: "2:30 hrs", img: "/assets/team-mehedi.jpg", pos: "50% 32%" },
  { distance: "10 KM", name: "Suman Das", time: "1:10 hrs", img: "/assets/team-sumon.jpg", pos: "50% 35%" },
  { distance: "10 KM", name: "Tamjid Kabbo", time: "1:25 hrs", img: "/assets/team-tamjid.jpg", pos: "50% 32%" },
  { distance: "10 KM", name: "Sumaiya Hasan", time: "1:30 hrs", img: "/assets/team-sumaiya.jpg", pos: "50% 35%" },
  { distance: "10 KM", name: "Mohammad Aaqib Feroz", time: "1:40 hrs", img: "/assets/team-aaqib.jpg", pos: "50% 35%" },
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
    a: "Friday, 21 August 2026 (rescheduled from 10 July 2026 due to bad weather). The start village is at Bastuhara, Khetchar, behind Noman College (left of Shah Amanat Bridge junction), Chattogram. Reporting opens 04:30 BST; 21.1K flag-off is at 05:00.",
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
    a: "Registration for Chatto Metro Half Marathon 2026 is currently closed. Follow Triathlon Bangladesh's channels for reopening announcements.",
  },
  {
    q: "What's the course like?",
    a: "Flat, riverside, mostly on the western bank of the Karnaphuli. Start at Bastuhara, Khetchar (behind Noman College), pass the Khetchar Jame Mosque & Forkania Madrasa near the midpoint, turn at Bangladesh Maritime University.",
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
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61570694557616",
  },
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
  eventType?: 'race' | 'program' | 'community';
  status: 'upcoming' | 'current' | 'previous';
  date: string;
  dateDisplay: string;
  location: string;
  tagline: string;
  registerUrl: string;
  registrationOpen?: boolean;
  facebookEvent?: string;
  regFee?: string;
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
    location: 'Bastuhara, Khetchar, Behind Noman College, Left of Shah Amanat Bridge Junction, Chattogram',
    tagline: event.tagline,
    registerUrl: event.registerUrl,
    registrationOpen: false,
    heroImage: null,
    summary: '21.1K, 10K, and 5K along the Karnaphuli riverside — a port-city dawn run on 21 August 2026.',
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
    location: 'Bakolia Stadium, Noman College Road, Chattogram',
    tagline: 'Run. Ride. Run. Conquer Chattogram.',
    registerUrl: 'https://register.triathlonbangladesh.com',
    registrationOpen: true,
    facebookEvent: 'https://www.facebook.com/events/1559539922251109',
    regFee: '3,500 BDT',
    heroImage: null,
    gallery: [],
    summary: 'Chattogram\'s first duathlon — Olympic distance. Run. Ride. Run. along the Karnaphuli. Registration open.',
    dist: '10K Run · 40K Bike · 5K Run',
    note: 'First duathlon in Chattogram, second in Bangladesh. Olympic distance. Categories: Open 18–39 (M/F), Masters 40+ (M/F).',
  },
  {
    slug: 'moheshkhali-2027',
    name: 'Moheshkhali Island Half Marathon 2027',
    status: 'upcoming',
    date: '2027-01-08',
    dateDisplay: '8 January 2027',
    location: 'Shaplapur, Moheshkhali, Cox\'s Bazar',
    tagline: 'Miles for Moheshkhali, Stand for Salt and Betel Farmers',
    registerUrl: '',
    heroImage: null,
    gallery: [],
    summary: 'Return of the Moheshkhali Island Half Marathon — climate-justice race continues into 2027.',
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

  // ── community (events we supported, not organised) ────────────────────────
  {
    slug: 'kutubdia-channel-swimming-2025',
    name: 'Kutubdia Channel Swimming 2025',
    eventType: 'community',
    status: 'previous',
    date: '2025-11-01',
    dateDisplay: '2025',
    location: 'Kutubdia Channel, Cox\'s Bazar District',
    tagline: 'Our team in the water. Every swimmer safe.',
    registerUrl: '',
    heroImage: '/assets/events/kutubdia-swimming-crew/team-banner.jpeg',
    gallery: [
      '/assets/events/kutubdia-swimming-crew/channel-boat-aerial.jpeg',
      '/assets/events/kutubdia-swimming-crew/rescue-boat-swimmers.jpeg',
      '/assets/events/kutubdia-swimming-crew/crew-flag-megaphone.jpeg',
      '/assets/events/kutubdia-swimming-crew/rescue-full-team-boat.jpeg',
      '/assets/events/kutubdia-swimming-crew/crew-bd-flag.jpeg',
      '/assets/events/kutubdia-swimming-crew/crew-red-flag.jpeg',
      '/assets/events/kutubdia-swimming-crew/crew-with-swimmer-boat.jpeg',
      '/assets/events/kutubdia-swimming-crew/crew-directing-channel.jpeg',
      '/assets/events/kutubdia-swimming-crew/two-crew-waterfront.jpeg',
      '/assets/events/kutubdia-swimming-crew/crew-swimmer-finish.jpeg',
      '/assets/events/kutubdia-swimming-crew/crew-swimmer-start.jpeg',
      '/assets/events/kutubdia-swimming-crew/crew-megaphone-back.jpeg',
      '/assets/events/kutubdia-swimming-crew/crew-boatman.jpeg',
    ],
    summary: 'Cox\'s Bazar Triathletes served as official Rescue Partner for the 3rd Kutubdia Channel Swimming 2025 — manning the rescue boats as 15 brave swimmers tackled one of Bangladesh\'s most turbulent open-water crossings.',
    runners: 15,
    dist: 'Open Water Channel',
    note: '11 of 15 swimmers completed the crossing. The Kutubdia Channel is perpetually rough — currents ran completely opposite to the previous edition. All 15 starters were experienced open-water swimmers. The 4 who did not finish gave everything until the very last moment. Coming up: Moheshkhali Channel Swimming 2026 — start preparing for long-distance open water.',
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
  { name: "Nesarul Hoque Suja",   role: "Founder Admin",       img: "/assets/team-suja.jpeg" },
  { name: "Md. Abdul Matin",      role: "Founder Admin",       img: "/assets/team-matin.jpeg" },
  { name: "Shamsud Douza Nayan",  role: "Mentor",              img: "/assets/team-douza.jpeg" },
  { name: "Md. Shahidul Islam",   role: "Co-ordinator",        img: "/assets/team-shahid.jpeg" },
  { name: "Mohammad Ziaul Haque", role: "Co-ordinator",        img: "/assets/team-zia.jpeg" },
  { name: "Mahbubul Islam",       role: "Co-ordinator",        img: "/assets/team-mahbub.jpeg" },
  { name: "Mohammad Wasir Salil", role: "Co-ordinator",        img: "/assets/team-wasir.jpeg" },
  { name: "Nasiful Alam",         role: "Social Media Manager", img: "/assets/team-nasif.jpeg" },
];

// ─── Chattogram Duathlon 2026 — structured content ───────────────────────────

export const duaMeta = {
  raceDayISO: "2026-11-13T06:00:00+06:00",
  bikeCheckIn: "12 November 2026",
  cutOff: "4 hours",
} as const;

export const duaQuickFacts = [
  { k: "13 Nov 2026", s: "Friday · Race Day" },
  { k: "Bakolia Stadium", s: "Noman College Road" },
  { k: "10 · 40 · 5", s: "Run · Bike · Run (KM)" },
  { k: "৳3,500", s: "Entry Fee" },
  { k: "250 Slots", s: "First come, first served" },
  { k: "12 Nov", s: "Bike Check-in · Kit Expo" },
] as const;

export interface DuaLeg {
  id: string;
  km: number;
  label: string;
  laps: string;
  kind: 'run' | 'bike';
  blurb: string;
}

export const duaLegs: DuaLeg[] = [
  { id: "run1", km: 10, label: "10K RUN", laps: "1 lap", kind: "run",
    blurb: "The opener. One 10-kilometre lap on fresh legs — settle in, hold your pace, save the bike legs." },
  { id: "bike", km: 40, label: "40K BIKE", laps: "3 laps", kind: "bike",
    blurb: "The engine room. Three laps, non-drafting — 12 m draft zone, your watts only." },
  { id: "run2", km: 5, label: "5K RUN", laps: "1 lap", kind: "run",
    blurb: "The reckoning. One final 5-kilometre lap off the bike. This is where the race is decided." },
];

export interface DuaCategory {
  id: string;
  name: string;
  note: string;
}

export const duaCategories: DuaCategory[] = [
  { id: "mo", name: "Male Open", note: "Ages 18–39" },
  { id: "fo", name: "Female Open", note: "Ages 18–39" },
  { id: "mm", name: "Male Masters", note: "40 years and above" },
  { id: "fm", name: "Female Masters", note: "40 years and above" },
];

export const duaPrizeNote =
  "A minimum of 10 participants per category unlocks the full 1st–3rd prize tiers. Below 10, only the champion is awarded.";

export interface DuaEntitlement {
  k: string;
  s: string;
  soon?: boolean;
}

export const duaEntitlements: DuaEntitlement[] = [
  { k: "Official Cycling Pro Jersey", s: "Race-fit sublimated pro jersey — design reveal pending.", soon: true },
  { k: "Premium Finisher Medal", s: "Premium China-made hardware — design reveal pending.", soon: true },
  { k: "Finisher T-Shirt", s: "Yours at the line." },
  { k: "Chip Timing", s: "Full chip-timed splits across both runs and the bike." },
  { k: "Special Kit Bag", s: "Event kit bag at the expo." },
  { k: "Personalized Bib + Race Pack", s: "Your name on the bib. Front for the runs, back for the bike." },
  { k: "E-Certificate", s: "Issued post-race with your chip time." },
];

export const duaFacilities = [
  { k: "Hydration Stations", s: "On course and in transition" },
  { k: "Pre-race Warm-up", s: "Led by the race crew" },
  { k: "Cycle Tuning & Mechanic", s: "Support at the venue" },
  { k: "Baggage Drop", s: "Secure, tagged" },
  { k: "Prayer Room", s: "At the venue" },
  { k: "Snacks & Breakfast", s: "Post-race" },
  { k: "Washrooms", s: "At the venue" },
  { k: "Professional Photography", s: "On course" },
  { k: "Photo Booths", s: "At the finish village" },
  { k: "Medical Teams & Ambulances", s: "On standby throughout" },
  { k: "Kit Expo Access", s: "Before event day" },
] as const;

export interface DuaScheduleItem {
  time: string;
  title: string;
  note: string;
}

export const duaScheduleKnown: DuaScheduleItem[] = [
  { time: "12 NOV", title: "Bike Check-in", note: "Rack your bike at Bakolia Stadium the day before the race." },
  { time: "12 NOV", title: "Kit Expo", note: "Collect your bib, chip, jersey and kit bag before event day." },
];

export interface DuaRuleGroup {
  k: string;
  allowed?: string[];
  notAllowed?: string[];
  items: string[];
}

export const duaRules: { cutOff: string; cutOffNote: string; groups: DuaRuleGroup[] } = {
  cutOff: "4:00",
  cutOffNote: "Total cut-off for all three legs, T1 and T2 included.",
  groups: [
    {
      k: "Race Format",
      items: [
        "International duathlon rules — strictly non-drafting.",
        "Keep a 12 m draft zone behind the cyclist ahead; pass decisively or drop back.",
        "10K run → T1 → 40K bike (3 laps) → T2 → 5K run.",
      ],
    },
    {
      k: "Bikes",
      allowed: ["Road", "MTB", "TT", "Triathlon"],
      notAllowed: ["Fixed-gear", "Electric", "Fat bike", "Folding"],
      items: ["Your bike must be race-worthy — free tuning and mechanic support available at the venue."],
    },
    {
      k: "Bib & Helmet",
      items: [
        "Bib on your FRONT for both runs, on your BACK for the bike leg.",
        "Helmet on and buckled before un-racking your bike in T1.",
        "Helmet stays on until the bike is re-racked in T2.",
      ],
    },
    {
      k: "Transition (T1 / T2)",
      items: [
        "Mount only after the mount line; dismount before the dismount line.",
        "No riding inside the transition zone.",
        "Rack your bike in your numbered slot only — interference with other athletes' gear means disqualification.",
      ],
    },
    {
      k: "Conduct",
      items: [
        "No earphones or headphones anywhere on course.",
        "No outside assistance — pacing, feeding or mechanical help from non-participants.",
        "No littering. Use bins at hydration stations.",
      ],
    },
  ],
};

export const duaFaq = [
  {
    q: "Who can take part?",
    a: "Four categories: Male Open (18–39), Female Open (18–39), Male Masters (40+) and Female Masters (40+). Age is taken as of race day. You'll need a race-worthy bike of an approved type — Road, MTB, TT or Triathlon.",
  },
  {
    q: "What's included with my entry?",
    a: "Official cycling pro jersey, premium finisher medal, finisher t-shirt, chip timing, special kit bag, personalized bib + race pack, and an e-certificate with your chip time.",
  },
  {
    q: "How do I register?",
    a: "Registration runs at register.triathlonbangladesh.com — the Register Now button takes you straight there. Entry is ৳3,500 with 250 slots, first come first served.",
  },
  {
    q: "Which bikes are allowed?",
    a: "Road, MTB, TT and Triathlon bikes are allowed. Fixed-gear, electric, fat and folding bikes are not. Cycle tuning and mechanic support is available at the venue.",
  },
  {
    q: "Is there a cut-off?",
    a: "Yes — 4 hours total for the full 10K run, 40K bike and 5K run, including transitions. The bike leg is strictly non-drafting with a 12 m draft zone.",
  },
  {
    q: "Where is the venue and how do I get there?",
    a: "Bakolia Stadium on Noman College Road, Chattogram. It's inside the city — reachable by rickshaw, CNG or car from anywhere in Chattogram. Parking details will come with your race pack.",
  },
  {
    q: "When do I bring my bike?",
    a: "Bike check-in is on 12 November, the day before the race, at Bakolia Stadium. The kit expo — bib, chip, jersey, kit bag — also runs before event day.",
  },
];

export function getCurrentEvent(): EventEntry | undefined {
  return events.find(e => e.status === 'current');
}

export function getUpcomingEvents(): EventEntry[] {
  return events.filter(e => e.status === 'upcoming');
}

export function getPreviousEvents(): EventEntry[] {
  return events.filter(e => e.status === 'previous' && e.eventType !== 'community');
}

export function getCommunityEvents(): EventEntry[] {
  return events.filter(e => e.eventType === 'community');
}

export function getEventBySlug(slug: string): EventEntry | undefined {
  return events.find(e => e.slug === slug);
}
