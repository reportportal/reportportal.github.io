import React, { FC } from 'react';
import { createBemBlockBuilder } from '@app/utils';

import { Columns } from '../Columns';

import '../ComparePlans.scss';

interface ExpandableRowProps {
  columnsData: string[];
  feature?: string;
}

const getBlocksWith = createBemBlockBuilder(['compare']);

export const ExpandableRow: FC<ExpandableRowProps> = ({ feature, columnsData }) => (
  <div className={getBlocksWith('__row')}>
    <Columns title={feature} cols={columnsData} />
  </div>
);
