import React from 'react';
import cx from 'classnames';
import { useToggle } from 'ahooks';

import { createBemBlockBuilder } from '../../../../utils';
import { Arrow, SchemeRow } from './SchemeRow';
import { SchemeHeader } from './SchemeHeader';
import { data } from './schemeData';

import '../../InstallationPage.scss';
import './IntegrationScheme.scss';

// should be deleted after merge:
import './TemporaryFile.scss';

const getGeneralBlocksWith = createBemBlockBuilder(['installation']); // Should be removed after All Containers and text should will be moved
const getBlocksWith = createBemBlockBuilder(['scheme']);

export const IntegrationScheme = () => {
  const [state, { toggle }] = useToggle();

  const lastRow = () => data.length;

  const toggleScheme = () => {
    toggle();
  };

  return (
    // All Containers and text should be moved into a content component. Organize as a separate componentm

    <div className={getGeneralBlocksWith('__container')}>
      <div className={getGeneralBlocksWith('__wrapper')}>
        <div className={getGeneralBlocksWith('__chapter')}>Step 3</div>
        <h3 className={getGeneralBlocksWith('__title-content')}>
          Integrate with your test framework
        </h3>
        <p>Integration scheme:</p>

        <SchemeHeader state={state} />

        <div className={cx(getBlocksWith(), { scheme__collapse: state })}>
          <div className={getBlocksWith('__container')}>
            {data.map(({ cells, row }) => (
              <SchemeRow key={row} portion={cells} row={row} lastRow={lastRow()} />
            ))}
          </div>
        </div>

        <div className="collapse__btn">
          <div className="collapse__btn-inner" onClick={toggleScheme}>
            <Arrow state={!state}>
              <p>See less</p>
            </Arrow>
          </div>
        </div>
      </div>
    </div>
  );
};
