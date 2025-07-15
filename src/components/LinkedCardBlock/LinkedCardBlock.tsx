import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { LinkedCard, LinkedCardProps } from '@app/components/LinkedCard';
import { createBemBlockBuilder } from '@app/utils';

import { TitleBlock } from '../TitleBlock';

import './LinkedCardBlock.scss';

interface LinkedCardBlockProps {
  title: string;
  subtitle: string;
  cardsInfo: LinkedCardProps[];
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
        {cardsInfo.map(cardInfo => (
          <LinkedCard key={cardInfo.itemTitle} {...cardInfo} />
        ))}
      </div>
      {children}
    </div>
  </div>
);
