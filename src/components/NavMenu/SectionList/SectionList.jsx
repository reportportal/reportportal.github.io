import React from 'react';
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

export const SectionList = ({ title, items, columnsAmount = 1, className = '' }) => {
  const columns = [];
  const itemsPerColumnAmount = items.length / columnsAmount;
  const getBlocksWith = createBemBlockBuilder(['section-list', className]);

  for (let columnIndex = 0; columnIndex < columnsAmount; columnIndex += 1) {
    columns.push(
      <div key={columnIndex} className={getBlocksWith('__col')}>
        {items
          .slice(
            columnIndex * itemsPerColumnAmount,
            columnIndex * itemsPerColumnAmount + itemsPerColumnAmount,
          )
          .map((data) =>
            data.type === 'info' ? (
              <InfoItem key="info" {...data} />
            ) : (
              <SectionItem key={data.title} className={getBlocksWith('__item')} {...data} />
            ),
          )}
      </div>,
    );
  }

  return (
    <div className={getBlocksWith()}>
      <p className={getBlocksWith('__title')}>{title}</p>
      <div className="row">{columns}</div>
    </div>
  );
};
