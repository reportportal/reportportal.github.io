import React from 'react';

import { StartTestingWithReportPortal } from '../StartTestingWithReportPortal';
import { ProcessIntegration } from '../ProcessIntegration';
import { Showcase } from './Showcase';
import { WhyReportPortal } from './WhyReportPortal';
import { CustomersStatistics } from './CustomersStatistics';
import { BenefitsForBusiness } from './BenefitsForBusiness';

export const LandingPage = () => {
  return (
    <>
      <Showcase />
      <WhyReportPortal />
      <BenefitsForBusiness />
      <CustomersStatistics />
      <ProcessIntegration />
      <StartTestingWithReportPortal />
    </>
  );
};
