import React from 'react';

import { Layout } from '../components/Layout';
import { Showcase } from '../components/Showcase';
import { WhyReportPortal } from '../components/WhyReportPortal';

const RootIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <Showcase />
      <WhyReportPortal />
    </Layout>
  );
};

export default RootIndex;
