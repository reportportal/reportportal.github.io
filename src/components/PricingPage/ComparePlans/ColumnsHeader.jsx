import React from 'react';

import { createBemBlockBuilder } from '../../../utils';
import { Columns } from './Columns';
import { headerColumnTitles } from '../SassPage/dataPlans';

import './ComparePlans.scss';

const getBlocksWith = createBemBlockBuilder(['compare']);

export const ColumnsHeader = ({ title }) => (
  <div className={getBlocksWith('__tab-header')}>
    <Columns title={title} cols={headerColumnTitles} />
  </div>
);
