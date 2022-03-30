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
import InfoWithTooltip from 'react-components/common/info-with-tooltip/infoWithTooltip.jsx';
import plansData from './data';
import styles from './plansBlock.scss';

const cx = classNames.bind(styles);

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
        element: (
          <>
            <div className={cx('icon', plan.iconType)} />
            {plan.name}
          </>
        ),
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
      ? selectedPlanData.periods.map((period) => {
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
    setSelectedPlanData(plansData.find((plan) => plan.name === id));
    setIsComparisonTableOpened(false);
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

  const getComparisonTableData = () => {
    const headers = ['', ...selectedPlanData.plansInfo.map((plan) => plan.name)];

    const rows = selectedPlanData.compareTableTitles.map((title) => {
      const options = selectedPlanData.plansInfo.map((plan) => plan.options[title.id]);
      const modifiedOptions = options.map((option) =>
        option === true ? <div className={cx('true-icon')} /> : option,
      );
      return [
        <div key={title.name} className={cx('inline-title')}>
          {title.name}
          {title.info && (
            <InfoWithTooltip tooltip={title.info}>
              <i className={cx('info-icon')} />
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
        {selectedPlanData.plansInfo.map((cardInfo) => (
          <PlanCard
            className={cx(cardInfo.popular, cardInfo.withClock, cardInfo.withFullClock)}
            key={cardInfo.name}
            name={cardInfo.shortName || cardInfo.name}
            price={getPrice(cardInfo.price)}
            description={cardInfo.description}
            button={cardInfo.button}
            form={cardInfo.form}
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
