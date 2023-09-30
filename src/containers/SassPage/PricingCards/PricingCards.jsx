import React from 'react';

import { createBemBlockBuilder } from '@utils';

import { PricingCard } from './PricingCard';

import './PricingCards.scss';

const getBlocksWith = createBemBlockBuilder(['pricing-cards']);

export const PricingCards = ({ offersData, discountState }) => (
  <div className={getBlocksWith()}>
    {offersData.map(card => (
      <PricingCard discountState={discountState} card={card} key={card.title} />
    ))}
  </div>
);
