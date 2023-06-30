import React from 'react';

import { Layout } from '../components/Layout';
import { Showcase } from '../components/Showcase';
import { WhyReportPortal } from '../components/WhyReportPortal';
import { CustomersStatistics } from '../components/CustomersStatistics';
import { ProcessIntegration } from '../components/ProcessIntegration';
import { StartTestingWithReportPortal } from '../components/StartTestingWithReportPortal';

const RootIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <Showcase />
      <WhyReportPortal />
      <CustomersStatistics />
      <ProcessIntegration />
      <StartTestingWithReportPortal />
    </Layout>
  );
};

export default RootIndex;
