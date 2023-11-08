import React from 'react';

import { StartTestingWithReportPortal } from '../../components/StartTestingWithReportPortal';
import { ProcessIntegration } from '../../components/ProcessIntegration';
import { SubscriptionBanner } from '../../components/SubscriptionBanner';

import { Showcase } from './Showcase';
import { WhyReportPortal } from './WhyReportPortal';
import { HowItWorks } from './HowItWorks';
import { CustomersStatistics } from './CustomersStatistics';
import { BenefitsForBusiness } from './BenefitsForBusiness';
import { FeaturesForEngineers } from './FeaturesForEngineers';
import { LatestFromOurBlog } from './LatestFromOurBlog';

export const LandingPage: React.FC = () => (
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
