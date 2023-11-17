import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface ArrowProps {
  children: ReactNode;
  state: boolean;
}

export const Arrow: FC<ArrowProps> = ({ children, state }) => (
  <div
    className={classNames('scheme__btn-arrow-wrapper', {
      'scheme__btn-arrow-active-text': state,
    })}
  >
    <span>{children}</span>
    <span
      className={classNames('scheme__btn-arrow', {
        'scheme__btn-arrow-active': state,
      })}
    />
  </div>
);
