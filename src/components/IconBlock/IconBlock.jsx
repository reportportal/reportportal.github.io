import React from 'react';
import classNames from 'classnames';

import './IconBlock.scss';

export const IconBlock = ({ type }) => (
  <div className={classNames('icon-block', type)}>
    <span className="icon-block__number">1</span>
    <span className="icon-block__text">Professional</span>
    <span className="icon-block__benefit">service hour</span>
  </div>
);
