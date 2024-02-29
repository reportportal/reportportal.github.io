import React, { FC } from 'react';
import { Link } from '@app/components';

import { TitleBlock } from '../TitleBlock';

import './YouTubeCarousel.scss';

export const YouTubeCarousel: FC = () => (
  <div className="you-tube-carousel">
    <div className="container">
      <TitleBlock
        title="Explore ReportPortal on YouTube"
        subtitle="Your source for tutorials, event recordings, and documentation guides"
      />
      <Link
        className="btn btn--outline btn--large you-tube-carousel__button"
        to="https://www.youtube.com/@ReportPortal"
      >
        Watch more on YouTube
      </Link>
    </div>
  </div>
);
