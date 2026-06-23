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
    title: "Ambassadors' Reception",
    category: 'Flagship',
    date: 'Jun 29, 2026',
    startDate: '2026-06-29',
  },
  {
    title: 'YPG Dinner Party',
    category: 'Young Professionals',
    date: 'Jul 02, 2026',
    startDate: '2026-07-02',
  },
  {
    title: 'UK–GCC Free Trade Agreement Briefing',
    category: 'Conference',
    date: 'Jul 06, 2026',
    startDate: '2026-07-06',
    registerUrl: 'https://buytickets.at/themiddleeastassociation/2275254',
  },
  {
    title: 'YPG Summer Drinks',
    category: 'Young Professionals',
    date: 'Jul 16, 2026',
    startDate: '2026-07-16',
  },
  {
    title: 'UK Roadshow 2026',
    category: 'Conference',
    date: 'Jul 20, 2026',
    startDate: '2026-07-20',
    registerUrl: 'https://uk-roadshow.the-mea.com/',
  },
  {
    title: 'Diplomacy Unpacked: Insights, Careers & Connections with RUSI NextGen',
    category: 'Young Professionals',
    date: 'Sep 08, 2026',
    startDate: '2026-09-08',
  },
  {
    title: 'Iraq & Syria Business Reception with the MEA, Mansion House Reception',
    category: 'Regional Spotlight',
    date: 'Oct 06, 2026',
    startDate: '2026-10-06',
  },
  {
    title: 'Gala Dinner 2026',
    category: 'Flagship',
    date: 'Oct 12, 2026',
    startDate: '2026-10-12',
    registerUrl: 'https://buytickets.at/themiddleeastassociation/2160261',
  },
  {
    title: 'Cross-Party Parliamentary Reception (House of Commons)',
    category: 'Flagship',
    date: 'Feb 03, 2027',
    startDate: '2027-02-03',
  },
  {
    title: 'MEA Technology Conference',
    category: 'Conference',
    date: 'May 2027',
    startDate: '2027-05-01',
  },
].sort((a, b) => a.startDate.localeCompare(b.startDate))

export const pastEventImages: string[] = Array.from({ length: 12 }, (_, i) => `/images/event-${i + 1}.webp`)
