import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '@app/utils';

import './DiscountSwitcher.scss';

interface Props {
  switchDiscount: () => void;
  discountState: boolean;
}

const getBlocksWith = createBemBlockBuilder(['switcher']);

export const DiscountSwitcher: React.FC<Props> = ({ switchDiscount, discountState }) => (
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
