import React from 'react';

import { Heading } from '../../../components/Heading';

import { LEFT_ASIDE_TEXT, RIGHT_ASIDE_TEXT } from './constants';

import './OurSolution.scss';

export const OurSolution: React.FC = () => (
  <div className="our-solution container">
    <Heading title="Our solution is Quality Assessment and consulting" />
    <div className="our-solution__spider">
      <div className="our-solution__spider-aside">
        {LEFT_ASIDE_TEXT.map(({ title, description }) => (
          <div key={title} className="spider-aside__item">
            <div className="spider-aside__item-title">{title}</div>
            <div className="spider-aside__item-description">{description}</div>
          </div>
        ))}
      </div>
      <div className="our-solution__spider-image">
        <div className="our-solution__spider-image-title">Quality Assessment</div>
      </div>
      <div className="our-solution__spider-aside">
        {RIGHT_ASIDE_TEXT.map(({ title, description }) => (
          <div key={title} className="spider-aside__item">
            <div className="spider-aside__item-title">{title}</div>
            <div className="spider-aside__item-description">{description}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
