import compact from 'lodash/compact';
import { ComparePlansFooterButton } from '@app/components/ComparePlans';
import { DOCUMENTATION_URL } from '@app/utils';

import { START_NOW_LINKS } from './constants';

export const getOfferLinks = page => [
  START_NOW_LINKS[page],
  `/contact-us/${page}/package-25`,
  `/contact-us/${page}/package-60`,
  `/contact-us/${page}/package-160`,
];

export const getFooterButtons = (page: string): ComparePlansFooterButton[] => [
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
      feature: 'Professional Service Points',
      description:
        'A Professional Service Point is a blended hour included into your subscription plan, which may consist of the time of various specialists, whether it is the time of a business analyst, architect, lead automation engineer, DevOps (System Engineer) or performance engineer. \n' +
        '\n' +
        'It can be used for various purposes related to ReportPortal installation, configuration, integration, customization, feature implementation, TAF updates, test case implementation, etc.',
      openSource: false,
      package25: '25 points',
      package60: '60 points',
      package160: '160 points',
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
