import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '@utils';

import './DiscountSwitcher.scss';

const getBlocksWith = createBemBlockBuilder(['switcher']);

export const DiscountSwitcher = ({ switchDiscount, discountState }) => (
  <div className={getBlocksWith()}>
    <div className={getBlocksWith('__option')}>Quarterly</div>
    <div
      className={classNames(getBlocksWith('__switcher'), {
        [getBlocksWith('__switcher-active')]: Boolean(discountState),
      })}
      onClick={switchDiscount}
    />
    <div className={getBlocksWith('__option')}>Yearly (Save 5%)</div>
  </div>
);
