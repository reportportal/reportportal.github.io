import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { SectionList } from './SectionList';
import { SectionCard } from './SectionCard';
import { CaseStudiesCover } from './covers/CaseStudiesCover';

import './Menu.scss';

export const SolutionsMenu = () => {
  const getBlocksWith = createBemBlockBuilder(['menu-dialog']);

  const solutionsList = (
    <SectionList
      className="solutions-list"
      title="Our Solutions"
      items={[
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
          title: 'QAspace Jira plugin',
          text: 'Test case management plugin on top of Jira software',
          link: 'https://marketplace.atlassian.com/apps/1214038/qaspace-test-management?tab=overview&hosting=server',
        },
      ]}
    />
  );

  const caseStudiesCard = (
    <SectionCard
      title="Case Studies"
      cover={<CaseStudiesCover />}
      text="Over 1200 companies around the globe use ReportPortal."
    >
      <div className={getBlocksWith('__btn-group')}>
        <button
          type="button"
          className={cx(
            getBlocksWith('__btn-action'),
            getBlocksWith('__btn-action--outline'),
            getBlocksWith('__btn-action--full-width'),
          )}
        >
          Explore Case Studies
        </button>
      </div>
    </SectionCard>
  );

  return (
    <div className={getBlocksWith()}>
      <div>
        <div className={getBlocksWith('__body')}>
          <div className={getBlocksWith('__body-row')}>
            <div className={cx(getBlocksWith('__body-col--lf'))}>{solutionsList}</div>
            <div className={cx(getBlocksWith('__body-col--rt'), getBlocksWith('__body-col--card'))}>
              {caseStudiesCard}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
