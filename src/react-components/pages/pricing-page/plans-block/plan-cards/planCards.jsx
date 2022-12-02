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
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import ModalContext from 'react-components/layouts/modal-layout/modalContext';
import ContactForm from 'react-components/forms/contact-form/contactForm.jsx';
import SimpleCard from './plan-card/simple-card/simpleCard.jsx';
import ClockCard from './plan-card/clock-card/clockCard.jsx';
import {
  STARTUP,
  BUSINESS,
  ENTERPRISE,
  PACKAGE_25,
  PACKAGE_60,
  PACKAGE_168,
  SAAS_ID,
  ON_PREMISES_ID,
  OPEN_SOURCE,
} from '../constants';
import styles from './planCards.scss';

const cx = classNames.bind(styles);

const PlanCards = ({ plansData, periodId }) => {
  const { showModal } = useContext(ModalContext);

  const onButtonClick = (type, packageName) => {
    const description =
      'Please provide your details below, and ReportPortal will help you set up your subscription.';
    const SALESFORCE_SOURCE_NAME = 'ReportPortalSource__c';
    const LEAD_SOURCE = 'lead_source';
    let title;
    let options;

    switch (type) {
      case SAAS_ID:
        title = 'Contact form for package registration';
        options = [
          {
            name: SALESFORCE_SOURCE_NAME,
            value: `Landing page/ "SaaS" / Request ${packageName} Plan`,
          },
          {
            name: LEAD_SOURCE,
            value: 'RP SaaS',
          },
        ];
        break;
      case ON_PREMISES_ID:
        title = `Contact form for package registration with ${packageName} hours of support`;
        options = [
          {
            name: SALESFORCE_SOURCE_NAME,
            value: `Landing page/ "On-Premises" / Request Support "Package ${packageName}"`,
          },
          {
            name: LEAD_SOURCE,
            value: 'RP Service',
          },
        ];
        break;
      default:
    }

    showModal(
      <ContactForm
        modalClassName={cx('contact-form')}
        title={title}
        description={description}
        options={options}
        backTo="Back to package"
      />,
    );
  };

  const getPlan = (name, price) => {
    switch (name) {
      case STARTUP:
        return (
          <SimpleCard
            key={STARTUP}
            name={STARTUP}
            description="Shared instance, essential storage, data retention and technical support"
            price={price}
            button={{
              name: 'Sign Up',
              onClick: () => onButtonClick(SAAS_ID, STARTUP),
            }}
          />
        );
      case BUSINESS:
        return (
          <SimpleCard
            key={BUSINESS}
            name={BUSINESS}
            description="Individual instance, more flexibility, enhanced security and more technical support hours"
            price={price}
            withPopular
            button={{
              name: 'Contact Us',
              onClick: () => onButtonClick(SAAS_ID, BUSINESS),
            }}
          />
        );
      case ENTERPRISE:
        return (
          <SimpleCard
            key={ENTERPRISE}
            name={ENTERPRISE}
            description="Custom conditions for custom needs"
            price={price}
            button={{
              name: 'Contact Us',
              onClick: () => onButtonClick(SAAS_ID, ENTERPRISE),
            }}
            withPeriod={false}
          />
        );
      case PACKAGE_25:
        return (
          <ClockCard
            key={PACKAGE_25}
            name="25"
            firstLevelDescription="professional"
            secondLevelDescription="service hours"
            price={price}
            type="min"
            button={{
              name: 'Contact Us',
              onClick: () => onButtonClick(ON_PREMISES_ID, PACKAGE_25),
            }}
          />
        );
      case PACKAGE_60:
        return (
          <ClockCard
            key={PACKAGE_60}
            name="60"
            firstLevelDescription="professional"
            secondLevelDescription="service hours"
            price={price}
            type="mid"
            button={{
              name: 'Contact Us',
              onClick: () => onButtonClick(ON_PREMISES_ID, PACKAGE_60),
            }}
          />
        );
      case PACKAGE_168:
        return (
          <ClockCard
            key={PACKAGE_168}
            name="168+"
            firstLevelDescription="professional"
            secondLevelDescription="service hours"
            price={price}
            type="max"
            button={{
              name: 'Contact Us',
              onClick: () => onButtonClick(ON_PREMISES_ID, PACKAGE_168),
            }}
          />
        );
      case OPEN_SOURCE:
        return (
          <ClockCard
            key={OPEN_SOURCE}
            name={OPEN_SOURCE}
            price={price}
            perMonth={false}
            button={{
              name: 'Start now',
              onClick: () => window.open('https://reportportal.io/installation', '_blank'),
            }}
          />
        );
      default:
        throw new Error('wrong package name');
    }
  };

  return (
    <div className={cx('plan-cards')}>
      {plansData.map(({ name, price }) => getPlan(name, price[periodId]))}
    </div>
  );
};
PlanCards.propTypes = {
  plansData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.object,
    }),
  ),
  periodId: PropTypes.string.isRequired,
};

export default PlanCards;
