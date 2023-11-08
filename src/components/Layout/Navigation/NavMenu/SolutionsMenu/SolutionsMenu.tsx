import React from 'react';
import classNames from 'classnames';

import { Link } from '@app/components/Link';
import { createBemBlockBuilder } from '@app/utils';

import { CaseStudiesCover } from '../covers/CaseStudiesCover';
import { SectionList } from '../SectionList';
import { SectionCard } from '../SectionCard';
import { SOLUTIONS_LIST } from './constants';

import '../Menu.scss';
import './SolutionsMenu.scss';

interface Props {
  isDesktop: boolean;
  isOpen: boolean;
  menuContainerRef: string;
}

export const SolutionsMenu: React.FC<Props> = ({ isDesktop = true, isOpen, menuContainerRef }) => {
  const getBlocksWith = createBemBlockBuilder(['menu-dialog']);

  const solutionsList = (
    <SectionList
      className="solutions-list"
      showTitle={isDesktop}
      title="Our Solutions"
      items={SOLUTIONS_LIST}
    />
  );

  const caseStudiesCard = (
    <SectionCard
      title="Case Studies"
      cover={<CaseStudiesCover />}
      text="Featured customers' stories where ReportPortal shines the best."
    >
      <div className={classNames(getBlocksWith('__btn-group'), 'full-width')}>
        <Link className={classNames('btn', 'btn--outline', 'full-width')} to="/case-studies">
          Explore Case Studies
        </Link>
      </div>
    </SectionCard>
  );

  if (!isDesktop) {
    return <div className={getBlocksWith()}>{solutionsList}</div>;
  }

  return (
    <div hidden={!isOpen} ref={menuContainerRef} className={getBlocksWith()}>
      <div>
        <div className={getBlocksWith('__body-row')}>
          <div className={classNames(getBlocksWith('__body-col--lf'))}>{solutionsList}</div>
          <div
            className={classNames(
              getBlocksWith('__body-col--rt'),
              getBlocksWith('__body-col--card'),
            )}
          >
            {caseStudiesCard}
          </div>
        </div>
      </div>
    </div>
  );
};
