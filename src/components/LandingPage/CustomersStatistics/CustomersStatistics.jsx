import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../utils';

import './CustomersStatistics.scss';

const getBlocksWith = createBemBlockBuilder(['customers-statistics']);
const getBlocksWithList = createBemBlockBuilder(['customers-statistics-list']);

export const CustomersStatistics = () => (
  <section className={cx(getBlocksWith())}>
    <div className={cx(getBlocksWith('__container'))}>
      <div className={cx(getBlocksWith('__content'))}>
        <h2 className={getBlocksWith('__title')}>
          Be a part of the growing number of our satisfied customers{' '}
        </h2>
        <h3 className={getBlocksWith('__sub-title')}>
          Streamline quality and efficiency of your testing processes
        </h3>
        <ul className={getBlocksWithList()}>
          <li>
            <strong>1600+</strong>
            <strong>Companies</strong>
            <span>Are already using ReportPortal</span>
          </li>
          <li>
            <strong>40+</strong>
            <strong>Companies from Fortune 500 list</strong>
            <span>Among our clients</span>
          </li>
          <li>
            <strong>46M+</strong>
            <strong>Launches/year</strong>
            <span>Testing activity of our users</span>
          </li>
          <li>
            <strong>1.9M</strong>
            <strong>Downloads</strong>
            <span>Interest in getting benefit from our product</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
