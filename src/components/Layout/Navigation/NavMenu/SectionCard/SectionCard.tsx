import React, { FC, ReactNode, ReactElement } from 'react';
import { createBemBlockBuilder } from '@app/utils';

import './SectionCard.scss';

interface SectionCardProps {
  title: string;
  cover: ReactElement;
  children: ReactNode;
  text?: string;
  className?: string;
}

export const SectionCard: FC<SectionCardProps> = ({
  title,
  cover,
  text,
  className = '',
  children,
}) => {
  const getBlocksWith = createBemBlockBuilder(['section-card', className]);

  return (
    <div className={getBlocksWith()}>
      <p className={getBlocksWith('__title')}>{title}</p>
      {cover}
      {text && <p className={getBlocksWith('__text')}>{text}</p>}
      <div className={getBlocksWith('__footer')}>{children}</div>
    </div>
  );
};
