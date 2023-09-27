export const offersData = [
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
      value: 629,
      discountedValue: 599,
      period: 'month',
      message: '',
    },
    actionText: 'Start 30-day free trial',
    href: '/contact-us/saas/startup-plan/',
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
      value: 2939,
      discountedValue: 2799,
      period: 'month',
      message: '',
    },
    actionText: 'Contact us',
    href: '/contact-us/saas/business-plan/',
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
