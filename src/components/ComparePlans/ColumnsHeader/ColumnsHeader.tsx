import React, { FC } from 'react';
import { createBemBlockBuilder } from '@app/utils';

import { Columns } from '../Columns';

import '../ComparePlans.scss';

interface ColumnsHeaderProps {
  title: string;
  columns: string[];
  mobileColumns: {
    [key: string]: string;
  };
}

const getBlocksWith = createBemBlockBuilder(['compare']);

export const ColumnsHeader: FC<ColumnsHeaderProps> = ({ title, columns, mobileColumns }) => (
  <div className={getBlocksWith('__tab-header')}>
    <Columns title={title} cols={columns} mobileColumns={mobileColumns} />
  </div>
);
