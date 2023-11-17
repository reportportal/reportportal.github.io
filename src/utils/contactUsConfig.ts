import { SAAS_OFFERS_DATA, ON_PREMISES_OFFER_PRICES } from './constants';
import { formatNumberWithCommas } from './formatNumberWithCommas';

interface BaseConfig {
  title: string;
  options: {
    name: string;
    value: string;
  }[];
  info: string;
}

type AvailableOption = { isYearly: boolean };

const SALESFORCE_SOURCE_NAME = 'ReportPortalSource__c';
const LEAD_SOURCE = 'lead_source';
const packageNumbers = [25, 60, 160];
const yearlyOption = { isYearly: true };
const quarterlyOption = { isYearly: false };
const availableOptions = [quarterlyOption, yearlyOption];

const createPriceInfoSaaS = ({
  isYearly,
  pricingSource,
}: AvailableOption & {
  pricingSource: { value: number; discountedValueQuarterly: number; discountedValueYearly: number };
}) => {
  return `<p>
      <div><strong>Price: <span>$${formatNumberWithCommas(
        pricingSource.value,
      )}</span> $${formatNumberWithCommas(
    isYearly ? pricingSource.discountedValueYearly : pricingSource.discountedValueQuarterly,
  )}/month</strong></div>
      <div><strong>Billing period:</strong> ${isYearly ? 'Yearly' : 'Quarterly'}</div>
    </p>`;
};

const createPriceInfo = ({
  isYearly,
  pricingSource,
}: AvailableOption & { pricingSource: { value: number; discountedValue: number } }) => {
  return `<p>
      <div><strong>Price:</strong> $${formatNumberWithCommas(
        isYearly ? pricingSource.discountedValue : pricingSource.value,
      )}/month</div>
      <div><strong>Billing period:</strong> ${isYearly ? 'Yearly' : 'Quarterly'}</div>
    </p>`;
};

const createStartupPlanBaseConfig = ({ isYearly }: AvailableOption) => ({
  title: 'Startup Plan',
  options: [
    {
      name: LEAD_SOURCE,
      value: 'RP SaaS',
    },
  ],
  info: `${createPriceInfoSaaS({ isYearly, pricingSource: SAAS_OFFERS_DATA[0].price })}
        <p>Contact us to get Startup Plan Details and its Free Trial.</p>`,
});

const createBusinessPlanBaseConfig = ({ isYearly }: AvailableOption) => ({
  title: 'Business Plan',
  options: [
    {
      name: LEAD_SOURCE,
      value: 'RP SaaS',
    },
  ],
  info: `${createPriceInfoSaaS({ isYearly, pricingSource: SAAS_OFFERS_DATA[1].price })}
        <p>Contact us to get Business Plan Details and ReportPortal Free Trial.</p>`,
});

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

const createPackage25BaseConfig = ({ isYearly }: AvailableOption) => ({
  title: 'Package 25',
  options: [
    {
      name: LEAD_SOURCE,
      value: 'RP Service',
    },
  ],
  info: `<p>Looking for more details about our Package 25?<br />Please fill out the form.</p>
    ${createPriceInfo({ isYearly, pricingSource: ON_PREMISES_OFFER_PRICES[1] })}`,
});

const createPackage60BaseConfig = ({ isYearly }: AvailableOption) => ({
  title: 'Package 60',
  options: [
    {
      name: LEAD_SOURCE,
      value: 'RP Service',
    },
  ],
  info: `<p>Looking for more details about our Package 60?<br />Please fill out the form.</p>
        ${createPriceInfo({ isYearly, pricingSource: ON_PREMISES_OFFER_PRICES[2] })}`,
});

const createPackage160BaseConfig = ({ isYearly }: AvailableOption) => ({
  title: 'Package 160',
  options: [
    {
      name: LEAD_SOURCE,
      value: 'RP Service',
    },
  ],
  info: `<p>Looking for more details about our Package 160?<br />Please fill out the form.</p>
        ${createPriceInfo({ isYearly, pricingSource: ON_PREMISES_OFFER_PRICES[3] })}`,
});

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

const createConfig = ({
  baseConfig,
  source,
  url,
  isYearly,
  ...rest
}: {
  baseConfig: BaseConfig;
  url: string;
  source: string;
  isYearly?: boolean;
}) => ({
  ...baseConfig,
  options: baseConfig.options.concat({
    name: SALESFORCE_SOURCE_NAME,
    value: source,
  }),
  // eslint-disable-next-line no-nested-ternary
  url: typeof isYearly === 'undefined' ? url : isYearly ? `${url}/yearly` : `${url}/quarterly`,
  ...rest,
});

export const contactUsConfig = [
  ...availableOptions.flatMap(option => [
    createConfig({
      baseConfig: createStartupPlanBaseConfig(option),
      url: '/contact-us/saas/startup-plan',
      source: 'Landing page / SaaS / Request "Startup Plan"',
      ...option,
    }),
    createConfig({
      baseConfig: createBusinessPlanBaseConfig(option),
      url: '/contact-us/saas/business-plan',
      source: 'Landing page / SaaS / Request "Business Plan"',
      ...option,
    }),
    createConfig({
      baseConfig: createPackage25BaseConfig(option),
      url: '/contact-us/on-premises/package-25',
      source: 'Landing page / On-Premises / Request Support "Package 25"',
      ...option,
    }),
    createConfig({
      baseConfig: createPackage60BaseConfig(option),
      url: '/contact-us/on-premises/package-60',
      source: 'Landing page / On-Premises / Request Support "Package 60"',
      ...option,
    }),
    createConfig({
      baseConfig: createPackage160BaseConfig(option),
      url: '/contact-us/on-premises/package-160',
      source: 'Landing page / On-Premises / Request Support "Package 160"',
      ...option,
    }),
  ]),
  createConfig({
    baseConfig: createStartupPlanBaseConfig(yearlyOption),
    url: '/contact-us/saas/compare/startup-plan',
    source: 'Landing page / SaaS / Compare Plan / Request "Startup Plan"',
  }),
  createConfig({
    baseConfig: createBusinessPlanBaseConfig(yearlyOption),
    url: '/contact-us/saas/compare/business-plan',
    source: 'Landing page / SaaS / Compare Plan / Request "Business Plan"',
  }),
  createConfig({
    baseConfig: enterprisePlanBaseConfig,
    url: '/contact-us/saas/enterprise-plan',
    source: 'Landing page / SaaS / Request "Enterprise Plan"',
  }),
  createConfig({
    baseConfig: enterprisePlanBaseConfig,
    url: '/contact-us/saas/compare/enterprise-plan',
    source: 'Landing page / SaaS / Compare Plan / Request "Enterprise Plan"',
  }),
  createConfig({
    baseConfig: createPackage25BaseConfig(yearlyOption),
    url: '/contact-us/on-premises/compare/package-25',
    source: 'Landing page / On-Premises / Compare Plan / Request Support "Package 25"',
  }),
  createConfig({
    baseConfig: createPackage60BaseConfig(yearlyOption),
    url: '/contact-us/on-premises/compare/package-60',
    source: 'Landing page / On-Premises / Compare Plan / Request Support "Package 60"',
  }),
  createConfig({
    baseConfig: createPackage160BaseConfig(yearlyOption),
    url: '/contact-us/on-premises/compare/package-160',
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
      url: `/contact-us/qasp/package-${packageNumber}`,
      source: `Landing page / QASP / Request Support "Package ${packageNumber}"`,
    }),
  ),
  ...packageNumbers.map(packageNumber =>
    createConfig({
      baseConfig: QaSpaceBaseConfig,
      url: `/contact-us/qasp/compare/package-${packageNumber}`,
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
      url: `/contact-us/d4j/package-${packageNumber}`,
      source: `Landing page / D4J / Request Support "Package ${packageNumber}"`,
    }),
  ),
  ...packageNumbers.map(packageNumber =>
    createConfig({
      baseConfig: Drill4JBaseConfig,
      url: `/contact-us/d4j/compare/package-${packageNumber}`,
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
      url: `/contact-us/hlm/package-${packageNumber}`,
      source: `Landing page / HLM / Request Support "Package ${packageNumber}"`,
    }),
  ),
  ...packageNumbers.map(packageNumber =>
    createConfig({
      baseConfig: HealeniumBaseConfig,
      url: `/contact-us/hlm/compare/package-${packageNumber}`,
      source: `Landing page / HLM / Compare Plan / Request Support "Package ${packageNumber}"`,
    }),
  ),
  {
    url: '/contact-us/taas',
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
    url: '/contact-us/taaas',
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
    url: '/contact-us/qaaas',
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
    url: '/contact-us/general',
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
