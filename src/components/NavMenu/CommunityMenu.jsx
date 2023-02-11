import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { GithubCover } from './covers/GithubCover';
import { HeartIcon } from './icons/HeartIcon';
import { ForkIcon } from './icons/ForkIcon';
import { SectionList } from './SectionList';
import { SectionCard } from './SectionCard';

import './Menu.scss';

export const CommunityMenu = () => {
  const getBlocksWith = createBemBlockBuilder(['menu-dialog']);

  const contributionCard = (
    <SectionCard
      className="contribution-card"
      title="Github Contribution"
      cover={<GithubCover />}
      text="Our team makes ReportPortal, but it’s our community that shapes and develops it better."
    >
      <div className={getBlocksWith('__btn-group')}>
        <a
          href="https://github.com/reportportal/reportportal"
          className={cx(
            getBlocksWith('__btn-action'),
            getBlocksWith('__btn-action--outline'),
            getBlocksWith('__btn-action--full-width'),
          )}
        >
          <ForkIcon />
          Fork
        </a>
        <a
          href="https://github.com/sponsors/reportportal"
          className={cx(
            getBlocksWith('__btn-action'),
            getBlocksWith('__btn-action--outline'),
            getBlocksWith('__btn-action--full-width'),
          )}
        >
          <HeartIcon />
          Sponsor
        </a>
      </div>
    </SectionCard>
  );

  const communityList = (
    <SectionList
      className={cx('section-list--secondary', 'community-list')}
      title="Join the Community"
      items={[
        {
          iconClass: 'slack',
          title: 'Slack',
          link: 'https://slack.epmrpp.reportportal.io/',
        },
        {
          iconClass: 'twitter',
          title: 'Twitter',
          link: 'https://twitter.com/ReportPortal_io',
        },
        {
          iconClass: 'youtube',
          title: 'Youtube',
          link: 'https://www.youtube.com/@ReportPortal',
        },
      ]}
    />
  );

  const footer = (
    <div className={getBlocksWith('__footer')}>
      <div className={getBlocksWith('__footer-container')}>By subscribing, you agree</div>
    </div>
  );

  return (
    <div className={getBlocksWith()}>
      <div>
        <div className={getBlocksWith('__body')}>
          <div className={getBlocksWith('__body-row')}>
            <div className={getBlocksWith('__body-col--lf')}>{contributionCard}</div>
            <div
              className={cx(
                getBlocksWith('__body-col--rt'),
                getBlocksWith('__body-col--flex-column'),
              )}
            >
              {communityList}
            </div>
          </div>
        </div>
        {footer}
      </div>
    </div>
  );
};