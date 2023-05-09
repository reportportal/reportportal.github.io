import React from 'react';

import { DiagonalHero } from './components/DiogonalHero';
import { PricingCards } from './components/PricingCards';
import { PlanCompare } from './components/PlanComare';

import './PricingPage.scss';

export const PricingPage = () => {
  return (
    <div>
      <DiagonalHero />
      <PricingCards />
      <PlanCompare />
    </div>
  );
};
