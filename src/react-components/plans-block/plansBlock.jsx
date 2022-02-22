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
import classnames from 'classnames';
import Switcher from 'react-components/switcher/switcher.jsx';
import Card from 'react-components/card/card.jsx';
import Button from 'react-components/button/button.jsx';
import './plansBlock.scss';

const planCompareTableTitles = {
  instance: { name: 'Individual Instance', info: 'You can choose instance type: multi-tenant (1 project on shared instances) or individual instances (only your company is on the instance)' },
  support: { name: 'Professional Support (hours)', info: 'A Professional Support Hour is a blended hour, which may consist of the time of various specialists, whether it is the time of a business analyst, architect, lead automation engineer, DevOps (System Engineer) or performance engineer.It can be used for various purposes related to ReportPortal installation, configuration, integration, customization, feature implementation, TAF updates, test case implementation, etc.' },
  storage: { name: 'Data storage', info: 'This parameter defines how much data can be pulled into ReportPortal and saved in DB. The total amount of launches, tests, logs, and attachments in Gb are defined  on a daily bases, and the system automatically deletes over-usage in DB' },
  history: { name: 'History' },
  features: { name: 'Enterprise features', info: 'Additional features which are not available in a scope of the Free Open Source version, link to the List with features and description' },
};

const plansData = [
  {
    name: 'We Host',
    iconType: 'cloud',
    periods: [
      { id: 'sale', name: 'Yearly save 5%' },
      { id: 'full', name: 'Monthly' },
    ],
    cardsInfo: [
      {
        name: 'Free',
        description: 'For quick start',
        price: { full: '$0', sale: '$0' },
        button: <Button text='SignUp' className='light' />,
        options: {
          storage: '3 Gb.',
          history: '7 days',
          features: 'true',
        },
      },
      {
        name: 'Start-Up',
        description: 'For small team',
        price: { full: '$1000', sale: '$950' },
        button: <Button text='SignUp'/>,
        popular: 'popular',
        options: {
          storage: '50 Gb.',
          history: '90 days',
          features: 'true',
        },
      },
      {
        name: 'Pro',
        description: 'For large companies',
        price: { full: '$1500', sale: '$1425' },
        button: <Button text='Contact Us' className='light' />,
        options: {
          instance: true,
          support: '8',
          storage: '200 Gb.',
          history: '1 year',
          features: 'true',
        },
      },
      {
        name: 'Enterprise',
        description: 'Enterprise-Ready',
        price: { full: '$4000', sale: '$3800' },
        button: <Button text='Contact Us' className='light' />,
        options: {
          instance: true,
          support: '10',
          storage: '500 Gb.',
          history: '5 year',
          features: 'true',
        },
      },
    ],
    compareTableTitles: { ...planCompareTableTitles },
    description: 'High-performance multi-tenant or individual instances of the SaaS ReportPortal that is running in AWS Cloud with the latest, most recent application version at all times, with no updating necessary.',
  },
  {
    name: 'You host & We Manage',
    iconType: 'home',
    cardsInfo: [
      {
        name: 'Package 32',
        shortName: '32',
        description: <div className="double-level-description">
          <div className="first-level-description">hours</div>
          <div className="second-level-description">of support</div>
        </div>,
        price: { full: '$2500' },
        button: <Button text='Contact Us' className='light' />,
        withClock: 'with-clock',
        options: { support: '32' },
      },
      {
        name: 'Package 60',
        shortName: '60',
        description: <div className="double-level-description">
          <div className="first-level-description">hours</div>
          <div className="second-level-description">of support</div>
        </div>,
        price: { full: '$4000' },
        button: <Button text='Contact Us' className='light' />,
        popular: 'popular',
        withClock: 'with-clock',
        options: { support: '60' },
      },
      {
        name: 'Package 168+',
        shortName: '168+',
        description: <div className="double-level-description">
          <div className="first-level-description">hours</div>
          <div className="second-level-description">of support</div>
        </div>,
        price: { full: '$10,000+' },
        button: <Button text='Contact Us' className='light' />,
        withFullClock: 'with-full-clock',
        options: { support: '168+', features: true },
      },
    ],
    compareTableTitles: {
      ...planCompareTableTitles.support,
      ...planCompareTableTitles.features,
    },
    description: 'ReportPortal instance deployed On-premise Behind Your Firewall or in the Cloud. All your test data is located on your own instance and it is 100% secured',
  },
];

const PlansBlock = () => {
  const [selectedPlanData, setSelectedPlanData] = useState(plansData[0]);
  const [selectedPeriodId, setSelectedPeriodId] = useState();
  const [planSwitcherData, setPlanSwitcherData] = useState([]);
  const [periodSwitcherData, setPeriodSwitcherData] = useState([]);
  const [isComparisonTableOpened, setIsComparisonTableOpened] = useState(false);

  useEffect(() => {
    const currentPlanSwitcherData = plansData.map((plan) => ({
      id: plan.name,
      element: <><div className={classnames('icon', plan.iconType)}/>{plan.name}</>,
    }));
    if (currentPlanSwitcherData.length) {
      currentPlanSwitcherData[0].isActive = true;
    }
    setPlanSwitcherData(currentPlanSwitcherData);
  }, []);

  useEffect(() => {
    const currentPeriodSwitcherData = selectedPlanData.periods
      ? selectedPlanData.periods.map(period => ({ id: period.id, element: period.name }))
      : [];
    if (currentPeriodSwitcherData.length) {
      currentPeriodSwitcherData[0].isActive = true;
      setSelectedPeriodId(currentPeriodSwitcherData[0].id);
    } else {
      setSelectedPeriodId(undefined);
    }
    setPeriodSwitcherData(currentPeriodSwitcherData || []);
  }, [selectedPlanData]);

  const handlePlanSwitcherSelect = (id) => {
    setSelectedPlanData(plansData.find(plan => plan.name === id));
  };

  const handlePeriodSwitcherSelect = (id) => {
    setSelectedPeriodId(id);
  };

  const onComparisonTableClick = () => {
    setIsComparisonTableOpened(!isComparisonTableOpened);
  };

  const getPrice = (price) => {
    if (!selectedPeriodId) {
      return price.full;
    }
    return selectedPeriodId === 'full' ? price.full : price.sale;
  };

  // todo add table
  return (
    <div className="plan-block">
      <Switcher className="plan-switcher" itemsData={planSwitcherData} handleSelect={handlePlanSwitcherSelect} withItemsEqualWidth size='big'/>
      <Switcher className="period-switcher" itemsData={periodSwitcherData} handleSelect={handlePeriodSwitcherSelect} withSeparator/>
      <div className="plan-cards">
        {selectedPlanData.cardsInfo.map(cardInfo => (
          <Card
            className={classnames(cardInfo.popular, cardInfo.withClock, cardInfo.withFullClock)}
            key={cardInfo.name}
            name={cardInfo.shortName || cardInfo.name}
            price={getPrice(cardInfo.price)}
            description={cardInfo.description}
            button={cardInfo.button}
          />
        ))}
      </div>
      <div className={classnames('comparison-table', { open: isComparisonTableOpened })}>
        <div className="table-header" onClick={onComparisonTableClick}><div className="condition-icon"/>Compare plans</div>
        <div className="table">table</div>
      </div>
      <div className="description"><div className="name">{`${selectedPlanData.name} —`}</div><div className="text">{selectedPlanData.description}</div></div>
    </div>
  );
};

export default PlansBlock;
