import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '@utils';

import { icons } from './icons/iconsData';

import './TrustedOrganizations.scss';

const getBlocksWith = createBemBlockBuilder(['trusted-organizations']);

export const TrustedOrganizations = () => (
  <div className={classNames(getBlocksWith())}>
    <div className={getBlocksWith('__title')}>
      Trusted by the world&apos;s leading organizations
    </div>
    <div className={getBlocksWith('__icons-wrapper')}>
      <div className={getBlocksWith('__icons')}>
        {icons.map((Icon, index) => (
          <div key={index} className={getBlocksWith('__icon')}>
            <Icon />
          </div>
        ))}
      </div>
    </div>
  </div>
);
