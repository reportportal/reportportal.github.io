import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from '../Heading';
import { ApplyOurService } from './ApplyOurService';

import './TestingBottomBlock.scss';

export const TestingBottomBlock = ({ children, title, description }) => (
  <div className="testing-bottom-block">
    <div className="container">
      <div className="testing-bottom-block__heading">
        <Heading title={title} color="white-heading" />
        <div className="testing-bottom-block__description">{description}</div>
      </div>
      {children}
      <ApplyOurService />
    </div>
  </div>
);

TestingBottomBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.element.isRequired,
};
