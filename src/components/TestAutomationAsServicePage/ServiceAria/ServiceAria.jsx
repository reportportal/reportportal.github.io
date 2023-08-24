import React from 'react';

import { Heading } from '../../Heading';
import { SERVICE_ARIA_INFO } from './constants';

import './ServiceAria.scss';

export const ServiceAria = () => (
  <div className="service-aria container">
    <Heading title="Areas that the service is applicable" />
    <div className="service-aria__blocks">
      {SERVICE_ARIA_INFO.map(info => (
        <div key={info} className="service-aria__blocks-item">
          {info}
        </div>
      ))}
    </div>
  </div>
);
