import React, { FC } from 'react';
import { Heading } from '@app/components/Heading';
import { UnorderedList } from '@app/components/UnorderedList';

import { TIPS_LIST } from './constants';

import './Tips.scss';

export const Tips: FC = () => (
  <div className="tips container">
    <Heading title="Use Professional Service Points across any service listed within" tag="h3" />
    <div className="tips-lists">
      {TIPS_LIST.map(tipsItem => (
        <UnorderedList key={tipsItem.title} {...tipsItem} />
      ))}
    </div>
  </div>
);
