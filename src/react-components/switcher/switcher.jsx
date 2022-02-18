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

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './switcher.scss';

const BORDER_WIDTH = 2;

const Switcher = ({
  itemsData,
  handleSelect,
  className,
  switcherWidth,
  isItemsEqualWidth,
  isSeparatorNeeded,
}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const hasActiveItem = itemsData.filter(item => item.isActive).length;
    const currentItems = [...itemsData];
    if (!hasActiveItem) {
      currentItems[0].isActive = true;
    }
    setItems(currentItems);
  }, [itemsData]);

  const onClick = (e) => {
    const id = e.currentTarget.id;

    const hasChange = !items.filter(item => item.id === id)[0].isActive;
    if (!hasChange) {
      return;
    }

    const currentItems = items.map(
      item => (item.id === id
        ? { ...item, isActive: true }
        : { ...item, isActive: false }),
    );
    setItems(currentItems);
    handleSelect(id);
  };

  const itemWidth = isItemsEqualWidth
    ? (switcherWidth - BORDER_WIDTH) / items.length
    : 'auto';

  return (
    <div
      className={classnames('switcher', className, isSeparatorNeeded && 'with-separator')}
      style={{ width: switcherWidth }}
    >
      {items.map(item => (
        <div
          key={item.id}
          id={item.id}
          className={classnames('switcher-item', { active: item.isActive })}
          onClick={onClick}
          style={{ width: itemWidth }}
        >
          <div className="item">
            {item.element}
          </div>
        </div>))}
    </div>
  );
};

Switcher.propTypes = {
  itemsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      element: PropTypes.oneOfType([
        PropTypes.element.isRequired,
        PropTypes.string.isRequired,
      ]),
      isActive: PropTypes.bool,
    }),
  ),
  handleSelect: PropTypes.func.isRequired,
  switcherWidth: PropTypes.number.isRequired,
  className: PropTypes.string,
  isItemsEqualWidth: PropTypes.bool,
  isSeparatorNeeded: PropTypes.bool,
};
Switcher.defaultProps = {
  itemsData: [],
  isItemsEqualWidth: false,
  isSeparatorNeeded: false,
};
export default Switcher;
