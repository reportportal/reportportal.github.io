import React from 'react';
import classNames from 'classnames';

export const EventNode = ({ children, direction }) => (
  <div
    className={classNames('scheme__col-action', {
      'scheme__col-action-active': !direction,
    })}
  >
    <p>{children}</p>
    <div
      className={classNames({
        'scheme__arrow-right': direction,
        'scheme__arrow-left': !direction,
      })}
    />
  </div>
);
