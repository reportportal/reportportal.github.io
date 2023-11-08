import React from 'react';

import { createBemBlockBuilder } from '@app/utils';

import { Columns } from '../Columns';

import '../ComparePlans.scss';

interface Props {
  title: string;
  columns: string[];
  mobileColumns: {
    [key: string]: string;
  };
}

const getBlocksWith = createBemBlockBuilder(['compare']);

export const ColumnsHeader: React.FC<Props> = ({ title, columns, mobileColumns }) => (
  <div className={getBlocksWith('__tab-header')}>
    <Columns title={title} cols={columns} mobileColumns={mobileColumns} />
  </div>
);
