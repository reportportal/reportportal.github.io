import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '../../../../../utils';

import './SectionCard.scss';

interface Props {
  title: string
  cover: React.ReactElement
  text: string
  className?: string
  children: React.ReactNode
}

export const SectionCard: React.FC<Props> = ({ title, cover, text, className = '', children }) => {
  const getBlocksWith = createBemBlockBuilder(['section-card', className]);

  return (
    <div className={classNames(getBlocksWith())}>
      <p className={getBlocksWith('__title')}>{title}</p>
      {cover}
      <p className={getBlocksWith('__text')}>{text}</p>
      <div className={getBlocksWith('__footer')}>{children}</div>
    </div>
  );
};