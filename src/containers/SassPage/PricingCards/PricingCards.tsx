import React, { FC } from 'react';
import { PricingCard } from '@app/components/PricingCard';
import { createBemBlockBuilder, OfferingPlansDto, SassPricingConfig } from '@app/utils';

import './PricingCards.scss';

interface PricingCardsProps {
  plans: OfferingPlansDto;
  pricing: SassPricingConfig;
  isDiscount: boolean;
}

const getBlocksWith = createBemBlockBuilder(['pricing-cards']);

export const PricingCards: FC<PricingCardsProps> = ({ plans, isDiscount }) => {
  const discount = isDiscount ? 'yearly' : 'quarterly';

  return (
    <div className={getBlocksWith()}>
      {plans.items.map(plan => (
        <PricingCard
          key={plan.title}
          title={plan.title}
          isPopular={plan.isPopular}
          description={plan.description}
          features={plan.features}
          period={plan.price?.period as string}
          currency={plan.price?.currency as string}
          actionText={plan.cta.link.title}
          actionVariant={plan.cta.type}
          href={plan.cta.link.url}
          discount={discount}
          pricingInfo={plan.pricingInfo}
          priceValue={plan.price?.[discount]}
        />
      ))}
    </div>
  );
};
