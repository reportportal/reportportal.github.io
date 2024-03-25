import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { LinkedCard } from '@app/components/LinkedCard';
import { createBemBlockBuilder } from '@app/utils';

import { TitleBlock } from '../TitleBlock';

import './LinkedCardBlock.scss';

interface LinkedCardBlockProps {
  title: string;
  subtitle: string;
  cardsInfo: {
    itemTitle: string;
    description: string;
    link: string;
    linkText: string;
    icon: string;
  }[];
  children?: ReactNode;
  largePadding?: boolean;
}

const getBlocksWith = createBemBlockBuilder(['linked-card-block']);

export const LinkedCardBlock: FC<LinkedCardBlockProps> = ({
  children,
  title,
  subtitle,
  cardsInfo,
  largePadding,
}) => (
  <div
    className={classNames(getBlocksWith(), {
      [getBlocksWith('--large-padding')]: largePadding,
    })}
  >
    <div className="container">
      <TitleBlock title={title} subtitle={subtitle} />
      <div className={getBlocksWith('__cards')}>
        {cardsInfo.map(({ itemTitle, description, link, linkText, icon }) => (
          <LinkedCard
            key={itemTitle}
            itemTitle={itemTitle}
            description={description}
            link={link}
            linkText={linkText}
            icon={icon}
          />
        ))}
      </div>
      {children}
    </div>
  </div>
);
