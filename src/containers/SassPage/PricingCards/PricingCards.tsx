import React, { FC } from 'react';
import { createBemBlockBuilder } from '@app/utils';

import { PricingCard } from './PricingCard';

import './PricingCards.scss';

interface PricingCardsProps {
  offersData: {
    title: string;
    description: string;
    listItems: string[];
    price: {
      currency: string;
      value: string;
      period: string;
      message: string;
      discountedValue: string;
    };
    actionText: string;
    isPopular: string;
    actionVariant: string;
    href: string;
  }[];
  discountState: string;
}

const getBlocksWith = createBemBlockBuilder(['pricing-cards']);

export const PricingCards: FC<PricingCardsProps> = ({ offersData, discountState }) => (
  <div className={getBlocksWith()}>
    {offersData.map(card => (
      <PricingCard discountState={discountState} card={card} key={card.title} />
    ))}
  </div>
);
