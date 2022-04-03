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
import Switcher from 'react-components/common/switcher/switcher.jsx';
import PlanCard from 'react-components/plan-card/planCard.jsx';
import Table from 'react-components/common/table/table.jsx';
import InfoIcon from 'react-components/common/info-icon/infoIcon.jsx';
import InfoWithTooltip from 'react-components/common/info-with-tooltip/infoWithTooltip.jsx';
import plansData from './data';
import styles from './plansBlock.scss';

const cx = classNames.bind(styles);

const FULL_PERIOD = 'full';

const PlansBlock = () => {
  const [selectedPlanData, setSelectedPlanData] = useState(plansData[0]);
  const [selectedPeriodId, setSelectedPeriodId] = useState(FULL_PERIOD);
  const [planSwitcherData, setPlanSwitcherData] = useState([]);
  const [periodSwitcherData, setPeriodSwitcherData] = useState([]);
  const [isComparisonTableOpened, setIsComparisonTableOpened] = useState(false);

  useEffect(() => {
    setPlanSwitcherData(
      plansData.map(({ name, iconType, }) => {
        const isActive = selectedPlanData.name === name;

        return {
          id: name,
          element: <>
            <div className={cx('icon', { active: isActive }, iconType)} />
            {name}
          </>,
          isActive,
        };
      })
    );
    setSelectedPeriodId(FULL_PERIOD);
  }, [selectedPlanData]);

  useEffect(() => {
    const { periods = [] } = selectedPlanData;
    const currentPeriodSwitcherData = periods.map(({ id, name }) => ({
      id,
      element: name,
      isActive: selectedPeriodId === id,
    }));
    setPeriodSwitcherData(currentPeriodSwitcherData);
  }, [selectedPlanData, selectedPeriodId]);

  const handlePlanSwitcherSelect = (id) => {
    if (selectedPlanData.name === id) {
      return;
    }

    setSelectedPlanData(plansData.find(({ name }) => name === id));
    setIsComparisonTableOpened(false);
  };

  const handlePeriodSwitcherSelect = (id) => {
    if (selectedPeriodId === id) {
      return;
    }

    setSelectedPeriodId(id);
  };

  const onComparisonTableClick = () => {
    setIsComparisonTableOpened(!isComparisonTableOpened);
  };

  const getComparisonTableData = () => {
    const headers = ['', ...selectedPlanData.plansInfo.map(({ name }) => name)];

    const rows = selectedPlanData.compareTableTitles.map(({ id, name, info }) => {
      const options = selectedPlanData.plansInfo.map((plan) => plan.options[id]);
      const modifiedOptions = options.map(option =>
        option === true ? <div className={cx('true-icon')} /> : option,
      );
      return [
        <div key={name} className={cx('inline-title')}>
          {name}
          {info && (
            <InfoWithTooltip tooltip={info}>
              {(isActive) => <InfoIcon isActive={isActive} />}
            </InfoWithTooltip>
          )}
        </div>,
        ...modifiedOptions,
      ];
    });

    const footer = (
      <td colSpan={headers.length}>
        <div className={cx('footer-row')}>
          <div className={cx('terms')}>Terms & Conditions</div>
          <div className={cx('note')}>{selectedPlanData.footerDescription}</div>
        </div>
      </td>
    );

    return { headers, rows, footer };
  };

  return (
    <div className={cx('plan-block')}>
      <Switcher
        className={cx('plan-switcher')}
        itemsData={planSwitcherData}
        handleSelect={handlePlanSwitcherSelect}
        withItemsEqualWidth
        size="big"
      />
      <Switcher
        className={cx('period-switcher')}
        itemsData={periodSwitcherData}
        handleSelect={handlePeriodSwitcherSelect}
        withSeparator
      />
      <div className={cx('plan-cards')}>
        {selectedPlanData.plansInfo.map((
          {
            popular,
            withClock,
            withFullClock,
            name,
            shortName,
            price,
            description,
            button,
            form
          }) => (
          <PlanCard
            className={cx(
              'plan-card',
              {
                'with-clock': withClock,
                'with-full-clock': withFullClock,
              }
            )}
            withClock={withClock}
            withFullClock={withFullClock}
            withPopular={popular}
            key={name}
            name={shortName || name}
            price={price[selectedPeriodId]}
            description={description}
            button={button}
            form={form}
          />
        ))}
      </div>
      <div className={cx('comparison-table', { open: isComparisonTableOpened })}>
        <div className={cx('table-header')} onClick={onComparisonTableClick}>
          <div className={cx('condition-icon')} />
          Compare plans
        </div>
        <Table className={cx('compare-plans-table')} data={getComparisonTableData()} />
      </div>
      <div className={cx('description')}>
        <div className={cx('name')}>{`${selectedPlanData.name} —`}</div>
        <div className={cx('text')}>{selectedPlanData.description}</div>
      </div>
    </div>
  );
};

export default PlansBlock;
