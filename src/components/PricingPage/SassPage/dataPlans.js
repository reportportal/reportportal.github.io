export const headerColumnTitles = ['Startup', 'Business', 'Enterprise'];

export const buttonsData = [
  {
    btn: 'Start free trial',
    href: '/contact-us/compare/saas/startup-plan/',
    mode: 'outline',
  },
  {
    btn: 'Contact us',
    href: '/contact-us/compare/saas/business-plan/',
    mode: 'primary',
  },
  {
    btn: 'Get a quote',
    href: '/contact-us/compare/saas/enterprise-plan/',
    mode: 'outline',
  },
];

export const dataPlans = [
  {
    feature: 'Instance type',
    description:
      'Shared instance is used by more than one tenant/client.\nTenants access is restricted to the project space owned by them.\nCost-effective option.\n\nDedicated instance is hosted for one tenant/client only.\nNo shared database and infrastructure — better for data isolation, availability, security and company-based authorization.',
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
    description:
      'Data retention defines how long your test results can be stored in ReportPortal.\n\nThe data is removed after specified period of retention policy or in case of over usage of data storage (whatever occurs first).',
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
    business: '99%',
    enterprise: '99%',
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
    feature: 'Unlimited number of users',
    description: 'There are no limits in number of users associated with plans and tiers.',
    startup: true,
    business: true,
    enterprise: true,
  },
  {
    feature: 'Free trial',
    description:
      'Free trial is provided on the shared SaaS instance for all the subscription plans. Data transfer from shared to dedicated instance is not available.',
    startup: true,
    business: true,
    enterprise: true,
  },
  {
    feature: 'Customization',
    description:
      'Customization refers to the ability to modify the service to meet specific business requirements (e.g. tailored functionality, views and flows).',
    startup: false,
    business: false,
    enterprise: true,
  },
  {
    feature: 'Available backups to on-premises storage',
    description:
      "Available backups to on-premises storage refers to the ability to make a copy of data and transfer it to your infrastructure regularly, in case it's required by the security policy of your organization.",
    startup: false,
    business: true,
    enterprise: true,
  },
  {
    feature: 'Data migration from on-premises instance',
    description:
      'Data migration from on-premises instance means availability of data migration from on-premises instance, which includes data transfer from your in-house deployment to SaaS instance.',
    startup: false,
    business: true,
    enterprise: true,
  },
  {
    feature: 'Choosing deployment region',
    description:
      'Choosing deployment region means that you will be able to pick your deployment region to get the best possible performance and eliminate network delays from your testing infrastructure to SaaS instance.',
    startup: false,
    business: true,
    enterprise: true,
  },
  {
    feature: 'Site-to-site VPN',
    description:
      'A site-to-site VPN is a connection between SaaS infrastructure and your corporate network to leverage an internet connection for private traffic.',
    startup: false,
    business: true,
    enterprise: true,
  },
  {
    feature: 'IP whitelisting',
    description:
      'IP whitelisting is granting access to the infrastructure only to specific IP addresses, to avoid public exposure.',
    startup: false,
    business: true,
    enterprise: true,
  },
  {
    feature: 'Real-time analytics',
    description:
      'ReportPortal provides real-time reporting capabilities, that save time thanks to the instant reaction of your team.\nThere is no need to wait until full execution will be completed, so your team can start result analysis in a matter of seconds.',
    startup: true,
    business: true,
    enterprise: true,
  },
  {
    feature: 'Single sign-on (SSO) authentication via OKTA SAML, Azure SAML',
    description:
      'Single sign-on means a method of authentication that permits users to securely log in to different systems using just one set of credentials.\nIn ReportPortal SSO authentication is available via OKTA SAML and Azure SAML.',
    startup: false,
    business: true,
    enterprise: true,
  },
  {
    feature: 'Authentication via LDAP or AD',
    description:
      'Available authentication and user authorization via LDAP or Active Directory information.',
    startup: false,
    business: true,
    enterprise: true,
  },
  {
    feature: 'Auto analysis',
    description:
      'Machine Learning based algorithms trained on your historical data of investigated failures, which reduces team efforts to triage failed reports.',
    startup: true,
    business: true,
    enterprise: true,
  },
  {
    feature: 'Open reporting API',
    description:
      'ReportPortal API allows to push and pull data into and from ReportPortal for third party tools (PowerBI, Grafana, etc) and generate custom reports.\nExtensive *developers guides* allow to build integration even with a home-grown custom solution/framework.',
    startup: true,
    business: true,
    enterprise: true,
    href: 'https://reportportal.io/docs/category/developers-guides/',
  },
  {
    feature: 'Administration at Project Level',
    description:
      'Administration at Project Level means full access to the Project settings including the permissions to import, update, delete project data and add/invite/assign/unassign users on/to the project.',
    startup: true,
    business: true,
    enterprise: true,
  },

  {
    section: 'Premium Features',
  },
  {
    feature: 'Quality Gates',
    description:
      'Quality Gates is a premium feature helping to automate decisions on top of test automation results and set up a feedback loop into your CI/CD toolchain.\n\nRule-based engine helps to form an unambiguous decision of passed/failed execution considering extensive information of test reports attributes.',
    startup: true,
    business: true,
    enterprise: true,
  },
  {
    footer: true,
  },
];
