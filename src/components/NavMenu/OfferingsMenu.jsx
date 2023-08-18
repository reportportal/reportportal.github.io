import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { Link } from '../Link';
import { SectionList } from './SectionList';
import { OnPremiseIcon, SaaSIcon, TaaSIcon, TAaaSIcon, QualityAssessmentIcon } from './icons';

import './Menu.scss';

export const OfferingsMenu = ({ isDesktop = true }) => {
  const getBlocksWith = createBemBlockBuilder(['menu-dialog', 'menu-dialog-offerings']);
  const pricingListInfo = (
    <span>
      <a href="#">Install</a> and use ReportPortal absolutely for free. If you need support or
      additional service, explore our paid offerings.
    </span>
  );

  let pricingConfig = [
    {
      icon: <SaaSIcon />,
      title: 'SaaS',
      text: 'Our team hosts application instance for your organization',
      link: '/pricing/saas',
    },
    {
      icon: <OnPremiseIcon />,
      title: 'On-premises',
      text: "ReportPortal instance resides within your organisation's premises",
      link: '/pricing/on-premises',
    },
  ];

  if (isDesktop) {
    pricingConfig = [
      {
        type: 'info',
        text: pricingListInfo,
      },
    ].concat(pricingConfig);
  }

  const pricingList = (
    <SectionList className="pricing-list" title="Pricing" items={pricingConfig} />
  );

  const servicesList = (
    <SectionList
      className="services-list"
      title="Services"
      items={[
        {
          icon: <TaaSIcon />,
          title: 'Testing as a Service',
          text: 'On-demand testing resources to optimize your testing costs',
          link: '/testing-as-a-service',
        },
        {
          icon: <TAaaSIcon />,
          title: 'Test Automation as a Service',
          text: 'On-demand end-to-end Test Automation services',
          link: '/test-automation-as-a-service',
        },
        {
          icon: <QualityAssessmentIcon />,
          title: 'Quality Assessment',
          text: 'Consulting to bring up Quality Engineering Transformation',
          link: '/quality-assessment',
        },
      ]}
    />
  );

  const pricingForSolutionsList = (
    <SectionList
      className={cx('pricing-solutions-list', { 'section-list--secondary': isDesktop })}
      title="Pricing for Solutions"
      items={[
        {
          iconClass: 'drill4j',
          title: 'Drill4J',
          link: 'https://drill4j.github.io/',
        },
        {
          iconClass: 'healenium',
          title: 'Healenium',
          link: 'https://healenium.io/',
        },
        {
          iconClass: 'qa-space',
          title: 'QaSpace',
          link: 'https://marketplace.atlassian.com/apps/1214038/qaspace-test-management?tab=overview&hosting=server',
        },
      ]}
    />
  );

  const footer = (
    <div className={getBlocksWith('__footer')}>
      <div className={getBlocksWith('__footer-container')}>
        <div className={getBlocksWith('__btn-group')}>
          <Link className="btn btn--outline" to="/contact-us/general">
            Get a quote
          </Link>
        </div>
      </div>
    </div>
  );

  if (!isDesktop) {
    return (
      <div className={getBlocksWith()}>
        {pricingList}
        {servicesList}
        {pricingForSolutionsList}
      </div>
    );
  }

  return (
    <div className={getBlocksWith()}>
      <div>
        <div className={getBlocksWith('__body')}>
          <div className={getBlocksWith('__body-row')}>
            <div className={cx(getBlocksWith('__body-col--lf'), 'row')}>
              {pricingList}
              {servicesList}
            </div>
            <div
              className={cx(
                getBlocksWith('__body-col--rt'),
                getBlocksWith('__body-col--flex-column'),
              )}
            >
              {pricingForSolutionsList}
            </div>
          </div>
        </div>
        {footer}
      </div>
    </div>
  );
};
