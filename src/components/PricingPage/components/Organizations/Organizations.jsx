import React from 'react';

import { createBemBlockBuilder } from '../../../../utils';

import './Organizations.scss';

const getBlocksWith = createBemBlockBuilder(['organizations']);

export const Organizations = () => (
  <div className={getBlocksWith()}>
    <div className={getBlocksWith('-title')}>Trusted by the world&apos;s leading organizations</div>
    <div></div>
  </div>
);
