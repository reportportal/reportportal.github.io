import React from 'react';
import cx from 'classnames';
import { useToggle } from 'ahooks';
import { Divider } from 'antd';

import { createBemBlockBuilder } from '../../../../utils';
import { Arrow, SchemeRow } from './SchemeRow';
import { SchemeHeader } from './SchemeHeader';
import { schemeData } from './schemeData';

import '../../InstallationPage.scss';
import './IntegrationScheme.scss';

const getGeneralBlocksWith = createBemBlockBuilder(['installation']);
const getBlocksWith = createBemBlockBuilder(['scheme']);

export const IntegrationScheme = () => {
  const [state, { toggle }] = useToggle();

  const lastRow = () => schemeData.length;

  return (
    <div className={getGeneralBlocksWith('__container')}>
      <div className={getGeneralBlocksWith('__wrapper')}>
        <div className={getGeneralBlocksWith('__chapter')}>Step 3</div>
        <h3 className={getGeneralBlocksWith('__title-content')}>
          Integrate with your test framework
        </h3>
        <p>Integration scheme:</p>

        <Divider className={getBlocksWith('__divider')} />

        <SchemeHeader state={state} />

        <div className={cx(getBlocksWith(), { [getBlocksWith('__collapse')]: state })}>
          <div className={getBlocksWith('__container')}>
            {schemeData.map(({ cells, row }) => (
              <SchemeRow key={row} portion={cells} row={row} lastRow={lastRow()} />
            ))}
          </div>
        </div>

        <div className="collapse__btn">
          <div className="collapse__btn-inner" onClick={toggle}>
            <Arrow state={!state}>
              <p>See less</p>
            </Arrow>
          </div>
        </div>
      </div>
    </div>
  );
};
