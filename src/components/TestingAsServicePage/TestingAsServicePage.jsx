import React from 'react';

import { BenefitsOfTaas } from './BenefitsOfTaas';
import { Challenges } from './Challenges';
import { ServiceHours } from './ServiceHours';
import { Tips } from './Tips';
import { Approach } from './Approach';
import { DashboardHeader } from '../DashboardHeader';
import { SpiderBlock } from '../SpiderBlock';
import { TestingBottomBlock } from '../TestingBottomBlock';
import { ApplyOurService } from '../ApplyOurService';
import { DASHBOARD_HEADER_INFO, TESTING_BOTTOM_BLOCK_INFO } from './constants';

export const TestingAsServicePage = () => (
  <>
    <DashboardHeader
      title={DASHBOARD_HEADER_INFO.title}
      dashboardText={DASHBOARD_HEADER_INFO.dashboardText}
    />
    <BenefitsOfTaas />
    <SpiderBlock />
    <Challenges />
    <ServiceHours />
    <Tips />
    <TestingBottomBlock
      title={TESTING_BOTTOM_BLOCK_INFO.title}
      description={TESTING_BOTTOM_BLOCK_INFO.description}
    >
      <Approach />
      <ApplyOurService url="/contact-us/taas" />
    </TestingBottomBlock>
  </>
);
