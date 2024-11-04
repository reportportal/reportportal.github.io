import React, { FC, ReactNode } from 'react';

import { Heading } from '../Heading';
import { ApplyOurService } from './ApplyOurService';

import './TestingBottomBlock.scss';

interface TestingBottomBlockProps {
  children: ReactNode;
  title: string;
  description?: string;
  url: string;
}

export const TestingBottomBlock: FC<TestingBottomBlockProps> = ({
  children,
  title,
  description,
  url,
}) => (
  <div className="testing-bottom-block">
    <div className="container">
      <div className="testing-bottom-block__heading">
        <Heading title={title} color="white-heading" />
        {description && <div className="testing-bottom-block__description">{description}</div>}
      </div>
      {children}
      <ApplyOurService url={url} />
    </div>
  </div>
);
