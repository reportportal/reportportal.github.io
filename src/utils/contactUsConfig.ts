import { Discount, PricingConfigDto } from './types';
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

const SALESFORCE_SOURCE_NAME = 'ReportPortalSource';
const LEAD_SOURCE = 'lead_source';
const packageNumbers = [25, 60, 160];
const yearlyOption = { isYearly: true };
const quarterlyOption = { isYearly: false };
const availableOptions = [quarterlyOption, yearlyOption];

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
  url: typeof isYearly === 'undefined' ? url : `${url}/${isYearly ? 'yearly' : 'quarterly'}`,
  ...rest,
});

export const createContactUsConfig = (pricingConfig: PricingConfigDto) => {
  const createPriceInfo = ({
    isYearly,
    yearly,
    quarterly,
  }: AvailableOption & Record<Discount, number>) => {
    return `<p>
      <span><strong>Price:</strong> ${pricingConfig.currency}${formatNumberWithCommas(
      isYearly ? yearly : quarterly,
    )}/${pricingConfig.period}</span>
      <span><strong>Billing period:</strong> ${isYearly ? 'Yearly' : 'Quarterly'}</span>
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
    info: `${createPriceInfo({ isYearly, ...pricingConfig.saas.startup })}
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
    info: `${createPriceInfo({ isYearly, ...pricingConfig.saas.business })}
        <p>Contact us to get Business Plan Details and ReportPortal Free Trial.</p>`,
  });

  const createEnterprisePlanBaseConfig = () => ({
    title: 'Enterprise Plan',
    options: [
      {
        name: LEAD_SOURCE,
        value: 'RP SaaS',
      },
    ],
    info: `<p>Tailored offering integrated with SaaS Business plan and packages of Managed Services.</p>
        <p>Contact us to get Enterprise Plan Details and ReportPortal Free Trial.</p>`,
  });

  const createPackage25BaseConfig = ({ isYearly }: AvailableOption) => ({
    title: 'Package 25',
    options: [
      {
        name: LEAD_SOURCE,
        value: 'RP Service',
      },
    ],
    info: `<p>Looking for more details about our Package 25?<br />Please fill out the form.</p>
    ${createPriceInfo({ isYearly, ...pricingConfig.onPremises.package25 })}`,
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
        ${createPriceInfo({ isYearly, ...pricingConfig.onPremises.package60 })}`,
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
        ${createPriceInfo({ isYearly, ...pricingConfig.onPremises.package160 })}`,
  });

  const createContactUsConfig = ({ salesforceSourceName, leadSource, url }) => ({
    url,
    title: 'Contact us',
    options: [
      {
        name: SALESFORCE_SOURCE_NAME,
        value: `Landing page / ${salesforceSourceName}`,
      },
      {
        name: LEAD_SOURCE,
        value: leadSource,
      },
    ],
    info: `<p>Got questions or need information about ReportPortal?</p>
        <ul>
          <li><strong>Quotes:</strong> Request pricing details.</li>
          <li><strong>Free Trial:</strong> Sign up for a 30-day free trial of ReportPortal.</li>
          <li><strong>Sponsorship:</strong> Become a Sponsor or inquire about sponsorship tiers.</li>
        </ul>`,
    isDiscussFieldShown: false,
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

  return [
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
      createConfig({
        baseConfig: createEnterprisePlanBaseConfig(),
        url: '/contact-us/saas/enterprise-plan',
        source: 'Landing page / SaaS / Request "Enterprise Plan"',
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
      baseConfig: createEnterprisePlanBaseConfig(),
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
      url: '/contact-us/qe-consulting',
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
      info: '<p>Looking for quotes on Quality Engineering Consulting Services?<br />Simply fill out the form.</p>',
      isDiscussFieldShown: false,
    },
    createContactUsConfig({
      salesforceSourceName: 'General',
      leadSource: 'RP General',
      url: '/contact-us/general',
    }),
    createContactUsConfig({
      salesforceSourceName: 'RP Community',
      leadSource: 'RP Community',
      url: '/contact-us/community',
    }),
    createContactUsConfig({
      salesforceSourceName: 'Sponsorship Program / Individual',
      leadSource: 'RP Sponsorship Program',
      url: '/contact-us/sponsorship-program/individual',
    }),
    createContactUsConfig({
      salesforceSourceName: 'Sponsorship Program / Business',
      leadSource: 'RP Sponsorship Program',
      url: '/contact-us/sponsorship-program/business',
    }),
    createContactUsConfig({
      salesforceSourceName: 'Sponsorship Program / Business / Diamond',
      leadSource: 'RP Sponsorship Program',
      url: '/contact-us/sponsorship-program/business/diamond/yearly',
    }),
  ];
};
