import React, { FC } from 'react';
import { Heading } from '@app/components/Heading';

import { SERVICE_ARIA_INFO } from './constants';

import './ServiceAria.scss';

export const ServiceAria: FC = () => (
  <div className="service-aria container">
    <Heading title="Areas where the service is applicable" />
    <div className="service-aria__blocks">
      {SERVICE_ARIA_INFO.map(info => (
        <div key={info} className="service-aria__blocks-item">
          {info}
        </div>
      ))}
    </div>
  </div>
);
