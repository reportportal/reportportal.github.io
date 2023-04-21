import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';
import { SchemeRow } from './SchemeRow';
import { SchemeHeader } from './SchemeHeader';
import { data } from './schemeData'

import '../../Installation.scss';
import './IntegrationScheme.scss';
import { useToggle } from 'ahooks';


const getGeneralBlocksWith = createBemBlockBuilder(['installation']);
const getBlocksWith = createBemBlockBuilder(['scheme']);

export const IntegrationScheme = () => {
  const [state, { toggle}] = useToggle();

  const lastRow = () => data.length;

  const toggleScheme = () => {
    toggle();
  }

  return (
    <div className={getGeneralBlocksWith('__container')}>
      <div className={getGeneralBlocksWith('__wrapper')}>
        <div className={getGeneralBlocksWith('__chapter')}>Step 3</div>
        <h3 className={getGeneralBlocksWith('__title-content')}>Integrate with your test framework</h3>
        <p>Integration scheme:</p>

        <SchemeHeader state={state} />

        <div className={cx(getBlocksWith(), { 'scheme__collapse': state })}>
          <div className={getBlocksWith('__container')}>
            {data.map(({cells, row}) => <SchemeRow key={row} portion={cells} row={row} lastRow={lastRow()} />)}
          </div>
        </div>

        <div className="collapse__btn">
          <div className="collapse__btn-inner" onClick={toggleScheme}>
            <p>See less</p> 
            <span className="btn-arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}
