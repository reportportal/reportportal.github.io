export const LIST_ANIMATION_DELAY = 10000;

export const DOCUMENTATION_URL = process.env.DOCUMENTATION_URL;

export const SAAS_OFFERS_DATA = [
  {
    title: 'Startup',
    description:
      'Access to a project space in a multi-tenant setup with all the premium \nfeatures included',
    listItems: [
      'Free trial period of 30 days',
      '100 GB',
      'Up to 12 months of data retention',
      'Unlimited number of users',
      'Shared instance',
      'Premium features: \nQuality Gates',
    ],
    price: {
      currency: '$',
      value: 599,
      discountedValue: 569,
      period: 'month',
      message: '',
    },
    actionText: 'Start 30-day free trial',
    href: '/contact-us/saas/startup-plan',
    isPopular: false,
    actionVariant: 'primary',
  },
  {
    title: 'Business',
    description:
      'Dedicated instance for you only complemented by security hardening options, extended storage\nand retention policy',
    listItems: [
      'Individual instance',
      '1 TB',
      'Up to 5 years of data retention',
      'Unlimited number of users',
      'Free trial (Startup tier)',
      'Premium features: \nQuality Gates',
    ],
    price: {
      currency: '$',
      value: 2799,
      discountedValue: 2659,
      period: 'month',
      message: '',
    },
    actionText: 'Contact us',
    href: '/contact-us/saas/business-plan',
    isPopular: true,
    actionVariant: 'primary',
  },
  {
    title: 'Enterprise',
    description:
      'Custom offering combined with SaaS business plan and packages \nof Managed services',
    listItems: [
      'Individual instance + Services',
      'Extended storage',
      'Extended retention policy',
      'Unlimited number of users',
      'Free trial (Startup tier)',
      'Premium features: \nQuality Gates',
    ],
    price: {
      currency: '',
      value: 0,
      discountedValue: 0,
      period: '',
      message: 'Let’s talk',
    },
    actionText: 'Get a quote',
    href: '/contact-us/saas/enterprise-plan/',
    isPopular: false,
    actionVariant: 'outline',
  },
];

export const ON_PREMISES_OFFER_PRICES = [
  {
    value: 0,
    discountedValue: 0,
    hours: 0,
  },
  {
    value: 3000,
    discountedValue: 2850,
    hours: 25,
  },
  {
    value: 6000,
    discountedValue: 5700,
    hours: 60,
  },
  {
    value: 13500,
    discountedValue: 12825,
    hours: 160,
  },
];
