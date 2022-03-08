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
import './infoWithTooltip.scss';

const InfoWithTooltip = ({ children, tooltip }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [clientRect, setClientRect] = useState({});

  const onHover = (e) => {
    setIsTooltipVisible(true);
    setClientRect(e.currentTarget.getBoundingClientRect());
  };

  return (
    <div
      className={classnames('info', { active: isTooltipVisible })}
      onMouseOver={onHover}
      onMouseOut={() => setIsTooltipVisible(false)}
    >
      {children}
      <div
        className={classnames('hover-area', { visible: isTooltipVisible })}
        style={{
          top: `${clientRect.y}px`,
          left: `${clientRect.x}px`,
          paddingTop: `${clientRect.height + 9}px`,
          paddingLeft: '6px',
        }}
      >
        <div
          className={classnames('tooltip')}
        >
          {tooltip}
        </div>
      </div>
    </div>
  );
};

InfoWithTooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  tooltip: PropTypes.node.isRequired,
};
InfoWithTooltip.defaultProps = {
  className: '',
};

export default InfoWithTooltip;
