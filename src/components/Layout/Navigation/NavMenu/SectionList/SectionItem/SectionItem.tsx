import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '../../../../../../utils';

import { Link } from '../../../../../Link';

interface Props {
  title: string
  link: string
  icon: string
  iconClass: string
  text: string
  className: string
}

export const SectionItem: React.FC<Props> = ({ title, link = '#', icon, iconClass, text, className = '' }) => {
  const getBlocksWith = createBemBlockBuilder(['section-item', className]);

  return (
    <Link
      key={title}
      to={link}
      className={classNames(getBlocksWith(), { [getBlocksWith('--no-text')]: !text })}
    >
      {icon}
      {iconClass && (
        <span
          className={classNames(getBlocksWith('-icon'), getBlocksWith(`-icon--${iconClass}`))}
        />
      )}
      <div>
        <p className={getBlocksWith('__title')}>{title}</p>
        {text && <p className={getBlocksWith('__text')}>{text}</p>}
      </div>
    </Link>
  );
};
