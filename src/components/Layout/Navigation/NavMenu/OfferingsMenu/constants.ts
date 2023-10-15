import React from 'react';

import SaaSIcon from './icons/saas.inline.svg';
import OnPremiseIcon from './icons/on-premise.inline.svg';
import FreeVersionIcon from './icons/free-version.inline.svg';
import TaaSIcon from './icons/taas.inline.svg';
import TAaaSIcon from './icons/taaas.inline.svg';
import QualityAssessmentIcon from './icons/quality-assessment.inline.svg';

export const PRICING_CONFIG = [
  {
    icon: <SaaSIcon />,
    title: 'SaaS',
    text: 'We host and support an instance for your organization',
    link: '/pricing/saas',
  },
  {
    icon: <OnPremiseIcon />,
    title: 'On-Premises',
    text: 'Self-hosted instance with support from our team',
    link: '/pricing/on-premises',
  },
  {
    icon: <FreeVersionIcon />,
    title: 'Free version',
    text: 'Install and use ReportPortal for free via self-hosted deployment',
    link: '/installation',
  },
];

export const SERVICE_LIST = [
  {
    icon: <TaaSIcon />,
    title: 'Testing as a Service',
    text: 'On-demand testing resources to optimize your testing costs',
    link: '/testing-as-a-service',
  },
  {
    icon: <TAaaSIcon />,
    title: 'Test Automation as a Service',
    text: 'On-demand end-to-end Test Automation services',
    link: '/test-automation-as-a-service',
  },
  {
    icon: <QualityAssessmentIcon />,
    title: 'Quality Assessment',
    text: 'Consulting to bring up Quality Engineering Transformation',
    link: '/quality-assessment',
  },
];

export const PRICING_FOR_SOLUTIONS_LIST = [
  {
    iconClass: 'drill4j',
    title: 'Drill4J',
    link: '/accelerators/d4j',
  },
  {
    iconClass: 'healenium',
    title: 'Healenium',
    link: '/accelerators/hlm',
  },
  {
    iconClass: 'qa-space',
    title: 'QaSpace',
    link: '/accelerators/qasp',
  },
];
