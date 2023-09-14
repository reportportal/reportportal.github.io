import React from 'react';
import { useToggle } from 'ahooks';

import CloudIcon from './icons/cloud-icon.inline.svg';
import ServerIcon from './icons/server-icon.inline.svg';

const buttons = [
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
export const usePricingHeroProps = () => {
  const [discountState, { toggle: toggleDiscountState }] = useToggle(true);

  return {
    discountState,
    buttons,
    toggleDiscountState,
  };
};
