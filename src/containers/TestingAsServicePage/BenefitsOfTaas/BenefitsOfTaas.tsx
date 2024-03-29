import React, { FC } from 'react';
import classNames from 'classnames';
import { Heading } from '@app/components/Heading';
import { createBemBlockBuilder } from '@app/utils';

import EasyToBuy from './icons/easyToBuy.inline.svg';
import HighStandard from './icons/highStandard.inline.svg';
import Service from './icons/service.inline.svg';
import SpikeCapacity from './icons/spikeCapacity.inline.svg';

import './BenefitsOfTaas.scss';

const getBlocksWith = createBemBlockBuilder(['benefits-of-taas']);
const getBlocksWithList = createBemBlockBuilder(['benefits-of-taas-list']);

const BENEFITS = [
  {
    icon: <EasyToBuy />,
    text: 'Easy to buy through Professional Service Points model',
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
    text: 'Output-based model, with exceptionally high standards for quality',
  },
];

export const BenefitsOfTaas: FC = () => (
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
