import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';
import { SchemeRow } from './SchemeRow';
import { data } from './schemeData'

import './IntegrationScheme.scss';

// const getBlocksWith = createBemBlockBuilder(['notice']);

export const IntegrationScheme = () => {

  const lastRow = () => data.length;

  return (
    <div>
      <div className="scheme">
        <div className="scheme__inner">
          <h2>Extended scheme of integration ReportPortal with the test framework</h2>

          <div className="scheme__container">
            <div className="scheme__row scheme__row-header">
              <div className="scheme__col-title scheme__col-title-first">
                <p>Test Framework</p>
              </div>

              <div className="scheme__col-title">
                </div>

              <div className="scheme__col-title">
                <div className="scheme__col-title-inner scheme__col-title-second">
                    <p>Agent / Client</p>
                </div>
              </div>

              <div className="scheme__col-title">
                </div>

              <div className="scheme__col-title scheme__col-title-last">
                <div className="scheme__col-title-inner">
                  <p>ReportPortal</p>
                </div>
              </div>
            </div>

            {data.map(({cells, row}) => <SchemeRow key={row} portion={cells} row={row} lastRow={lastRow()} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
