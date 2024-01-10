import React, { FC } from 'react';
import { DashboardHeader, TestingBottomBlock } from '@app/components';

import { OurSolution } from './OurSolution';
import { QualityApproach } from './QualityApproach';
import { CommonRequests } from './CommonRequests';
import { ConsultingServices } from './ConsultingServices';
import { DASHBOARD_HEADER_INFO, TESTING_BOTTOM_BLOCK_INFO } from './constants';

import './QualityEngineeringConsultingPage.scss';

export const QualityEngineeringConsultingPage: FC = () => (
  <div className="qe-consulting">
    <DashboardHeader
      title={DASHBOARD_HEADER_INFO.title}
      dashboardText={DASHBOARD_HEADER_INFO.dashboardText}
    />
    <OurSolution />
    <CommonRequests />
    <ConsultingServices />
    <TestingBottomBlock title={TESTING_BOTTOM_BLOCK_INFO.title} url="/contact-us/qe-consulting">
      <QualityApproach />
    </TestingBottomBlock>
  </div>
);
