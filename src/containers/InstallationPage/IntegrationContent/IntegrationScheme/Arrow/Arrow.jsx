import classNames from 'classnames';
import React from 'react';

export const Arrow = ({ children, state }) => (
  <div
    className={classNames('scheme__btn-arrow-wrapper', {
      'scheme__btn-arrow-active-text': state,
    })}
  >
    <span>{children && children}</span>
    <span
      className={classNames('scheme__btn-arrow', {
        'scheme__btn-arrow-active': state,
      })}
    />
  </div>
);
