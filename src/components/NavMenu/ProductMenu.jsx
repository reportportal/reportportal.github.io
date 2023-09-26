import React from 'react';
import { useAtom } from 'jotai';
import classNames from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { watchProductOverviewAtom } from '../Layout';
import { Link } from '../Link';
import { ArrowLink } from '../ArrowLink';
import {
  PlayIcon,
  InstallIcon,
  ReleaseIcon,
  DefectTypeIcon,
  AiIcon,
  RtAnalyticsIcon,
  QualityGatesIcon,
  PieChartIcon,
  ReportingIcon,
} from './icons';
import { SectionList } from './SectionList';

import './Menu.scss';

const DOCUMENTATION_URL = process.env.DOCUMENTATION_URL;

export const ProductMenu = ({ isDesktop = true, isOpen, menuContainerRef }) => {
  const getBlocksWith = createBemBlockBuilder(['menu-dialog', 'menu-dialog-product']);
  const [, setWatchProductOverviewState] = useAtom(watchProductOverviewAtom);

  const generalList = (
    <SectionList
      className="general-list"
      title="General"
      itemsPerRow={isDesktop ? 1 : 2}
      items={[
        {
          icon: <InstallIcon />,
          title: 'Installation',
          link: '/installation',
        },
        {
          icon: <ReleaseIcon />,
          title: 'Releases',
          link: `${DOCUMENTATION_URL}/category/releases`,
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
          link: '/features/#single-entry',
        },
        {
          icon: <DefectTypeIcon />,
          title: 'Categorisation of failures',
          text: 'Triage test failures by categorisation of root cause',
          link: '/features/#categorisation',
        },
        {
          icon: <AiIcon />,
          title: 'AI failure reason detection',
          text: 'Reduce your manual efforts for failure triaging with Auto-Analyzer',
          link: '/features/#ai-based',
        },
        {
          icon: <RtAnalyticsIcon />,
          title: 'Real-time analytics',
          text: 'Save time on early reaction by immediate results availability',
          link: '/features/#real-time-reporting',
        },
        {
          icon: <PieChartIcon />,
          title: 'Widgets and Dashboards',
          text: 'Get visibility in QA results and a birds-eye view on the project',
          link: '/features/#visualisation-of-tests',
        },
        {
          icon: <QualityGatesIcon />,
          title: 'Quality gates',
          text: 'Automate release decisions with Quality Gates rules',
          link: '/features/#quality-gates',
        },
      ]}
    />
  );

  const integrationsList = (
    <SectionList
      className={classNames('section-list--secondary', 'integrations-list')}
      title="Integrations"
      items={[
        {
          iconClass: 'jira-cloud',
          title: 'Jira Server',
          link: `${DOCUMENTATION_URL}/plugins/JiraServer`,
        },
        {
          iconClass: 'jira-server',
          title: 'Jira Cloud',
          link: `${DOCUMENTATION_URL}/plugins/JiraCloud`,
        },
        {
          iconClass: 'azure-do',
          title: 'Azure DevOps',
          link: `${DOCUMENTATION_URL}/plugins/AzureDevOpsBTS/`,
        },
        {
          iconClass: 'rally',
          title: 'Rally',
          link: `${DOCUMENTATION_URL}/plugins/Rally/`,
        },
        {
          iconClass: 'sauce-labs',
          title: 'Sauce Labs',
          link: `${DOCUMENTATION_URL}/plugins/SauceLabs/`,
        },
        {
          iconClass: 'ldap',
          title: 'LDAP',
          link: `${DOCUMENTATION_URL}/reportportal-configuration/authorization/LDAP/`,
        },
        {
          iconClass: 'saml',
          title: 'SAML',
          link: `${DOCUMENTATION_URL}/reportportal-configuration/authorization/SAMLProvider/`,
        },
      ]}
    />
  );

  const footer = (
    <div className={getBlocksWith('__footer')}>
      <div className={getBlocksWith('__footer-container')}>
        <div className={getBlocksWith('__btn-group')}>
          <Link
            className={classNames('btn btn--primary', 'temporary-hide')}
            to="/contact-us/general"
            data-gtm="start_free_trial"
          >
            Start free trial
          </Link>
          <Link
            className="btn btn--outline"
            to="/contact-us/general"
            data-gtm="get_a_quote_product"
          >
            Get a quote
          </Link>
        </div>
        <button
          type="button"
          className={getBlocksWith('__btn-text')}
          onClick={() => setWatchProductOverviewState({ isOpen: true })}
        >
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
        <ArrowLink to="/features" text="See all features" />
      </div>
    );
  }

  return (
    <div hidden={!isOpen} ref={menuContainerRef} className={getBlocksWith()}>
      <div className={getBlocksWith('__body-row')}>
        <div className={getBlocksWith('__body-col--lf')}>
          {generalList}
          {featuresList}
          <div>
            <ArrowLink to="/features" text="See all features" />
          </div>
        </div>
        <div
          className={classNames(
            getBlocksWith('__body-col--rt'),
            getBlocksWith('__body-col--flex-column'),
          )}
        >
          {integrationsList}
          <div>
            <ArrowLink to={`${DOCUMENTATION_URL}/category/plugins/`} text="See all integrations" />
          </div>
        </div>
      </div>
      {footer}
    </div>
  );
};
