import React, { FC } from 'react';
import { useCustomersStatistics } from '@app/hooks/useCustomersStatistics';
import { createBemBlockBuilder } from '@app/utils';

import './CustomersStatistics.scss';

const getBlocksWith = createBemBlockBuilder(['customers-statistics']);
const getBlocksWithList = createBemBlockBuilder(['customers-statistics-list']);

export const CustomersStatistics: FC = () => {
  const { title, subTitle, statistics } = useCustomersStatistics();

  return (
    <section className={getBlocksWith()}>
      <div className={getBlocksWith('__container')}>
        <div className={getBlocksWith('__content')}>
          <h2 className={getBlocksWith('__title')}>{title}</h2>
          <h3 className={getBlocksWith('__sub-title')}>{subTitle}</h3>
          <ul className={getBlocksWithList()}>
            {statistics.map(({ quantity, entities, achievement }) => (
              <li key={quantity}>
                <strong>{quantity}</strong>
                <strong>{entities}</strong>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
