import React from 'react';

import { Layout } from '../components/Layout';
import { Showcase } from '../components/Showcase';
import { WhyReportPortal } from '../components/WhyReportPortal';
import { CustomersStatistics } from '../components/CustomersStatistics';
import { ProcessIntegration } from '../components/ProcessIntegration';

const RootIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <Showcase />
      <WhyReportPortal />
      <CustomersStatistics />
      <ProcessIntegration />
    </Layout>
  );
};

export default RootIndex;
