import React from 'react';
import cx from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { useToggle } from 'ahooks';
import { Divider } from 'antd';

import { createBemBlockBuilder } from '../../../../utils';
import { mediaTabletSm } from '../../../../utils/variables';
import { Arrow, SchemeRow } from './SchemeRow';
import { SchemeHeader } from './SchemeHeader';
import { schemeData } from './schemeData';

import '../../InstallationPage.scss';
import './IntegrationScheme.scss';

const getGeneralBlocksWith = createBemBlockBuilder(['installation']);
const getBlocksWith = createBemBlockBuilder(['scheme']);

export const IntegrationScheme = () => {
  const [collapsedScheme, { toggle: toggleCollapsedSchemeState }] = useToggle(true);
  const isDesktop = useMediaQuery({ query: mediaTabletSm });

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

        {isDesktop && (
          <>
            <SchemeHeader state={collapsedScheme} />
            <div
              className={cx(getBlocksWith(), { [getBlocksWith('__collapse')]: collapsedScheme })}
            >
              <div className={getBlocksWith('__container')}>
                {schemeData.map(({ cells, row }) => (
                  <SchemeRow key={row} portion={cells} row={row} lastRow={lastRow()} />
                ))}
              </div>
            </div>
          </>
        )}

        {!isDesktop && <div className={getBlocksWith('__mocked')} />}

        <div className="collapse__btn">
          {isDesktop && (
            <div className="collapse__btn-inner" onClick={toggleCollapsedSchemeState}>
              <Arrow state={!collapsedScheme}>
                <p>{collapsedScheme ? 'Extended scheme' : 'See less'}</p>
              </Arrow>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
