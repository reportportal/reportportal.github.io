import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { YoutubeCover } from './covers/YoutubeCover';
import { SectionList } from './SectionList';
import { SectionCard } from './SectionCard';
import { DocumentationIcon, BlogIcon, SuccessStoriesIcon } from './icons';

import './Menu.scss';

export const LearnMenu = ({ isDesktop = true }) => {
  const getBlocksWith = createBemBlockBuilder(['menu-dialog']);

  let resourcesItems = [
    {
      icon: <DocumentationIcon />,
      title: 'Documentation',
      text: 'All the technical docs',
    },
    {
      icon: <BlogIcon />,
      title: 'Blog',
      text: 'News, updates and more',
      link: '/blog',
    },
    {
      icon: <SuccessStoriesIcon />,
      title: 'Success stories',
      text: 'Our Case Studies',
    },
  ];

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
        <a
          href="https://www.youtube.com/@ReportPortal"
          className={cx('btn', 'btn--outline', 'full-width')}
        >
          Follow us on YouTube
        </a>
      </div>
    </SectionCard>
  );

  if (!isDesktop) {
    return <div className={getBlocksWith()}>{resourcesList}</div>;
  }

  return (
    <div className={getBlocksWith()}>
      <div>
        <div className={getBlocksWith('__body')}>
          <div className={getBlocksWith('__body-row')}>
            <div className={cx(getBlocksWith('__body-col--lf'))}>{resourcesList}</div>
            <div className={cx(getBlocksWith('__body-col--rt'), getBlocksWith('__body-col--card'))}>
              {videoGuidesCard}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
