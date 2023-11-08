import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface NodeProps {
  children: ReactNode;
  direction: boolean;
  row: boolean;
  isDownArrow: boolean;
  number: number;
  lastRow: boolean;
}

export const Node: FC<NodeProps> = ({ children, direction, row, isDownArrow, number, lastRow }) => (
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
