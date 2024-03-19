import React, { FC } from 'react';
import { createBemBlockBuilder } from '@app/utils';

import './SectionCard.scss';

interface SectionCardProps {
  title: string;
  cover: React.ReactElement;
  text: string;
  children: React.ReactNode;
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
      <p className={getBlocksWith('__text')}>{text}</p>
      <div className={getBlocksWith('__footer')}>{children}</div>
    </div>
  );
};
