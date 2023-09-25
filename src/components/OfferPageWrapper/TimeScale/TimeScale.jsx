import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '@utils';

import './TimeScale.scss';

const getBlocksWith = createBemBlockBuilder(['time-scale']);

export const TimeScale = ({ data, isShifted = false }) => {
  return (
    <div
      className={classNames(getBlocksWith('__wrapper'), {
        [getBlocksWith('__wrapper-shifted')]: isShifted,
      })}
    >
      <div
        className={classNames(getBlocksWith('__periodsWrapper'), {
          [getBlocksWith('__periodsWrapper-shifted')]: isShifted,
        })}
      >
        {data.map(period => (
          <div className={getBlocksWith('__period')} key={period.time}>
            <span>{period.time}</span> hours
          </div>
        ))}
      </div>
      <div
        className={classNames(getBlocksWith('__itemsWrapper'), {
          [getBlocksWith('__itemsWrapper-shifted')]: isShifted,
        })}
      >
        {data.map(period => (
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
