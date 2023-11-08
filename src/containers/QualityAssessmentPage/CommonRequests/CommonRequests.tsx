import React, { FC } from 'react';
import { Heading } from '@app/components';

import { TOP_REQUEST_LIST, BOTTOM_REQUEST_LIST } from './constants';

import './CommonRequests.scss';

export const CommonRequests: FC = () => (
  <div className="common-requests">
    <Heading title="Common client requests" />
    <div className="requests__wrapper">
      <div className="requests">
        {TOP_REQUEST_LIST.map(({ description, groupName }, index) => (
          <div className="requests__item" key={index}>
            <div className="requests__item-description">{description}</div>
            <div className="requests__item-group-name">{groupName}</div>
          </div>
        ))}
      </div>
      <div className="requests">
        {BOTTOM_REQUEST_LIST.map(({ description, groupName }, index) => (
          <div className="requests__item" key={index}>
            <div className="requests__item-description">{description}</div>
            <div className="requests__item-group-name">{groupName}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
