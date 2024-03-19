import React, { FC, useMemo } from 'react';
import classNames from 'classnames';
import { StatisticList } from '@app/components/StatisticList';
import { createBemBlockBuilder } from '@app/utils';

import githubStats from '../../../../static/github.json';
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
            quantity: githubStats.repos.reportportal,
          };
        }

        return statistic;
      }),
    [],
  );

  return (
    <div className={getBlocksWith()}>
      <div className="container">
        <h1 className={classNames(getBlocksWith('__title'), getBlocksWith('__title--width'))}>
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
