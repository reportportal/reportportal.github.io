import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { Link } from '../Link';
import { SectionList } from './SectionList';
import OnPremiseIcon from './icons/on-premise.inline.svg';
import SaaSIcon from './icons/saas.inline.svg';
import TaaSIcon from './icons/taas.inline.svg';
import TAaaSIcon from './icons/taaas.inline.svg';
import QualityAssessmentIcon from './icons/quality-assessment.inline.svg';
import FreeVersionIcon from './icons/free-version.inline.svg';

import './Menu.scss';

export const OfferingsMenu = ({ isDesktop = true }) => {
  const getBlocksWith = createBemBlockBuilder(['menu-dialog', 'menu-dialog-offerings']);
  const pricingConfig = [
    {
      icon: <SaaSIcon />,
      title: 'SaaS',
      text: 'We host and support an instance for your organization',
      link: '/pricing/saas',
    },
    {
      icon: <OnPremiseIcon />,
      title: 'On-Premises',
      text: 'Self-hosted instance with support from our team',
      link: '/pricing/on-premises',
    },
    {
      icon: <FreeVersionIcon />,
      title: 'Free version',
      text: 'Install and use ReportPortal for free via self-hosted deployment',
      link: '/install',
    },
  ];

  const pricingList = (
    <SectionList className="pricing-list" title="ReportPortal Pricing" items={pricingConfig} />
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
          link: '/accelerators/d4j',
        },
        {
          iconClass: 'healenium',
          title: 'Healenium',
          link: '/accelerators/hlm',
        },
        {
          iconClass: 'qa-space',
          title: 'QaSpace',
          link: '/accelerators/qasp',
        },
      ]}
    />
  );

  const footer = (
    <div className={cx(getBlocksWith('__footer'), 'temporary-hide')}>
      <div className={getBlocksWith('__footer-container')}>
        <div className={getBlocksWith('__btn-group')}>
          <Link
            className="btn btn--outline"
            to="/contact-us/general"
            data-gtm="get_a_quote_offerings"
          >
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
