import React from 'react';
import { DOCUMENTATION_URL } from '@app/utils';

import {
  AiIcon,
  DefectTypeIcon,
  InstallIcon,
  PieChartIcon,
  QualityGatesIcon,
  ReleaseIcon,
  ReportingIcon,
  RtAnalyticsIcon,
} from './icons';

export const GENERAL_LIST = [
  {
    icon: <InstallIcon />,
    title: 'Installation',
    link: '/installation',
  },
  {
    icon: <ReleaseIcon />,
    title: 'Releases',
    link: `${DOCUMENTATION_URL}/category/releases`,
  },
];

export const FEATURES_LIST = [
  {
    icon: <ReportingIcon />,
    title: 'Unified test reporting',
    text: 'Get persistent test reporting in a single entry point',
    link: '/features/#single-entry',
  },
  {
    icon: <DefectTypeIcon />,
    title: 'Categorisation of failures',
    text: 'Triage test failures by categorisation of root cause',
    link: '/features/#categorisation',
  },
  {
    icon: <AiIcon />,
    title: 'AI failure reason detection',
    text: 'Reduce your manual efforts for failure triaging with Auto-Analyzer',
    link: '/features/#ai-based',
  },
  {
    icon: <RtAnalyticsIcon />,
    title: 'Real-time analytics',
    text: 'Save time on early reaction by immediate results availability',
    link: '/features/#real-time-reporting',
  },
  {
    icon: <PieChartIcon />,
    title: 'Widgets and Dashboards',
    text: 'Get visibility in QA results and a birds-eye view on the project',
    link: '/features/#visualisation-of-tests',
  },
  {
    icon: <QualityGatesIcon />,
    title: 'Quality gates',
    text: 'Automate release decisions with Quality Gates rules',
    link: '/features/#quality-gates',
  },
];
