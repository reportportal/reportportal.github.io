import React, { FC } from 'react';
import { StartTestingWithReportPortal, Link, SubscriptionBanner } from '@app/components';

import { Hero } from './Hero';
import { LinkedCardBlock } from './LinkedCardBlock';
import { CodeOfConduct } from './CodeOfConduct';
import { JoinOurCommunity } from './JoinOurCommunity';
import { Sponsors } from './Sponsors';
import { StyleMeets } from './StyleMeets';
import { YouTubeCarousel } from './YouTubeCarousel';
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
      withBackground
    >
      <CodeOfConduct />
    </LinkedCardBlock>
    <JoinOurCommunity />
    <Sponsors />
    <LinkedCardBlock
      title="Documentation and resources"
      subtitle="Explore our guides, tutorials and other materials"
      cardsInfo={DOCUMENTATION_CARDS}
    >
      <Link
        className="btn btn--outline btn--small go-to-documentation-button"
        to="https://reportportal.io/docs"
      >
        Go to Documentation
      </Link>
    </LinkedCardBlock>
    <StyleMeets />
    <YouTubeCarousel />
    <StartTestingWithReportPortal />
    <LatestFromOurBlog isViewAll />
    <SubscriptionBanner />
  </div>
);
