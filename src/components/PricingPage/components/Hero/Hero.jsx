import React from 'react';

import { createBemBlockBuilder } from '../../../../utils';
import { ButtonSwitcher } from '../../../ButtonSwitcher';
import { DiscountSwitcher } from '../../../DiscountSwitcher';

import './Hero.scss';

const getHeroBlocksWith = createBemBlockBuilder(['hero']);

export const Hero = ({ buttons, switchActiveBtn, activeButton, switchDiscount, discountState }) => {
  return (
    <div className={getHeroBlocksWith()}>
      <h1 className={getHeroBlocksWith('__title')}>ReportPortal services pricing</h1>
      <p className={getHeroBlocksWith('__subtitle')}>
        Flexible options for small teams to global enterprises
      </p>

      <div className={getHeroBlocksWith('__btn-box')}>
        <ButtonSwitcher buttons={buttons} onSwitch={switchActiveBtn} activeBtnName={activeButton} />
      </div>

      <div className={getHeroBlocksWith('__wrapper')}>
        <div className={getHeroBlocksWith('__wrapper-title')}>SaaS</div>
        <div className={getHeroBlocksWith('__wrapper-subtitle')}>
          An instance of ReportPortal application is hosted for you. ReportPortal team takes care
          about infrastructure, availability, backups, monitoring and version updates and provides
          support by request.
        </div>
      </div>

      <DiscountSwitcher switchDiscount={switchDiscount} discountState={discountState} />
    </div>
  );
};
