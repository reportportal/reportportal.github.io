import React from 'react';

import { Layout } from '../../components/Layout';
import { OnPremisesPage } from '../../components/PricingPage/OnPremisesPage';

const OnPremises = ({ location }) => {
  return (
    <Layout location={location} className="pricing-page">
      <OnPremisesPage />
    </Layout>
  );
};

export default OnPremises;
