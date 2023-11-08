import React from 'react';
import classNames from 'classnames';

import './InputField.scss';

export const InputField = ({
  className,
  touched,
  error,
  value,
  label,
  initialValue,
  initialTouched,
  InputElement = 'input',
  initialError,
  ...props
}) => (
  <div
    className={classNames('input-field', className, {
      error: touched && error,
      filled: value,
    })}
  >
    <label>
      {label}
      <InputElement className="input" value={value} {...props} />
    </label>
    {touched && error ? <div className={classNames('error-message')}>{error}</div> : null}
  </div>
);
