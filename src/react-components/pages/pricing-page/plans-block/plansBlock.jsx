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
import classNames from 'classnames/bind';
import Switcher from 'react-components/common/switcher/switcher';
import SimpleSwitcher from 'react-components/common/simple-switcher/simpleSwitcher';
import { getIsTabletView } from 'react-components/utils/utils.js';
import ComparisonList from './comparison/comparison-list/comparisonList';
import ComparisonTable from './comparison/comparison-table/comparisonTable';
import PlanCards from './plan-cards/planCards';
import { getPlansDataByNames, periods, planTypes } from './data';
import { FULL_PERIOD, SALE_PERIOD } from './constants';
import styles from './plansBlock.scss';

const cx = classNames.bind(styles);

const PlansBlock = () => {
  const [selectedPlanType, setSelectedPlanType] = useState(planTypes[0]);
  const [planSwitcherData, setPlanSwitcherData] = useState([]);
  const [selectedPlansData, setSelectedPlansData] = useState([]);
  const [selectedPeriodId, setSelectedPeriodId] = useState(SALE_PERIOD);
  const [isComparisonTableOpened, setIsComparisonTableOpened] = useState(false);

  useEffect(() => {
    setSelectedPlansData(getPlansDataByNames(selectedPlanType.planNames));
  }, [selectedPlanType]);

  useEffect(() => {
    setPlanSwitcherData(
      planTypes.map(({ name, id, iconType }) => {
        const isActive = selectedPlanType.id === id;

        return {
          id,
          element: <>
            <div className={cx('icon', { active: isActive }, iconType)} />
            <div className={cx('switcher-name')}>{name}</div>
          </>,
          isActive,
        };
      })
    );
    setSelectedPeriodId(SALE_PERIOD);
  }, [selectedPlanType]);

  const handlePlanSwitcherSelect = (planId) => {
    if (selectedPlanType.id === planId) {
      return;
    }

    setSelectedPlanType(planTypes.find(({ id }) => id === planId));
    setIsComparisonTableOpened(false);
  };

  const onSimpleSwitcherChange = (e) => {
    if (e.target.checked) {
      setSelectedPeriodId(SALE_PERIOD);
    } else {
      setSelectedPeriodId(FULL_PERIOD);
    }
  };

  const onComparisonTableClick = () => {
    setIsComparisonTableOpened(!isComparisonTableOpened);
  };

  const renderComparison = () => {
    if (getIsTabletView()) {
      return (
        <ComparisonList
          plansData={selectedPlansData}
          planType={selectedPlanType}
          isOpen={isComparisonTableOpened}
        />
      );
    }

    return (
      <ComparisonTable
        plansData={selectedPlansData}
        planType={selectedPlanType}
        isOpen={isComparisonTableOpened}
      />
    );
  };

  return (
    <div className={cx('plan-block')}>
      <Switcher
        className={cx('plan-switcher')}
        itemsData={planSwitcherData}
        handleSelect={handlePlanSwitcherSelect}
        withItemsEqualWidth
        size='big'
      />
      <div className={cx('selected-plan-name')} >{selectedPlanType.name}</div>
      {periods.length &&
        <SimpleSwitcher
          className={cx('simple-period-switcher')}
          onChange={onSimpleSwitcherChange}
          label={periods.find(({ id }) => id === SALE_PERIOD).name}
          name='simple-period-switcher'
          checked={selectedPeriodId !== FULL_PERIOD}
        />
      }
      <PlanCards
        plansData={selectedPlansData}
        periodId={selectedPeriodId}
      />
      <div className={cx('comparison', { open: isComparisonTableOpened })}>
        <div className={cx('header')} onClick={onComparisonTableClick}>
          <div className={cx('condition-icon')} />
          Compare plans
        </div>
        <div className={cx('content-wrapper')}>
          {renderComparison()}
        </div>
      </div>
      <div className={cx('description')}>
        <div className={cx('name')}>
          {selectedPlanType.name}
          <span className={cx('dash')}> —</span>
        </div>
        <div className={cx('text')}>{selectedPlanType.description}</div>
      </div>
    </div>
  );
};

export default PlansBlock;
