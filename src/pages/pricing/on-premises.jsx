import React from 'react';

import { Layout } from '../../components/Layout';
import { OnPremisesPage } from '../../components/PricingPage/OnPremisesPage';

const OnPremises = () => {
  return (
    <Layout className="offer-page-wrapper">
      <OnPremisesPage />
    </Layout>
  );
};

export default OnPremises;
