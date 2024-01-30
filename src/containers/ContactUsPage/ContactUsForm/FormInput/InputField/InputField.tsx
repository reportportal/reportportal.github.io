import React from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';

import './InputField.scss';

export const InputField = ({
  className,
  error,
  value,
  label,
  InputElement = 'input',
  ...props
}) => (
  <div
    className={classNames('input-field', className, {
      error,
      filled: value,
    })}
  >
    <label>
      {label}
      <InputElement
        className="input"
        value={value}
        {...omit(props, ['touched', 'initialValue', 'initialTouched', 'initialError'])}
      />
    </label>
    {error ? <div className={classNames('error-message')}>{error}</div> : null}
  </div>
);
