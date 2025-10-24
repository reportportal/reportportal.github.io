import React, { ElementType, FC } from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';

import { BaseFieldProps } from '../../FormFieldWrapper';

import './InputField.scss';

interface InputFieldProps extends BaseFieldProps {
  type?: string;
  error?: string;
}

export const InputField: FC<Omit<InputFieldProps, 'name'> & { error?: string }> = ({
  className,
  error,
  value,
  label,
  InputElement = 'input',
  ...props
}) => {
  const Element = InputElement as ElementType;

  return (
    <div className={classNames('input-field', className, { error, filled: value })}>
      <label>
        {label}
        <Element
          className="input"
          value={value}
          {...omit(props, ['touched', 'initialValue', 'initialTouched', 'initialError'])}
        />
      </label>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};
