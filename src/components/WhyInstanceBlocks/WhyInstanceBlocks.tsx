import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { createBemBlockBuilder } from '@app/utils';

import './WhyInstanceBlocks.scss';

interface Explanations {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface WhyInstanceBlocksProps {
  title: string;
  explanations: Explanations[];
}

const getBlocksWith = createBemBlockBuilder(['why-instance-blocks']);
const getBlocksWithList = createBemBlockBuilder(['why-instance-blocks-list']);

export const WhyInstanceBlocks: FC<WhyInstanceBlocksProps> = ({ title, explanations }) => (
  <section className={classNames(getBlocksWith(), 'container')}>
    <h2 className={getBlocksWith('__title')}>{title}</h2>
    <div className={getBlocksWith('__content')}>
      <ul className={getBlocksWithList()}>
        {explanations.map(({ icon, title, description }) => (
          <li key={title}>
            {icon}
            <h3>{title}</h3>
            <span>{description}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
