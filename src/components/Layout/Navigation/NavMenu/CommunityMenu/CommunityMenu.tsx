import React from 'react';
import { useAtom } from 'jotai';
import classNames from 'classnames';

import { createBemBlockBuilder } from '../../../../../utils';

import { subscriptionFormAtom } from '../../../Layout';
import { Link } from '../../../../Link';
import { SubscriptionForm } from '../../../../SubscriptionForm';
import { GithubCover } from '../covers/GithubCover';
import { SectionList } from '../SectionList';
import { SectionCard } from '../SectionCard';
import { HeartIcon, ForkIcon } from './icons';
import { COMMUNITY_LIST } from './constants';

import '../Menu.scss';
import './CommunityMenu.scss';

interface Props {
  isDesktop: boolean
  isOpen: boolean
  menuContainerRef: string
}

export const CommunityMenu: React.FC<Props> = ({ isDesktop = true, isOpen, menuContainerRef }) => {
  const [subscriptionFormState, setSubscriptionFormState] = useAtom(subscriptionFormAtom);
  const getBlocksWith = createBemBlockBuilder(['menu-dialog', 'menu-dialog-community']);

  const contributionCard = (
    <SectionCard
      className="contribution-card"
      title="Github Contribution"
      cover={<GithubCover />}
      text="Our team makes ReportPortal, but it’s our community that shapes and improves it."
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
      showTitle={isDesktop}
      title="Join the Community"
      items={COMMUNITY_LIST}
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
      <>
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
      </>
    </div>
  );
};
