import feature6 from '@app/svg/featuresListItem6.svg';
import feature8 from '@app/svg/featuresListItem8.svg';
import feature12 from '@app/svg/featuresListItem12.svg';
import feature10 from '@app/svg/featuresListItem10.svg';
import feature11 from '@app/svg/featuresListItem11.svg';

export const BENEFITS_FOR_BUSINESS_LIST = [
  {
    title: 'Automated decision-making',
    description:
      'Check up your product health and make release decisions automatically with Quality Gates',
    image: feature8,
    link: '/features/#quality-gates',
  },
  {
    title: 'Transparency of test failures reason',
    description: 'Detect the root causes of failures and categorize the failures faster',
    image: feature11,
    link: '/features/#categorisation',
  },
  {
    title: 'Time saving for teams',
    description:
      'AI-based failures triaging will help you to spend less time and efforts on manual analysis of test failure reasons',
    image: feature10,
    link: '/features/#ai-based',
  },
  {
    title: 'Tracking of key metrics and KPI',
    description:
      "Thanks to widgets and dashboards you'll be able to take a helicopter view on the project or dig deeper into more detail to make decisions faster",
    image: feature6,
    link: '/features/#visualisation-of-tests',
  },
  {
    title: 'Certified security',
    description:
      'ReportPortal provides robust data protection, backed by SOC2 Type II certification, ensuring compliance with the top-tier data security and privacy standards',
    image: feature12,
    link: 'https://reportportal.io/blog/reportportal-completes-soc-2-type-ii-audit',
  },
];
