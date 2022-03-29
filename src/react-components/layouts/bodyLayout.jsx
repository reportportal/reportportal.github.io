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
import './bodyLayout.scss';

const BodyLayout = ({ children, className }) => (
  <div className={classnames('body-layout', className)}>
    <div className={className}>{children}</div>
  </div>
);

BodyLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
BodyLayout.defaultProps = {
  className: '',
};

export default BodyLayout;
