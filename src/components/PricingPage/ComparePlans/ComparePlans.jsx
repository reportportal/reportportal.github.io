import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Collapse } from 'antd';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../utils';
import { iconsCommon } from '../../../utils/imageSource';
import { $tabletLg } from '../../../utils/breakpoint';
import { dataPlans } from '../SassPage/dataPlans';
import { Columns } from './Columns';
import { RowSection } from './RowSection';
import { Description } from './Description';
import { ExpandableRow } from './ExpandableRow';
import { ColumnsHeader } from './ColumnsHeader';

import './ComparePlans.scss';

const getBlocksWith = createBemBlockBuilder(['compare']);
export const ComparePlans = () => {
  const isDesktop = useMediaQuery({ query: $tabletLg });
  const { Panel } = Collapse;

  const prepareColumnData = ({ startup, business, enterprise }) => [startup, business, enterprise];

  const constructElementKey = (index, feature, section) =>
    feature ? feature.substring(0, index + 1) : `key${section}` || '';

  const isRow = (section, footer) => !(section || footer);

  const getComparePlans = () => (
    <>
      {isDesktop ? (
        <ColumnsHeader title="Features" />
      ) : (
        <div className={getBlocksWith('__tab-title')}>Main functionality</div>
      )}
      <div className={cx(getBlocksWith('__container'))}>
        <Collapse
          defaultActiveKey={[constructElementKey(0, dataPlans[0].feature, dataPlans[0].section)]}
          ghost
          expandIconPosition={isDesktop ? 'start' : 'end'}
          expandIcon={({ isActive }) => (
            <img
              className={
                isActive
                  ? getBlocksWith('__tab__arrow_bottom')
                  : getBlocksWith('__tab__arrow_right')
              }
              src={iconsCommon.arrowDark}
            />
          )}
        >
          {dataPlans.map(({ description, feature, section, footer, href, ...rowData }, index) => (
            <Panel
              showArrow={isRow(section, footer)}
              collapsible={!isRow(section, footer) && 'disabled'}
              header={
                isRow(section, footer) ? (
                  <ExpandableRow feature={feature} rowData={rowData} />
                ) : (
                  <RowSection footer={footer} />
                )
              }
              key={constructElementKey(index, feature, section)}
            >
              {isRow(section, footer) && (
                <div className={getBlocksWith('__content')}>
                  <div
                    className={cx(getBlocksWith('__description'), {
                      [getBlocksWith('__description-full-width')]: isDesktop,
                    })}
                  >
                    <Description text={description} href={href} />
                  </div>
                  <div className={getBlocksWith('__tab-data')}>
                    {!isDesktop && <ColumnsHeader />}
                    <div className={getBlocksWith('__tab-data-last-item')}>
                      <Columns cols={prepareColumnData(rowData)} />
                    </div>
                  </div>
                </div>
              )}
            </Panel>
          ))}
        </Collapse>
      </div>
    </>
  );

  return (
    <div className={cx(getBlocksWith(), 'container')}>
      {isDesktop ? (
        <>
          <div className={getBlocksWith('__title')}>Compare plans</div>
          {getComparePlans()}
        </>
      ) : (
        <Collapse
          ghost
          expandIconPosition="end"
          prefixCls="ant-tablet"
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <img
              className={cx(getBlocksWith('__titleArrow'), {
                [cx(getBlocksWith('__titleArrow-active'))]: isActive,
              })}
              src={iconsCommon.arrowDark}
            />
          )}
          items={[
            {
              label: 'Compare plans',
              key: 1,
              children: getComparePlans(),
            },
          ]}
        />
      )}
    </div>
  );
};
