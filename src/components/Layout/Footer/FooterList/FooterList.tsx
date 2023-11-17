import React, { FC } from 'react';
import ArrowIcon from '@app/svg/arrow.inline.svg';
import { Link } from '@app/components';
import { isAbsoluteURL } from '@app/utils';

interface FooterListProps {
  title: string;
  items: {
    title: string;
    link: string;
  }[];
}

export const FooterList: FC<FooterListProps> = ({ title, items }) => (
  <div className="footer__list">
    <h4>{title}</h4>
    <ul>
      {items.map(item => (
        <li key={item.title}>
          <Link to={item.link}>
            {item.title}
            {isAbsoluteURL(item.link) && <ArrowIcon />}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
