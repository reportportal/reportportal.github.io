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
import plansData from './data';
import './plansBlock.scss';

const PlansBlock = () => {
  const [selectedPlanData, setSelectedPlanData] = useState(plansData[0]);
  const [selectedPeriodId, setSelectedPeriodId] = useState();
  const [planSwitcherData, setPlanSwitcherData] = useState([]);
  const [periodSwitcherData, setPeriodSwitcherData] = useState([]);
  const [isComparisonTableOpened, setIsComparisonTableOpened] = useState(false);

  useEffect(() => {
    let hasActive = false;

    const currentPlanSwitcherData = plansData.map((plan) => {
      if (plan.isActive) {
        hasActive = true;
      }

      return {
        id: plan.name,
        element: <><div className={classnames('icon', plan.iconType)}/>{plan.name}</>,
        isActive: plan.isActive,
      };
    });

    if (!hasActive && currentPlanSwitcherData.length) {
      currentPlanSwitcherData[0].isActive = true;
    }
    setPlanSwitcherData(currentPlanSwitcherData);
  }, []);

  useEffect(() => {
    let activePeriodId = '';

    const currentPeriodSwitcherData = selectedPlanData.periods
      ? selectedPlanData.periods.map(period => {
        if (period.isActive) {
          activePeriodId = period.id;
        }
        return { id: period.id, element: period.name, isActive: period.isActive };
      })
      : [];

    if (!activePeriodId && currentPeriodSwitcherData.length) {
      currentPeriodSwitcherData[0].isActive = true;
      activePeriodId = currentPeriodSwitcherData[0].id;
    }
    setSelectedPeriodId(activePeriodId);
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
