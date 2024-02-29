import React, { FC } from 'react';

import { ArrowLink } from '../ArrowLink';

import './LinkedCard.scss';

interface LinkedCardProps {
  itemTitle: string;
  description: string;
  link: string;
  linkText: string;
  icon?: string;
  delay?: boolean;
}

export const LinkedCard: FC<LinkedCardProps> = ({
  itemTitle,
  description,
  link,
  linkText,
  icon,
  delay = false,
}) => {
  return (
    <div className="linked-card">
      {icon && <img className="linked-card__image" src={icon} alt="" />}
      <strong className="linked-card__title">{itemTitle}</strong>
      <p className="linked-card__description">{description}</p>
      <ArrowLink mode="primary" to={link} text={linkText} />
      {delay && <div className="linked-card__progress" />}
    </div>
  );
};
