import React from 'react';
import PropTypes from 'prop-types';

import { createBemBlockBuilder } from '../../utils';

import './DashboardHeader.scss';

interface Props {
  title: string
  dashboardText: string
}

const getBlocksWith = createBemBlockBuilder(['dashboard-header']);

export const DashboardHeader: React.FC<Props> = ({ title, dashboardText }) => (
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

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  dashboardText: PropTypes.string.isRequired,
};