import React from 'react';
import { Link } from 'gatsby';
import { chunk } from 'lodash';
import cx from 'classnames';

import { createBemBlockBuilder, isAbsoluteURL } from '../../../utils';

import './SectionList.scss';

const SectionItem = ({ title, link = '#', icon, iconClass, text, className = '' }) => {
  const getBlocksWith = createBemBlockBuilder(['section-item', className]);

  return (
    <Link
      key={title}
      to={link}
      className={cx(getBlocksWith(), { [getBlocksWith('--no-text')]: !text })}
      {...(isAbsoluteURL(link) && {
        target: '_blank',
        rel: 'noreferrer',
      })}
    >
      {icon}
      {iconClass && (
        <span className={cx(getBlocksWith('-icon'), getBlocksWith(`-icon--${iconClass}`))} />
      )}
      <div>
        <p className={getBlocksWith('__title')}>{title}</p>
        {text && <p className={getBlocksWith('__text')}>{text}</p>}
      </div>
    </Link>
  );
};

const InfoItem = ({ text }) => {
  const getBlocksWith = createBemBlockBuilder(['info-item']);

  return <div className={getBlocksWith()}>{text}</div>;
};

export const SectionList = ({
  title,
  showTitle = true,
  items,
  itemsPerRow = items.length,
  className = '',
}) => {
  const getBlocksWith = createBemBlockBuilder(['section-list', className]);
  const columns = chunk(items, itemsPerRow).map((column, columnIndex) => (
    <div key={columnIndex} className={getBlocksWith('__col')}>
      {column.map((data) =>
        data.type === 'info' ? (
          <InfoItem key="info" {...data} />
        ) : (
          <SectionItem
            showTitle={showTitle}
            key={data.title}
            className={getBlocksWith('__item')}
            {...data}
          />
        ),
      )}
    </div>
  ));

  return (
    <div className={getBlocksWith()}>
      {showTitle && <p className={getBlocksWith('__title')}>{title}</p>}
      <div className="row">{columns}</div>
    </div>
  );
};
