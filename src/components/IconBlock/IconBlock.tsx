import React from 'react';
import classNames from 'classnames';

import './IconBlock.scss';

interface Props {
  type: string
  number: string
  text?: string
  benefit?: string
  progressNumber: number
}

export const IconBlock: React.FC<Props> = ({ type, number, text, benefit, progressNumber }) => (
  <div className={classNames('icon-block', type, `${type}-${progressNumber}`)}>
    <span
      className={classNames('icon-block__number', {
        'icon-block__numberOnly': !(text && benefit),
      })}
    >
      {number}
    </span>
    <span className="icon-block__text">{text}</span>
    <span className="icon-block__benefit">{benefit}</span>
  </div>
);
