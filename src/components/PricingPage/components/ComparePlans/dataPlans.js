export const headerColumnTitles = ['Startup', 'Business', 'Enterprise'];

export const dataPlans = [
  {
    feature: 'Instance type',
    description: `Shared instance is used by more than one tenant/client.
Tenants' access is restricted to the project space owned by them.
Cost-effective option.

Dedicated instance is hosted for one tenant/client only.
No shared database and infrastructure — better for data isolation, availability, security and company-based authorization.`,
    startup: 'Shared',
    business: 'Individual',
    enterprise: 'Individual',
  },
  {
    feature: 'Data storage',
    description:
      'Data storage defines how much data can be pulled into ReportPortal and saved in the database (PostgreSQL) and binary storage (MinIO). The Data storage is divided between PostgreSQL (launches + tests + logs) and MinIO (attachments) in the ratio you need. On a daily basis, the system calculates the stored data and gradually deletes overuse in both the database and binary storage.',
    startup: '100 Gb.',
    business: '1 Tb.',
    enterprise: 'Extended storage',
  },
  {
    feature: 'Data retention',
    description: `Data retention defines how long your test results can be stored in ReportPortal.\n

The data is removed after specified period of retention policy or in case of over usage of data storage (whatever occurs first).`,
    startup: 'up to 12 months',
    business: 'up to 5 years',
    enterprise: 'Extended retention policy',
  },
  {
    feature: 'Technical support hours',
    description:
      'A technical support hour (pre-paid) is a blended hour, included in your subscription plan, that consists of Application Support Specialist time.It can be used for integration, operation and features-related queries.',
    startup: '10',
    business: '5',
    enterprise: 'Dedicated specialist',
  },
  {
    feature: 'Additional technical support',
    description:
      'If your usage exceeds the specified quantity of technical support hours included in the subscription package, you will need to pay for the exceeding amount at pay-as-you-go system.',
    startup: '150$/h',
    business: '150$/h',
    enterprise: '150$/h',
  },
  {
    feature: 'Project spaces',
    description:
      'Project space is an isolated online workspace where you can import and analyse test results, create dashboards, work individually or together with your team, etc.',
    startup: '1',
    business: 'Multiple',
    enterprise: 'Unlimited',
  },
  {
    feature: 'Service Level Availability',
    description: 'Service Level Availability is a minimum percentage of service uptime in a year.',
    startup: '95%',
    business: '99.0%',
    enterprise: '99.0%',
  },
  {
    feature: 'Access to the database, ElasticSearch and monitoring',
    description:
      'Access to the database, ElasticSearch and monitoring refers to the ability to review all the data stored in the database and ElasticSearch as well as review and receive monitoring alerts in case of performance issues on the instance.',
    startup: false,
    business: 'Upon request',
    enterprise: 'Upon request',
  },
  {
    section: 'Premium Features',
  },
  {
    feature: 'Quality Gates',
    description: `Quality Gates is a premium feature helping to automate decisions on top of test automation results and set up a feedback loop into your CI/CD toolchain.

Rule-based engine helps to form an unambiguous decision of passed/failed execution considering extensive information of test reports attributes.`,
    startup: true,
    business: true,
    enterprise: true,
  },
  {
    footer: true,
  },
  // {
  //   feature: '',
  //   description: '',
  //   startup: '',
  //   business: '',
  //   enterprise: '',
  // },
  // {
  //   feature: '',
  //   description: '',
  //   startup: '',
  //   business: '',
  //   enterprise: '',
  // },
  // {
  //   feature: '',
  //   description: '',
  //   startup: '',
  //   business: '',
  //   enterprise: '',
  // },
  // {
  //   feature: '',
  //   description: '',
  //   startup: '',
  //   business: '',
  //   enterprise: '',
  // },
  // {
  //   feature: '',
  //   description: '',
  //   startup: '',
  //   business: '',
  //   enterprise: '',
  // },
  // {
  //   feature: '',
  //   description: '',
  //   startup: '',
  //   business: '',
  //   enterprise: '',
  // },
  // {
  //   feature: '',
  //   description: '',
  //   startup: '',
  //   business: '',
  //   enterprise: '',
  // },
  // {
  //   feature: '',
  //   description: '',
  //   startup: '',
  //   business: '',
  //   enterprise: '',
  // },
  // {
  //   feature: '',
  //   description: '',
  //   startup: '',
  //   business: '',
  //   enterprise: '',
  // },
  // {
  //   feature: '',
  //   description: '',
  //   startup: '',
  //   business: '',
  //   enterprise: '',
  // },
  // {
  //   feature: '',
  //   description: '',
  //   startup: '',
  //   business: '',
  //   enterprise: '',
  // },
];
