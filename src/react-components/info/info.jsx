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
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './info.scss';

const Info = ({ children, tooltip }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [elementX, setElementX] = useState(0);
  const [elementY, setElementY] = useState(0);

  const onHover = (e) => {
    const clientRect = e.currentTarget.getBoundingClientRect();
    const {
      x,
      y,
      height,
    } = clientRect;
    setIsTooltipVisible(true);
    setElementX(x + 6);
    setElementY(y + height + 9);
  };

  return (
    <div
      className={classnames('info', { active: isTooltipVisible })}
      onMouseOver={onHover}
      onMouseOut={() => setIsTooltipVisible(false)}
    >
      {children}
      <div
        className={classnames('tooltip', { visible: isTooltipVisible })}
        style={{ top: `${elementY}px`, left: `${elementX}px` }}
      >
        <div dangerouslySetInnerHTML={{ __html: tooltip }} />
      </div>
    </div>
  );
};

Info.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  tooltip: PropTypes.string.isRequired,
};
Info.defaultProps = {
  className: '',
};

export default Info;
