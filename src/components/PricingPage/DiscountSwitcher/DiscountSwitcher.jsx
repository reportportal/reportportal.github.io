import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../utils';

import './DiscountSwitcher.scss';

const getBlocksWith = createBemBlockBuilder(['switcher']);

export const DiscountSwitcher = ({ switchDiscount, discountState }) => (
  <div className={getBlocksWith()}>
    <div className={getBlocksWith('__option')}>Quarterly</div>
    <div
      className={cx(getBlocksWith('__switcher'), {
        [getBlocksWith('__switcher-active')]: Boolean(discountState),
      })}
      onClick={switchDiscount}
    />
    <div className={getBlocksWith('__option')}>Yearly (Save 5%)</div>
  </div>
);
