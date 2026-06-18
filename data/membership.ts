export interface MembershipTier {
  name: string
  price: string
  benefits: string[]
  eligibility: string
}

export const memberBenefits = [
  { title: 'Exclusive Events', text: 'Private briefings with ambassadors, ministers, and regional experts' },
  { title: 'Strategic Networks', text: 'Connect with senior policymakers, diplomats, and business leaders' },
  { title: 'Expert Analysis', text: 'Insights on political and economic developments across the MENA region' },
  { title: 'Business Opportunities', text: 'Commercial partnerships, investment opportunities, and market intelligence' },
]

export const membershipTiers: MembershipTier[] = [
  {
    name: 'Premium Corporate Membership',
    price: '£10,000',
    benefits: [
      'Includes all Corporate Membership benefits, plus:',
      'Flagship Event Sponsorship: Silver Sponsorship of one MEA flagship event (Parliamentary Reception, Ambassadors’ Reception, or Annual Dinner), including brand visibility and senior-level engagement.',
      'Profile & Visibility: Brand presence across MEA event materials, digital communications, and on-site branding, alongside complimentary annual advertising in the MEA newsletter.',
      'Thought Leadership: Opportunities to contribute to panels, briefings, and curated discussions, positioning your organisation within key policy and commercial conversations.',
      'Talent & Network Development: Unlimited access to the MEA Young Professionals Group, supporting talent development and pipeline building.',
    ],
    eligibility:
      'Designed for organisations seeking enhanced visibility, senior-level access, and strategic engagement across the MEA network.',
  },
  {
    name: 'Corporate Membership',
    price: '£2,500',
    benefits: [
      'Year-Round Event Access: Invitations to MEA events throughout the year, including flagship receptions, briefings, and roundtables.',
      'Private Briefings: Access to confidential, off-the-record briefings with industry experts, policymakers, and regional specialists.',
      'Tailored Engagement: Support for partner-led engagement, including opportunities to invite VIP guests to MEA flagship events.',
      'Insights & Updates: Monthly newsletter featuring political, economic, and regional analysis.',
      'Profile & Visibility: Complimentary annual advertising in the MEA newsletter.',
      'Talent & Network Development: Unlimited access to the MEA Young Professionals Group.',
    ],
    eligibility: 'For organisations seeking structured engagement and ongoing access to MEA events and networks.',
  },
  {
    name: 'Sole Trader Membership',
    price: '£500',
    benefits: [
      'Event Access: Invitations to MEA events and briefings throughout the year.',
      'Private Briefings: Access to expert-led, confidential briefing sessions.',
      'Insights & Updates: Monthly MEA newsletter with sector and regional analysis.',
      'Host with the MEA: Opportunities to partner with the MEA on invitation-only sessions, with support across programme design, speaker sourcing, invitations, and follow-up.',
    ],
    eligibility: 'For independent professionals and consultants engaged with the Middle East.',
  },
  {
    name: 'Not-for-Profit Membership',
    price: '£500',
    benefits: [
      'Event Access: Invitations to MEA events, briefings, and discussions.',
      'Private Briefings: Access to confidential, off-the-record briefings with regional experts.',
      'Insights & Updates: Monthly MEA newsletter.',
      'Young Professionals Access: Unlimited access to the MEA Young Professionals Group.',
      'Host with the MEA: Support in delivering high-quality, invitation-only sessions in partnership with the MEA.',
    ],
    eligibility: 'For charities, academic institutions, and non-profit organisations.',
  },
]
