import React from 'react';

import { features } from '../../../utils/imageSource';
import { AnimatedList } from '../../AnimatedList';
import { Link } from '../../Link';

const benefitsForBusinessList = [
  {
    title: 'Automated decision-making',
    description:
      'Check up your product health and make release decisions automatically with Quality Gates',
    image: features.feature8,
    link: '/features/#quality-gates',
  },
  {
    title: 'Testing status visibility',
    description:
      'Get pure visibility in testing status across various environments by means of dashboards and history',
    image: features.feature9,
    link: '/features/#visualisation-of-tests',
  },
  {
    title: 'Transparency of test failures reason',
    description: 'Detect the root causes of failures and categorize the failures faster',
    image: features.feature11,
    link: '/features/#categorisation',
  },
  {
    title: 'Time saving for teams',
    description:
      'AI-based failures triaging will help you to spend less time and efforts on manual analysis of test failure reasons',
    image: features.feature10,
    link: '/features/#ai-based',
  },
  {
    title: 'Tracking of key metrics and KPI',
    description:
      "Thanks to widgets and dashboards you'll be able to take a helicopter view on the project or dig deeper into more detail to make decisions faster",
    image: features.feature6,
    link: '/features/#rich-artifacts-in-test-reports',
  },
];

export const BenefitsForBusiness = () => {
  return (
    <AnimatedList
      title="Benefits for business"
      subtitle="Features full of benefits from business perspective"
      data={benefitsForBusinessList}
    >
      <Link
        className="btn btn--primary btn--large temporary-hide"
        to="/contact-us/general"
        data-gtm="start_free_trial"
      >
        Start free trial
      </Link>
      <Link className="btn btn--outline btn--large" to="/contact-us/general" data-gtm="get_a_quote">
        Get a quote
      </Link>
    </AnimatedList>
  );
};
