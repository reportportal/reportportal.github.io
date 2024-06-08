import { DataGTM } from '@app/utils';

export const SPONSORS_REPORT_PORTAL_URL = 'https://github.com/sponsors/reportportal';

export const BUSINESS_SPONSORSHIP = [
  {
    key: 'bronze' as const,
    title: 'Bronze',
    listItems: [
      "Your logo on the ReportPortal GitHub README for increasing your brand's visibility",
      'A shoutout on our social media channels to reach all of our followers',
    ],
    actionText: 'Become sponsor',
    href: SPONSORS_REPORT_PORTAL_URL,
    actionVariant: 'outline',
    currency: '$',
    period: 'month',
    discount: 'yearly',
    priceValue: {
      yearly: 500,
    },
    dataGtm: DataGTM.BecomeSponsor,
  },
  {
    key: 'silver' as const,
    title: 'Silver',
    listItems: [
      'All benefits from the Bronze sponsorship tier',
      'Your logo on the ReportPortal website sponsor page',
      'Early access to ReportPortal beta features',
    ],
    actionText: 'Become sponsor',
    href: SPONSORS_REPORT_PORTAL_URL,
    actionVariant: 'outline',
    currency: '$',
    period: 'month',
    discount: 'yearly',
    priceValue: {
      yearly: 1000,
    },
    dataGtm: DataGTM.BecomeSponsor,
  },
  {
    key: 'gold' as const,
    title: 'Gold',
    listItems: [
      'All benefits from the Silver sponsorship tier',
      'A featured blog post about your company on our website',
      'Priority support for any issues encountered',
    ],
    actionText: 'Become sponsor',
    href: SPONSORS_REPORT_PORTAL_URL,
    isPopular: true,
    actionVariant: 'primary',
    currency: '$',
    period: 'month',
    discount: 'yearly',
    priceValue: {
      yearly: 2500,
    },
    dataGtm: DataGTM.BecomeSponsor,
  },
  {
    key: 'platinum' as const,
    title: 'Platinum',
    listItems: [
      'All Gold benefits',
      'A dedicated session to discuss your needs and feedback directly with our core development team',
      'Opportunity to influence the product roadmap',
    ],
    actionText: 'Become sponsor',
    href: SPONSORS_REPORT_PORTAL_URL,
    actionVariant: 'outline',
    currency: '$',
    period: 'month',
    discount: 'yearly',
    priceValue: {
      yearly: 5000,
    },
    dataGtm: DataGTM.BecomeSponsor,
  },
  {
    key: 'diamond ' as const,
    title: 'Diamond ',
    description: 'Exclusive',
    listItems: [
      'Available only for current sponsors',
      'All the advantages of the Platinum sponsor level',
      'Exclusive rights to influence the direction of product development',
      'Assignment of a personal manager for dedicated support and consultations',
      'Quarterly strategic sessions with our development team to discuss your business needs and future integration opportunities',
    ],
    actionText: 'Contact us',
    href: '/contact-us/sponsorship-program/business/diamond',
    isDiamond: true,
    isFullWidth: true,
    actionVariant: 'outline',
    currency: '$',
    period: 'month',
    discount: 'yearly',
    priceValue: {
      yearly: 50000,
    },
    dataGtm: DataGTM.ContactUs,
  },
];

export const INDIVIDUAL_SPONSORSHIP = [
  {
    key: 'individualBacker' as const,
    title: 'Individual backer',
    description: "Your name will be featured in ReportPortal's official GitHub repository",
    actionText: 'Become sponsor',
    href: SPONSORS_REPORT_PORTAL_URL,
    actionVariant: 'outline',
    currency: '$',
    period: 'month',
    discount: 'yearly',
    priceValue: 5,
    dataGtm: DataGTM.BecomeSponsor,
  },
  {
    key: 'generousBacker' as const,
    title: 'Generous backer',
    description:
      'Your name will be displayed under "Generous Backers" section in ReportPortal\'s GitHub repository',
    actionText: 'Become sponsor',
    href: SPONSORS_REPORT_PORTAL_URL,
    actionVariant: 'primary',
    currency: '$',
    period: 'month',
    discount: 'yearly',
    priceValue: 50,
    dataGtm: DataGTM.BecomeSponsor,
  },
];

export const SPONSORSHIP_INFO = {
  business: BUSINESS_SPONSORSHIP,
  individual: INDIVIDUAL_SPONSORSHIP,
};
