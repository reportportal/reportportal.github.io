import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../utils';

import './CustomCheckbox.scss';

const getBlocksWith = createBemBlockBuilder(['custom-checkbox']);

export const CustomCheckbox = ({ label, value, disabled, name, onChange }) => (
  <label className={cx(getBlocksWith(), { checked: value, disabled })}>
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
