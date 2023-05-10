import React from 'react';

import { createBemBlockBuilder } from '../../../../utils';
import { PricingCard } from './PricingCard';

import './PricingCards.scss';

const getPricingCards = createBemBlockBuilder(['cards']);

export const PricingCards = ({ pricingData, discountState }) => (
  <div className={getPricingCards()}>
    {pricingData &&
      pricingData.map((card) => (
        <PricingCard discountState={discountState} card={card} key={card.id} />
      ))}
  </div>
);
