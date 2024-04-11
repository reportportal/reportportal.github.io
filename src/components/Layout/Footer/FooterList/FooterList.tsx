import React, { FC } from 'react';
import ArrowIcon from '@app/svg/arrow.inline.svg';
import { Link } from '@app/components/Link';
import { isAbsoluteURL } from '@app/utils';

interface FooterListProps {
  title: string;
  items: {
    title: string;
    url: string;
  }[];
}

export const FooterList: FC<FooterListProps> = ({ title, items }) => (
  <div className="footer__list">
    <h4>{title}</h4>
    <ul>
      {items.map(item => (
        <li key={item.title}>
          <Link to={item.url}>
            {item.title}
            {isAbsoluteURL(item.url) && <ArrowIcon />}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
