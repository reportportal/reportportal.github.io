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

export const SEO_DATA = {
  index: {
    title:
      'ReportPortal test automation analytics platform and real-time reporting, powered by Machine Learning',
    description:
      'Centralized test automation dashboard. Provides AI-based defects triage and real time test report dashboard.',
  },
  features: {
    title: 'Features',
    description:
      'Explore features for seamless test automation. Rethink end-to-end testing with automated defect triaging and a dynamic QA metrics dashboard.',
  },
  blog: {
    title: 'Blog',
    description: "Stay informed by reading ReportPortal's updates, news, and technology articles.",
  },
  terms: {
    title: 'Terms and Conditions',
    description:
      'Review the Terms and Conditions to stay informed about the rules governing the use of our test automation results dashboard.',
  },
  caseStudies: {
    title: 'Case Studies',
    description:
      'Discover how organizations have optimized their testing processes thanks to ReportPortal.',
  },
  installation: {
    title: 'Installation guide',
    description: 'Three steps to get started with our test automation dashboard.',
  },
  qeConsulting: {
    title: 'Quality Engineering Consulting',
    description:
      'Achieve a product-quality transformation with our outstanding Quality Engineering Consulting.',
  },
  testAutomationAsAService: {
    title: 'Test Automation as a Service',
    description:
      'Enhance your testing process by utilizing our on-demand automation tools, infrastructure, hardware, and expert resources.',
  },
  testingAsAService: {
    title: 'Testing as a Service',
    description:
      'Optimize your testing costs with our on-demand software, hardware, and expert resources.',
  },
  saas: {
    title: 'Pricing: Saas',
    description:
      'Explore our flexible pricing plans from small teams to global enterprises. Harness the power of our end-to-end testing reporting tool.',
  },
  onPremises: {
    title: 'Pricing: On-Premises',
    description:
      'Select the pricing plan that best suits your needs and unlock the full potential of our test report dashboard.',
  },
  qasp: {
    title: 'Pricing for accelerators: QaSpace',
    description:
      "Dive into the specifics of our offerings to keep track of your project's health and progress with our advanced QA metrics dashboard.",
  },
  hlm: {
    title: 'Pricing for accelerators: Healenium',
    description:
      'Choose the pricing package that enables you to stay ahead of the curve with our comprehensive test automation reporting solutions.',
  },
  d4j: {
    title: 'Pricing for accelerators: Drill4J',
    description:
      'Enhance your testing strategy with our priced plans, designed to streamline your quality assurance workflows.',
  },
  contactUsGeneral: {
    title: 'Contact us',
    description:
      'Whether you have questions about our services or need assistance, feel free to connect with us using this form.',
  },
};
