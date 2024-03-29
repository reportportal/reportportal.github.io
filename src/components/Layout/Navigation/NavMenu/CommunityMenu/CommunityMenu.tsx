import React, { FC } from 'react';
import { useAtom } from 'jotai';
import classNames from 'classnames';
import { Link } from '@app/components/Link';
import { SubscriptionForm } from '@app/components/SubscriptionForm';
import { useMenuList } from '@app/hooks/useMenuList';
import { createBemBlockBuilder, subscriptionFormAtom } from '@app/utils';

import { MenuProps } from '../../constants';
import GithubCover from '../covers/github.inline.svg';
import { SectionList } from '../SectionList';
import { SectionCard } from '../SectionCard';

import '../Menu.scss';

export const CommunityMenu: FC<MenuProps> = ({ isDesktop = true, isOpen, menuContainerRef }) => {
  const [subscriptionFormState, setSubscriptionFormState] = useAtom(subscriptionFormAtom);
  const getBlocksWith = createBemBlockBuilder(['menu-dialog', 'menu-dialog-community']);
  const { communities } = useMenuList();

  const contributionCard = (
    <SectionCard
      className="contribution-card"
      title="Github Contribution"
      cover={<GithubCover />}
      text="Our team develops ReportPortal, but it’s our community that shapes and improves it."
    >
      <div className={classNames(getBlocksWith('__btn-group'), 'full-width')}>
        <Link className="btn btn--outline full-width" to="/community">
          Join the community
        </Link>
      </div>
    </SectionCard>
  );

  const communityList = (
    <SectionList
      className={classNames('community-list', { 'section-list-secondary': isDesktop })}
      title="Our social medias"
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
    return (
      <div className={getBlocksWith()}>
        <Link className={classNames(getBlocksWith('__button'), 'btn')} to="/community">
          Join the community
        </Link>
        {communityList}
      </div>
    );
  }

  return (
    <div hidden={!isOpen} ref={menuContainerRef} className={getBlocksWith()}>
      <div className={getBlocksWith('__body')}>
        <div className={getBlocksWith('__body-row')}>
          <div className={getBlocksWith('__body-col--lf')}>{contributionCard}</div>
          <div className={getBlocksWith('__body-col--rt', '__body-col--flex-column')}>
            {communityList}
          </div>
        </div>
      </div>
      {footer}
    </div>
  );
};
