import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';

import './Notice.scss';

const getBlocksWith = createBemBlockBuilder(['notes']);

export const Notice = ({ importance = false, children }) => (
  <div className="notes">
    <div className={cx(getBlocksWith('__border'), { notes__importance: importance })} />
      <div className={getBlocksWith('__content')}>
        {importance && <div className={getBlocksWith('__title')}>Important!</div>}
        <div className={getBlocksWith('__text')}>{children}</div>
      </div>
  </div>
)
