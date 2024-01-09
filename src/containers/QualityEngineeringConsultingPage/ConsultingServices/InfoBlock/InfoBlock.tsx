import React, { FC } from 'react';
import { UnorderedList } from '@app/components';

interface InfoBlockProps {
  list: {
    info: string;
  }[];
  title: string;
  upperText: string;
  lowerText: string;
}

export const InfoBlock: FC<InfoBlockProps> = ({ title, upperText, lowerText, list }) => (
  <div className="info-block">
    <div className="info-block__title">{title}</div>
    <div className="info-block__text">{upperText}</div>
    <UnorderedList list={list} />
    <div className="info-block__text">{lowerText}</div>
  </div>
);
