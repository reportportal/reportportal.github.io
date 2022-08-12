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
import SimpleCard from 'react-components/pages/pricing-page/plans-block/plan-cards/plan-card/simple-card/simpleCard.jsx';
import ContactForm from 'react-components/forms/contact-form/contactForm.jsx';
import ClockCard from 'react-components/pages/pricing-page/plans-block/plan-cards/plan-card/clock-card/clockCard.jsx';
import { STARTUP, BUSINESS, ENTERPRISE, PACKAGE_25, PACKAGE_60, PACKAGE_168, YOU_HOST_ID, WE_HOST_ID } from '../constants';
import styles from './planCards.scss';

const cx = classNames.bind(styles);

const PlanCards = ({ plansData, periodId }) => {
  const { showModal } = useContext(ModalContext);

  const onButtonClick = (type, packageName) => {
    let title;
    const description = 'Please provide your details below, and ReportPortal will help you set up your subscription.';
    const SALESFORCE_SOURCE_NAME = 'ReportPortalSource__c';
    const LEAD_SOURCE = 'lead_source';
    let options;

    switch (type) {
      case WE_HOST_ID:
        title = 'Contact form for package registration';
        options = [
          {
            name: SALESFORCE_SOURCE_NAME,
            value: `Landing page/ "We Host" / Request ${packageName} Plan`,
          },
          {
            name: LEAD_SOURCE,
            value: 'RP_SaaS',
          },
        ];
        break;
      case YOU_HOST_ID:
        title = `Contact form for package registration with ${packageName} hours of support`;
        options = [
          {
            name: SALESFORCE_SOURCE_NAME,
            value: `Landing page/ "You Host|We manage" / Request Support "Package ${packageName}"`,
          },
          {
            name: LEAD_SOURCE,
            value: 'RP_Service',
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
        backTo='Back to package'
      />
    );
  };

  const getPlan = (name, price) => {
    switch (name) {
      case STARTUP:
        return <SimpleCard
          key={STARTUP}
          className={cx('plan-card')}
          name={STARTUP}
          description='Shared instance, essential storage, data retention and technical support'
          price={price}
          button={{
            name: 'Sign Up',
            onClick: () => onButtonClick(WE_HOST_ID, STARTUP),
          }}
        />;
      case BUSINESS:
        return <SimpleCard
          key={BUSINESS}
          className={cx('plan-card', 'popular')}
          name={BUSINESS}
          description='Individual instance, more flexibility, enhanced security and more technical support hours'
          price={price}
          withPopular
          button={{
            name: 'Sign Up',
            onClick: () => onButtonClick(WE_HOST_ID, BUSINESS),
          }}
        />;
      case ENTERPRISE:
        return <SimpleCard
          key={ENTERPRISE}
          className={cx('plan-card')}
          name={ENTERPRISE}
          description='Custom conditions for custom needs'
          price={price}
          button={{
            name: 'Contact Us',
            onClick: () => onButtonClick(WE_HOST_ID, ENTERPRISE),
          }}
          withPeriod={false}
        />;
      case PACKAGE_25:
        return <ClockCard
          key={PACKAGE_25}
          className={cx('plan-card')}
          name='25'
          firstLevelDescription='professional'
          secondLevelDescription='service hours'
          price={price}
          button={{
            name: 'Contact Us',
            onClick: () => onButtonClick(YOU_HOST_ID, PACKAGE_25),
          }}
        />;
      case PACKAGE_60:
        return <ClockCard
          key={PACKAGE_60}
          className={cx('plan-card', 'popular')}
          name='60'
          firstLevelDescription='professional'
          secondLevelDescription='service hours'
          price={price}
          withPopular
          button={{
            name: 'Contact Us',
            onClick: () => onButtonClick(YOU_HOST_ID, PACKAGE_60),
          }}
        />;
      case PACKAGE_168:
        return <ClockCard
          key={PACKAGE_168}
          className={cx('plan-card')}
          name='168+'
          firstLevelDescription='professional'
          secondLevelDescription='service hours'
          price={price}
          withFullClock
          button={{
            name: 'Contact Us',
            onClick: () => onButtonClick(YOU_HOST_ID, PACKAGE_168),
          }}
        />;
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
}

export default PlanCards;
