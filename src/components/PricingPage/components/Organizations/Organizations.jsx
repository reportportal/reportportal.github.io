import React from 'react';
import cx from 'classnames';
import { useMediaQuery } from 'react-responsive';

import { createBemBlockBuilder } from '../../../../utils';
import { icons } from './icons/iconsData';

import './Organizations.scss';

const getBlocksWith = createBemBlockBuilder(['organizations']);

export const Organizations = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 769px)' });

  const isRight = (index) => (index + 1) % 2 === 0;

  return (
    <div className={cx(getBlocksWith(), 'container')}>
      <div className={getBlocksWith('__title')}>
        Trusted by the world&apos;s leading organizations
      </div>
      <div className={getBlocksWith('__icons-wrapper')}>
        <div className={getBlocksWith('__icons')}>
          {icons.map((Icon, index) => (
            <div
              key={index}
              className={cx(
                getBlocksWith('__icon'),
                {
                  [getBlocksWith('__icon-right')]: isRight(index),
                },
                {
                  [getBlocksWith('__icon-display')]: !isTablet,
                },
              )}
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
