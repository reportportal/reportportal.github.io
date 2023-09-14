import React from 'react';

import { Layout } from '../../components/Layout';
import { OnPremisesPage } from '../../components/PricingPage/OnPremisesPage';

const OnPremises = ({ location }) => {
  return (
    <Layout location={location} className="pricingPage">
      <OnPremisesPage />
    </Layout>
  );
};

export default OnPremises;
