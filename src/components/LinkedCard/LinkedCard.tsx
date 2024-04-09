import React, { FC } from 'react';
import { createBemBlockBuilder } from '@app/utils';

import { ArrowLink } from '../ArrowLink';

import './LinkedCard.scss';

interface LinkedCardProps {
  itemTitle: string;
  description: string;
  link?: string;
  linkText?: string;
  icon?: string;
  delay?: number;
}

const getBlocksWith = createBemBlockBuilder(['linked-card']);

export const LinkedCard: FC<LinkedCardProps> = ({
  itemTitle,
  description,
  link,
  linkText,
  icon,
  delay,
}) => {
  return (
    <div className={getBlocksWith()}>
      {icon && <img className={getBlocksWith('__image')} src={icon} alt="" />}
      <strong className={getBlocksWith('__title')}>{itemTitle}</strong>
      <p className={getBlocksWith('__description')}>{description}</p>
      {link && linkText && <ArrowLink mode="primary" to={link} text={linkText} />}
      {Boolean(delay) && <div className={getBlocksWith('__progress')} />}
    </div>
  );
};
