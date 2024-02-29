import improveCoreSvg from './icons/improve-core.svg';
import boostAgentsSvg from './icons/boost-agents.svg';
import enhanceIntegrationsSvg from './icons/enhance-integrations.svg';
import installationGuideSvg from './icons/installation-guide.svg';
import developerGuideSvg from './icons/developer-guide.svg';
import releaseNotesSvg from './icons/release-notes.svg';

export const GITHUB_CONTRIBUTION_CARDS = [
  {
    itemTitle: 'Improve the core',
    description:
      'Enhance the ReportPortal application directly. Share your skills to make the platform better.',
    link: 'https://github.com/reportportal/reportportal/wiki/Contribution',
    linkText: 'Fork us on GitHub',
    icon: improveCoreSvg,
  },
  {
    itemTitle: 'Boost agents',
    description:
      'Make testing smoother by improving agents. Help us maintain compatibility and add features.',
    link: 'https://github.com/reportportal/reportportal/wiki/Contribution',
    linkText: 'Fork us on GitHub',
    icon: boostAgentsSvg,
  },
  {
    itemTitle: 'Enhance integrations',
    description:
      'Streamline workflows by enhancing integrations. Contribute to connect ReportPortal with other tools.',
    link: 'https://github.com/reportportal/reportportal/wiki/Contribution',
    linkText: 'Fork us on GitHub',
    icon: enhanceIntegrationsSvg,
  },
];

export const DOCUMENTATION_CARDS = [
  {
    itemTitle: 'Installation guides',
    description:
      'Your roadmap to successfully setting up ReportPortal. Learn how to install, configure, and optimize our platform for your specific needs.',
    link: 'https://reportportal.io/docs/category/installation-steps',
    linkText: 'Open in Documentation',
    icon: installationGuideSvg,
  },
  {
    itemTitle: 'Developer’s guide',
    description:
      "In-depth documentation tailored to developers, offering insights into ReportPortal's architecture, APIs, and customization options to maximize its potential.",
    link: 'https://reportportal.io/docs/category/developers-guides',
    linkText: 'Open in Documentation',
    icon: developerGuideSvg,
  },
  {
    itemTitle: 'Release notes',
    description:
      'Stay informed about the latest updates with our detailed release notes. Discover the newest features and improvements in each ReportPortal version.',
    link: 'https://reportportal.io/docs/category/releases',
    linkText: 'Open in Documentation',
    icon: releaseNotesSvg,
  },
];
