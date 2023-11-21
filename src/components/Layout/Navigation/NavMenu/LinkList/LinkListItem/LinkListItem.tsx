import React, { FC } from 'react';
import { Link } from '@app/components';
import { createBemBlockBuilder } from '@app/utils';

interface LinkListItemProps {
  title: string;
  description: string;
  link: string;
  icon: {
    url: string;
  };
  className?: string;
}

export const LinkListItem: FC<LinkListItemProps> = ({
  title,
  link,
  icon,
  description,
  className = '',
}) => {
  const getBlocksWith = createBemBlockBuilder(['link-list-item', className as string]);

  return (
    <Link key={title} to={link} className={getBlocksWith()}>
      <img src={icon.url} className={getBlocksWith('-icon')} />
      <div>
        <p className={getBlocksWith('-title')}>{title}</p>
        <p className={getBlocksWith('-description')}>{description}</p>
      </div>
    </Link>
  );
};
