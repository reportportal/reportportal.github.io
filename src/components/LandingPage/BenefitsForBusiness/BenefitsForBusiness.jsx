import React from 'react';

import { AnimatedList } from '../../AnimatedList';

import { features } from '../../../utils/imageSource';

const benefitsForBusinessList = [
  {
    title: 'Automated decision-making',
    description:
      'Check up your product health and make release decisions automatically with Quality Gates',
    image: features.feature8,
  },
  {
    title: 'Testing status visibility',
    description:
      'Get pure visibility in testing status across various environments by means of dashboards and history',
    image: features.feature9,
  },
  {
    title: 'Transparency of test failures reason',
    description: 'Detect the root causes of failures and categorize the failures faster',
    image: features.feature2,
  },
  {
    title: 'Time saving for teams',
    description:
      'AI-based failures triaging will help you to spend less time and efforts on manual analysis of test failure reasons',
    image: features.feature10,
  },
  {
    title: 'Tracking of key metrics and KPI',
    description:
      "Thanks to widgets and dashboards you'll be able to take a helicopter view on the project or dig deeper into more detail to make decisions faster",
    image: features.feature6,
  },
];

export const BenefitsForBusiness = () => {
  return (
    <AnimatedList
      title="Benefits for business"
      subtitle="Features full of benefits from business perspective"
      data={benefitsForBusinessList}
    />
  );
};
