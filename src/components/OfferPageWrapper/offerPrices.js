export const startNowLinks = {
  'on-premises': '/installation',
  d4j: 'https://drill4j.github.io/how-to-start/',
  hlm: 'https://github.com/healenium/healenium-web/blob/master/README.md',
  qasp: 'https://marketplace.atlassian.com/apps/1214038/qaspace-test-management?tab=overview&hosting=server',
};

export const getOfferPrices = page => [
  {
    value: 0,
    discountedValue: 0,
    hours: 0,
    href: startNowLinks[page],
  },
  {
    value: 3000,
    discountedValue: 2850,
    hours: 25,
    href: `/contact-us/${page}/package-25`,
  },
  {
    value: 6000,
    discountedValue: 5700,
    hours: 60,
    href: `/contact-us/${page}/package-60`,
  },
  {
    value: 13500,
    discountedValue: 12825,
    hours: 160,
    href: `/contact-us/${page}/package-160`,
  },
];
