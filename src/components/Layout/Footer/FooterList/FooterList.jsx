import React from 'react';

import ArrowIcon from '@svg/arrow.inline.svg';
import { isAbsoluteURL } from '@utils';

import { Link } from '../../../Link';

export const FooterList = ({ title, items }) => (
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
