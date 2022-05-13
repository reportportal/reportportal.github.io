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

import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './simpleSwitcher.scss';

const cx = classNames.bind(styles);

const highlightWidth = 18;

const SimpleSwitcher = ({
  className,
  itemsData,
  handleSelect,
}) => {
  const [highlightX, setHighlightX] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const index = itemsData.findIndex(({ isActive }) => isActive);
    if (index > 0) {
      setHighlightX(highlightWidth * index);
    }
  }, [itemsData, setHighlightX]);

  useEffect(() => {
    setIsOn(highlightX > 0);
  }, [highlightX]);

  const onClick = (e, id) => {
    const { offsetLeft } = e.currentTarget;
    setHighlightX(offsetLeft - 1);
    handleSelect(id);
  };

  return (
    <div className={cx('simple-switcher', className, { active: isOn })}>
      <div
        className={cx('highlight')}
        style={{ width: `${highlightWidth}px`, transform: `translateX(${highlightX}px)` }}
      />
      {itemsData.map(({ id, isActive }) => (
        <div
          key={id}
          className={cx('switcher-item', { active: isActive })}
          onClick={(e) => onClick(e, id)}
        />
      ))}
    </div>
  );
};
SimpleSwitcher.propTypes = {
  itemsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  handleSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
};
SimpleSwitcher.defaultProps = {
  className: '',
};

export default SimpleSwitcher;
