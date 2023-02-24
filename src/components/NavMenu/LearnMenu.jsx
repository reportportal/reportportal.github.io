import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { YoutubeCover } from './covers/YoutubeCover';
import { SectionList } from './SectionList';
import { SectionCard } from './SectionCard';
import { DocumentationIcon } from './icons/DocumentationIcon';
import { BlogIcon } from './icons/BlogIcon';
import { SuccessStoriesIcon } from './icons/SuccessStoriesIcon';

import './Menu.scss';

export const LearnMenu = () => {
  const getBlocksWith = createBemBlockBuilder(['menu-dialog']);

  const resourcesList = (
    <SectionList
      className="resources-list"
      title="Resources"
      items={[
        {
          icon: <DocumentationIcon />,
          title: 'Documentation',
          text: 'All the technical docs',
        },
        {
          icon: <BlogIcon />,
          title: 'Blog',
          text: 'News, updates and more',
        },
        {
          icon: <SuccessStoriesIcon />,
          title: 'Success stories',
          text: 'Our Case Studies',
        },
      ]}
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
          className={cx(
            getBlocksWith('__btn-action'),
            getBlocksWith('__btn-action--outline'),
            getBlocksWith('__btn-action--full-width'),
          )}
        >
          Follow us on YouTube
        </a>
      </div>
    </SectionCard>
  );

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
