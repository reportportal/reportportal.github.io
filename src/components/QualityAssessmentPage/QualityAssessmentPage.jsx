import React from 'react';

import { DashboardHeader } from '../DashboardHeader';
import { DASHBOARD_HEADER_INFO, TESTING_BOTTOM_BLOCK_INFO } from './constants';
import { TestingBottomBlock } from '../TestingBottomBlock';
import { OurSolution } from './OurSolution';
import { QualityApproach } from './QualityApproach';
import { CommonRequests } from './CommonRequests';

import './QualityAssessmentPage.scss';

export const QualityAssessmentPage = () => (
  <div className="quality-assessment">
    <DashboardHeader
      title={DASHBOARD_HEADER_INFO.title}
      dashboardText={DASHBOARD_HEADER_INFO.dashboardText}
    />
    <OurSolution />
    <CommonRequests />
    <TestingBottomBlock
      title={TESTING_BOTTOM_BLOCK_INFO.title}
      description={TESTING_BOTTOM_BLOCK_INFO.description}
    >
      <QualityApproach />
    </TestingBottomBlock>
  </div>
);
