import React from 'react';

import BusinessIcon from './icons/business-icon.inline.svg';
import IndividualIcon from './icons/individual-icon.inline.svg';
import MasterCard from './icons/mastercard.svg';
import AthenaHealth from './icons/athena-health.svg';
import Disney from './icons/disney.svg';
import DowJones from './icons/dow-jones.svg';
import Ibm from './icons/ibm.svg';
import Nokia from './icons/nokia.svg';
import Walmart from './icons/walmart.svg';

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
// TODO: Only for designer purposes. Replace with actual sponsors when there are enough
export const SPONSOR_SLIDES = [
  {
    id: 'mastercard',
    src: MasterCard,
  },
  {
    id: 'athena-health',
    src: AthenaHealth,
  },
  {
    id: 'disney',
    src: Disney,
  },
  {
    id: 'dow-jones',
    src: DowJones,
  },
  {
    id: 'ibm',
    src: Ibm,
  },
  {
    id: 'nokia',
    src: Nokia,
  },
  {
    id: 'walmart',
    src: Walmart,
  },
  {
    id: 'mastercard1',
    src: MasterCard,
  },
  {
    id: 'athena-health1',
    src: AthenaHealth,
  },
  {
    id: 'disney1',
    src: Disney,
  },
  {
    id: 'dow-jones1',
    src: DowJones,
  },
  {
    id: 'ibm1',
    src: Ibm,
  },
  {
    id: 'nokia1',
    src: Nokia,
  },
  {
    id: 'walmart1',
    src: Walmart,
  },
];
