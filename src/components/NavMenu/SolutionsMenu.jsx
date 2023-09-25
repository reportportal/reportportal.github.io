import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { Link } from '../Link';
import { CaseStudiesCover } from './covers/CaseStudiesCover';
import { SectionList } from './SectionList';
import { SectionCard } from './SectionCard';
import ReportPortalIcon from './icons/reportportal.inline.svg';

import './Menu.scss';

export const SolutionsMenu = ({ isDesktop = true }) => {
  const getBlocksWith = createBemBlockBuilder(['menu-dialog']);

  const solutionsList = (
    <SectionList
      className="solutions-list"
      showTitle={isDesktop}
      title="Our Solutions"
      items={[
        {
          icon: <ReportPortalIcon />,
          title: 'ReportPortal',
          text: 'Platform for test automation reporting with real-time analytics',
          link: '/',
        },
        {
          iconClass: 'tdspora',
          title: 'TDspora',
          text: 'Test data management tool for migration and sub-setting data',
          link: 'https://tdspora.ai/',
        },
        {
          iconClass: 'drill4j',
          title: 'Drill4J',
          text: 'Instrument for Test Impact Analysis and regression minimization',
          link: 'https://drill4j.github.io/',
        },
        {
          iconClass: 'healenium',
          title: 'Healenium',
          text: 'Extension for self-healing capabilities in Selenium-based test automation',
          link: 'https://healenium.io/',
        },
        {
          iconClass: 'qa-space',
          title: 'QaSpace Jira plugin',
          text: 'Neat test case management plugin on top of Jira software',
          link: 'https://marketplace.atlassian.com/apps/1214038/qaspace-test-management?tab=overview&hosting=server',
        },
      ]}
    />
  );

  const caseStudiesCard = (
    <SectionCard
      title="Case Studies"
      cover={<CaseStudiesCover />}
      text="Featured customers' stories where ReportPortal shines the best."
    >
      <div className={cx(getBlocksWith('__btn-group'), 'full-width')}>
        <Link className={cx('btn', 'btn--outline', 'full-width')} to="/case-studies">
          Explore Case Studies
        </Link>
      </div>
    </SectionCard>
  );

  if (!isDesktop) {
    return <div className={getBlocksWith()}>{solutionsList}</div>;
  }

  return (
    <div className={getBlocksWith()}>
      <div>
        <div className={getBlocksWith('__body-row')}>
          <div className={cx(getBlocksWith('__body-col--lf'))}>{solutionsList}</div>
          <div className={cx(getBlocksWith('__body-col--rt'), getBlocksWith('__body-col--card'))}>
            {caseStudiesCard}
          </div>
        </div>
      </div>
    </div>
  );
};
