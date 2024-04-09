import React, { FC } from 'react';
import { PricingCard } from '@app/components/PricingCard';
import { createBemBlockBuilder, SAAS_OFFERS, SassPricingConfig, Discount } from '@app/utils';

import './PricingCards.scss';

interface PricingCardsProps {
  pricing: SassPricingConfig;
  isDiscount: boolean;
}

const getBlocksWith = createBemBlockBuilder(['pricing-cards']);

export const PricingCards: FC<PricingCardsProps> = ({ pricing, isDiscount }) => {
  const convertedPriceList = SAAS_OFFERS.map(offer => ({
    ...offer,
    priceValue: pricing.prices[offer.key],
    currency: pricing.currency,
    discount: (isDiscount ? 'yearly' : 'quarterly') as Discount,
    period: pricing.period,
  }));

  return (
    <div className={getBlocksWith()}>
      {convertedPriceList.map(({ key, ...offer }) => (
        <PricingCard key={key} {...offer} />
      ))}
    </div>
  );
};
