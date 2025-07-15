import React from 'react';
import { useToggle } from 'ahooks';

import CloudIcon from '../containers/SassPage/icons/cloud-icon.inline.svg';
import ServerIcon from '../containers/SassPage/icons/server-icon.inline.svg';
import D4jIcon from '../containers/AcceleratorsPage/icons/d4j.inline.svg';
import HelleniumIcon from '../containers/AcceleratorsPage/icons/hellenium.inline.svg';
import QaIcon from '../containers/AcceleratorsPage/icons/qa.inline.svg';

const pricingButtons = [
  {
    text: 'SaaS',
    icon: <CloudIcon />,
    linkTo: '/pricing/saas',
  },
  {
    text: 'On-Prem Services',
    icon: <ServerIcon />,
    linkTo: '/pricing/on-premises',
  },
];

export const acceleratorsButtons = [
  {
    text: 'Drill4J',
    icon: <D4jIcon />,
    linkTo: '/accelerators/d4j',
  },
  {
    text: 'Healenium',
    icon: <HelleniumIcon />,
    linkTo: '/accelerators/hlm',
  },
  {
    text: 'QaSpace',
    icon: <QaIcon />,
    linkTo: '/accelerators/qasp',
  },
];

export const usePricingHeroProps = (page: string) => {
  const [isYearlyPlanType, { toggle: togglePlanType }] = useToggle(true);

  return {
    isYearlyPlanType,
    buttons: page === 'pricing' ? pricingButtons : acceleratorsButtons,
    togglePlanType,
  };
};
