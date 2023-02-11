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

export const ProductMenu = () => {
  const getBlocksWith = createBemBlockBuilder(['menu-dialog']);

  const generalList = (
    <SectionList
      className="general-list"
      title="General"
      columnsAmount={2}
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
      columnsAmount={2}
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
          link: 'https://reportportal.io/docs/Jira-Server',
        },
        {
          iconClass: 'jira-server',
          title: 'Jira Cloud',
          link: 'https://reportportal.io/docs/Jira-Cloud',
        },
        {
          iconClass: 'azure-do',
          title: 'Azure DevOps',
          link: 'https://reportportal.io/docs/Azure-DevOps-BTS',
        },
        {
          iconClass: 'rally',
          title: 'Rally',
          link: 'https://reportportal.io/docs/Rally',
        },
        {
          iconClass: 'sauce-labs',
          title: 'Sauce Labs',
          link: 'https://reportportal.io/docs/Sauce-Labs',
        },
        {
          iconClass: 'ldap',
          title: 'LDAP',
          link: 'https://reportportal.io/docs/LDAP-Auth',
        },
        {
          iconClass: 'saml',
          title: 'SAML',
          link: 'https://reportportal.io/docs/Azure-SAML',
        },
      ]}
    />
  );

  const footer = (
    <div className={getBlocksWith('__footer')}>
      <div className={getBlocksWith('__footer-container')}>
        <div className={getBlocksWith('__btn-group')}>
          <button type="button" className={getBlocksWith('__btn-action')}>
            Try free trial
          </button>
          <button
            type="button"
            className={cx(getBlocksWith('__btn-action'), getBlocksWith('__btn-action--outline'))}
          >
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

  return (
    <div className={getBlocksWith()}>
      <div>
        <div className={getBlocksWith('__body')}>
          <div className={getBlocksWith('__body-row')}>
            <div className={getBlocksWith('__body-col--lf')}>
              {generalList}
              <div>
                {featuresList}
                <div>
                  <button className={cx(getBlocksWith('__body-link'))}>
                    See all features
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={cx(
                getBlocksWith('__body-col--rt'),
                getBlocksWith('__body-col--flex-column'),
              )}
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
        </div>
        {footer}
      </div>
    </div>
  );
};
