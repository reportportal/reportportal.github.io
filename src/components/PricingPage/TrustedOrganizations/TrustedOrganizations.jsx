import React from 'react';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames';

import { icons } from './icons/iconsData';
import { createBemBlockBuilder } from '../../../utils';
import { $tabletSm } from '../../../utils/breakpoint';

import './TrustedOrganizations.scss';

const getBlocksWith = createBemBlockBuilder(['trusted-organizations']);

export const TrustedOrganizations = () => {
  const isTablet = useMediaQuery({ query: $tabletSm });

  const isRight = index => (index + 1) % 2 === 0;

  return (
    <div className={cx(getBlocksWith(), getBlocksWith('__container'), 'container')}>
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
