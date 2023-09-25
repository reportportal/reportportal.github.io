import React from 'react';

import { createBemBlockBuilder } from '@utils';

import { Columns } from '../Columns';

import '../ComparePlans.scss';

const getBlocksWith = createBemBlockBuilder(['compare']);

export const ColumnsHeader = ({ title, columns, mobileColumns }) => (
  <div className={getBlocksWith('__tab-header')}>
    <Columns title={title} cols={columns} mobileColumns={mobileColumns} />
  </div>
);
