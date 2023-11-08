import React, { FC } from 'react';
import classNames from 'classnames';
import { createBemBlockBuilder } from '@app/utils';

import { ActionNode } from '../ActionNode';
import { EventNode } from '../EventNode';

import '../IntegrationScheme.scss';

interface SchemeHeaderProps {
  state: string;
}

const getBlocksWith = createBemBlockBuilder(['scheme']);

export const SchemeHeader: FC<SchemeHeaderProps> = ({ state }) => (
  <div
    className={classNames(getBlocksWith(), getBlocksWith('__header'), {
      [getBlocksWith('__collapse-header')]: state,
    })}
  >
    <div className={getBlocksWith('__header-container-header')}>
      <div className={classNames(getBlocksWith('__row'), getBlocksWith('__row-header'))}>
        <div
          className={classNames(getBlocksWith('__col-title'), getBlocksWith('__col-title-first'))}
        >
          <p>Test Framework</p>
        </div>

        <div
          className={classNames(
            getBlocksWith('__col-title'),
            getBlocksWith('__col-title-event-node'),
          )}
        >
          {state && <EventNode direction>event</EventNode>}
        </div>

        <div className={getBlocksWith('__col-title')}>
          <div
            className={classNames(
              getBlocksWith('__col-title-inner'),
              getBlocksWith('__col-title-second'),
            )}
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

        <div
          className={classNames(getBlocksWith('__col-title'), getBlocksWith('__col-title-last'))}
        >
          <div className={getBlocksWith('__col-title-inner')}>
            <p>ReportPortal</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
