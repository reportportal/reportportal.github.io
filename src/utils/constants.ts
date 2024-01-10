import { isDateBetweenNov25AndJan15GMT3 } from './isDateBetweenNov25AndJan15GMT3';

export const LIST_ANIMATION_DELAY = 10000;

export const DOCUMENTATION_URL = process.env.DOCUMENTATION_URL;

export const SAAS_OFFERS = [
  {
    key: 'startup' as const,
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
    actionText: 'Start 30-day free trial',
    href: '/contact-us/saas/startup-plan',
    isPopular: false,
    actionVariant: 'primary',
  },
  {
    key: 'business' as const,
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
    actionText: 'Contact us',
    href: '/contact-us/saas/business-plan',
    isPopular: true,
    actionVariant: 'primary',
  },
  {
    key: 'enterprise' as const,
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
    actionText: 'Get a quote',
    href: '/contact-us/saas/enterprise-plan',
    isPopular: false,
    actionVariant: 'outline',
  },
];

export type SAAS_OFFERS_KEYS = (typeof SAAS_OFFERS)[number]['key'];

export const isNewYearMode = isDateBetweenNov25AndJan15GMT3();
