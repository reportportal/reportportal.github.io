import compact from 'lodash/compact';

import { DOCUMENTATION_URL } from '@utils/constants';

import { startNowLinks } from './offerPrices';

export const getFooterButtons = page => [
  {
    btn: 'Start now',
    href: startNowLinks[page],
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

export const columns = {
  openSource: 'Open source',
  package25: 'Package 25',
  package60: 'Package 60',
  package160: 'Package 160',
};

export const mobileColumns = {
  [columns.openSource]: 'Open\nsource',
  [columns.package25]: 'Pack.\n25',
  [columns.package60]: 'Pack.\n60',
  [columns.package160]: 'Pack.\n160',
};

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
