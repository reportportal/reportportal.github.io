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
import classNames from 'classnames/bind';
import Button from 'react-components/common/button/button.jsx';
import styles from './clockCard.scss';

const cx = classNames.bind(styles);

const ClockCard = ({ name, description, price, button, className, withPopular, withFullClock, onClick }) => (
  <div className={cx(
    'card-with-clock',
    className,
    {
      popular: withPopular,
      'with-full-clock': withFullClock,
    },
  )}>
    <div className={cx('name')}>{name}</div>
    <div className={cx('short-description')}>
      <div className={cx('double-level-description')}>
        <div className={cx('first-level-description')}>{description.firstLevelDescription}</div>
        <div className={cx('second-level-description')}>{description.secondLevelDescription}</div>
      </div>
    </div>
    <div className={cx('price')}>
      {price}
      <span className={cx('period')}>/per month</span>
    </div>
    {button && (
      <Button className={cx('card-button')} onClick={onClick} variant={button.variant}>
        {button.name}
      </Button>
    )}
  </div>
);

ClockCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.shape({
    firstLevelDescription: PropTypes.node,
    secondLevelDescription: PropTypes.node,
  }),
  price: PropTypes.string,
  button: PropTypes.shape({
    name: PropTypes.string,
    variant: PropTypes.string,
  }),
  className: PropTypes.string,
  withPopular: PropTypes.bool,
  withFullClock: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
ClockCard.defaultProps = {
  name: '',
  description: null,
  price: '',
  button: null,
  className: '',
  withPopular: false,
  withFullClock: false,
};

export default ClockCard;
