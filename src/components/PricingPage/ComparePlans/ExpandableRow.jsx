import React from 'react';

import { createBemBlockBuilder } from '../../../utils';
import { Columns } from './Columns';

import './ComparePlans.scss';

const getBlocksWith = createBemBlockBuilder(['compare']);

export const ExpandableRow = ({ feature, columnsData }) => {
  return (
    <div className={getBlocksWith('__row')}>
      <Columns title={feature} cols={columnsData} />
    </div>
  );
};
