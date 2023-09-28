import React from 'react';
import chunk from 'lodash/chunk';

import { createBemBlockBuilder } from '@utils';

import { InfoItem } from './InfoItem';
import { SectionItem } from './SectionItem';

import './SectionList.scss';

export const SectionList = ({
  title,
  showTitle = true,
  items,
  itemsPerRow = items.length,
  className = '',
}) => {
  const getBlocksWith = createBemBlockBuilder(['section-list', className]);
  const columns = chunk(items, itemsPerRow).map((column, columnIndex) => (
    <div key={columnIndex} className={getBlocksWith('__col')}>
      {column.map(data =>
        data.type === 'info' ? (
          <InfoItem key={data.type} {...data} />
        ) : (
          <SectionItem
            showTitle={showTitle}
            key={data.title}
            className={getBlocksWith('__item')}
            {...data}
          />
        ),
      )}
    </div>
  ));

  return (
    <div className={getBlocksWith()}>
      {showTitle && <p className={getBlocksWith('__title')}>{title}</p>}
      <div className="row">{columns}</div>
    </div>
  );
};
