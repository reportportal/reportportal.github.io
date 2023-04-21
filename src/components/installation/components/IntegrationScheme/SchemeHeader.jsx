import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';
import { EventNode, ActionNode } from './SchemeRow';

import './IntegrationScheme.scss';

const getBlocksWith = createBemBlockBuilder(['scheme']);

export const SchemeHeader = ({ state }) => (
  <div
    className={cx(getBlocksWith(), getBlocksWith('__header'), { 'scheme__collapse-header': state })}
  >
    <div className={getBlocksWith('__header-container-header')}>
      <div className={cx(getBlocksWith('__row'), getBlocksWith('__row-header'))}>
        <div className={cx(getBlocksWith('__col-title'), getBlocksWith('__col-title-first'))}>
          <p>Test Framework</p>
        </div>

        <div className={getBlocksWith('__col-title')}>
          {state && <EventNode direction>event</EventNode>}
        </div>

        <div className={getBlocksWith('__col-title')}>
          <div
            className={cx(getBlocksWith('__col-title-inner'), getBlocksWith('__col-title-second'))}
          >
            <p>Agent / Client</p>
          </div>
        </div>

        <div className={getBlocksWith('__col-title')}>
          {state && (
            <div className={getBlocksWith('__col-title-actions')}>
              <div className={getBlocksWith('__col-title-actions-box')}>
                <ActionNode direction infoArrow={false}>
                  http request
                </ActionNode>
              </div>
              <div className={getBlocksWith('__col-title-actions-box')}>
                <ActionNode infoArrow={false}>http response</ActionNode>
              </div>
            </div>
          )}
        </div>

        <div className={cx(getBlocksWith('__col-title'), getBlocksWith('__col-title-last'))}>
          <div className={getBlocksWith('__col-title-inner')}>
            <p>ReportPortal</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
