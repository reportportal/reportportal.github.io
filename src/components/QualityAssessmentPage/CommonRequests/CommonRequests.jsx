import React from 'react';
import Marquee from 'react-fast-marquee';

import { Heading } from '../../Heading';
import { TOP_REQUEST_LIST, BOTTOM_REQUEST_LIST } from './constants';

import './CommonRequests.scss';

export const CommonRequests = () => (
  <div className="common-requests">
    <Heading title="Common client requests" />
    <div className="common-requests__desktop-block requests">
      <Marquee className="requests__marquee" speed={15} gradientWidth="19.27%">
        {TOP_REQUEST_LIST.map(({ description, groupName }, index) => (
          <div className="requests__marquee-item" key={index}>
            <div className="requests__marquee-item-description">{description}</div>
            <div className="requests__marquee-item-groupName">{groupName}</div>
          </div>
        ))}
      </Marquee>
      <Marquee
        className="requests__marquee requests__marquee--bottom"
        speed={15}
        gradientWidth="19.27%"
      >
        {BOTTOM_REQUEST_LIST.map(({ description, groupName }, index) => (
          <div className="requests__marquee-item" key={index}>
            <div className="requests__marquee-item-description">{description}</div>
            <div className="requests__marquee-item-group-name">{groupName}</div>
          </div>
        ))}
      </Marquee>
    </div>
    <div className="common-requests__mobile-block requests">
      <Marquee className="requests__marquee" speed={15} gradientWidth="19.27%">
        {[...TOP_REQUEST_LIST, ...BOTTOM_REQUEST_LIST].map(({ description, groupName }, index) => (
          <div className="requests__marquee-item" key={index}>
            <div className="requests__marquee-item-description">{description}</div>
            <div className="requests__marquee-item-groupName">{groupName}</div>
          </div>
        ))}
      </Marquee>
    </div>
  </div>
);
