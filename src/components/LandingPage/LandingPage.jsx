import React from 'react';

import { StartTestingWithReportPortal } from '../StartTestingWithReportPortal';
import { ProcessIntegration } from '../ProcessIntegration';
import { Showcase } from './Showcase';
import { WhyReportPortal } from './WhyReportPortal';
import { HowItWorks } from './HowItWorks';
import { CustomersStatistics } from './CustomersStatistics';
import { BenefitsForBusiness } from './BenefitsForBusiness';
import { FeaturesForEngineers } from './FeaturesForEngineers';
import { SubscriptionBanner } from '../SubscriptionBanner';
import { LatestFromOurBlog } from './LatestFromOurBlog/LatestFromOurBlog';

export const LandingPage = () => {
  return (
    <>
      <Showcase />
      <WhyReportPortal />
      <HowItWorks />
      <BenefitsForBusiness />
      <FeaturesForEngineers />
      <CustomersStatistics />
      <ProcessIntegration />
      <StartTestingWithReportPortal />
      <LatestFromOurBlog />
      <SubscriptionBanner />
    </>
  );
};
