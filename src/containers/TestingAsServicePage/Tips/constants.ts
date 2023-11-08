const MANUAL_TESTING_LIST = [
  { info: 'Test case authoring and execution' },
  { info: 'Accessibility testing (Premium solution)' },
  { info: 'UX testing' },
];

const AUTOMATION_LIST = [{ info: 'API' }, { info: 'UI' }, { info: 'Any open-source framework' }];

const SPECIALIZED_LIST = [
  { info: 'Load & Performance testing' },
  { info: 'Load + Crowd (Black Friday Burst)' },
  { info: 'Security (coming soon)' },
];

const EXPLORATORY_LIST = [
  {
    info: 'Fixed scope of 65 manual professional service hours of crowdsourced testing done by a team of 25-50 testers in for 24 to 48 hours)',
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
