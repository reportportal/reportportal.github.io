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

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'react-components/common/button/button.jsx';
import { ContactForm } from 'react-components/forms/contact-form/contactForm.jsx';
import ModalContext from '../layouts/modal-layout/modalContext';
import styles from './planCard.scss';

const cx = classNames.bind(styles);

const PlanCard = ({ name, description, price, button, className, form }) => {
  const { showModal } = useContext(ModalContext);

  const onClick = () => {
    showModal(
      <ContactForm title={form.title} description={form.description} options={form.options} />,
    );
  };

  return (
    <div className={cx('card', className)}>
      <div className={cx('popular-label')}>Most popular</div>
      <div className={cx('name')}>{name}</div>
      <div className={cx('short-description')}>{description}</div>
      <div className={cx('price')}>
        {price}
        <span className={cx('period')}>/per month</span>
      </div>
      {button && (
        <div className={cx('card-button')}>
          <Button className={button.type} onClick={onClick}>
            {button.name}
          </Button>
        </div>
      )}
    </div>
  );
};

PlanCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  price: PropTypes.string,
  button: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
  }),
  className: PropTypes.string,
  form: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
      }),
    ),
  }),
};
PlanCard.defaultProps = {
  name: '',
  description: null,
  price: '',
  button: null,
  className: '',
  form: {},
};

export default PlanCard;
