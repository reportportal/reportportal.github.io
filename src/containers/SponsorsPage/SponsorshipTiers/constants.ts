import { DataGTM } from '@app/utils';

export const SPONSORS_REPORT_PORTAL_URL = 'https://github.com/sponsors/reportportal';

export const BUSINESS_SPONSORSHIP = [
  {
    key: 'bronze' as const,
    listItems: [
      "Your logo on the ReportPortal GitHub README for increasing your brand's visibility",
      'A shoutout on our social media channels to reach all of our followers',
    ],
    dataGtm: DataGTM.BecomeSponsor,
    plan: {
      title: 'Bronze',
      cta: {
        type: 'outline',
        link: {
          title: 'Become sponsor',
          url: SPONSORS_REPORT_PORTAL_URL,
        },
      },
      price: {
        currency: '$',
        period: 'month',
        monthly: 500,
      },
      isPopular: false,
    },
    planType: 'monthly' as const,
  },
  {
    key: 'silver' as const,
    listItems: [
      'All benefits from the Bronze sponsorship tier',
      'Your logo on the ReportPortal website sponsor page',
      'Early access to ReportPortal beta features',
    ],
    dataGtm: DataGTM.BecomeSponsor,
    plan: {
      title: 'Silver',
      cta: {
        type: 'outline',
        link: {
          title: 'Become sponsor',
          url: SPONSORS_REPORT_PORTAL_URL,
        },
      },
      price: {
        currency: '$',
        period: 'month',
        monthly: 1000,
      },
      isPopular: false,
    },
    planType: 'monthly' as const,
  },
  {
    key: 'gold' as const,
    dataGtm: DataGTM.BecomeSponsor,
    listItems: [
      'All benefits from the Silver sponsorship tier',
      'A featured blog post about your company on our website',
      'Priority support for any issues encountered',
    ],
    plan: {
      title: 'Gold',
      cta: {
        type: 'primary',
        link: {
          title: 'Become sponsor',
          url: SPONSORS_REPORT_PORTAL_URL,
        },
      },
      price: {
        currency: '$',
        period: 'month',
        monthly: 2500,
      },
      isPopular: true,
    },
    planType: 'monthly' as const,
  },
  {
    key: 'platinum' as const,
    listItems: [
      'All Gold benefits',
      'A dedicated session to discuss your needs and feedback directly with our core development team',
      'Opportunity to influence the product roadmap',
    ],
    dataGtm: DataGTM.BecomeSponsor,
    plan: {
      title: 'Platinum',
      cta: {
        type: 'outline',
        link: {
          title: 'Become sponsor',
          url: SPONSORS_REPORT_PORTAL_URL,
        },
      },
      price: {
        currency: '$',
        period: 'month',
        monthly: 5000,
      },
      isPopular: false,
    },
    planType: 'monthly' as const,
  },
  {
    key: 'diamond' as const,
    isDiamond: true,
    isFullWidth: true,
    dataGtm: DataGTM.ContactUs,
    listItems: [
      'Available only for current sponsors',
      'All the advantages of the Platinum sponsor level',
      'Exclusive rights to influence the direction of product development',
      'Assignment of a personal manager for dedicated support and consultations',
      'Quarterly strategic sessions with our development team to discuss your business needs and future integration opportunities',
    ],
    plan: {
      title: 'Diamond ',
      description: 'Exclusive',
      cta: {
        type: 'outline',
        link: {
          title: 'Contact us',
          url: '/contact-us/sponsorship-program/business/diamond',
        },
      },
      price: {
        currency: '$',
        period: 'month',
        monthly: 50000,
      },
      isPopular: false,
    },
    planType: 'monthly' as const,
  },
];

export const INDIVIDUAL_SPONSORSHIP = [
  {
    key: 'individualBacker' as const,
    plan: {
      title: 'Individual backer',
      description: "Your name will be featured in ReportPortal's official GitHub repository",
      cta: {
        type: 'outline',
        link: {
          title: 'Become sponsor',
          url: SPONSORS_REPORT_PORTAL_URL,
        },
      },
      price: {
        currency: '$',
        period: 'month',
        monthly: 5,
      },
      isPopular: false,
    },
    planType: 'monthly' as const,
    dataGtm: DataGTM.BecomeSponsor,
  },
  {
    key: 'generousBacker' as const,
    plan: {
      title: 'Generous backer',
      description:
        'Your name will be displayed under "Generous Backers" section in ReportPortal\'s GitHub repository',
      cta: {
        type: 'primary',
        link: {
          title: 'Become sponsor',
          url: SPONSORS_REPORT_PORTAL_URL,
        },
      },
      price: {
        currency: '$',
        period: 'month',
        monthly: 50,
      },
      isPopular: false,
    },
    planType: 'monthly' as const,
    dataGtm: DataGTM.BecomeSponsor,
  },
];

export const SPONSORSHIP_INFO = {
  business: BUSINESS_SPONSORSHIP,
  individual: INDIVIDUAL_SPONSORSHIP,
} as const;

export type SponsorshipPlan = (typeof SPONSORSHIP_INFO)[keyof typeof SPONSORSHIP_INFO][number];
