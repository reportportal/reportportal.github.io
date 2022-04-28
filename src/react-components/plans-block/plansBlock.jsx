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
import classNames from 'classnames/bind';
import Switcher from 'react-components/common/switcher/switcher.jsx';
import PlanCard from 'react-components/plan-card/planCard.jsx';
import Table from 'react-components/common/table/table.jsx';
import InfoIcon from 'react-components/common/info-icon/infoIcon.jsx';
import InfoWithTooltip from 'react-components/common/info-with-tooltip/infoWithTooltip.jsx';
import NotificationModal from 'react-components/layouts/modal-layout/notification-modal/notificationModal.jsx';
import PlanSummary from 'react-components/common/plan-summary/planSummary.jsx';
import ModalContext from 'react-components/layouts/modal-layout/modalContext';
import { getIsMobileView } from 'react-components/utils/utils.js';
import { plansData, getPlansDataByNames } from './data';
import styles from './plansBlock.scss';

const cx = classNames.bind(styles);

const FULL_PERIOD = 'full';
const planTypes = [
  { id: 'weHost', name: 'We Host' },
  { id: 'youHost', name: 'You Host & We Manage' },
];
const plansNames = {
  weHost: ['Free', 'Start-Up', 'Pro', 'Enterprise'],
  youHost: ['Package 32', 'Package 60', 'Package 168+'],
};
const compareTableTitles = {
  instance: { id: 'instance', name: 'Individual Instance', info: 'You can choose instance type: multi-tenant (1 project on shared instances) or individual instances (only your company is on the instance)' },
  support: { id: 'support', name: 'Professional Support (hours)', info: 'A Professional Support Hour is a blended hour, which may consist of the time of various specialists, whether it is the time of a business analyst, architect, lead automation engineer, DevOps (System Engineer) or performance engineer.It can be used for various purposes related to ReportPortal installation, configuration, integration, customization, feature implementation, TAF updates, test case implementation, etc.' },
  storage: { id: 'storage', name: 'Data storage', info: 'This parameter defines how much data can be pulled into ReportPortal and saved in DB. The total amount of launches, tests, logs, and attachments in Gb are defined  on a daily basis, and the system automatically deletes over-usage in DB' },
  history: { id: 'history', name: 'History' },
  features: { id: 'features', name: 'Enterprise features', info: <span>Additional features which are not available in a scope of the Free Open Source version, <a href="http://reportportal.io/docs/Enterprise-Features" target="_blank" rel="noreferrer">link to the List with features and description</a></span> },
};
const planCompareTableTitles = {
  weHost: [
    compareTableTitles.instance,
    compareTableTitles.support,
    compareTableTitles.storage,
    compareTableTitles.history,
    compareTableTitles.features,
  ],
  youHost: [
    compareTableTitles.support,
    compareTableTitles.features,
  ],
};

const PlansBlock = () => {
  const { showModal } = useContext(ModalContext);
  const [selectedPlanData, setSelectedPlanData] = useState(plansData[0]);
  const [selectedPeriodId, setSelectedPeriodId] = useState(FULL_PERIOD);
  const [planSwitcherData, setPlanSwitcherData] = useState([]);
  const [periodSwitcherData, setPeriodSwitcherData] = useState([]);
  const [isComparisonTableOpened, setIsComparisonTableOpened] = useState(false);

  const [selectedPlansData, setSelectedPlansData] = useState([]);
  const [selectedPlanType, setSelectedPlanType] = useState(planTypes[0]);

  useEffect(() => {
    setSelectedPlansData(getPlansDataByNames(plansNames[selectedPlanType.id]));
  }, [selectedPlanType]);

  useEffect(() => {
    setPlanSwitcherData(
      plansData.map(({ name, iconType, }) => {
        const isActive = selectedPlanData.name === name;

        return {
          id: name,
          element: <>
            <div className={cx('icon', { active: isActive }, iconType)} />
            <div className={cx('switcher-name')}>{name}</div>
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
    setSelectedPlanType(planTypes.find(({ name }) => name === id)); // todo refactoring
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

  const getComparisonTable = () => {
    const titles = planCompareTableTitles[selectedPlanType.id];

    if (getIsMobileView()) {
      const onInfoClick = (title, tooltip) => {
        if (getIsMobileView()) {
          showModal(<NotificationModal title={title} description={tooltip} />);
        }
      };

      const plans = selectedPlansData.map(({ name, options }) => {
        const rows = titles.map(({ id, name, info }, index ) => {
          let option = options[id];
          if (id === 'support') {
            option = option ? `${option} hours`: '';
            name = 'Professional Support';
          }

          return <div key={index} className={cx('plan-row', { disable: !option })}>
            <i className={cx('row-status')} />
            {option && option !== true &&
              <>
                <span className={cx('option')}>{option}</span>
                {' of '}
              </>
            }
            {name}
            {!!option && info &&
              <InfoWithTooltip className={cx('info-with-tooltip')} tooltip={info} onClick={() => onInfoClick(name, info)}>
                {(isActive) => <InfoIcon isActive={isActive}/>}
              </InfoWithTooltip>
            }
          </div>
        });

        return <PlanSummary className={cx('plan-summary')} key={name} name={name}>{rows}</PlanSummary>
      });

      return <div className={cx('pseudo-table-wrapper')}>
        <div className={cx('pseudo-table')}>
          {plans}
          <div className={cx('note')}>Minimum engagement type 6 month</div>
          <a className={cx('terms')} target="_blank" href='http://reportportal.io/docs/Terms-&-Conditions' rel='noreferrer'>
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
      <td colSpan={headers.length}>
        <div className={cx('footer-row')}>
          <a className={cx('terms')} target="_blank" href='http://reportportal.io/docs/Terms-&-Conditions' rel='noreferrer'>
            Terms & Conditions
          </a>
          <div className={cx('note')}>{selectedPlanData.footerDescription}</div>
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
        size="big"
      />
      <div className={cx('selected-plan-name')}>{selectedPlanData.name}</div>
      {!!periodSwitcherData.length &&
        <Switcher
          className={cx('period-switcher')}
          itemsData={periodSwitcherData}
          handleSelect={handlePeriodSwitcherSelect}
          withSeparator
        />
      }
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
            className={cx('plan-card')}
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
        {getComparisonTable()}
      </div>
      <div className={cx('description')}>
        <div className={cx('name')}>
          {selectedPlanData.name}
          <span className={cx('dash')}> —</span>
        </div>
        <div className={cx('text')}>{selectedPlanData.description}</div>
      </div>
    </div>
  );
};

export default PlansBlock;
