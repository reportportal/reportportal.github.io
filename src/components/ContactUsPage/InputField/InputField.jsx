import React from 'react';
import cx from 'classnames';

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
    className={cx('input-field', className, {
      error: touched && error,
      filled: value,
    })}
  >
    <label>
      {label}
      <InputElement className="input" value={value} {...props} />
    </label>
    {touched && error ? <div className={cx('error-message')}>{error}</div> : null}
  </div>
);
