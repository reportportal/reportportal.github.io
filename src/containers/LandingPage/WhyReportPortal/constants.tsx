import React from 'react';

import { RealTimeAnalyticsIcon } from './icons/RealTimeAnalyticsIcon';
import { TestResultsIcon } from './icons/TestResultsIcon';
import { MachineLearningIcon } from './icons/MachineLearningIcon';
import { OpenSourceIcon } from './icons/OpenSourceIcon';

export const REPORT_PORTAL_INFO = [
  {
    icon: <RealTimeAnalyticsIcon />,
    title: 'Real-time analytics',
    description: 'Investigate the failure reasons immediately after the test is completed',
  },
  {
    icon: <TestResultsIcon />,
    title: 'Test results visualization',
    description: 'Configure simple and understandable reports for your teams',
  },
  {
    icon: <MachineLearningIcon />,
    title: 'Machine learning',
    description: 'Analyze the failure reasons by Auto-Analyzer based on Machine Learning',
  },
  {
    icon: <OpenSourceIcon />,
    title: 'Open source',
    description: 'Deploy ReportPortal from our GitHub repository',
  },
];
