import React from 'react';

import { createBemBlockBuilder } from '../../../utils';

import './TimeScale.scss';

const getBlocksWith = createBemBlockBuilder(['time-scale']);

const timeUtilization = [
  {
    time: 1,
    items: ['ReportPortal training', 'Simple query resolved'],
  },
  {
    time: 20,
    items: [
      'Simple deployment on AWS with DB',
      'Configuration of performance monitoring',
      'Support of an existing Test Framework',
    ],
  },
  {
    time: 120,
    items: ['Plugin implementation', 'Integration with a new Test Framework'],
  },
];

export const TimeScale = () => {
  return (
    <div className={getBlocksWith('__wrapper')}>
      <div className={getBlocksWith('__periodsWrapper')}>
        {timeUtilization.map(period => (
          <div className={getBlocksWith('__period')} key={period.time}>
            <span>{period.time}+</span> hours
          </div>
        ))}
      </div>
      <div className={getBlocksWith('__itemsWrapper')}>
        {timeUtilization.map(period => (
          <ul className={getBlocksWith('__list')} key={period.time}>
            {period.items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
