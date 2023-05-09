import React from 'react';
import { Layout } from '../components/Layout';
import { PricingPage } from '../components/PricingPage';

const Pricing = ({ location }) => {
  return (
    <Layout location={location}>
      <PricingPage />
    </Layout>
  );
};

export default Pricing;
