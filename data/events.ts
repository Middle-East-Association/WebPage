export interface FlagshipEvent {
  emoji: string
  title: string
  description: string
}

export type EventCategory =
  | 'Flagship'
  | 'Young Professionals'
  | 'Regional Spotlight'
  | 'Conference'
  | 'Webinar'

export interface UpcomingEvent {
  title: string
  category: EventCategory
  date: string // human readable, as shown on the original
  startDate: string // ISO 8601, for structured data and date sorting
  time?: string
  location?: string // display string shown in the UI (e.g. "Online", "House of Commons")
  registerUrl?: string
  // --- Structured-data fields (Google Event rich results) ---
  // Fill these in per event for valid, non-misleading markup. `venue` = the place name,
  // `city` = the locality used as addressLocality. Defaults to London (the MEA's home city)
  // when unset — VERIFY per event, especially multi-city ones like the UK Roadshow.
  venue?: string
  city?: string
  endDate?: string // ISO 8601
  isOnline?: boolean
  soldOut?: boolean // when true, shows a "Sold Out" badge instead of the Register button
}

export const flagshipEvents: FlagshipEvent[] = [
  {
    emoji: '🏛️',
    title: 'Parliamentary Reception',
    description: 'Cross-party engagement with MPs, ambassadors, MEA members and senior stakeholders.',
  },
  {
    emoji: '🤝',
    title: "Ambassadors' Reception",
    description: 'Arab ambassadors to the UK and UK ambassadors to MENA, plus members and senior business engagement.',
  },
  {
    emoji: '✨',
    title: 'Annual Gala Dinner',
    description: 'Flagship networking event bringing together leaders from across sectors.',
  },
  {
    emoji: '🌍',
    title: 'UK Roadshow',
    description: 'Regional business-focused events aimed at businesses engaging with the Middle East.',
  },
]

// Ordered soonest-first by startDate.
export const upcomingEvents: UpcomingEvent[] = [
  {
    title: 'UK Roadshow 2026 Gateway to MENA: Unlocking Business Opportunities Across the Middle East',
    category: 'Conference',
    date: 'Nov 23-27, 2026',
    startDate: '2026-11-23',
    endDate: '2026-11-27',
    registerUrl: 'https://uk-roadshow.the-mea.com/',
  },
  {
    title: 'Yemen: Understanding the Current Landscape',
    category: 'Webinar',
    date: 'Oct 20, 2026',
    startDate: '2026-10-20',
    time: '14:00 – 15:00',
    endDate: '2026-10-20',
    location: 'Online',
    isOnline: true,
    registerUrl: 'https://www.tickettailor.com/events/themiddleeastassociation/2473064',
  },
  {
    title: 'MEA Young Professionals: Connect & Network',
    category: 'Young Professionals',
    date: 'Oct 21, 2026',
    startDate: '2026-10-21',
    time: '18:30',
    location: 'Commercial Tavern, London',
    venue: 'Commercial Tavern',
    city: 'London',
    registerUrl: 'https://buytickets.at/themiddleeastassociation/2376913',
  },
  {
    title: 'Gala Dinner 2027',
    category: 'Flagship',
    date: 'Oct 18, 2027',
    startDate: '2027-10-18',
  },
  {
    title: 'Cross-Party Parliamentary Reception (House of Commons)',
    category: 'Flagship',
    date: 'Feb 03, 2027',
    startDate: '2027-02-03',
    registerUrl: 'https://2fqy0h.share-eu1.hsforms.com/26pl4QZrRSaO7QWOlpkzJZA',
  },
  {
    title: 'MEA Annual Lecture 2027 — Keynote by Frank Gardner',
    category: 'Conference',
    date: 'Mar 09, 2027',
    startDate: '2027-03-09',
  },
  {
    title: 'MEA Technology Conference',
    category: 'Conference',
    date: 'May 2027',
    startDate: '2027-05-01',
  },
].sort((a, b) => a.startDate.localeCompare(b.startDate))

// 12 images keeps the 3-column grid filling complete rows.
// The MEA Gala Dinner 2026 photo leads; the remaining 11 are the prior gallery.
export const pastEventImages: string[] = [
  '/images/event-13.webp', // MEA Gala Dinner 2026
  ...Array.from({ length: 11 }, (_, i) => `/images/event-${i + 1}.webp`),
]
