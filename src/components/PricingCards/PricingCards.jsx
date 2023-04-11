import React from 'react';
import { PricingCard } from './PricingCard/PricingCard';
import { Container } from '../Container';

import { data } from './pricing-mock-data';
import './PricingCards.scss';
import { createBemBlockBuilder } from '../../utils';

export const PricingCards = () => {
  const getPricingCards = createBemBlockBuilder(['pricingCards']);

  return (
    <Container as="div">
      <div className={getPricingCards()}>
        {data.map((card) => (
          <PricingCard {...card} key={card.id} />
        ))}
      </div>
    </Container>
  );
};
