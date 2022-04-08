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

import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ModalPopup from 'react-components/layouts/modal-layout/modal-popup/modalPopup.jsx';
import { getIsMobileView } from 'react-components/utils/utils.js';
import ModalContext from '../../layouts/modal-layout/modalContext';
import styles from './infoWithTooltip.scss';

const cx = classNames.bind(styles);

const InfoWithTooltip = ({ className, children, title, tooltip }) => {
  const { showModal } = useContext(ModalContext);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [clientRect, setClientRect] = useState({});

  const onHover = (e) => {
    if (getIsMobileView()) {
      return;
    }

    setIsTooltipVisible(true);
    setClientRect(e.currentTarget.getBoundingClientRect());
  };

  const onClick = () => {
    if (getIsMobileView()) {
      showModal(<ModalPopup title={title} description={tooltip} />);
    }
  };

  return (
    <div
      className={cx('info', className, { active: isTooltipVisible })}
      onMouseOver={onHover}
      onMouseOut={() => setIsTooltipVisible(false)}
      onClick={onClick}
    >
      {children(isTooltipVisible)}
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
  children: PropTypes.func,
  title: PropTypes.node.isRequired,
  tooltip: PropTypes.node.isRequired,
  isMobileView: PropTypes.bool,
};
InfoWithTooltip.defaultProps = {
  className: '',
  children: null,
  isMobileView: false,
};

export default InfoWithTooltip;
