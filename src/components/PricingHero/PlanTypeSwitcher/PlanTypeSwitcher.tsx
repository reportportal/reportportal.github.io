import React, { FC } from 'react';
import classNames from 'classnames';
import { createBemBlockBuilder } from '@app/utils';

import './PlanTypeSwitcher.scss';

export interface PlanTypeSwitcherProps {
  messageActive: string;
  messageInactive: string;
  isYearlyPlanType: boolean;
  togglePlanType: () => void;
}

const getBlocksWith = createBemBlockBuilder(['plan-type-switcher']);

export const PlanTypeSwitcher: FC<PlanTypeSwitcherProps> = ({
  messageActive,
  messageInactive,
  isYearlyPlanType,
  togglePlanType,
}) => (
  <div className={getBlocksWith()}>
    <div className={getBlocksWith('__option')}>{messageInactive}</div>
    <div
      className={classNames(getBlocksWith('__switcher'), {
        [getBlocksWith('__switcher-active')]: isYearlyPlanType,
      })}
      onClick={togglePlanType}
    />
    <div className={getBlocksWith('__option')}>{messageActive}</div>
  </div>
);
