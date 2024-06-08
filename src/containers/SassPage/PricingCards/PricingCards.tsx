import React, { FC } from 'react';
import { PricingCard } from '@app/components/PricingCard';
import { createBemBlockBuilder, OfferingPlansDto } from '@app/utils';

import './PricingCards.scss';

interface PricingCardsProps {
  plans: OfferingPlansDto;
  isDiscount: boolean;
}

const getBlocksWith = createBemBlockBuilder(['pricing-cards']);

export const PricingCards: FC<PricingCardsProps> = ({ plans, isDiscount }) => {
  const discount = isDiscount ? 'yearly' : 'quarterly';

  return (
    <div className={getBlocksWith()}>
      {plans.items.map(plan => (
        <PricingCard key={plan.title} plan={plan} discount={discount} />
      ))}
    </div>
  );
};
