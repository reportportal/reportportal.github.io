import React from 'react';

import CommunityIcon from './icons/community-icon.inline.svg';
import SponsorIcon from './icons/sponsors-icon.inline.svg';

export const COMMUNITY_LIST = [
  {
    icon: <CommunityIcon />,
    title: 'Join the community',
    text: 'Connect, share and learn',
    link: '/community',
  },
  {
    icon: <SponsorIcon />,
    title: 'Become a sponsor',
    text: 'Support us and get benefits',
    link: '/sponsorship-program/business',
  },
];
