import React from 'react';

import BrandExposure from './icons/brand-exposure.inline.svg';
import CommunityEngagement from './icons/community-engagement.inline.svg';
import DriveInnovation from './icons/drive-innovation.inline.svg';
import PersonalRecognition from './icons/personal-recognition.inline.svg';

const COMMON_SPONSORS_INFO = [
  {
    icon: <DriveInnovation />,
    title: 'Drive innovation',
    description:
      'Your sponsorship aids in the constant enhancement and quality assurance of ReportPortal',
  },
  {
    icon: <CommunityEngagement />,
    title: 'Community engagement',
    description:
      'Sponsorship showcases your dedication to quality software development within the testing community',
  },
];

const BUSINESS_INFO = [
  ...COMMON_SPONSORS_INFO,
  {
    icon: <BrandExposure />,
    title: 'Brand exposure',
    description:
      "Thousands of ReportPortal users and contributors will see your brand, enhancing your company's recognition",
  },
];

const INDIVIDUAL_INFO = [
  ...COMMON_SPONSORS_INFO,
  {
    icon: <PersonalRecognition />,
    title: 'Personal recognition',
    description:
      'Thousands of ReportPortal users will recognize your contribution, enhancing your reputation in the tech industry',
  },
];

export const SPONSORS_INFO = {
  business: BUSINESS_INFO,
  individual: INDIVIDUAL_INFO,
};
