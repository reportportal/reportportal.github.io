import React from 'react';

import { createBemBlockBuilder } from '../../../../utils';
import { PricingCard } from './PricingCard';

import './PricingCards.scss';

const getPricingCards = createBemBlockBuilder(['cards']);

export const PricingCards = ({ pricingData }) => (
  <div className={getPricingCards()}>
    {pricingData && pricingData.map((card) => <PricingCard {...card} key={card.id} />)}
  </div>
);
