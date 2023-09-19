import React from 'react';

import { createBemBlockBuilder } from '../../../utils';
import { ButtonSwitcher } from '../../ButtonSwitcher';
import { DiscountSwitcher } from '../DiscountSwitcher';

import './PricingHero.scss';

const getBlocksWith = createBemBlockBuilder(['pricing-hero']);

export const PricingHero = ({
  buttons,
  switchActiveBtn,
  activeButton,
  switchDiscount,
  discountState,
  offerType,
  description,
}) => {
  return (
    <div className={getBlocksWith()}>
      <h1 className={getBlocksWith('__title')}>ReportPortal services pricing</h1>
      <p className={getBlocksWith('__subtitle')}>
        Flexible options for small teams to global enterprises
      </p>
      <div className={getBlocksWith('__btn-box')}>
        <ButtonSwitcher buttons={buttons} onSwitch={switchActiveBtn} activeBtnName={activeButton} />
      </div>
      <div className={getBlocksWith('__wrapper')}>
        <div className={getBlocksWith('__wrapper-title')}>{offerType}</div>
        <div className={getBlocksWith('__wrapper-subtitle')}>{description}</div>
      </div>
      <div className={getBlocksWith('__discount-switcher')}>
        <DiscountSwitcher switchDiscount={switchDiscount} discountState={discountState} />
      </div>
    </div>
  );
};
