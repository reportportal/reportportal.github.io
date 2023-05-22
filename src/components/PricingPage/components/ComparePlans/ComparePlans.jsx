import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Collapse } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';
import { $tabletSm } from '../../../../utils/breakpoint';
import { dataPlans, headerColumnTitles } from './dataPlans';
// import { Arrow } from './icons/Arrow';

import './ComparePlans.scss';

const getCompareContainer = createBemBlockBuilder(['compare']);

export const ComparePlans = () => {
  const isDesktop = useMediaQuery({ query: $tabletSm }); // $desktopSm
  const { Panel } = Collapse;

  console.log('==========isDesktop====>', isDesktop);

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

  const prepareColumnData = ({ startup, business, enterprise }) => [startup, business, enterprise];

  return (
    <div className={cx(getCompareContainer(), 'container')}>
      <div className={getCompareContainer('__title')}>Compare plans</div>

      {isDesktop && <ColumnsHeader title="Features" />}

      {!isDesktop && <div className={getCompareContainer('__tab-title')}>Main functionality</div>}

      <div
        className={cx(
          { [getCompareContainer('__box')]: !isDesktop },
          { [getCompareContainer('__box-border')]: isDesktop },
        )}
      >
        <Collapse
          defaultActiveKey={['1']}
          ghost
          expandIconPosition={isDesktop ? 'start' : 'end'}
          expandIcon={({ isActive }) => (
            <RightOutlined
              className={getCompareContainer('__collapse-icon')}
              rotate={handleArrowPosition(isActive)}
            />
          )}
          // expandIcon={({ isActive }) => <Arrow rotate={isActive ? 90 : 0} />}
        >
          {dataPlans.map(({ description, feature, ...rowData }) => (
            <Panel header={<ExpendableRow feature={feature} rowData={rowData} />} key={feature}>
              <div className={getCompareContainer('__content')}>
                <div
                  className={cx(getCompareContainer('__description'), {
                    [getCompareContainer('__description-full-width')]: isDesktop,
                  })}
                >
                  {description}
                </div>

                <div className={getCompareContainer('__tab-data')}>
                  {!isDesktop && <ColumnsHeader fontSize={16} />}
                  <div className={getCompareContainer('__tab-data-last-item')}>
                    <Columns cols={prepareColumnData(rowData)} fontSize={14} />
                  </div>
                </div>
              </div>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

const ColumnsHeader = ({ title, fontSize = 20 }) => {
  return (
    <div className={cx({ [getCompareContainer('__tab-header')]: title })}>
      <Columns title={title} cols={headerColumnTitles} bigFont fontSize={fontSize} />
    </div>
  );
};

const ExpendableRow = ({ feature, rowData }) => {
  const [columnsData, setColumnsData] = useState([]);

  useEffect(() => {
    setColumnsData([rowData.startup, rowData.business, rowData.enterprise]);
  }, [rowData]);

  return (
    <div className={getCompareContainer('__row')}>
      <Columns title={feature} cols={columnsData} />
    </div>
  );
};

const Columns = ({ title = '', cols, bigFont = false, fontSize = 16 }) => {
  const isDesktop = useMediaQuery({ query: $tabletSm });
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    const shouldShow = (title && isDesktop) || (!title && !isDesktop);
    setVisibility(shouldShow);
  }, [isDesktop, title]);

  return (
    <div className={getCompareContainer('__row-title-wrapper')}>
      {title && <div className={getCompareContainer('__row-title')}>{title}</div>}

      {visibility && (
        <div className={getCompareContainer('__row-title-cols')}>
          {cols.map((item) => (
            <div
              key={item}
              className={cx(getCompareContainer('__row-title-col'), {
                [getCompareContainer('__row-title-col-font')]: bigFont,
              })}
              style={{ fontSize: `${fontSize}px` }}
            >
              <div>{item}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
