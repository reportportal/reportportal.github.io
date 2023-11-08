import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '@app/utils';

import './CustomCheckbox.scss';

const getBlocksWith = createBemBlockBuilder(['custom-checkbox']);

export const CustomCheckbox = ({ label, value, disabled, name, onChange }) => (
  <label className={classNames(getBlocksWith(), { checked: value, disabled })}>
    <input
      id={name}
      type="checkbox"
      name={name}
      value={value}
      disabled={disabled}
      checked={value}
      onChange={onChange}
    />
    <div className={getBlocksWith('__checkmark')} />
    {label}
  </label>
);
