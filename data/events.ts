export interface FlagshipEvent {
  emoji: string
  title: string
  description: string
}

export interface UpcomingEvent {
  title: string
  date: string // human readable, as shown on the original
  time: string
  location: string
  startDate: string // ISO 8601, for structured data
  registerUrl?: string
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

export const upcomingEvents: UpcomingEvent[] = [
  {
    title: 'Cross Party Parliamentary Event',
    date: 'Feb 03, 2027',
    time: '6:30 PM',
    location: 'London',
    startDate: '2027-02-03T18:30:00',
  },
  {
    title: 'MENA Regional Update Briefing',
    date: 'Apr 10, 2026',
    time: '12:00 PM',
    location: 'Online',
    startDate: '2026-04-10T12:00:00',
  },
  {
    title: 'Young Professionals Event',
    date: 'May 01, 2026',
    time: '6:30 PM',
    location: 'London',
    startDate: '2026-05-01T18:30:00',
    registerUrl: 'https://buytickets.at/themiddleeastassociation/2087337',
  },
  {
    title: 'Ambassadors Reception',
    date: 'Jun 29, 2026',
    time: '6:30 PM',
    location: 'London',
    startDate: '2026-06-29T18:30:00',
  },
  {
    title: "Cybersecurity & Digital Resilience in the Middle East’s Tech Revolution",
    date: 'May 11, 2026',
    time: '2:00 PM',
    location: 'London',
    startDate: '2026-05-11T14:00:00',
    registerUrl: 'https://buytickets.at/themiddleeastassociation/2113094',
  },
  {
    title: 'Gala Dinner',
    date: 'Oct 12, 2026',
    time: '7:30 PM',
    location: 'London',
    startDate: '2026-10-12T19:30:00',
  },
]

export const pastEventImages: string[] = Array.from({ length: 12 }, (_, i) => `/images/event-${i + 1}.webp`)
