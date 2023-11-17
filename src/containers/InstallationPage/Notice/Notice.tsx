import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { createBemBlockBuilder } from '@app/utils';

import './Notice.scss';

const getBlocksWith = createBemBlockBuilder(['notice']);

interface NoticeProps {
  importance?: boolean;
  title?: string;
  children?: ReactNode;
}

export const Notice: FC<NoticeProps> = ({ importance = false, children, title = '' }) => (
  <div className={getBlocksWith()}>
    <div className={classNames(getBlocksWith('__border'), { notice__importance: importance })} />
    <div className={getBlocksWith('__content')}>
      {importance && !title && <div className={getBlocksWith('__title')}>Important!</div>}
      {!importance && title && <div className={getBlocksWith('__title')}>{title}</div>}
      <div className={getBlocksWith('__text')}>{children}</div>
    </div>
  </div>
);
