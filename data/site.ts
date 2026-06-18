export const site = {
  name: 'The Middle East Association',
  shortName: 'Middle East Association',
  established: 1961,
  tagline:
    'The Middle East Association fosters dialogue, understanding, and collaboration across policy, business, and culture.',
  // Public location. No street address or phone is published; keep to city + country
  // so structured data and NAP stay consistent and never fabricated.
  address: {
    locality: 'London',
    country: 'GB',
  },
  // Topical scope — surfaced in Organization.knowsAbout for entity/topical relevance.
  knowsAbout: [
    'UK-Middle East trade',
    'UK-GCC relations',
    'Middle East and North Africa business',
    'International trade missions',
    'Middle East policy and diplomacy',
  ],
  twitterHandle: '@_theMEA',
  emails: {
    general: 'info@the-mea.com',
    membership: 'membership@the-mea.com',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/middle-east-association-the-/',
    x: 'https://x.com/_theMEA',
  },
  applyFormUrl: 'https://share-eu1.hsforms.com/2zXuqNS2STPmEELr_RMbvtw2fqy0h',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Events', to: '/events' },
  { label: 'Membership', to: '/membership' },
  { label: 'Sponsorship', to: '/sponsorship' },
  { label: 'Young Professionals', to: '/young-professionals' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]
