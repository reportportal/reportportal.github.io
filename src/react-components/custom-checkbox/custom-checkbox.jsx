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

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './custom-checkbox.scss';

const CustomCheckbox = ({
  className,
  onChange,
  isDisabled,
  initialState,
}) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const onClick = () => {
    const state = !isChecked;
    setIsChecked(state);
    onChange(state);
  };

  return (
    <div
      className={classnames('custom-checkbox', className, { disabled: isDisabled }, { checked: isChecked })}
      onClick={onClick}
    />
  );
};

CustomCheckbox.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  initialState: PropTypes.bool,
};
CustomCheckbox.defaultProps = {
  className: '',
  isDisabled: false,
  initialState: false,
};

export default CustomCheckbox;
