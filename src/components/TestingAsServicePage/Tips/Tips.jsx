import React from 'react';
import { Heading } from '../../Heading';
import { UnorderedList } from '../../UnorderedList';
import {
  MANUAL_TESTING_LIST,
  EXPLORATORY_LIST,
  SPECIALIZED_LIST,
  AUTOMATION_LIST,
} from './constants';

import './Tips.scss';

export const Tips = () => (
  <div className="tips container">
    <Heading title="Use Professional Service Hours across any service listed within" tag="h3" />
    <div className="tips-lists">
      <UnorderedList title="Manual testing" hasSeparator list={MANUAL_TESTING_LIST} />
      <UnorderedList title="Automation" hasSeparator list={AUTOMATION_LIST} />
      <UnorderedList title="Specialized" hasSeparator list={SPECIALIZED_LIST} />
      <UnorderedList title="Exploratory" list={EXPLORATORY_LIST} />
    </div>
  </div>
);
