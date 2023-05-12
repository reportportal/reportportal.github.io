import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Collapse } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import { createBemBlockBuilder } from '../../../../utils';
import { $desktopSm } from '../../../../utils/breakpoint';
import { dataPlans } from './dataPlans';
// import { Arrow } from './icons/Arrow';

import './ComparePlans.scss';

const getCompareContainer = createBemBlockBuilder(['compare']);

export const ComparePlans = () => {
  const isDesktop = useMediaQuery({ query: $desktopSm });
  const { Panel } = Collapse;

  const handleArrowPosition = (isActive) => {
    // isActive ? (isDesktop ? 90 : -90) : isDesktop ? 0 : 90;
    let angle;
    if (isActive) {
      angle = isDesktop ? 90 : -90;
    } else {
      angle = isDesktop ? 0 : 90;
    }
    return angle;
  };

  return (
    <div className={getCompareContainer()}>
      <div className={getCompareContainer('__title')}>Compare plans</div>

      {isDesktop && <ColumnsHeader />}

      {!isDesktop && <div className={getCompareContainer('__tab-title')}>Main functionality</div>}

      <Collapse
        defaultActiveKey={['1']}
        ghost
        expandIconPosition="start"
        expandIcon={({ isActive }) => (
          <RightOutlined
            className={getCompareContainer('__collapse-icon')}
            rotate={handleArrowPosition(isActive)}
            // rotate={isActive ? 90 : 0}
            // rotate={isActive ? -90 : 90}
          />
        )}
        // expandIcon={({ isActive }) => <Arrow rotate={isActive ? 90 : 0} />}
      >
        {dataPlans.map(({ description, feature }, ...rowData) => (
          <Panel header={<ExpendableRow feature={feature} rowData={rowData} />} key={feature}>
            <DescriptionCell description={description} />
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

const ColumnsHeader = () => {
  return (
    <div className={getCompareContainer('__cols')}>
      <div>Startup</div>
      <div>Business</div>
      <div>Enterprise</div>
    </div>
  );
};

const ExpendableRow = ({ feature }) => {
  return <div className={getCompareContainer('__row-title')}>{feature}</div>;
};

const DescriptionCell = ({ description }) => {
  return <div className={getCompareContainer('__description')}>{description}</div>;
};
