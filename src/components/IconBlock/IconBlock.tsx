import React, { FC } from 'react';
import classNames from 'classnames';

import './IconBlock.scss';

interface IconBlockProps {
  type: string;
  value: string | number;
  progressNumber?: number;
  text?: string;
  benefit?: string;
}

export const IconBlock: FC<IconBlockProps> = ({ type, value, text, benefit, progressNumber }) => (
  <div
    className={classNames('icon-block', type, { [`${type}-${progressNumber}`]: progressNumber })}
  >
    <span
      className={classNames('icon-block__number', {
        'icon-block__number--only': !(text && benefit),
      })}
    >
      {value}
    </span>
    <span className="icon-block__text">{text}</span>
    <span className="icon-block__benefit">{benefit}</span>
  </div>
);
