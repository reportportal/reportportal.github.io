import React from 'react';
import { Layout } from '../components/Layout';
import { DiagonalHero } from '../components/DiogonalHero/DiagonalHero';
import { PricingCards } from '../components/PricingCards';
import { PlanCompare } from '../components/PlanComare';

const Pricing = ({ location }) => {
  return (
    <Layout location={location}>
      <DiagonalHero />
      <PricingCards />
      <PlanCompare />
    </Layout>
  );
};

export default Pricing;
