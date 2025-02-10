import React, { FC } from 'react';
import { Link } from '@app/components/Link';
import { createBemBlockBuilder } from '@app/utils';

import { MenuProps } from '../../constants';
import { YoutubeCover } from '../covers/YoutubeCover';
import { SectionList } from '../SectionList';
import { SectionCard } from '../SectionCard';
import { RESOURCES_LIST } from './constants';

import '../Menu.scss';
import './LearnMenu.scss';

const getBlocksWith = createBemBlockBuilder(['menu-dialog']);

export const LearnMenu: FC<MenuProps> = ({ isDesktop = true, isOpen, menuContainerRef }) => {
  const resourcesItems = isDesktop
    ? RESOURCES_LIST
    : [
        ...RESOURCES_LIST,
        {
          iconClass: 'youtube',
          title: 'YouTube channel',
          text: 'Subscribe and watch video guides',
          link: { title: 'YouTube channel', url: 'https://www.youtube.com/@ReportPortal' },
        },
      ];

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
          <div className={getBlocksWith('__body-col--lf')}>{resourcesList}</div>
          <div className={getBlocksWith('__body-col--rt', '__body-col--card')}>
            {videoGuidesCard}
          </div>
        </div>
      </div>
    </div>
  );
};
