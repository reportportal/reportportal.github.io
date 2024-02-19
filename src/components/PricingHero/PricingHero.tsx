import React, { FC } from 'react';
import { ButtonSwitcher, ButtonSwitcherProps } from '@app/components';
import { createBemBlockBuilder } from '@app/utils';

import { DiscountSwitcher, DiscountSwitcherProps } from './DiscountSwitcher';

import './PricingHero.scss';

interface PricingHeroProps {
  title: string;
  buttons: ButtonSwitcherProps['buttons'];
  activeButton: string;
  offerType: string;
  description: string;
  switcherProps: DiscountSwitcherProps;
  subtitle?: string;
}

const getBlocksWith = createBemBlockBuilder(['pricing-hero']);

export const PricingHero: FC<PricingHeroProps> = ({
  title,
  subtitle,
  buttons,
  activeButton,
  switcherProps,
  offerType,
  description,
}) => (
  <div className={getBlocksWith()}>
    <h1 className={getBlocksWith('__title')}>{title}</h1>
    {subtitle && <p className={getBlocksWith('__subtitle')}>{subtitle}</p>}
    <div className={getBlocksWith('__btn-box')}>
      <ButtonSwitcher buttons={buttons} activeBtnName={activeButton} />
    </div>
    <div className={getBlocksWith('__wrapper')}>
      <div className={getBlocksWith('__wrapper-title')}>{offerType}</div>
      <div className={getBlocksWith('__wrapper-subtitle')}>{description}</div>
    </div>
    <div className={getBlocksWith('__discount-switcher')}>
      <DiscountSwitcher {...switcherProps} />
    </div>
  </div>
);
