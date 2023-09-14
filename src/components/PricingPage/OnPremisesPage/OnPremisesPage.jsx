import React from 'react';
import { noop } from 'lodash';

import { usePricingHeroProps } from '../usePricingHeroProps';
import { PricingHero } from '../PricingHero';

export const OnPremisesPage = () => {
  const { buttons, discountState, toggleDiscountState } = usePricingHeroProps();

  return (
    <div>
      <PricingHero
        buttons={buttons}
        activeButton="On-Premises"
        switchActiveBtn={noop}
        switchDiscount={toggleDiscountState}
        discountState={discountState}
      />
      On-Premises
    </div>
  );
};
