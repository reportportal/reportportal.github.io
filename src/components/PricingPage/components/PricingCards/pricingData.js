export const pricingData = [
  {
    id: 1,
    title: 'Startup',
    description: `Access to a project space in a multi-tenant setup with all the premium
        features included`,
    listItems: [
      'Free trial period of 30 days',
      '100 GB',
      'Up to 12 months of data retention',
      'Unlimited number of users',
      'Shared instance',
      'Premium features: Quality Gates',
    ],
    price: {
      currency: '$',
      value: 629,
      period: 'month',
      message: '',
    },
    actionText: 'Start 30-day free trial',
    isPopular: false,
    actionVariant: 'primary',
  },
  {
    id: 2,
    title: 'Business',
    description: `Dedicated instance for you only complemented by security hardening options, extended storage
    and retention policy`,
    listItems: [
      'Individual instance',
      '1 TB',
      'Up to 5 years of data retention',
      'Unlimited number of users',
      'Free trial (Startup tier)',
      'Premium features: Quality Gates',
    ],
    price: {
      currency: '$',
      value: 2939,
      period: 'month',
      message: '',
    },
    actionText: 'Contact us',
    isPopular: true,
    actionVariant: 'primary',
  },
  {
    id: 3,
    title: 'Enterprise',
    description: `Custom offering combined with SaaS business plan and packages
    of Managed services`,
    listItems: [
      'Individual instance + Services',
      'Extended storage',
      'Extended retention policy',
      'Unlimited number of users',
      'Free trial (Startup tier)',
      'Premium features: Quality Gates',
    ],
    price: {
      currency: '',
      value: '',
      period: '',
      message: 'Let’s talk',
    },
    actionText: 'Get a quote',
    isPopular: false,
    actionVariant: 'outline',
  },
];
