import React, { FC, useMemo } from 'react';
import { StatisticList } from '@app/components/StatisticList';
import { createBemBlockBuilder } from '@app/utils';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import githubStats from '../../../../static/github.json'; // Will be generated at build time
import { STATISTICS } from './constants';

import './Hero.scss';

const getBlocksWith = createBemBlockBuilder(['hero']);

export const Hero: FC = () => {
  const statistics = useMemo(
    () =>
      STATISTICS.map(statistic => {
        if (statistic.entities === 'Stars on GitHub') {
          return {
            ...statistic,
            quantity: `${githubStats.repos.reportportal}`,
          };
        }

        return statistic;
      }),
    [],
  );

  return (
    <div className={getBlocksWith()}>
      <div className="container">
        <h1 className={getBlocksWith('__title', '__title--width')}>
          Join the ReportPortal community
        </h1>
        <div className={getBlocksWith('__subtitle')}>
          Connect, learn, and collaborate with testing enthusiasts
        </div>
        <StatisticList statistics={statistics} />
      </div>
    </div>
  );
};
