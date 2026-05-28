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
  associatedWith: "Chittagong City Corporation",
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
  { k: "Karnaphuli", s: "Riverside · Chattogram" },
  { k: "21.1 / 10 / 5", s: "Kilometres" },
  { k: "≈600", s: "Runners" },
  { k: "CCC", s: "Chittagong City Corporation" },
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
  { time: "04:55", title: "Opening Remarks", note: "Welcome from Triathlon Bangladesh & Chittagong City Corporation." },
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
  associated: { name: "Chittagong City Corporation", role: "Associated By", logo: null as string | null },
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
