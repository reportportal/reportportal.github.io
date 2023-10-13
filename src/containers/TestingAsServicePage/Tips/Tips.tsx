import React from 'react';

import { Heading } from '../../../components/Heading';
import { UnorderedList } from '../../../components/UnorderedList';

import { TIPS_LIST } from './constants';

import './Tips.scss';

export const Tips: React.FC = () => (
  <div className="tips container">
    <Heading title="Use Professional Service Hours across any service listed within" tag="h3" />
    <div className="tips-lists">
      {TIPS_LIST.map(tipsItem => (
        <UnorderedList key={tipsItem.title} {...tipsItem} />
      ))}
    </div>
  </div>
);
