import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './UnorderedList.scss';

export const UnorderedList = ({ title, hasSeparator, list }) => (
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

UnorderedList.propTypes = {
  title: PropTypes.string,
};