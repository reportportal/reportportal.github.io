import React, { FC } from 'react';
import classNames from 'classnames';

import './IconBlock.scss';

interface IconBlockProps {
  type: string;
  title: string;
  progressNumber?: number;
  description?: string;
}

export const IconBlock: FC<IconBlockProps> = ({ type, title, description, progressNumber }) => {
  const [text, benefit] = description?.split('\\n') ?? [];

  return (
    <div
      className={classNames('icon-block', type, { [`${type}-${progressNumber}`]: progressNumber })}
    >
      <span
        className={classNames('icon-block__number', {
          'icon-block__number--only': !description,
        })}
      >
        {title}
      </span>
      {text && <span className="icon-block__text">{text}</span>}
      {benefit && <span className="icon-block__benefit">{benefit}</span>}
    </div>
  );
};
