import React, { FC } from 'react';

import './StatisticList.scss';

interface StatisticListProps {
  statistics: {
    quantity: string;
    entities: string;
    achievement?: string;
  }[];
}

export const StatisticList: FC<StatisticListProps> = ({ statistics }) => (
  <ul className="statistic-list">
    {statistics.map(({ quantity, entities, achievement }) => (
      <li key={quantity} className="white-border">
        <strong>{quantity}</strong>
        <strong>{entities}</strong>
        {achievement && <span>{achievement}</span>}
      </li>
    ))}
  </ul>
);
