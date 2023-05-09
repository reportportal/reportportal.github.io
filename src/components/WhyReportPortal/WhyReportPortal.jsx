import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { RealTimeAnalyticsIcon } from './icons/RealTimeAnalyticsIcon';
import { TestResultsIcon } from './icons/TestResultsIcon';
import { MachineLearningIcon } from './icons/MachineLearningIcon';
import { OpenSourceIcon } from './icons/OpenSourceIcon';

import './WhyReportPortal.scss';

const getBlocksWith = createBemBlockBuilder(['why-report-portal']);
const getBlocksWithList = createBemBlockBuilder(['why-report-portal-list']);

export const WhyReportPortal = () => (
  <section className={cx(getBlocksWith(), 'container')}>
    <h2 className={getBlocksWith('__title')}>Why ReportPortal?</h2>
    <div className={getBlocksWith('__content')}>
      <ul className={getBlocksWithList()}>
        <li>
          <RealTimeAnalyticsIcon />
          <h3>Real-time analytics</h3>
          <span>Investigate the failure reasons immediately after the test is completed</span>
        </li>
        <li>
          <TestResultsIcon />
          <h3>Test results visualization</h3>
          <span>Configure simple and understandable reports for your teams</span>
        </li>
        <li>
          <MachineLearningIcon />
          <h3>Machine learning</h3>
          <span>Analyze the failure reasons by Auto-Analyzer based on Machine Learning</span>
        </li>
        <li>
          <OpenSourceIcon />
          <h3>Open source</h3>
          <span>Deploy ReportPortal from our GitHub repository</span>
        </li>
      </ul>
    </div>
  </section>
);
