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
import styles from './simpleSwitcher.scss';

const cx = classNames.bind(styles);

const SimpleSwitcher = ({
  className,
  onChange,
  label,
  name,
  checked,
  disabled,
}) => (
  <label className={cx('simple-switcher', className, { checked, disabled })}>
    <input type='checkbox' id={name} name={name} value={checked} onChange={onChange} disabled={disabled} checked={checked} />
    <div className={cx('switcher')}>
      <div className={cx('item')} />
    </div>
    <div className={cx('label')}>{label}</div>
  </label>
);
SimpleSwitcher.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.node,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};
SimpleSwitcher.defaultProps = {
  className: '',
  label: null,
  checked: false,
  disabled: false,
};

export default SimpleSwitcher;
