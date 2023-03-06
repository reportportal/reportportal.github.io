import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { SectionList } from './SectionList';
import { PlayIcon } from './icons/PlayIcon';
import { InstallIcon } from './icons/InstallIcon';
import { ReleaseIcon } from './icons/ReleaseIcon';
import { DefectTypeIcon } from './icons/DefectTypeIcon';
import { AiIcon } from './icons/AiIcon';
import { RtAnalyticsIcon } from './icons/RtAnalyticsIcon';
import { QualityGatesIcon } from './icons/QualityGatesIcon';
import { PieChartIcon } from './icons/PieChartIcon';
import { ReportingIcon } from './icons/ReportingIcon';
import { ArrowIcon } from './ArrowIcon';

import './Menu.scss';

export const ProductMenu = ({ isDesktop = true }) => {
  const getBlocksWith = createBemBlockBuilder(['menu-dialog', 'menu-dialog-product']);

  const generalList = (
    <SectionList
      className="general-list"
      title="General"
      itemsPerRow={isDesktop ? 1 : 2}
      items={[
        {
          icon: <InstallIcon />,
          title: 'Installation',
        },
        {
          icon: <ReleaseIcon />,
          title: 'Releases',
        },
      ]}
    />
  );

  const featuresList = (
    <SectionList
      className="features-list"
      title="Features"
      itemsPerRow={isDesktop ? 3 : 6}
      items={[
        {
          icon: <ReportingIcon />,
          title: 'Unified test reporting',
          text: 'Get persistent test reporting in a single entry point',
        },
        {
          icon: <DefectTypeIcon />,
          title: 'Categorisation of failures',
          text: 'Triage test failures by categorisation of root cause',
        },
        {
          icon: <AiIcon />,
          title: 'AI failure reason detection',
          text: 'Reduce your manual efforts for failure triaging with Auto-Analyzer',
        },
        {
          icon: <RtAnalyticsIcon />,
          title: 'Real-time analytics',
          text: 'Save time on early reaction by immediate results availability',
        },
        {
          icon: <PieChartIcon />,
          title: 'Widgets and dashboards',
          text: 'Get visibility in QA results and a birds-eye view on the project',
        },
        {
          icon: <QualityGatesIcon />,
          title: 'Quality gates',
          text: 'Automate release decisions with Quality Gates rules',
        },
      ]}
    />
  );

  const integrationsList = (
    <SectionList
      className={cx('section-list--secondary', 'integrations-list')}
      title="Integrations"
      items={[
        {
          iconClass: 'jira-cloud',
          title: 'Jira Server',
          link: 'https://reportportal.io/docs/plugins/JiraServer',
        },
        {
          iconClass: 'jira-server',
          title: 'Jira Cloud',
          link: 'https://reportportal.io/docs/plugins/JiraCloud',
        },
        {
          iconClass: 'azure-do',
          title: 'Azure DevOps',
          link: 'https://reportportal.io/docs/plugins/AzureDevOpsBTS/',
        },
        {
          iconClass: 'rally',
          title: 'Rally',
          link: 'https://reportportal.io/docs/plugins/Rally/',
        },
        {
          iconClass: 'sauce-labs',
          title: 'Sauce Labs',
          link: 'https://reportportal.io/docs/plugins/SauceLabs/',
        },
        {
          iconClass: 'ldap',
          title: 'LDAP',
          link: 'https://reportportal.io/docs/reportportal-configuration/authorization/LDAP/',
        },
        {
          iconClass: 'saml',
          title: 'SAML',
          link: 'https://reportportal.io/docs/reportportal-configuration/authorization/SAMLProvider/',
        },
      ]}
    />
  );

  const footer = (
    <div className={getBlocksWith('__footer')}>
      <div className={getBlocksWith('__footer-container')}>
        <div className={getBlocksWith('__btn-group')}>
          <button type="button" className={cx('btn', 'btn--primary')}>
            Try free trial
          </button>
          <button type="button" className={cx('btn', 'btn--outline')}>
            Get a quote
          </button>
        </div>
        <button type="button" className={getBlocksWith('__btn-text')}>
          <PlayIcon />
          Watch product overview
        </button>
      </div>
    </div>
  );

  if (!isDesktop) {
    return (
      <div className={getBlocksWith()}>
        {generalList}
        {featuresList}
        <button className={cx(getBlocksWith('__body-link'))}>
          See all features
          <ArrowIcon />
        </button>
      </div>
    );
  }

  return (
    <div className={getBlocksWith()}>
      <div className={getBlocksWith('__body-row')}>
        <div className={getBlocksWith('__body-col--lf')}>
          {generalList}
          {featuresList}
          <div>
            <button className={cx(getBlocksWith('__body-link'))}>
              See all features
              <ArrowIcon />
            </button>
          </div>
        </div>
        <div
          className={cx(getBlocksWith('__body-col--rt'), getBlocksWith('__body-col--flex-column'))}
        >
          {integrationsList}
          <div>
            <button className={getBlocksWith('__body-link')}>
              See all integrations
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
      {footer}
    </div>
  );
};
