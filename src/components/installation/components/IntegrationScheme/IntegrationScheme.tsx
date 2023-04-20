import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';
import { SchemeRow } from './SchemeRow';
import { SchemeHeader } from './SchemeHeader';
import { data } from './schemeData'

import '../../Installation.scss';
import './IntegrationScheme.scss';


const getGeneralBlocksWith = createBemBlockBuilder(['installation']);
const getBlocksWith = createBemBlockBuilder(['scheme']);

export const IntegrationScheme = () => {

  const lastRow = () => data.length;

  return (
    <div className={getGeneralBlocksWith('__container')}>
      <div className={getGeneralBlocksWith('__wrapper')}>
        <div className={getGeneralBlocksWith('__chapter')}>Step 3</div>
        <h3 className={getGeneralBlocksWith('__title-content')}>Integrate with your test framework</h3>
        <p>Integration scheme:</p>

        <div className={getBlocksWith()}>
          <div className={getBlocksWith('__container')}>
            <SchemeHeader />

            {data.map(({cells, row}) => <SchemeRow key={row} portion={cells} row={row} lastRow={lastRow()} />)}
          </div>
        </div>

      </div>
    </div>
  )
}
