import compact from 'lodash/compact';

import { DOCUMENTATION_URL } from '../../utils/constants';

import { START_NOW_LINKS } from './constants';

export const getOfferPrices = page => [
  {
    value: 0,
    discountedValue: 0,
    hours: 0,
    href: START_NOW_LINKS[page],
  },
  {
    value: 3000,
    discountedValue: 2850,
    hours: 25,
    href: `/contact-us/${page}/package-25`,
  },
  {
    value: 6000,
    discountedValue: 5700,
    hours: 60,
    href: `/contact-us/${page}/package-60`,
  },
  {
    value: 13500,
    discountedValue: 12825,
    hours: 160,
    href: `/contact-us/${page}/package-160`,
  },
];

export const getFooterButtons = page => [
  {
    btn: 'Start now',
    href: START_NOW_LINKS[page],
    mode: 'outline',
  },
  {
    btn: 'Contact us',
    href: `/contact-us/${page}/compare/package-25`,
    compareLink: '/contact-us/on-premises/compare/package-25/',
    mode: 'outline',
  },
  {
    btn: 'Contact us',
    href: `/contact-us/${page}/compare/package-60`,
    compareLink: '/contact-us/on-premises/compare/package-60/',
    mode: 'outline',
  },
  {
    btn: 'Contact us',
    href: `/contact-us/${page}/compare/package-160`,
    compareLink: '/contact-us/on-premises/compare/package-160/',
    mode: 'outline',
  },
];

export const getDataPlans = page =>
  compact([
    {
      feature: 'Professional service hours',
      description:
        'A professional service hour is a blended hour included into your subscription plan, which may consist of the time of various specialists, whether it is the time of a business analyst, architect, lead automation engineer, DevOps (System Engineer) or performance engineer. \n' +
        '\n' +
        'It can be used for various purposes related to ReportPortal installation, configuration, integration, customization, feature implementation, TAF updates, test case implementation, etc.',
      openSource: false,
      package25: '25 hours',
      package60: '60 hours',
      package160: '160 hours',
    },
    {
      feature: 'Minimum commitment',
      description: 'Minimum commitment of time for use of a certain subscription package.',
      openSource: false,
      package25: '6 months',
      package60: '6 months',
      package160: '3 months',
    },
    ...[
      page === 'on-premises' && {
        feature: 'Premium features',
        description:
          'Advanced features which come on top of Free Open Source edition. See the *List of features* and description.',
        openSource: false,
        package25: false,
        package60: true,
        package160: true,
        href: `${DOCUMENTATION_URL}/terms-and-conditions/PremiumFeatures/`,
      },
    ],
    {
      footer: true,
    },
  ]);
