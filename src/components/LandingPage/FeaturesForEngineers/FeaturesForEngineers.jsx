import React from 'react';

import { AnimatedList } from '../../AnimatedList';
import { features } from '../../../utils/imageSource';
import { Link } from '../../Link';

const featuresForEngineersList = [
  {
    title: 'Single-entry point & unified test reporting',
    description:
      'Achieve full automation visibility in real time by centralising and aggregating all logs, reports and testing artifacts for indisputable evidence',
    image: features.feature1,
  },
  {
    title: 'AI-based failure reason detection',
    description:
      'Categorize failures automatically with the help of AI to associate each failed test with a known product bug, automation issue, system issue or other custom defect',
    image: features.feature3,
  },
  {
    title: 'Real-time reporting',
    description: 'Save time on early reaction by immediate availability of executed test cases',
    image: features.feature5,
  },
  {
    title: 'Widgets and Dashboards',
    description: 'Build custom dashboards and widgets to learn from the past and predict trends',
    image: features.feature6,
  },
  {
    title: 'Quality Gates',
    description:
      'Automate decisions on top of test automation results and set up a feedback loop into your CI/CD toolchain',
    image: features.feature8,
  },
];

export const FeaturesForEngineers = () => {
  return (
    <AnimatedList
      title="Features for engineers"
      subtitle="Reducing team efforts. Bringing more value"
      listDesktopPosition="right"
      data={featuresForEngineersList}
    >
      <Link className="btn btn--primary btn--large" to="/features">
        Expand All Features
      </Link>
    </AnimatedList>
  );
};
