import React from 'react';
import classNames from 'classnames';

import { GraphicArrow } from './GraphicArrow';

export const ActionNode = ({ children, direction, infoArrow = true, info }) => (
  <div
    className={classNames('scheme__col-action scheme__col-action-info', {
      'scheme__col-action-active': !direction,
    })}
  >
    {infoArrow ? (
      <GraphicArrow info={info}>
        <p>{children}</p>
      </GraphicArrow>
    ) : (
      <p>{children}</p>
    )}

    <div
      className={classNames({
        'scheme__arrow-right': direction,
        'scheme__arrow-left': !direction,
      })}
    />
  </div>
);
