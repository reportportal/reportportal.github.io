import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '@utils';

import './Notice.scss';

const getBlocksWith = createBemBlockBuilder(['notice']);

export const Notice = ({ importance = false, children, title = '' }) => (
  <div className={getBlocksWith()}>
    <div className={classNames(getBlocksWith('__border'), { notice__importance: importance })} />
    <div className={getBlocksWith('__content')}>
      {importance && !title && <div className={getBlocksWith('__title')}>Important!</div>}
      {!importance && title && <div className={getBlocksWith('__title')}>{title}</div>}
      <div className={getBlocksWith('__text')}>{children}</div>
    </div>
  </div>
);
