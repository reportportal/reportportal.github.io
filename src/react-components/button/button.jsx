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
import classnames from 'classnames';
import './button.scss';

const Button = ({ children, onClick, className }) => (
  <div
    className={classnames('button', className)}
    onClick={onClick}
  >
    {children}
  </div>
);
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.string.isRequired,
  ]),
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
Button.defaultProps = {
  children: '',
  className: '',
};

export default Button;
