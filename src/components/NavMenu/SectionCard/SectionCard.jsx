import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../utils';

import './SectionCard.scss';

export const SectionCard = ({ title, cover, text, className = '', children }) => {
  const getBlocksWith = createBemBlockBuilder(['section-card', className]);

  return (
    <div className={cx(getBlocksWith())}>
      <p className={getBlocksWith('__title')}>{title}</p>
      {cover}
      <p className={getBlocksWith('__text')}>{text}</p>
      <div className={getBlocksWith('__footer')}>{children}</div>
    </div>
  );
};
