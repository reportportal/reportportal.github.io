import React, { FC } from 'react';
import { createBemBlockBuilder } from '@app/utils';

import { ButtonSwitcher, ButtonSwitcherProps } from '../ButtonSwitcher';
import { DiscountSwitcher, DiscountSwitcherProps } from './DiscountSwitcher';

import './PricingHero.scss';

interface PricingHeroProps {
  title: string;
  subtitle: string;
  buttons: ButtonSwitcherProps['buttons'];
  switchActiveBtn: () => void;
  activeButton: string;
  switchDiscount: () => void;
  discountState: boolean;
  offerType: string;
  description: string;
  switcherProps: DiscountSwitcherProps;
}

const getBlocksWith = createBemBlockBuilder(['pricing-hero']);

export const PricingHero: FC<PricingHeroProps> = ({
  title,
  subtitle,
  buttons,
  switchActiveBtn,
  activeButton,
  switcherProps,
  offerType,
  description,
}) => (
  <div className={getBlocksWith()}>
    <h1 className={getBlocksWith('__title')}>{title}</h1>
    {subtitle && <p className={getBlocksWith('__subtitle')}>{subtitle}</p>}
    <div className={getBlocksWith('__btn-box')}>
      <ButtonSwitcher buttons={buttons} onSwitch={switchActiveBtn} activeBtnName={activeButton} />
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
