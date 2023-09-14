import React from 'react';

import { Layout } from '../../components/Layout';
import { SaasPage } from '../../components/PricingPage/SassPage';

const Saas = ({ location }) => {
  return (
    <Layout location={location} className="pricingPage">
      <SaasPage />
    </Layout>
  );
};

export default Saas;
