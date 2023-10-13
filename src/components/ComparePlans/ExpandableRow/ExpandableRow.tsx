import React from 'react';

import { createBemBlockBuilder } from '../../../utils';

import { Columns } from '../Columns';

import '../ComparePlans.scss';

interface Props {
  feature: string
  columnsData: string[]
}

const getBlocksWith = createBemBlockBuilder(['compare']);

export const ExpandableRow: React.FC<Props> = ({ feature, columnsData }) => {
  return (
    <div className={getBlocksWith('__row')}>
      <Columns title={feature} cols={columnsData} />
    </div>
  );
};
