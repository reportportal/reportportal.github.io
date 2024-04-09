import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { createBemBlockBuilder } from '@app/utils';

import './CustomCheckbox.scss';

interface CustomCheckboxProps {
  label: string | ReactNode;
  value?: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: () => void;
}

const getBlocksWith = createBemBlockBuilder(['custom-checkbox']);

export const CustomCheckbox: FC<CustomCheckboxProps> = ({
  label,
  value,
  disabled,
  name,
  onChange,
}) => (
  <label className={classNames(getBlocksWith(), { checked: value, disabled })}>
    <input
      id={name}
      type="checkbox"
      name={name}
      value={name}
      disabled={disabled}
      checked={value}
      onChange={onChange}
    />
    <div className={getBlocksWith('__checkmark')} />
    {label}
  </label>
);
