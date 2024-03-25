import React from 'react';

import BusinessIcon from './icons/business-icon.inline.svg';
import IndividualIcon from './icons/individual-icon.inline.svg';

export const PRICING_BUTTONS = [
  {
    text: 'Business',
    icon: <BusinessIcon />,
    linkTo: '/sponsors/business',
  },
  {
    text: 'Individual',
    icon: <IndividualIcon />,
    linkTo: '/sponsors/individual',
  },
];
