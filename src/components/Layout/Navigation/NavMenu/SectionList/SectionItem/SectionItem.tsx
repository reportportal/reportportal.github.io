import React from 'react';
import classNames from 'classnames';

import { Link } from '@app/components/Link';
import { createBemBlockBuilder } from '@app/utils';

interface Props {
  title: string;
  link: string;
  icon: string;
  iconClass: string;
  text: string;
  className: string;
}

export const SectionItem: React.FC<Props> = ({
  title,
  link = '#',
  icon,
  iconClass,
  text,
  className = '',
}) => {
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
