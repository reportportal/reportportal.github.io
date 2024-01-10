import React, { FC } from 'react';
import classNames from 'classnames';
import { createBemBlockBuilder } from '@app/utils';

import './DiscountSwitcher.scss';

export interface DiscountSwitcherProps {
  messageActive: string;
  messageInactive: string;
  isDiscount: boolean;
  toggleDiscount: () => void;
}

const getBlocksWith = createBemBlockBuilder(['switcher']);

export const DiscountSwitcher: FC<DiscountSwitcherProps> = ({
  messageActive,
  messageInactive,
  toggleDiscount,
  isDiscount,
}) => (
  <div className={getBlocksWith()}>
    <div className={getBlocksWith('__option')}>{messageInactive}</div>
    <div
      className={classNames(getBlocksWith('__switcher'), {
        [getBlocksWith('__switcher-active')]: isDiscount,
      })}
      onClick={toggleDiscount}
    />
    <div className={getBlocksWith('__option')}>{messageActive}</div>
  </div>
);
