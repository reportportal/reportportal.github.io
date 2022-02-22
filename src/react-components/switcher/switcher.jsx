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
    const hasChange = !items.filter(item => item.id === id)[0].isActive;
    if (!hasChange) {
      return;
    }

    const currentItems = items.map(
      item => ({ ...item, isActive: item.id === id }),
    );
    setItems(currentItems);
    handleSelect(id);
  };

  return (
    <div
      className={classnames(
        'switcher',
        className,
        size,
        {
          'equal-width': withItemsEqualWidth,
          'with-separator': withSeparator,
        },
      )}
    >
      {items.map(item => (
        <div
          key={item.id}
          className={classnames('switcher-item', { active: item.isActive })}
          onClick={() => onClick(item.id)}
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
