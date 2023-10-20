interface BaseConfig {
  title: string
  options: {
    name: string
    value: string
  }[]
  info: string
}

const SALESFORCE_SOURCE_NAME = 'ReportPortalSource__c';
const LEAD_SOURCE = 'lead_source';
const packageNumbers = [25, 60, 160];

const startupPlanBaseConfig = {
  title: 'Startup Plan',
  options: [
    {
      name: LEAD_SOURCE,
      value: 'RP SaaS',
    },
  ],
  info: `<p>
          <div><strong>Price:</strong> $599/month</div>
          <div><strong>Billing period:</strong> Yearly</div>
        </p>
        <p>Contact us to get Startup Plan Details and its Free Trial.</p>`,
};

const businessPlanBaseConfig = {
  title: 'Business Plan',
  options: [
    {
      name: LEAD_SOURCE,
      value: 'RP SaaS',
    },
  ],
  info: `<p>
          <div><strong>Price:</strong> $2,799/month</div>
          <div><strong>Billing period:</strong> Yearly</div>
        </p>
        <p>Contact us to get Business Plan Details and ReportPortal Free Trial.</p>`,
};

const enterprisePlanBaseConfig = {
  title: 'Enterprise Plan',
  options: [
    {
      name: LEAD_SOURCE,
      value: 'RP SaaS',
    },
  ],
  info: `<p>Tailored offering integrated with SaaS Business plan and packages of Managed Services.</p>
        <p>Contact us to get Enterprise Plan Details and ReportPortal Free Trial.</p>`,
};

const package25BaseConfig = {
  title: 'Package 25',
  options: [
    {
      name: LEAD_SOURCE,
      value: 'RP Service',
    },
  ],
  info: `<p>Looking for more details about our Package 25?<br />Please fill out the form.</p>
        <p>
          <div><strong>Price:</strong> $2,850/month</div>
          <div><strong>Billing period:</strong> Yearly</div>
        </p>`,
};

const package60BaseConfig = {
  title: 'Package 60',
  options: [
    {
      name: LEAD_SOURCE,
      value: 'RP Service',
    },
  ],
  info: `<p>Looking for more details about our Package 60?<br />Please fill out the form.</p>
        <p>
          <div><strong>Price:</strong> $5,700/month</div>
          <div><strong>Billing period:</strong> Yearly</div>
        </p>`,
};

const package160BaseConfig = {
  title: 'Package 160',
  options: [
    {
      name: LEAD_SOURCE,
      value: 'RP Service',
    },
  ],
  info: `<p>Looking for more details about our Package 160?<br />Please fill out the form.</p>
        <p>
          <div><strong>Price:</strong> $12,825/month</div>
          <div><strong>Billing period:</strong> Yearly</div>
        </p>`,
};

const QaSpaceBaseConfig = {
  title: 'QaSpace',
  options: [
    {
      name: LEAD_SOURCE,
      value: 'RP QASP',
    },
  ],
  info: '<p>Looking for more details on our offerings?<br />Simply fill out the form</p>',
  isDiscussFieldShown: false,
};

const Drill4JBaseConfig = {
  title: 'Drill4J',
  options: [
    {
      name: LEAD_SOURCE,
      value: 'RP D4J',
    },
  ],
  info: '<p>Looking for more details on our offerings?<br />Simply fill out the form.</p>',
  isDiscussFieldShown: false,
};

const HealeniumBaseConfig = {
  title: 'Healenium',
  options: [
    {
      name: LEAD_SOURCE,
      value: 'RP HLM',
    },
  ],
  info: '<p>Looking for more details on our offerings?<br />Simply fill out the form.</p>',
  isDiscussFieldShown: false,
};

const createConfig = ({ baseConfig, source, ...rest }: { baseConfig: BaseConfig, url: string, source: string }) => ({
  ...baseConfig,
  options: baseConfig.options.concat({
    name: SALESFORCE_SOURCE_NAME,
    value: source,
  }),
  ...rest,
});

export const config = [
  createConfig({
    baseConfig: startupPlanBaseConfig,
    url: '/contact-us/saas/startup-plan/',
    source: 'Landing page / SaaS / Request "Startup Plan"',
  }),
  createConfig({
    baseConfig: startupPlanBaseConfig,
    url: '/contact-us/saas/compare/startup-plan/',
    source: 'Landing page / SaaS / Compare Plan / Request "Startup Plan"',
  }),
  createConfig({
    baseConfig: businessPlanBaseConfig,
    url: '/contact-us/saas/business-plan/',
    source: 'Landing page / SaaS / Request "Business Plan"',
  }),
  createConfig({
    baseConfig: businessPlanBaseConfig,
    url: '/contact-us/saas/compare/business-plan/',
    source: 'Landing page / SaaS / Compare Plan / Request "Business Plan"',
  }),
  createConfig({
    baseConfig: enterprisePlanBaseConfig,
    url: '/contact-us/saas/enterprise-plan/',
    source: 'Landing page / SaaS / Request "Enterprise Plan"',
  }),
  createConfig({
    baseConfig: enterprisePlanBaseConfig,
    url: '/contact-us/saas/compare/enterprise-plan/',
    source: 'Landing page / SaaS / Compare Plan / Request "Enterprise Plan"',
  }),
  createConfig({
    baseConfig: package25BaseConfig,
    url: '/contact-us/on-premises/package-25/',
    source: 'Landing page / On-Premises / Request Support "Package 25"',
  }),
  createConfig({
    baseConfig: package25BaseConfig,
    url: '/contact-us/on-premises/compare/package-25/',
    source: 'Landing page / On-Premises / Compare Plan / Request Support "Package 25"',
  }),
  createConfig({
    baseConfig: package60BaseConfig,
    url: '/contact-us/on-premises/package-60/',
    source: 'Landing page / On-Premises / Request Support "Package 60"',
  }),
  createConfig({
    baseConfig: package60BaseConfig,
    url: '/contact-us/on-premises/compare/package-60/',
    source: 'Landing page / On-Premises / Compare Plan / Request Support "Package 60"',
  }),
  createConfig({
    baseConfig: package160BaseConfig,
    url: '/contact-us/on-premises/package-160/',
    source: 'Landing page / On-Premises / Request Support "Package 160"',
  }),
  createConfig({
    baseConfig: package160BaseConfig,
    url: '/contact-us/on-premises/compare/package-160/',
    source: 'Landing page / On-Premises / Compare Plan / Request Support "Package 160"',
  }),
  createConfig({
    baseConfig: QaSpaceBaseConfig,
    url: '/contact-us/qasp',
    source: 'Landing page / RP QASP',
  }),
  ...packageNumbers.map(packageNumber =>
    createConfig({
      baseConfig: QaSpaceBaseConfig,
      url: `/contact-us/qasp/package-${packageNumber}/`,
      source: `Landing page / QASP / Request Support "Package ${packageNumber}"`,
    }),
  ),
  ...packageNumbers.map(packageNumber =>
    createConfig({
      baseConfig: QaSpaceBaseConfig,
      url: `/contact-us/qasp/compare/package-${packageNumber}/`,
      source: `Landing page / QASP / Compare Plan / Request Support "Package ${packageNumber}"`,
    }),
  ),
  createConfig({
    baseConfig: Drill4JBaseConfig,
    url: '/contact-us/d4j',
    source: 'Landing page / RP D4J',
  }),
  ...packageNumbers.map(packageNumber =>
    createConfig({
      baseConfig: Drill4JBaseConfig,
      url: `/contact-us/d4j/package-${packageNumber}/`,
      source: `Landing page / D4J / Request Support "Package ${packageNumber}"`,
    }),
  ),
  ...packageNumbers.map(packageNumber =>
    createConfig({
      baseConfig: Drill4JBaseConfig,
      url: `/contact-us/d4j/compare/package-${packageNumber}/`,
      source: `Landing page / D4J / Compare Plan / Request Support "Package ${packageNumber}"`,
    }),
  ),
  createConfig({
    baseConfig: HealeniumBaseConfig,
    url: '/contact-us/hlm',
    source: 'Landing page / RP HLM',
  }),
  ...packageNumbers.map(packageNumber =>
    createConfig({
      baseConfig: HealeniumBaseConfig,
      url: `/contact-us/hlm/package-${packageNumber}/`,
      source: `Landing page / HLM / Request Support "Package ${packageNumber}"`,
    }),
  ),
  ...packageNumbers.map(packageNumber =>
    createConfig({
      baseConfig: HealeniumBaseConfig,
      url: `/contact-us/hlm/compare/package-${packageNumber}/`,
      source: `Landing page / HLM / Compare Plan / Request Support "Package ${packageNumber}"`,
    }),
  ),
  {
    url: '/contact-us/taas/',
    title: 'Contact us',
    options: [
      {
        name: SALESFORCE_SOURCE_NAME,
        value: 'Landing page / RP TaaS',
      },
      {
        name: LEAD_SOURCE,
        value: 'RP TaaS',
      },
    ],
    info: '<p>Looking for quotes on Testing as a Service?<br />Simply fill out the form</p>',
    isDiscussFieldShown: false,
  },
  {
    url: '/contact-us/taaas/',
    title: 'Contact us',
    options: [
      {
        name: SALESFORCE_SOURCE_NAME,
        value: 'Landing page / RP TAaaS',
      },
      {
        name: LEAD_SOURCE,
        value: 'RP TAaaS',
      },
    ],
    info: '<p>Looking for quotes on Test Automation as a Service?<br />Simply fill out the form.</p>',
    isDiscussFieldShown: false,
  },
  {
    url: '/contact-us/qaaas/',
    title: 'Contact us',
    options: [
      {
        name: SALESFORCE_SOURCE_NAME,
        value: 'Landing page / RP QAaaS',
      },
      {
        name: LEAD_SOURCE,
        value: 'RP QAaaS',
      },
    ],
    info: '<p>Looking for quotes on Quality Assessment Services?<br />Simply fill out the form.</p>',
    isDiscussFieldShown: false,
  },
  {
    url: '/contact-us/general/',
    title: 'Contact us',
    options: [
      { name: 'ReportPortalSource__c', value: 'Landing page / General' },
      { name: 'lead_source', value: 'RP General' },
    ],
    info: `<p>Got questions or need information about ReportPortal?</p>
        <ul>
          <li><strong>Inquiries:</strong> Feel free to ask.</li>
          <li><strong>Quotes:</strong> Request pricing details.</li>
          <li><strong>Free Trial:</strong> Get ReportPortal trial.</li>
        </ul>`,
    isDiscussFieldShown: false,
  },
];
