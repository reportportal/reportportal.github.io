import React, { FC } from 'react';
import { createBemBlockBuilder, SAAS_OFFERS, SassPricingConfig } from '@app/utils';

import { PricingCard } from './PricingCard';

import './PricingCards.scss';

interface PricingCardsProps {
  pricing: SassPricingConfig;
  isDiscount: boolean;
}

const getBlocksWith = createBemBlockBuilder(['pricing-cards']);

export const PricingCards: FC<PricingCardsProps> = ({ pricing, isDiscount }) => (
  <div className={getBlocksWith()}>
    {SAAS_OFFERS.map(offer => (
      <PricingCard
        key={offer.key}
        offer={offer}
        pricing={pricing}
        discount={isDiscount ? 'yearly' : 'quarterly'}
      />
    ))}
  </div>
);
