import React from 'react';
import { useToggle } from 'ahooks';

import CloudIcon from './icons/cloud-icon.inline.svg';
import ServerIcon from './icons/server-icon.inline.svg';
import D4jIcon from '../AcceleratorsPage/icons/d4j.inline.svg';
import HelleniumIcon from '../AcceleratorsPage/icons/hellenium.inline.svg';
import QaIcon from '../AcceleratorsPage/icons/qa.inline.svg';

const pricingButtons = [
  {
    text: 'SaaS',
    iconComponent: () => <CloudIcon />,
    linkTo: '/pricing/saas',
  },
  {
    text: 'On-Premises',
    iconComponent: () => <ServerIcon />,
    linkTo: '/pricing/on-premises',
  },
];

export const acceleratorsButtons = [
  {
    text: 'Drill4J',
    iconComponent: () => <D4jIcon />,
    linkTo: '/accelerators/d4j',
  },
  {
    text: 'Healenium',
    iconComponent: () => <HelleniumIcon />,
    linkTo: '/accelerators/hlm',
  },
  {
    text: 'QaSpace',
    iconComponent: () => <QaIcon />,
    linkTo: '/accelerators/qasp',
  },
];

export const usePricingHeroProps = page => {
  const [discountState, { toggle: toggleDiscountState }] = useToggle(true);

  return {
    discountState,
    buttons: page === 'pricing' ? pricingButtons : acceleratorsButtons,
    toggleDiscountState,
  };
};
