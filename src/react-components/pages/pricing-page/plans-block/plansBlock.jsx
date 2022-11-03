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

import React, { useContext, useEffect, useState } from 'react';
import ModalContext from 'react-components/layouts/modal-layout/modalContext';
import classNames from 'classnames/bind';
import Switcher from 'react-components/common/switcher/switcher.jsx';
import Table from 'react-components/common/table/table.jsx';
import InfoIcon from 'react-components/common/info-icon/infoIcon.jsx';
import InfoWithTooltip from 'react-components/common/info-with-tooltip/infoWithTooltip.jsx';
import NotificationModal from 'react-components/layouts/modal-layout/notification-modal/notificationModal.jsx';
import PlanCards from 'react-components/pages/pricing-page/plans-block/plan-cards/planCards.jsx';
import PlanSummary from 'react-components/common/plan-summary/planSummary.jsx';
import SimpleSwitcher from 'react-components/common/simple-switcher/simpleSwitcher.jsx';
import { getIsTabletView } from 'react-components/utils/utils.js';
import { getPlansDataByNames, periods, planTypes } from './data';
import { FULL_PERIOD, SALE_PERIOD } from './constants';
import styles from './plansBlock.scss';

const cx = classNames.bind(styles);

const PlansBlock = () => {
  const { showModal } = useContext(ModalContext);
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

  const getComparisonTable = () => {
    const titles = selectedPlanType.planCompareTableTitles;

    if (getIsTabletView()) {
      const onInfoClick = (title, tooltip) => {
        showModal(<NotificationModal title={title} description={tooltip} />);
      };

      const plans = selectedPlansData.map(({ name, options }) => {
        const rows = titles.map(({ id, name, info }, index ) => {
          let option = options[id];
          let currentName = name;
          let preposition = ' of ';
          switch (id) {
            case 'support':
              if (!option) {
                option = '';
                currentName = 'Technical support';
                break;
              }

              if (typeof option === 'object') {
                option = option.value;
                currentName = '';
              } else {
                option = `${option} hours`;
                currentName = 'Technical support';
              }
              break;
            case 'additionalSupport':
              preposition = ' for ';
              break;
            case 'professionalSupport':
              option = `${option} hours`;
              currentName = 'Professional service';
              break;
            case 'storage':
            case 'retention':
              if(option === 'Unlimited') {
                preposition = ' ';
              }
              break;
            default:
          }

          return <div key={index} className={cx('plan-row', { disable: !option })}>
            <div className={cx('row-status')}>
              <i/>
            </div>
            <div className={cx('row-text')}>
              {option && option !== true &&
                <>
                  <span className={cx('option')}>{option}</span>
                  {currentName && preposition}
                </>
              }
              {currentName}
            </div>
            {!!option && info &&
              <InfoWithTooltip className={cx('info-with-tooltip')} tooltip={info} onClick={() => onInfoClick(currentName, info)}>
                {() => <InfoIcon/>}
              </InfoWithTooltip>
            }
          </div>
        });

        return <PlanSummary className={cx('plan-summary')} key={name} name={name}>{rows}</PlanSummary>
      });

      return <div className={cx('pseudo-table-wrapper')}>
        <div className={cx('pseudo-table')}>
          {plans}
          <div className={cx('note')}>Payment is made quarterly</div>
          <a className={cx('terms')} target="_blank" href='/legal/terms' rel='noreferrer'>
            Terms & Conditions
          </a>
        </div>
      </div>;
    }

    const headers = ['', ...selectedPlansData.map(({ name }) => name)];

    const rows = titles.map(({ id, name, info }) => {
      const options = selectedPlansData.map((plan) => plan.options[id]);
      const modifiedOptions = options.map(option =>
        option === true ? <div className={cx('true-icon')} /> : option,
      );
      return [
        <div key={name} className={cx('inline-title')}>
          {name}
          {info &&
            <InfoWithTooltip tooltip={info}>
              {(isActive) => <InfoIcon isActive={isActive} />}
            </InfoWithTooltip>
          }
        </div>,
        ...modifiedOptions,
      ];
    });

    const footer = (
      <td colSpan={headers.length + 2}>
        <div className={cx('footer-row')}>
          <a className={cx('terms')} target="_blank" href='/legal/terms' rel='noreferrer'>
            Terms & Conditions
          </a>
          <div className={cx('note')}>{selectedPlanType.footerDescription}</div>
        </div>
      </td>
    );

    return <Table className={cx('compare-plans-table')} data={{ headers, rows, footer }} />
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
      <div className={cx('comparison-table', { open: isComparisonTableOpened })}>
        <div className={cx('table-header')} onClick={onComparisonTableClick}>
          <div className={cx('condition-icon')} />
          Compare plans
        </div>
        <div className={cx('table-wrapper')}>
          {getComparisonTable()}
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
