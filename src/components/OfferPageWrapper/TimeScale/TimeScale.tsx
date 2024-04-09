import React, { FC } from 'react';
import classNames from 'classnames';
import { createBemBlockBuilder } from '@app/utils';

import { TimeScaleData } from '../OfferPageWrapper';

import './TimeScale.scss';

interface TimeScaleProps {
  data: TimeScaleData[];
  isShifted?: boolean;
}

const getBlocksWith = createBemBlockBuilder(['time-scale']);

export const TimeScale: FC<TimeScaleProps> = ({ data, isShifted = false }) => (
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
