import React from 'react';
import classNames from 'classnames';

import './IconBlock.scss';

export const IconBlock = ({ type, number, text, benefit }) => (
  <div className={classNames('icon-block', type)}>
    <span className="icon-block__number">{number}</span>
    <span className="icon-block__text">{text}</span>
    <span className="icon-block__benefit">{benefit}</span>
  </div>
);
