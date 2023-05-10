import React from 'react';

import { createBemBlockBuilder } from '../../../../utils';
import { PricingCard } from './PricingCard';
import { pricingData } from './pricingData';

import './PricingCards.scss';

const getPricingCards = createBemBlockBuilder(['cards']);

export const PricingCards = () => {
  return (
    <div className={getPricingCards()}>
      {pricingData.map((card) => (
        <PricingCard {...card} key={card.id} />
      ))}
    </div>
  );
};
