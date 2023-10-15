import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '../../../../../utils';

import { Link } from '../../../../Link';
import { YoutubeCover } from '../covers/YoutubeCover';
import { SectionList } from '../SectionList';
import { SectionCard } from '../SectionCard';
import { RESOURCES_LIST } from './constants';

import '../Menu.scss';
import './LearnMenu.scss';

interface Props {
  isDesktop: boolean
  isOpen: boolean
  menuContainerRef: string
}

const getBlocksWith = createBemBlockBuilder(['menu-dialog']);

export const LearnMenu: React.FC<Props> = ({ isDesktop = true, isOpen, menuContainerRef }) => {
  let resourcesItems = RESOURCES_LIST;

  if (!isDesktop) {
    resourcesItems = resourcesItems.concat({
      iconClass: 'youtube',
      title: 'YouTube channel',
      text: 'Subscribe and watch video guides',
      link: 'https://www.youtube.com/@ReportPortal',
    });
  }

  const resourcesList = (
    <SectionList
      showTitle={isDesktop}
      className="resources-list"
      title="Resources"
      items={resourcesItems}
    />
  );

  const videoGuidesCard = (
    <SectionCard
      title="Video Guides"
      cover={<YoutubeCover />}
      text="Watch our video guides to get more acquainted with ReportPortal"
    >
      <div className={getBlocksWith('__btn-group')}>
        <Link
          to="https://www.youtube.com/@ReportPortal"
          className="btn btn--outline full-width"
          data-gtm="youtube"
        >
          Follow us on YouTube
        </Link>
      </div>
    </SectionCard>
  );

  if (!isDesktop) {
    return <div className={getBlocksWith()}>{resourcesList}</div>;
  }

  return (
    <div hidden={!isOpen} ref={menuContainerRef} className={getBlocksWith()}>
      <div className={getBlocksWith('__body')}>
        <div className={getBlocksWith('__body-row')}>
          <div className={classNames(getBlocksWith('__body-col--lf'))}>{resourcesList}</div>
          <div
            className={classNames(
              getBlocksWith('__body-col--rt'),
              getBlocksWith('__body-col--card'),
            )}
          >
            {videoGuidesCard}
          </div>
        </div>
      </div>
    </div>
  );
};
