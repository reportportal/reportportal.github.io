import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { SectionList } from './SectionList';
import { OnPremiseIcon } from './icons/OnPremiseIcon';
import { SaaSIcon } from './icons/SaaSIcon';
import { TaaSIcon } from './icons/TaaSIcon';
import { TAaaSIcon } from './icons/TAaaSIcon';
import { QualityAssessmentIcon } from './icons/QualityAssessmentIcon';

import './Menu.scss';

export const OfferingsMenu = () => {
  const getBlocksWith = createBemBlockBuilder(['menu-dialog']);
  const pricingListInfo = (
    <span>
      <a href="#">Install</a> and use ReportPortal absolutely for free. If you need support or
      additional service, explore our paid offerings.
    </span>
  );

  const pricingList = (
    <SectionList
      className="pricing-list"
      title="Pricing"
      items={[
        {
          type: 'info',
          text: pricingListInfo,
        },
        {
          icon: <SaaSIcon />,
          title: 'SaaS',
          text: 'Our team hosts application instance for your organization',
        },
        {
          icon: <OnPremiseIcon />,
          title: 'On-premises',
          text: "ReportPortal instance resides within your organisation's premises",
        },
      ]}
    />
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
        },
        {
          icon: <TAaaSIcon />,
          title: 'Test Automation as a Service',
          text: 'On-demand end-to-end Test Automation services',
        },
        {
          icon: <QualityAssessmentIcon />,
          title: 'Quality Assessment',
          text: 'Consulting to bring up Quality Engineering Transformation',
        },
      ]}
    />
  );

  const pricingForSolutionsList = (
    <SectionList
      className={cx('section-list--secondary', 'pricing-solutions-list')}
      title="Pricing for Solutions"
      items={[
        {
          iconClass: 'drill4j',
          title: 'Drill4J',
        },
        {
          iconClass: 'healenium',
          title: 'Healenium',
        },
        {
          iconClass: 'qa-space',
          title: 'QaSpace',
        },
      ]}
    />
  );

  const footer = (
    <div className={getBlocksWith('__footer')}>
      <div className={getBlocksWith('__footer-container')}>
        <div className={getBlocksWith('__btn-group')}>
          <button
            type="button"
            className={cx(getBlocksWith('__btn-action'), getBlocksWith('__btn-action--outline'))}
          >
            Get a quote
          </button>
        </div>
      </div>
    </div>
  );

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
