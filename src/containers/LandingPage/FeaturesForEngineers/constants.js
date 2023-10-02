import { features } from '@utils/imageSource';

export const FEATURES_FOR_ENGINEERS_LIST = [
  {
    title: 'Single-entry point & unified test reporting',
    description:
      'Achieve full automation visibility in real time by centralising and aggregating all logs, reports and testing artifacts for indisputable evidence',
    image: features.feature1,
    link: '/features/#single-entry',
  },
  {
    title: 'AI-based failure reason detection',
    description:
      'Categorize failures automatically with the help of AI to associate each failed test with a known product bug, automation issue, system issue or other custom defect',
    image: features.feature3,
    link: '/features/#ai-based',
  },
  {
    title: 'Real-time reporting',
    description: 'Save time on early reaction by immediate availability of executed test cases',
    image: features.feature5,
    link: '/features/#real-time-reporting',
  },
  {
    title: 'Widgets and Dashboards',
    description: 'Build custom dashboards and widgets to learn from the past and predict trends',
    image: features.feature6,
    link: '/features/#visualisation-of-tests',
  },
  {
    title: 'Quality Gates',
    description:
      'Automate decisions on top of test automation results and set up a feedback loop into your CI/CD toolchain',
    image: features.feature8,
    link: '/features/#quality-gates',
  },
];
