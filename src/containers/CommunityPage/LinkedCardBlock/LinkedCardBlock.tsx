import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { LinkedCard } from '@app/components';

import { TitleBlock } from '../TitleBlock';

import './LinkedCardBlock.scss';

interface LinkedCardBlockProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  cardsInfo: {
    itemTitle: string;
    description: string;
    link: string;
    linkText: string;
    icon: string;
  }[];
  withBackground?: boolean;
}

export const LinkedCardBlock: FC<LinkedCardBlockProps> = ({
  children,
  title,
  subtitle,
  cardsInfo,
  withBackground,
}) => (
  <div
    className={classNames('linked-card-block', {
      'linked-card-block--background': withBackground,
    })}
  >
    <div className="container">
      <TitleBlock title={title} subtitle={subtitle} />
      <div className="linked-card-block__cards">
        {cardsInfo.map(({ itemTitle, description, link, linkText, icon }) => (
          <LinkedCard
            key={itemTitle}
            itemTitle={itemTitle}
            description={description}
            link={link}
            linkText={linkText}
            icon={icon}
          />
        ))}
      </div>
      {children}
    </div>
  </div>
);
