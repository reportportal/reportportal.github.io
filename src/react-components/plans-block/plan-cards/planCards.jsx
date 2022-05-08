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
import SimpleCard from 'react-components/plan-card/simple-card/simpleCard.jsx';
import ContactForm from 'react-components/forms/contact-form/contactForm.jsx';
import ClockCard from 'react-components/plan-card/clock-card/clockCard.jsx';
import { FREE, START_UP, PRO, ENTERPRISE, PACKAGE_32, PACKAGE_60, PACKAGE_168 } from '../constants';
import styles from './planCards.scss';

const cx = classNames.bind(styles);

const PlanCards = ({ plansData, periodId }) => {
  const { showModal } = useContext(ModalContext);

  const onButtonClick = (title, description, options) => {
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

  const plans = {
    [FREE]: (price) => (
      <SimpleCard
        key={FREE}
        className={cx('plan-card')}
        name={FREE}
        description='For quick start'
        price={price}
        button={{
          name: 'Sign Up',
          onClick: () => onButtonClick(
            'Contact form for package registration',
            'Please provide your details below, and ReportPortal will help you set up your subscription.',
            [{name: 'ReportPortalSource__c', value: 'Landing page/ "We Host" / Request Free Plan'}],
          ),
        }}
      />
    ),
    [START_UP]: (price) => (
      <SimpleCard
        key={START_UP}
        className={cx('plan-card', 'popular')}
        name={START_UP}
        description='For small team'
        price={price}
        withPopular
        button={{
          name: 'Sign Up',
          onClick: () => onButtonClick(
            'Contact form for package registration',
            'Please provide your details below, and ReportPortal will help you set up your subscription.',
            [{name: 'ReportPortalSource__c', value: 'Landing page/ "We Host" / Request Start Up Plan'}],
          ),
        }}
      />
    ),
    [PRO]: (price) => (
      <SimpleCard
        key={PRO}
        className={cx('plan-card')}
        name={PRO}
        description='For large companies'
        price={price}
        button={{
          name: 'Contact Us',
          onClick: () => onButtonClick(
            'Contact form for package registration',
            'Please provide your details below, and ReportPortal will help you set up your subscription.',
            [{name: 'ReportPortalSource__c', value: 'Landing page/ "We Host" / Request Pro Plan'}],
          ),
        }}
      />
    ),
    [ENTERPRISE]: (price) => (
      <SimpleCard
        key={ENTERPRISE}
        className={cx('plan-card')}
        name={ENTERPRISE}
        description='Enterprise-Ready'
        price={price}
        button={{
          name: 'Contact Us',
          onClick: () => onButtonClick(
            'Contact form for package registration',
            'Please provide your details below, and ReportPortal will help you set up your subscription.',
            [{name: 'ReportPortalSource__c', value: 'Landing page/ "We Host" / Request Enterprise Plan'}],
          ),
        }}
      />
    ),
    [PACKAGE_32]: (price) => (
      <ClockCard
        key={PACKAGE_32}
        className={cx('plan-card')}
        name='32'
        firstLevelDescription='hours'
        secondLevelDescription='of support'
        price={price}
        button={{
          name: 'Contact Us',
          onClick: () => onButtonClick(
            'Contact form for package registration with 32 hours of support',
            'Please provide your details below, and ReportPortal will help you set up your subscription.',
            [{
              name: 'ReportPortalSource__c',
              value: 'Landing page/ "You Host|We manage" / Request Support "Package 32"'
            }],
          ),
        }}
      />
    ),
    [PACKAGE_60]: (price) => (
      <ClockCard
        key={PACKAGE_60}
        className={cx('plan-card', 'popular')}
        name='60'
        firstLevelDescription='hours'
        secondLevelDescription='of support'
        price={price}
        withPopular
        button={{
          name: 'Contact Us',
          onClick: () => onButtonClick(
            'Contact form for package registration with 60 hours of support',
            'Please provide your details below, and ReportPortal will help you set up your subscription.',
            [{
              name: 'ReportPortalSource__c',
              value: 'Landing page/ "You Host|We manage" / Request Support "Package 60"'
            }],
          ),
        }}
      />
    ),
    [PACKAGE_168]: (price) => (
      <ClockCard
        key={PACKAGE_168}
        className={cx('plan-card')}
        name='168+'
        firstLevelDescription='hours'
        secondLevelDescription='of support'
        price={price}
        withFullClock
        button={{
          name: 'Contact Us',
          onClick: () => onButtonClick(
            'Contact form for package registration with 168+ hours of support',
            'Please provide your details below, and ReportPortal will help you set up your subscription.',
            [{
              name: 'ReportPortalSource__c',
              value: 'Landing page/ "You Host|We manage" / Request Support "Package 168+"'
            }],
          ),
        }}
      />
    ),
  };

  return (
    <div className={cx('plan-cards')}>
      {plansData.map(({ name, price }) => (plans[name](price[periodId])))}
    </div>
  );
};
PlanCards.propTypes = {
  plansData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string,
    }),
  ),
  periodId: PropTypes.string.isRequired,
}

export default PlanCards;
