import React from 'react';
import classNames from 'classnames';

export const Node = ({ children, direction, row, isDownArrow, number, lastRow }) => (
  <div
    className={classNames('scheme__col-inner', {
      'scheme__col-inner-active': !direction,
      'scheme__col-inner-first-node': row,
      'scheme__arrow-bottom': isDownArrow,
      'scheme__arrow-bottom-accent': !direction,
    })}
  >
    <div className="scheme__col-inner-number">{number}</div>
    <p>{children}</p>
    <div className={classNames({ 'scheme__col-inner-bottom': lastRow })} />
  </div>
);
