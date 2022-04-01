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
import classNames from 'classnames/bind';
import styles from './infoWithTooltip.scss';

const cx = classNames.bind(styles);

const InfoWithTooltip = ({ className, children, tooltip }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [clientRect, setClientRect] = useState({});

  const onHover = (e) => {
    setIsTooltipVisible(true);
    setClientRect(e.currentTarget.getBoundingClientRect());
  };

  const getInfo = () => {
    const { active, inactive } = children;
    if(!active && !inactive) {
      return children;
    }

    return isTooltipVisible ? active : inactive;
  }

  return (
    <div
      className={cx('info', className, { active: isTooltipVisible })}
      onMouseOver={onHover}
      onMouseOut={() => setIsTooltipVisible(false)}
    >
      {getInfo()}
      <div
        className={cx('hover-area', { visible: isTooltipVisible })}
        style={{
          top: `${clientRect.y}px`,
          left: `${clientRect.x}px`,
          paddingTop: `${clientRect.height + 9}px`,
          paddingLeft: '6px',
        }}
      >
        <div className={cx('tooltip')}>{tooltip}</div>
      </div>
    </div>
  );
};

InfoWithTooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.shape({
      active: PropTypes.node,
      inactive: PropTypes.node,
    }),
    PropTypes.node,
  ]),
  tooltip: PropTypes.node.isRequired,
};
InfoWithTooltip.defaultProps = {
  className: '',
  children: null,
};

export default InfoWithTooltip;
