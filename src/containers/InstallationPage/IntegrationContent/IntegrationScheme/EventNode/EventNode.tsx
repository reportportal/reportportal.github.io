import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface EventNodeProps {
  direction: boolean;
  children: ReactNode;
}

export const EventNode: FC<EventNodeProps> = ({ children, direction }) => (
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
