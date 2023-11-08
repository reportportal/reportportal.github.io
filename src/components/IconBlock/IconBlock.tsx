import React, { FC } from 'react';
import classNames from 'classnames';

import './IconBlock.scss';

interface IconBlockProps {
  type: string;
  number: string;
  progressNumber: number;
  text?: string;
  benefit?: string;
}

export const IconBlock: FC<IconBlockProps> = ({ type, number, text, benefit, progressNumber }) => (
  <div className={classNames('icon-block', type, `${type}-${progressNumber}`)}>
    <span
      className={classNames('icon-block__number', {
        'icon-block__number--only': !(text && benefit),
      })}
    >
      {number}
    </span>
    <span className="icon-block__text">{text}</span>
    <span className="icon-block__benefit">{benefit}</span>
  </div>
);
