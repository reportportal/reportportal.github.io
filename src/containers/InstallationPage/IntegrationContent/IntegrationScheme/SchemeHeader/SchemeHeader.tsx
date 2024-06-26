import React, { FC } from 'react';
import classNames from 'classnames';
import { createBemBlockBuilder } from '@app/utils';

import { ActionNode } from '../ActionNode';
import { EventNode } from '../EventNode';

import '../IntegrationScheme.scss';

interface SchemeHeaderProps {
  state: boolean;
}

const getBlocksWith = createBemBlockBuilder(['scheme']);

export const SchemeHeader: FC<SchemeHeaderProps> = ({ state }) => (
  <div
    className={classNames(getBlocksWith(), getBlocksWith('__header'), {
      [getBlocksWith('__collapse-header')]: state,
    })}
  >
    <div className={getBlocksWith('__header-container-header')}>
      <div className={getBlocksWith('__row', '__row-header')}>
        <div className={getBlocksWith('__col-title', '__col-title-first')}>
          <p>Test Framework</p>
        </div>

        <div className={getBlocksWith('__col-title', '__col-title-event-node')}>
          {state && <EventNode direction>event</EventNode>}
        </div>

        <div className={getBlocksWith('__col-title')}>
          <div className={getBlocksWith('__col-title-inner', '__col-title-second')}>
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

        <div className={getBlocksWith('__col-title', '__col-title-last')}>
          <div className={getBlocksWith('__col-title-inner')}>
            <p>ReportPortal</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
