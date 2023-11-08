import React, { FC } from 'react';
import { Heading, UnorderedList } from '@app/components';

import { TIPS_LIST } from './constants';

import './Tips.scss';

export const Tips: FC = () => (
  <div className="tips container">
    <Heading title="Use Professional Service Hours across any service listed within" tag="h3" />
    <div className="tips-lists">
      {TIPS_LIST.map(tipsItem => (
        <UnorderedList key={tipsItem.title} {...tipsItem} />
      ))}
    </div>
  </div>
);
