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
import styles from './infoIcon.scss';

const cx = classNames.bind(styles);

const InfoIcon = ({ className, isActive }) => (
  <i className={cx('info-icon', className, { active: isActive })} />
);
InfoIcon.propTypes = {
  className: PropTypes.string,
  isActive: PropTypes.bool,
};
InfoIcon.defaultProps = {
  className: '',
  isActive: false,
};

export default InfoIcon;
