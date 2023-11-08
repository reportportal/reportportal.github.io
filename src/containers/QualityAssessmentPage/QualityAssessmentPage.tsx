import React, { FC } from 'react';
import { DashboardHeader, TestingBottomBlock } from '@app/components';

import { OurSolution } from './OurSolution';
import { QualityApproach } from './QualityApproach';
import { CommonRequests } from './CommonRequests';
import { DASHBOARD_HEADER_INFO, TESTING_BOTTOM_BLOCK_INFO } from './constants';

import './QualityAssessmentPage.scss';

export const QualityAssessmentPage: FC = () => (
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
      url="/contact-us/qaaas"
    >
      <QualityApproach />
    </TestingBottomBlock>
  </div>
);
