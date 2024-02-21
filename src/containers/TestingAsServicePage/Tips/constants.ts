const MANUAL_TESTING_LIST = [
  { info: 'Test case authoring & execution' },
  { info: 'Regression test support' },
  { info: 'E2E Testing' },
  { info: 'API Testing' },
];

const AUTOMATION_LIST = [
  { info: 'API/UI Scripting' },
  { info: 'Custom Frameworks' },
  { info: 'CI/CD setup or improvements' },
  { info: 'Reporting improvements' },
  { info: 'Framework assessments' },
];

const SPECIALIZED_LIST = [
  { info: 'Load & Performance testing' },
  { info: 'Localization testing' },
  { info: 'Accessibility' },
  { info: 'Security (coming soon)' },
];

const EXPLORATORY_LIST = [
  {
    info: 'Fixed scope of 65 manual Professional Service Points of crowdsourced testing done by a team of 25-50 testers in for 24 to 48 hours)',
  },
];

export const TIPS_LIST = [
  {
    title: 'Manual testing',
    hasSeparator: true,
    list: MANUAL_TESTING_LIST,
  },
  {
    title: 'Automation',
    hasSeparator: true,
    list: AUTOMATION_LIST,
  },
  {
    title: 'Specialized',
    hasSeparator: true,
    list: SPECIALIZED_LIST,
  },
  {
    title: 'Exploratory',
    list: EXPLORATORY_LIST,
  },
];
