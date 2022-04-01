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
import classNames from 'classnames/bind';
import styles from './switcher.scss';

const cx = classNames.bind(styles);

const BIG = 'big';
const SMALL = 'small';

const Switcher = ({
  className,
  itemsData,
  handleSelect,
  withItemsEqualWidth,
  withSeparator,
  size,
}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([...itemsData]);
  }, [itemsData]);

  const onClick = (id) => {
    const hasChange = !items.filter((item) => item.id === id)[0].isActive;
    if (!hasChange) {
      return;
    }

    const currentItems = items.map((item) => ({ ...item, isActive: item.id === id }));
    setItems(currentItems);
    handleSelect(id);
  };

  const getElement = ({ element, isActive }) => {
    if (!element.active && !element.inactive) {
      return element;
    }

    return isActive ? element.active : element.inactive;
  }

  return (
    <div
      className={cx('switcher', className, size, {
        'equal-width': withItemsEqualWidth,
        'with-separator': withSeparator,
      })}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={cx('switcher-item', { active: item.isActive })}
          onClick={() => onClick(item.id)}
        >
          <div className={cx('item')}>
            {getElement(item)}
          </div>
        </div>
      ))}
    </div>
  );
};

Switcher.propTypes = {
  itemsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      element: PropTypes.oneOfType([
        PropTypes.node.isRequired,
        PropTypes.string.isRequired,
        PropTypes.shape({
          active: PropTypes.element
        }),
      ]),
      isActive: PropTypes.bool,
    }),
  ).isRequired,
  handleSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
  withItemsEqualWidth: PropTypes.bool,
  withSeparator: PropTypes.bool,
  size: PropTypes.oneOf([BIG, SMALL]),
};
Switcher.defaultProps = {
  className: '',
  withItemsEqualWidth: false,
  withSeparator: false,
  size: SMALL,
};

export default Switcher;
