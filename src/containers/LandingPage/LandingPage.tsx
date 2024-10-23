import React, { FC } from 'react';
import { StartTestingWithReportPortal } from '@app/components/StartTestingWithReportPortal';
import { ProcessIntegration } from '@app/components/ProcessIntegration';
import { SubscriptionBanner } from '@app/components/SubscriptionBanner';

import { Showcase } from './Showcase';
import { WhyReportPortal } from './WhyReportPortal';
import { HowItWorks } from './HowItWorks';
import { CustomersStatistics } from './CustomersStatistics';
import { BenefitsForBusiness } from './BenefitsForBusiness';
import { FeaturesForEngineers } from './FeaturesForEngineers';
import { LatestFromOurBlog } from './LatestFromOurBlog';

export const LandingPage: FC = () => (
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
