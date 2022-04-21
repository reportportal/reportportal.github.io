/*
 * Copyright 2022 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './inputField.scss';

const cx = classNames.bind(styles);

const InputField = ({
  className,
  icon,
  touched,
  error,
  value,
  initialValue,
  initialTouched,
  initialError,
  ...props
}) => (
  <div className={cx(
    'input-field',
    className,
    {
      'with-icon': icon,
      error: touched && error,
      filled: value,
    },
  )}>
    {icon}
    <input
      value={value}
      {...props}
    />
    {touched && error ? <div className={cx('error-message')}>{error}</div> : null}
  </div>
);
InputField.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  value: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.string,
  initialValue: PropTypes.string,
  initialTouched: PropTypes.bool,
  initialError: PropTypes.string,
};
InputField.defaultProps = {
  className: '',
  icon: null,
  value: '',
  touched: false,
  error: '',
  initialValue: '',
  initialTouched: false,
  initialError: '',
};

export default InputField;
