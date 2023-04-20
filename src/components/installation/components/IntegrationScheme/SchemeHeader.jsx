import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';

import './IntegrationScheme.scss';

const getBlocksWith = createBemBlockBuilder(['scheme']);

export const SchemeHeader = () => {
  return (
    <div className={cx(getBlocksWith('__row'), getBlocksWith('__row-header'))}>
      <div className={cx(getBlocksWith('__col-title'), getBlocksWith('__col-title-first'))}>
        <p>Test Framework</p>
      </div>
      <div className={getBlocksWith('__col-title')} />
      <div className={getBlocksWith('__col-title')}>
        <div
          className={cx(getBlocksWith('__col-title-inner'), getBlocksWith('__col-title-second'))}
        >
          <p>Agent / Client</p>
        </div>
      </div>
      <div className={getBlocksWith('__col-title')} />
      <div className={cx(getBlocksWith('__col-title'), getBlocksWith('__col-title-last'))}>
        <div className={getBlocksWith('__col-title-inner')}>
          <p>ReportPortal</p>
        </div>
      </div>
    </div>
  );
};
