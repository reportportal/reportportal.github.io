import React, { FC } from 'react';
import { createBemBlockBuilder } from '@app/utils';

import './DashboardHeader.scss';

interface DashboardHeaderProps {
  title: string;
  dashboardText: string;
}

const getBlocksWith = createBemBlockBuilder(['dashboard-header']);

export const DashboardHeader: FC<DashboardHeaderProps> = ({ title, dashboardText }) => (
  <div className={getBlocksWith()}>
    <div className="container">
      <div className={getBlocksWith('__heading')}>
        <h1>Services</h1>
        <h2>{title}</h2>
      </div>
      <div className={getBlocksWith('__dashboard')}>
        <div className={getBlocksWith('__dashboard-text')}>{dashboardText}</div>
      </div>
    </div>
  </div>
);
