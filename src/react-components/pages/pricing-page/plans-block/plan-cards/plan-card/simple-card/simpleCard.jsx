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
import styles from './simpleCard.scss';

const cx = classNames.bind(styles);

const SimpleCard = ({ name, description, price, className, withPopular, withPeriod, button }) => (
  <div className={cx('card', className, { popular: withPopular })}>
    {withPopular && <div className={cx('popular-label')}>Most popular</div>}
    <div className={cx('name')}>{name}</div>
    <div className={cx('short-description')}>{description}</div>
    <div className={cx('price')}>
      {price}
      {withPeriod && <span className={cx('period')}>/per month</span>}
    </div>
    {button && (
      <Button
        className={cx('card-button')}
        onClick={button.onClick}
        variant={withPopular ? 'standard' : 'light'}
      >
        {button.name}
      </Button>
    )}
  </div>
);

SimpleCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.node,
  price: PropTypes.string,
  button: PropTypes.shape({
    name: PropTypes.string,
    onClick: PropTypes.func,
  }),
  className: PropTypes.string,
  withPopular: PropTypes.bool,
  withPeriod: PropTypes.bool,
};
SimpleCard.defaultProps = {
  name: '',
  description: null,
  price: '',
  button: null,
  className: '',
  withPopular: false,
  withPeriod: true,
};

export default SimpleCard;
