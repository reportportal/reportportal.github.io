import React, { useEffect, useState } from 'react';

import { createBemBlockBuilder } from '../../../utils';
import { Columns } from './Columns';

import './ComparePlans.scss';

const getBlocksWith = createBemBlockBuilder(['compare']);

export const ExpandableRow = ({ feature, rowData }) => {
  const [columnsData, setColumnsData] = useState([]);

  useEffect(() => {
    setColumnsData([rowData.startup, rowData.business, rowData.enterprise]);
  }, [rowData]);

  return (
    <div className={getBlocksWith('__row')}>
      <Columns title={feature} cols={columnsData} />
    </div>
  );
};
