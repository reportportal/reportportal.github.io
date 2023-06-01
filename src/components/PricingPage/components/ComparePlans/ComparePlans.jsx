import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Collapse } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';
import { $tabletLg } from '../../../../utils/breakpoint';
import { dataPlans, headerColumnTitles } from './dataPlans';
import { Columns } from './Columns';
import { RowSection } from './RowSection';
import { Description } from './Description';

import './ComparePlans.scss';

const getCompareContainer = createBemBlockBuilder(['compare']);

export const ComparePlans = () => {
  const isDesktop = useMediaQuery({ query: $tabletLg });
  const { Panel } = Collapse;

  const handleArrowPosition = (isActive) => {
    let angle;
    if (isActive) {
      angle = isDesktop ? 90 : -90;
    } else {
      angle = isDesktop ? 0 : 90;
    }

    return angle;
  };

  const prepareColumnData = ({ startup, business, enterprise }) => [startup, business, enterprise];

  const constructElementKey = (index, feature, section) =>
    feature ? feature.substring(0, index + 1) : `key${section}` || '';

  const isRow = (section, footer) => !(section || footer);

  return (
    <div className={cx(getCompareContainer(), 'container')}>
      <div className={getCompareContainer('__title')}>Compare plans</div>

      {isDesktop ? (
        <ColumnsHeader title="Features" />
      ) : (
        <div className={getCompareContainer('__tab-title')}>Main functionality</div>
      )}

      <div className={cx(getCompareContainer('__box'), getCompareContainer('__box-border'))}>
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
        >
          {dataPlans.map(({ description, feature, section, footer, href, ...rowData }, index) => (
            <Panel
              showArrow={isRow(section, footer)}
              collapsible={!isRow(section, footer) && 'disabled'}
              header={
                isRow(section, footer) ? (
                  <ExpendableRow feature={feature} rowData={rowData} />
                ) : (
                  <RowSection footer={footer} />
                )
              }
              key={constructElementKey(index, feature, section)}
            >
              {isRow(section, footer) && (
                <div className={getCompareContainer('__content')}>
                  <div
                    className={cx(getCompareContainer('__description'), {
                      [getCompareContainer('__description-full-width')]: isDesktop,
                    })}
                  >
                    <Description text={description} href={href} />
                  </div>

                  <div className={getCompareContainer('__tab-data')}>
                    {!isDesktop && <ColumnsHeader />}
                    <div className={getCompareContainer('__tab-data-last-item')}>
                      <Columns cols={prepareColumnData(rowData)} />
                    </div>
                  </div>
                </div>
              )}
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

const ColumnsHeader = ({ title }) => (
  <div className={cx({ [getCompareContainer('__tab-header')]: title })}>
    <Columns title={title} cols={headerColumnTitles} />
  </div>
);

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
