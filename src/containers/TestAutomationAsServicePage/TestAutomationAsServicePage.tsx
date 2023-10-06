import React from 'react';

import { DashboardHeader } from '@components/DashboardHeader';
import { SpiderBlock } from '@components/SpiderBlock';
import { TestingBottomBlock } from '@components/TestingBottomBlock';

import { Benefits } from './Benefits';
import { ServiceAria } from './ServiceAria';
import { DASHBOARD_HEADER_INFO, TESTING_BOTTOM_BLOCK_INFO } from './constants';

import './TestAutomationAsServicePage.scss';

export const TestAutomationAsServicePage = () => (
  <div className="test-automation">
    <DashboardHeader
      title={DASHBOARD_HEADER_INFO.title}
      dashboardText={DASHBOARD_HEADER_INFO.dashboardText}
    />
    <ServiceAria />
    <SpiderBlock blockType="opacity" />
    <TestingBottomBlock
      title={TESTING_BOTTOM_BLOCK_INFO.title}
      description={TESTING_BOTTOM_BLOCK_INFO.description}
      url="/contact-us/taaas"
    >
      <Benefits />
    </TestingBottomBlock>
  </div>
);
