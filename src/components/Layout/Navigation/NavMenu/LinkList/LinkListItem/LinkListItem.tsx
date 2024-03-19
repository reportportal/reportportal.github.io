import React, { FC } from 'react';
import { Link } from '@app/components/Link';
import { ContentfulAsset, createBemBlockBuilder } from '@app/utils';

interface LinkListItemProps {
  title: string;
  description: string;
  link: string;
  icon: ContentfulAsset;
  className: string;
  addition?: string;
}

export const LinkListItem: FC<LinkListItemProps> = ({
  title,
  link,
  icon,
  description,
  addition,
  className = '',
}) => {
  const getBlocksWith = createBemBlockBuilder(['link-list-item', className]);

  return (
    <Link key={title} to={link} className={getBlocksWith()}>
      <img src={icon.url} className={getBlocksWith('-icon')} />
      <div>
        <div>
          <span className={getBlocksWith('-title')}>{title}</span>
          {addition && <span className={getBlocksWith('-addition')}>{addition}</span>}
        </div>
        <p className={getBlocksWith('-description')}>{description}</p>
      </div>
    </Link>
  );
};
