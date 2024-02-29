import React, { FC } from 'react';
import { StatisticList } from '@app/components';

import { STATISTICS } from './constants';

import './Hero.scss';

export const Hero: FC = () => (
  <div className="hero">
    <div className="container">
      <h1 className="hero__title hero__title--width">Join the ReportPortal community</h1>
      <div className="hero__subtitle">Connect, learn, and collaborate with testing enthusiasts</div>
      <StatisticList statistics={STATISTICS} />
    </div>
  </div>
);
