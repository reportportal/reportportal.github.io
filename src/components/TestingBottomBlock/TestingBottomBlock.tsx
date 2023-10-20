import React from 'react';

import { Heading } from '../Heading';
import { ApplyOurService } from './ApplyOurService';

import './TestingBottomBlock.scss';

interface Props {
  children: React.ReactNode;
  title: string;
  description?: string;
  url: string;
}

export const TestingBottomBlock: React.FC<Props> = ({ children, title, description, url }) => (
  <div className="testing-bottom-block">
    <div className="container">
      <div className="testing-bottom-block__heading">
        <Heading title={title} color="white-heading" />
        <div className="testing-bottom-block__description">{description}</div>
      </div>
      {children}
      <ApplyOurService url={url} />
    </div>
  </div>
);
