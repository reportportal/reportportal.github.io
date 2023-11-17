import React, { FC } from 'react';
import classNames from 'classnames';

import './UnorderedList.scss';

interface UnorderedListProps {
  list: {
    info?: string;
    description?: string;
  }[];
  title?: string;
  hasSeparator?: boolean;
}

export const UnorderedList: FC<UnorderedListProps> = ({ title, hasSeparator, list }) => (
  <div className={classNames('unordered-list', { separator: hasSeparator })}>
    {title && <div className="unordered-list__title">{title}</div>}
    <ul className="unordered-list__list">
      {list.map(({ info, description }) =>
        description ? (
          <div key={description} className="unordered-list__list-description">
            {description}
          </div>
        ) : (
          <li key={info} className="unordered-list__list-item">
            {info}
          </li>
        ),
      )}
    </ul>
  </div>
);
