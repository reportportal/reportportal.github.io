import React from 'react';

import { CommunityIcon } from './icons/CommunityIcon';
import { SponsorIcon } from './icons/SponsorIcon';

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
    link: '/sponsors/business',
  },
];
