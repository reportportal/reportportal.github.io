import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import isBoolean from 'lodash/isBoolean';
import { Collapse } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';
import { $tabletSm } from '../../../../utils/breakpoint';
import { dataPlans, headerColumnTitles, buttonsData } from './dataPlans';
import CrossIcon from '../../icons/cross.inline.svg';
import MarkIcon from '../../icons/mark.inline.svg';
import { Link } from '../../../Link';

import './ComparePlans.scss';

const getCompareContainer = createBemBlockBuilder(['compare']);

export const ComparePlans = () => {
  const isDesktop = useMediaQuery({ query: $tabletSm });
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

  const isNotRow = (section, footer) => section || footer;

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
        >
          {dataPlans.map(({ description, feature, section, footer, href, ...rowData }, index) => (
            <Panel
              showArrow={!isNotRow(section, footer)}
              collapsible={isNotRow(section, footer) && 'disabled'}
              header={
                !isNotRow(section, footer) ? (
                  <ExpendableRow feature={feature} rowData={rowData} />
                ) : (
                  <RowSection footer={footer} />
                )
              }
              key={constructElementKey(index, feature, section)}
            >
              {!isNotRow(section, footer) && (
                <div className={getCompareContainer('__content')}>
                  <div
                    className={cx(getCompareContainer('__description'), {
                      [getCompareContainer('__description-full-width')]: isDesktop,
                    })}
                  >
                    <Description text={description} href={href} />
                  </div>

                  <div className={getCompareContainer('__tab-data')}>
                    {!isDesktop && <ColumnsHeader fontSize={16} />}
                    <div className={getCompareContainer('__tab-data-last-item')}>
                      <Columns cols={prepareColumnData(rowData)} fontSize={14} />
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

const Description = ({ text, href }) => {
  const formComponent = (str, anchorHref) => {
    const match = str.match(/([^*]*)\*([^*]+)\*([^*]*)/);

    if (match) {
      const beforeText = match[1];
      const highlightedText = match[2];
      const afterText = match[3];

      return (
        <>
          {beforeText}{' '}
          <Link
            className={getCompareContainer('__description-anchor')}
            to={anchorHref}
            // target="_blank"
            // rel="noopener noreferrer"
          >
            {highlightedText}
          </Link>{' '}
          {afterText}
        </>
      );
    }
    return text;
  };
  return (
    <>
      {!href && <span>{text}</span>}

      {href && <span>{formComponent(text, href)}</span>}
    </>
  );
};

const RowSection = ({ footer }) => {
  const isDesktop = useMediaQuery({ query: $tabletSm });

  return (
    <>
      {footer ? (
        <div
          className={cx(getCompareContainer('__section'), getCompareContainer('__section-btns'))}
        >
          <FooterColumns />
        </div>
      ) : (
        <div
          className={cx(getCompareContainer('__section'), getCompareContainer('__section-title'), {
            [getCompareContainer('__section-adjustment')]: !isDesktop,
          })}
        >
          Premium Features
        </div>
      )}
    </>
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

  const constructElementKey = (item, index) => {
    let str = String(item);

    if (str < 3) {
      str = str.repeat(3);
    }

    return str.substring(0, index + 1);
  };

  return (
    <div className={getCompareContainer('__row-title-wrapper')}>
      {title && <div className={getCompareContainer('__row-title')}>{title}</div>}

      {visibility && (
        <div className={getCompareContainer('__row-title-cols')}>
          {cols.map((item, index) => (
            <div
              key={constructElementKey(item, index)}
              className={cx(getCompareContainer('__row-title-col'), {
                [getCompareContainer('__row-title-col-font')]: bigFont,
              })}
              style={{ fontSize: `${fontSize}px` }}
            >
              {!isBoolean(item) ? <div>{item}</div> : <Mark value={item} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Mark = ({ value }) =>
  value ? (
    <div className={getCompareContainer('__mark-icon')}>
      <MarkIcon />
    </div>
  ) : (
    <div className={getCompareContainer('__cross-icon')}>
      <CrossIcon />
    </div>
  );

const FooterColumns = () => {
  const isDesktop = useMediaQuery({ query: $tabletSm });

  return (
    <div className={getCompareContainer('__row-title-wrapper')}>
      <div
        className={cx(
          getCompareContainer('__row-title'),
          getCompareContainer('__row-title-footer'),
          { [getCompareContainer('__row-title-footer-centred')]: !isDesktop },
        )}
      >
        <Link to="#">Privacy Policy &#x2197;</Link>
      </div>

      {isDesktop && (
        <div className={getCompareContainer('__row-title-cols')}>
          {buttonsData.map(({ btn, mode, href }) => (
            <div key={btn} className={cx(getCompareContainer('__row-title-col'), {})}>
              <div className={getCompareContainer('__section-btn-wrapper')}>
                <Link
                  className={cx('btn', `btn--${mode}`, getCompareContainer('__section-btn'))}
                  to={href}
                >
                  {btn}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
