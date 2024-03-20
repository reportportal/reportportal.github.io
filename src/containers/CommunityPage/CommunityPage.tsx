import React, { FC } from 'react';
import { StartTestingWithReportPortal } from '@app/components/StartTestingWithReportPortal';
import { Link } from '@app/components/Link';
import { SubscriptionBanner } from '@app/components/SubscriptionBanner';
import { DOCUMENTATION_URL } from '@app/utils';

import { Hero } from './Hero';
import { LinkedCardBlock } from './LinkedCardBlock';
import { CodeOfConduct } from './CodeOfConduct';
import { JoinOurCommunity } from './JoinOurCommunity';
import { Sponsors } from './Sponsors';
import { StyleMeets } from './StyleMeets';
import { YouTube } from './YouTube';
import { LatestFromOurBlog } from '../LandingPage/LatestFromOurBlog';
import { GITHUB_CONTRIBUTION_CARDS, DOCUMENTATION_CARDS } from './constants';

import './CommunityPage.scss';

export const CommunityPage: FC = () => (
  <div className="community">
    <Hero />
    <LinkedCardBlock
      title="GitHub contribution"
      subtitle="Explore our GitHub activities and become a contributor to pull ReportPortal on a new level
          of test automation"
      cardsInfo={GITHUB_CONTRIBUTION_CARDS}
    >
      <CodeOfConduct />
    </LinkedCardBlock>
    <JoinOurCommunity />
    <Sponsors />
    <LinkedCardBlock
      title="Documentation and resources"
      subtitle="Explore our guides, tutorials and other materials"
      cardsInfo={DOCUMENTATION_CARDS}
      largePadding
    >
      <Link
        className="btn btn--outline btn--small go-to-documentation-button"
        to={DOCUMENTATION_URL}
      >
        Go to Documentation
      </Link>
    </LinkedCardBlock>
    <StyleMeets />
    <YouTube />
    <StartTestingWithReportPortal />
    <LatestFromOurBlog isViewAll />
    <SubscriptionBanner />
  </div>
);
