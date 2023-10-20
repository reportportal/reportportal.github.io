import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '@app/utils';

import './TimeScale.scss';

interface Props {
  data: {
    items: string[];
    time: string;
  }[];
  isShifted: boolean;
}

const getBlocksWith = createBemBlockBuilder(['time-scale']);

export const TimeScale: React.FC<Props> = ({ data, isShifted = false }) => (
  <div
    className={classNames(getBlocksWith('__wrapper'), {
      [getBlocksWith('__wrapper-shifted')]: isShifted,
    })}
  >
    <div
      className={classNames(getBlocksWith('__periods-wrapper'), {
        [getBlocksWith('__periods-wrapper--shifted')]: isShifted,
      })}
    >
      {data.map(period => (
        <div className={getBlocksWith('__period')} key={period.time}>
          <span>{period.time}</span> hours
        </div>
      ))}
    </div>
    <div
      className={classNames(getBlocksWith('__items-wrapper'), {
        [getBlocksWith('__items-wrapper--shifted')]: isShifted,
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
