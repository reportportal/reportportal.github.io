import React, { FC } from 'react';
import { useAtom } from 'jotai';
import classNames from 'classnames';
import { Link, SubscriptionForm } from '@app/components';
import { useMenuFetch } from '@app/hooks';
import { createBemBlockBuilder, subscriptionFormAtom } from '@app/utils';

import { MenuProps } from '../../constants';
import GithubCover from '../covers/github.inline.svg';
import { SectionList } from '../SectionList';
import { SectionCard } from '../SectionCard';
import { HeartIcon, ForkIcon } from './icons';

import '../Menu.scss';

export const CommunityMenu: FC<MenuProps> = ({ isDesktop = true, isOpen, menuContainerRef }) => {
  const [subscriptionFormState, setSubscriptionFormState] = useAtom(subscriptionFormAtom);
  const getBlocksWith = createBemBlockBuilder(['menu-dialog', 'menu-dialog-community']);
  const { communities } = useMenuFetch();

  const contributionCard = (
    <SectionCard
      className="contribution-card"
      title="Github Contribution"
      cover={<GithubCover />}
      text="Our team develops ReportPortal, but it’s our community that shapes and improves it."
    >
      <div className={classNames(getBlocksWith('__btn-group'), 'full-width')}>
        <Link
          className="btn btn--outline full-width"
          to="https://github.com/reportportal/reportportal"
        >
          <ForkIcon />
          Fork
        </Link>
        <Link className="btn btn--outline full-width" to="https://github.com/sponsors/reportportal">
          <HeartIcon />
          Sponsor
        </Link>
      </div>
    </SectionCard>
  );

  const communityList = (
    <SectionList
      className={classNames('community-list', { 'section-list-secondary': isDesktop })}
      title="Join the Community"
      items={communities}
    />
  );

  const footer = (
    <div className={classNames(getBlocksWith('__footer'), 'temporary-hide')}>
      <div className={getBlocksWith('__footer-container')}>
        <SubscriptionForm
          subscriptionFormState={subscriptionFormState}
          setSubscriptionFormState={setSubscriptionFormState}
        />
      </div>
    </div>
  );

  if (!isDesktop) {
    return <div className={getBlocksWith()}>{communityList}</div>;
  }

  return (
    <div hidden={!isOpen} ref={menuContainerRef} className={getBlocksWith()}>
      <div className={getBlocksWith('__body')}>
        <div className={getBlocksWith('__body-row')}>
          <div className={getBlocksWith('__body-col--lf')}>{contributionCard}</div>
          <div
            className={classNames(
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
  );
};
