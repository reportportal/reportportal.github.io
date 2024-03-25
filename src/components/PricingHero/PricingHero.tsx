import React, { FC } from 'react';
import { ButtonSwitcherProps } from '@app/components/ButtonSwitcher';
import { HeroSwitching } from '@app/components/HeroSwitching';
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
    <HeroSwitching
      activeButton={activeButton}
      buttons={buttons}
      title={title}
      subtitle={subtitle}
    />
    <div className={getBlocksWith('__wrapper')}>
      <div className={getBlocksWith('__wrapper-title')}>{offerType}</div>
      <div className={getBlocksWith('__wrapper-subtitle')}>{description}</div>
    </div>
    <div className={getBlocksWith('__discount-switcher')}>
      <DiscountSwitcher {...switcherProps} />
    </div>
  </div>
);
