import React, { useState } from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../utils';

import './PriceSwitcher.scss';

const getBlocksWith = createBemBlockBuilder(['price-switcher']);

export const PriceSwitcher = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleSwitcher = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={getBlocksWith()}>
      <div className={getBlocksWith('__option')}>Quarterly</div>
      <div
        className={cx(getBlocksWith('__switcher'), {
          'contentToggleSwitcher__switcher--active': isActive,
        })}
        onClick={toggleSwitcher}
      ></div>
      <div className={getBlocksWith('__option')}>Annually (Save 5%)</div>
    </div>
  );
};
