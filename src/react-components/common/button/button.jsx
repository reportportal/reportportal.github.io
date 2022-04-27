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
import styles from './button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const VARIANT_STANDARD = 'standard';
const VARIANT_LIGHT = 'light';

const Button = ({ children, onClick, className, type, disabled, variant }) => (
  <button className={cx('button', className, variant)} type={type} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);
Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.string.isRequired]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf([VARIANT_STANDARD, VARIANT_LIGHT]),
};
Button.defaultProps = {
  children: '',
  className: '',
  type: 'button',
  disabled: false,
  variant: VARIANT_STANDARD,
  onClick: () => null,
};

export default Button;
