import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';

import './DiscountSwitcher.scss';

const getSwitcherBlock = createBemBlockBuilder(['switcher']);

export const DiscountSwitcher = ({ switchDiscount, discountState }) => (
  <div className={getSwitcherBlock()}>
    <div className={getSwitcherBlock('__option')}>Quarterly</div>
    <div
      className={cx(getSwitcherBlock('__switcher'), {
        [getSwitcherBlock('__switcher-active')]: !!discountState,
      })}
      onClick={switchDiscount}
    ></div>
    <div className={getSwitcherBlock('__option')}>Annually (Save 5%)</div>
  </div>
);
