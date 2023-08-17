import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '../../../utils';
import { EasyToBuy } from './icons/EasyToBuy';
import { HighStandard } from './icons/HighStandard';
import { Service } from './icons/Service';
import { SpikeCapacity } from './icons/SpikeCapacity';
import { Heading } from '../../Heading';

import './BenefitsOfTaas.scss';

const getBlocksWith = createBemBlockBuilder(['benefits-of-taas']);
const getBlocksWithList = createBemBlockBuilder(['benefits-of-taas-list']);

export const BenefitsOfTaas = () => (
  <section className={classNames(getBlocksWith(), 'container')}>
    <Heading title="Benefits of TaaS" />
    <div className={getBlocksWith('__content')}>
      <ul className={getBlocksWithList()}>
        <li>
          <EasyToBuy />
          <span>Easy to buy through professional service hours model</span>
        </li>
        <li>
          <Service />
          <span>
            Fully governed service: the right resources for the problem, including QA management
          </span>
        </li>
        <li>
          <SpikeCapacity />
          <span>Ability to spike capacity</span>
        </li>
        <li>
          <HighStandard />
          <span>Outcome-based model, with exceptionally high standards for quality</span>
        </li>
      </ul>
    </div>
  </section>
);
