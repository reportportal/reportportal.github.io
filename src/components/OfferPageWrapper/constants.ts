export const START_NOW_LINKS = {
  'on-premises': '/installation',
  d4j: 'https://drill4j.github.io/how-to-start/',
  hlm: 'https://github.com/healenium/healenium-web/blob/master/README.md',
  qasp: 'https://marketplace.atlassian.com/apps/1214038/qaspace-test-management?tab=overview&hosting=server',
};

export const COLUMNS = {
  openSource: 'Open source',
  package25: 'Package 25',
  package60: 'Package 60',
  package160: 'Package 160',
};

export const MOBILE_COLUMNS = {
  [COLUMNS.openSource]: 'Open\nsource',
  [COLUMNS.package25]: 'Pack.\n25',
  [COLUMNS.package60]: 'Pack.\n60',
  [COLUMNS.package160]: 'Pack.\n160',
};

export const OFFER_HOURS = [0, 25, 60, 160] as const;
