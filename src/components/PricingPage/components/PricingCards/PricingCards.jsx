import React from 'react';

import { createBemBlockBuilder } from '../../../../utils';
import { PricingCard } from './PricingCard';

import './PricingCards.scss';

const getBlocksWith = createBemBlockBuilder(['pricing-cards']);

export const PricingCards = ({ pricingData, discountState }) => (
  <div className={getBlocksWith()}>
    {pricingData.map((card) => (
      <PricingCard discountState={discountState} card={card} key={card.id} />
    ))}
  </div>
);
