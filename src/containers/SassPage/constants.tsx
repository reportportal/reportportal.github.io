import React from 'react';
import { DOCUMENTATION_URL } from '@app/utils';

export const BUTTONS_DATA = [
  {
    btn: 'Start free trial',
    href: '/contact-us/saas/startup-plan/',
    compareHref: '/contact-us/saas/compare/startup-plan/',
    mode: 'outline',
  },
  {
    btn: 'Contact us',
    href: '/contact-us/saas/business-plan/',
    compareHref: '/contact-us/saas/compare/business-plan/',
    mode: 'primary',
  },
  {
    btn: 'Get a quote',
    href: '/contact-us/saas/enterprise-plan/',
    compareHref: '/contact-us/saas/compare/enterprise-plan/',
    mode: 'outline',
  },
];

export const COLUMNS = {
  startup: 'Startup',
  business: 'Business',
  enterprise: 'Enterprise',
};

export const DATA_PLANS = [
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
    feature: 'Technical Support Points',
    description:
      'A Technical Support Point (pre-paid) is a blended hour, included in your subscription plan, that consists of Application Support Specialist time. It can be used for integration, operation and features-related queries.',
    startup: '5',
    business: '10',
    enterprise: 'Dedicated specialist',
  },
  {
    feature: 'Additional technical support',
    description:
      'If your usage exceeds the specified quantity of Technical Support Points included in the subscription package, you will need to pay for the exceeding amount at pay-as-you-go system.',
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
    href: `${DOCUMENTATION_URL}/category/developers-guides/`,
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

export const FAQ_ITEMS = [
  {
    key: 1,
    label: 'How does the free trial work?',
    children: (
      <>
        <div>
          As soon as you sign up and sign in, your free trial is considered to be activated.
        </div>
        <div>
          Your free trial lasts for 30 days and gives users access to all of the features of
          ReportPortal. As the free trial is associated with the Startup tier, all the limitations
          of the Startup tier (data storage, data retention policy) are applicable to the free trial
          period.
        </div>
        <div>*applies only to the Startup tier</div>
      </>
    ),
  },
  {
    key: 2,
    label: 'How many times can I get the free trial?',
    children: (
      <>
        <div>ReportPortal customers are eligible for one free trial only.</div>
        <div>
          Also, the free trial is only available for your first project (you won&apos;t be able to
          get the free trial if you&apos;ve already created a project or if you&apos;ve been invited
          to other projects before).
        </div>
        <div>*applies only to the Startup tier</div>
      </>
    ),
  },
  {
    key: 3,
    label: 'Do I need to provide credit card details to get the free trial?',
    children: (
      <>
        <div>No, the free trial doesn&apos;t require your card details.</div>
        <div>
          It is absolutely free and you are not obliged to keep using ReportPortal after the free
          trial. But in order to continue the usage of the application, you should accomplish the
          payment for the next term.
        </div>
        <div>*applies only to the Startup tier</div>
      </>
    ),
  },
  {
    key: 4,
    label: 'What happens when the free trial period ends?',
    children: (
      <>
        <div>
          In case you purchase a subscription on the day of the end of the free trial or before it,
          you will be able to proceed using ReportPortal. All the data reported during the free
          trial period will stay safe and remain on your project.
        </div>
        <div>
          If you do not purchase a subscription to one of the billing plans by the end of the trial
          or earlier, your project will be switched to read-only mode until you activate the
          subscription. Read-only mode means that during the next month after the end of the free
          trial, you will be able to use all the features except reporting functionality — you
          won&apos;t be able to report any new data into ReportPortal.
        </div>
        <div>
          If the subscription is still not activated during the month after the end of the free
          trial, all your project data will be erased.
        </div>
        <div>*applies only to Startup tier</div>
      </>
    ),
  },
  {
    key: 5,
    label: 'How is my subscription charged?',
    children: (
      <>
        <div>You will be charged at the beginning of each billing period.</div>
        <div>
          If you opt for a monthly plan, your minimum commitment is 3 months. Thus, you will be
          charged on the first day of the new quarterly billing cycle.
        </div>
        <div>
          If you are on a yearly plan, you will be charged on the first day of the new yearly cycle
          - either quarterly or annually in advance / bi-annually.
        </div>
      </>
    ),
  },
  {
    key: 6,
    label: 'Can I change the billing plan at any time?',
    children: (
      <div>
        <div>You may change your subscription plan at any time.</div>
        <div>
          Just reach out to us via email available on the Contact tab in Billing Settings of your
          Project.
        </div>
      </div>
    ),
  },
  {
    key: 7,
    label: 'What happens when a subscription expires?',
    children: (
      <>
        <div>
          In case of no payment, the project will be switched to &quot;read-only&quot; mode on the
          first day of the next billing cycle. During the next month, you&apos;ll be able to use all
          the features of the application except reporting functionality.
        </div>
        <div>After one month, all your project data will be erased.</div>
      </>
    ),
  },
];
