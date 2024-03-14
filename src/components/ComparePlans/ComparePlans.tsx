import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Collapse } from 'antd';
import classNames from 'classnames';
import { createBemBlockBuilder, iconsCommon, MEDIA_DESKTOP_SM } from '@app/utils';

import { Columns } from './Columns';
import { RowSection } from './RowSection';
import { Description } from './Description';
import { ExpandableRow } from './ExpandableRow';
import { ColumnsHeader } from './ColumnsHeader';

import './ComparePlans.scss';

interface ComparePlansProps {
  dataPlans: {
    feature: string;
    section: string;
    description: string;
    footer: string;
    href: string;
  }[];
  columns: string;
  footerButtons: string;
  isCollapsibleOnMobile: boolean;
  mobileColumns: string;
}

const getBlocksWith = createBemBlockBuilder(['compare']);

export const ComparePlans: FC<ComparePlansProps> = ({
  dataPlans,
  columns,
  footerButtons,
  isCollapsibleOnMobile = true,
  mobileColumns,
}) => {
  const isDesktop = useMediaQuery({ query: MEDIA_DESKTOP_SM });
  const { Panel } = Collapse;
  const columnsNames = Object.values(columns);

  const prepareColumnData = (row: string) => Object.values(row);

  const constructElementKey = (index: number, feature: string, section: string) =>
    feature ? feature.substring(0, index + 1) : `key${section}` || '';

  const isRow = (section: string, footer: string) => !(section || footer);

  const getColumnsHeader = () => <ColumnsHeader title="Features" columns={columnsNames} />;

  const getComparePlans = () => (
    <>
      {!isCollapsibleOnMobile && isDesktop && getColumnsHeader()}
      {isCollapsibleOnMobile &&
        (isDesktop ? (
          getColumnsHeader()
        ) : (
          <div className={getBlocksWith('__tab-title')}>Main functionality</div>
        ))}
      <div className={getBlocksWith('__container')}>
        <Collapse
          defaultActiveKey={[constructElementKey(0, dataPlans[0].feature, dataPlans[0].section)]}
          ghost
          expandIconPosition={isDesktop ? 'start' : 'end'}
          expandIcon={({ isActive }) => (
            <img
              className={
                isActive
                  ? getBlocksWith('__tab--arrow-bottom')
                  : getBlocksWith('__tab--arrow-right')
              }
              src={iconsCommon.arrowDark}
              alt={isActive ? 'Collapse' : 'Expand'}
            />
          )}
        >
          {dataPlans.map(({ description, feature, section, footer, href, ...rowData }, index) => (
            <Panel
              showArrow={isRow(section, footer)}
              collapsible={!isRow(section, footer) ? 'disabled' : undefined}
              header={
                isRow(section, footer) ? (
                  <ExpandableRow
                    feature={feature}
                    columnsData={prepareColumnData(rowData as string)}
                  />
                ) : (
                  <RowSection footer={footer} footerButtons={footerButtons} />
                )
              }
              key={constructElementKey(index, feature, section)}
            >
              {isRow(section, footer) && (
                <div className={getBlocksWith('__content')}>
                  <div
                    className={classNames(getBlocksWith('__description'), {
                      [getBlocksWith('__description-full-width')]: isDesktop,
                    })}
                  >
                    <Description text={description} href={href} />
                  </div>
                  <div className={getBlocksWith('__tab-data')}>
                    {!isDesktop && (
                      <ColumnsHeader columns={columnsNames} mobileColumns={mobileColumns} />
                    )}
                    <div className={getBlocksWith('__tab-data-last-item')}>
                      <Columns cols={prepareColumnData(rowData as string)} />
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
    <div
      className={classNames(getBlocksWith(), 'container', {
        [getBlocksWith('-narrow')]: columnsNames.length === 4,
      })}
    >
      {isDesktop || !isCollapsibleOnMobile ? (
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
              className={classNames(getBlocksWith('__title-arrow'), {
                [classNames(getBlocksWith('__title-arrow--active'))]: isActive,
              })}
              src={iconsCommon.arrowDark}
              alt={isActive ? 'Collapse' : 'Expand'}
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
