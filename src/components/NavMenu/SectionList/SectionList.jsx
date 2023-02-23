import React from 'react';
import { chunk } from 'lodash';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../utils';

import './SectionList.scss';

const SectionItem = ({ title, link = '#', icon, iconClass, text, className = '' }) => {
  const getBlocksWith = createBemBlockBuilder(['section-item', className]);

  return (
    <a
      key={title}
      href={link}
      className={cx(getBlocksWith(), { [getBlocksWith('--no-text')]: !text })}
    >
      {icon}
      {iconClass && (
        <span className={cx(getBlocksWith('-icon'), getBlocksWith(`-icon--${iconClass}`))} />
      )}
      <div>
        <p className={getBlocksWith('__title')}>{title}</p>
        {text && <p className={getBlocksWith('__text')}>{text}</p>}
      </div>
    </a>
  );
};

const InfoItem = ({ text }) => {
  const getBlocksWith = createBemBlockBuilder(['info-item']);

  return <div className={getBlocksWith()}>{text}</div>;
};

export const SectionList = ({ title, items, itemsPerRow = items.length, className = '' }) => {
  const getBlocksWith = createBemBlockBuilder(['section-list', className]);
  const columns = chunk(items, itemsPerRow).map((column, columnIndex) => (
    <div key={columnIndex} className={getBlocksWith('__col')}>
      {column.map((data) =>
        data.type === 'info' ? (
          <InfoItem key="info" {...data} />
        ) : (
          <SectionItem key={data.title} className={getBlocksWith('__item')} {...data} />
        ),
      )}
    </div>
  ));

  return (
    <div className={getBlocksWith()}>
      <p className={getBlocksWith('__title')}>{title}</p>
      <div className="row">{columns}</div>
    </div>
  );
};
