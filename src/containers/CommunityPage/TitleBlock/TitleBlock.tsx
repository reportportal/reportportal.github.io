import React, { FC } from 'react';

import './TitleBlock.scss';

interface TitleBlockProps {
  title: string;
  subtitle: string;
}

export const TitleBlock: FC<TitleBlockProps> = ({ title, subtitle }) => (
  <>
    <div className="title-block__title">{title}</div>
    <div className="title-block__subtitle">{subtitle}</div>
  </>
);
