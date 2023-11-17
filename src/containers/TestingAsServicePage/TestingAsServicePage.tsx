import React, { FC } from 'react';
import { DashboardHeader, SpiderBlock, TestingBottomBlock } from '@app/components';

import { BenefitsOfTaas } from './BenefitsOfTaas';
import { Challenges } from './Challenges';
import { ServiceHours } from './ServiceHours';
import { Tips } from './Tips';
import { Approach } from './Approach';
import { DASHBOARD_HEADER_INFO, TESTING_BOTTOM_BLOCK_INFO } from './constants';

export const TestingAsServicePage: FC = () => (
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
      url="/contact-us/taas"
    >
      <Approach />
    </TestingBottomBlock>
  </>
);
