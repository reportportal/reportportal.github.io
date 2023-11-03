import React from 'react';
import { UnorderedList } from '@app/components/UnorderedList';

import FasterTTM from './icons/FasterTTM.inline.svg';
import Flexibility from './icons/Flexibility.inline.svg';
import LowerCost from './icons/LowerCost.inline.svg';
import Service from './icons/Service.inline.svg';
import { FLEXIBILITY_LIST, SERVICE_LIST, FASTER_TTM_LIST, LOWER_COST_LIST } from './constants';

import './Benefits.scss';

const BENEFITS = [
  {
    icon: <Flexibility />,
    title: 'Increased Scalability & Flexibility',
    list: FLEXIBILITY_LIST,
  },
  {
    icon: <LowerCost />,
    title: 'Lower cost, Uncompromised Quality',
    list: LOWER_COST_LIST,
  },
  {
    icon: <FasterTTM />,
    title: 'Faster time to market through faster time to action',
    list: FASTER_TTM_LIST,
  },
  {
    icon: <Service />,
    title: 'Fully governed service',
    list: SERVICE_LIST,
  },
];

export const Benefits: React.FC = () => (
  <div className="benefits">
    {BENEFITS.map(({ icon, title, list }) => (
      <div key={title} className="benefits__item">
        {icon}
        <div className="benefits__item-title">{title}</div>
        <UnorderedList list={list} />
      </div>
    ))}
  </div>
);
