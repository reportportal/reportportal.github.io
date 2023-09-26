import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { Link } from '../Link';
import { YoutubeCover } from './covers/YoutubeCover';
import { SectionList } from './SectionList';
import { SectionCard } from './SectionCard';
import DocumentationIcon from './icons/documentation.inline.svg';
import BlogIcon from './icons/blog.inline.svg';
import SuccessStoriesIcon from './icons/success-stories.inline.svg';

import './Menu.scss';

const DOCUMENTATION_URL = process.env.DOCUMENTATION_URL;
const getBlocksWith = createBemBlockBuilder(['menu-dialog']);

export const LearnMenu = ({ isDesktop = true, isOpen, menuContainerRef }) => {
  let resourcesItems = [
    {
      icon: <DocumentationIcon />,
      title: 'Documentation',
      text: 'All the technical docs',
      link: DOCUMENTATION_URL,
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
      link: '/case-studies',
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
