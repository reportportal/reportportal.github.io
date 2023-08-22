import React from 'react';

import { createBemBlockBuilder } from '../../../utils';

import './Header.scss';

const getBlocksWith = createBemBlockBuilder(['testing-as-service']);

export const Header = () => (
  <div className={getBlocksWith('__header')}>
    <div className="container">
      <div className={getBlocksWith('__header-heading')}>
        <h1>Services</h1>
        <h2>Testing as a Service</h2>
      </div>
      <div className={getBlocksWith('__header-dashboard')}>
        <div className={getBlocksWith('__header-dashboard-text')}>
          Testing as a Service is an outcome-based testing delivery model that offers testing
          software, hardware, and expert resources on demand, thus allowing you to optimize your
          testing costs
        </div>
      </div>
    </div>
  </div>
);
