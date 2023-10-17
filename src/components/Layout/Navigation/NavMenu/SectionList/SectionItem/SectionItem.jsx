import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '@utils';

import { Link } from '../../../../../Link';

export const SectionItem = ({ title, link = '#', icon, iconClass, text, className = '' }) => {
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
        <p className={getBlocksWith('-title')}>{title}</p>
        {text && <p className={getBlocksWith('-text')}>{text}</p>}
      </div>
    </Link>
  );
};
