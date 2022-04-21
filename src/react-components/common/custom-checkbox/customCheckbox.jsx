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
import styles from './customCheckbox.scss';

const cx = classNames.bind(styles);

const CustomCheckbox = ({ className, onChange, value, disabled, name }) => (
  <label className={cx('custom-checkbox', className, { checked: value, disabled })}>
    <input type="checkbox" id={name} name={name} value={value} onChange={onChange} disabled={disabled} checked={value} />
    <div className={cx('checkbox')}>
      <div className={cx('checkmark')} />
    </div>
  </label>
);

CustomCheckbox.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType(
    PropTypes.bool,
    PropTypes.string,
  ),
  disabled: PropTypes.bool,
  name: PropTypes.string,
};
CustomCheckbox.defaultProps = {
  className: '',
  onChange: () => null,
  value: false,
  disabled: false,
  name: '',
};

export default CustomCheckbox;
