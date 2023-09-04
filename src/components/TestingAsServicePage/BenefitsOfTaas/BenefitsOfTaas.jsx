import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '../../../utils';
import EasyToBuy from './icons/easyToBuy.inline.svg';
import HighStandard from './icons/highStandard.inline.svg';
import Service from './icons/service.inline.svg';
import SpikeCapacity from './icons/spikeCapacity.inline.svg';
import { Heading } from '../../Heading';

import './BenefitsOfTaas.scss';

const getBlocksWith = createBemBlockBuilder(['benefits-of-taas']);
const getBlocksWithList = createBemBlockBuilder(['benefits-of-taas-list']);

const BENEFITS = [
  {
    icon: <EasyToBuy />,
    text: 'Easy to buy through professional service hours model',
  },
  {
    icon: <Service />,
    text: 'Fully governed service: the right resources for the problem, including QA management',
  },
  {
    icon: <SpikeCapacity />,
    text: 'Ability to spike \ncapacity',
  },
  {
    icon: <HighStandard />,
    text: 'Outcome-based model, with exceptionally high standards for quality',
  },
];

export const BenefitsOfTaas = () => (
  <section className={classNames(getBlocksWith(), 'container')}>
    <Heading title="Benefits of TaaS" />
    <div className={getBlocksWith('__content')}>
      <ul className={getBlocksWithList()}>
        {BENEFITS.map(({ icon, text }) => (
          <li key={text}>
            {icon}
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
