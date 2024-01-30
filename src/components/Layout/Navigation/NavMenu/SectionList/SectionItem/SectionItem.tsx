import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from '@app/components';
import { createBemBlockBuilder } from '@app/utils';

interface SectionItemProps {
  title: string;
  icon: string;
  iconClass: string;
  text: string;
  link?: string;
  className?: string;
  iconProps?: Record<string, string>;
}

export const SectionItem: FC<SectionItemProps> = ({
  title,
  link = '#',
  icon,
  iconClass,
  text,
  className = '',
  iconProps = {},
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
          {...iconProps}
        />
      )}
      <div>
        <p className={getBlocksWith('-title')}>{title}</p>
        {text && <p className={getBlocksWith('-text')}>{text}</p>}
      </div>
    </Link>
  );
};
