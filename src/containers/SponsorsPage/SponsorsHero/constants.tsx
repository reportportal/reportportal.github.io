import React from 'react';

import BusinessIcon from './icons/business-icon.inline.svg';
import IndividualIcon from './icons/individual-icon.inline.svg';

export const PRICING_BUTTONS = [
  {
    text: 'Business',
    icon: <BusinessIcon />,
    linkTo: '/sponsorship-program/business',
  },
  {
    text: 'Individual',
    icon: <IndividualIcon />,
    linkTo: '/sponsorship-program/individual',
  },
];
