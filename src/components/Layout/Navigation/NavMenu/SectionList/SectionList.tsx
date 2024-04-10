import React, { FC } from 'react';
import chunk from 'lodash/chunk';
import { createBemBlockBuilder, LinkDto } from '@app/utils';

import { SectionItem } from './SectionItem';

import './SectionList.scss';

interface SectionListProps {
  items: { title: string; link: LinkDto }[];
  title?: string;
  className?: string;
  showTitle?: boolean;
  itemsPerRow?: number;
}

export const SectionList: FC<SectionListProps> = ({
  title,
  showTitle = true,
  items,
  itemsPerRow = items.length,
  className = '',
}) => {
  const getBlocksWith = createBemBlockBuilder(['section-list', className]);
  const columns = chunk(items, itemsPerRow).map((column, columnIndex) => (
    <div key={columnIndex} className={getBlocksWith('__col')}>
      {column.map(data => (
        <SectionItem key={data.title} className={getBlocksWith('__item')} {...data} />
      ))}
    </div>
  ));

  return (
    <div className={getBlocksWith()}>
      {showTitle && <p className={getBlocksWith('__title')}>{title}</p>}
      <div className="row">{columns}</div>
    </div>
  );
};
