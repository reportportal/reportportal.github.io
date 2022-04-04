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
import ClockCard from 'react-components/plan-card/clock-card/clockCard.jsx';
import ContactForm from 'react-components/forms/contact-form/contactForm.jsx';
import SimpleCard from 'react-components/plan-card/simple-card/simpleCard.jsx';
import ModalContext from '../layouts/modal-layout/modalContext';

const PlanCard = ({ name, description, price, button, className, form, withPopular, withClock, withFullClock }) => {
  const { showModal } = useContext(ModalContext);

  const onClick = () => {
    showModal(
      <ContactForm title={form.title} description={form.description} options={form.options} />,
    );
  };

  return (
    withClock || withFullClock
      ? <ClockCard
        name={name}
        description={description.doubleLevelDescription}
        price={price}
        button={button}
        className={className}
        withPopular={withPopular}
        withFullClock={withFullClock}
        onClick={onClick}
      />
      : <SimpleCard
        name={name}
        description={description}
        price={price}
        button={button}
        className={className}
        withPopular={withPopular}
        onClick={onClick}
      />
  );
};

PlanCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.shape({
      doubleLevelDescription: PropTypes.shape({
        firstLevelDescription: PropTypes.node,
        secondLevelDescription: PropTypes.node,
      }),
    }),
    PropTypes.node,
  ]),
  price: PropTypes.string,
  button: PropTypes.shape({
    name: PropTypes.string,
    light: PropTypes.bool,
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
  withPopular: PropTypes.bool,
  withClock: PropTypes.bool,
  withFullClock: PropTypes.bool,
};
PlanCard.defaultProps = {
  name: '',
  description: null,
  price: '',
  button: null,
  className: '',
  form: {},
  withPopular: false,
  withClock: false,
  withFullClock: false,
};

export default PlanCard;
