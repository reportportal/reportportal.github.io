import React, { FC } from 'react';
import chunk from 'lodash/chunk';
import { createBemBlockBuilder } from '@app/utils';

import { LinkListItem } from './LinkListItem';

import './LinkList.scss';

export type ListItem = {
  title: string;
  description: string;
  link: string;
  icon: {
    url: string;
  };
};

interface LinkListProps {
  title: string;
  items: ListItem[];
  className?: string;
  showTitle?: boolean;
  itemsPerRow?: number;
}

export const LinkList: FC<LinkListProps> = ({
  title,
  items,
  showTitle = true,
  itemsPerRow = items.length,
  className = '',
}) => {
  const getBlocksWith = createBemBlockBuilder(['link-list', className as string]);

  const columns = chunk(items, itemsPerRow).map((column, columnIndex) => (
    <div key={columnIndex} className={getBlocksWith('__col')}>
      {column.map(data => (
        <LinkListItem key={data.title} className={getBlocksWith('__item')} {...data} />
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
