import React, { FC } from 'react';
import { createBemBlockBuilder } from '@app/utils';

import { STATISTIC_INFO } from './constants';

import './CustomersStatistics.scss';

const getBlocksWith = createBemBlockBuilder(['customers-statistics']);
const getBlocksWithList = createBemBlockBuilder(['customers-statistics-list']);

export const CustomersStatistics: FC = () => (
  <section className={getBlocksWith()}>
    <div className={getBlocksWith('__container')}>
      <div className={getBlocksWith('__content')}>
        <h2 className={getBlocksWith('__title')}>
          Be a part of the growing number of our satisfied customers{' '}
        </h2>
        <h3 className={getBlocksWith('__sub-title')}>
          Streamline quality and efficiency of your testing processes
        </h3>
        <ul className={getBlocksWithList()}>
          {STATISTIC_INFO.map(({ quantity, entities, achievement }) => (
            <li key={quantity}>
              <strong>{quantity}</strong>
              <strong>{entities}</strong>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
