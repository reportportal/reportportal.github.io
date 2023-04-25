/* eslint-disable no-nested-ternary */
import React, { Fragment, forwardRef, useRef } from 'react';
import { Button, Popover, Typography } from 'antd';
import { useClickAway, useToggle } from 'ahooks';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';

import './IntegrationScheme.scss';

const getBlocksWith = createBemBlockBuilder(['scheme']);

const nodePosition = {
  0: 1,
  2: 2,
  4: 3,
};

const ROW_NODE_NUMBER = 3;
const ADJUSTING_COEFFICIENT = 4;
const LAST_ROW_NODE = 4;
const FIRST_ROW_NODE = 0;

export const SchemeRow = ({ portion, row, lastRow }) => {
  const isEvenRow = () => !(row % 2 === 0);

  const isBoundaryNode = (index) => {
    if (isLastRow()) {
      return isLastNode(index);
    }

    return row === 1 && index === FIRST_ROW_NODE;
  };

  const isLastNode = (index) => {
    if (!isEvenRow() && index === FIRST_ROW_NODE) {
      return true;
    }

    if (isEvenRow() && index === LAST_ROW_NODE) {
      return true;
    }

    return false;
  };

  const isDownArrow = (index) => {
    if (isLastRow()) {
      return false;
    }

    return (isEvenRow() && index === LAST_ROW_NODE) || (!isEvenRow() && index === FIRST_ROW_NODE);
  };

  const calculateNumber = (index) => {
    if (isEvenRow()) {
      return (row - 1) * ROW_NODE_NUMBER + nodePosition[index];
    }
    return (row - 1) * ROW_NODE_NUMBER + ADJUSTING_COEFFICIENT - nodePosition[index];
  };

  const isLastRow = () => row === lastRow;

  const constructElementKey = (index) =>
    portion.reduce((acc, item, i) => {
      if (i <= index) {
        return acc + item.text;
      }
      return acc;
    }, '');

  return (
    <div className={getBlocksWith('__row')}>
      {portion.map((item, index) => (
        <div key={constructElementKey(index)} className={getBlocksWith('__col')}>
          {item.entity === 'node' ? (
            <Node
              row={isBoundaryNode(index)}
              direction={isEvenRow()}
              isDownArrow={isDownArrow(index)}
              number={calculateNumber(index)}
              lastRow={isLastRow()}
            >
              {item.text}
            </Node>
          ) : item.entity === 'event' ? (
            <EventNode direction={isEvenRow()}>{item.text}</EventNode>
          ) : (
            <ActionNode info={item.info} direction={isEvenRow()}>
              {item.text}
            </ActionNode>
          )}
        </div>
      ))}
    </div>
  );
};

const createTitleComponent = (title) => (
  <div className={getBlocksWith('__popup-title')}>{title}</div>
);

const PopupContent = (info) => {
  const { Text } = Typography;

  const formatText = () => {
    if (info.scheme) {
      return (
        <div>
          {info.scheme.split('\n').map((str) => (
            <Fragment key={info.scheme}>
              {str} <br />
            </Fragment>
          ))}
        </div>
      );
    }
    return '';
  };

  return (
    <div>
      {info ? (
        <div>
          <p className={getBlocksWith('__popup-text')}>{info.url}</p>
          <Text
            className={cx('copyable__code', 'copyable__popup')}
            code
            copyable={{
              text: info.scheme,
              format: 'text/plain',
            }}
          >
            {formatText()}
          </Text>
        </div>
      ) : (
        <div>
          <p>No Data</p>
        </div>
      )}
    </div>
  );
};

const Node = ({ children, direction, row, isDownArrow, number, lastRow }) => (
  <div
    className={cx(
      getBlocksWith('__col-inner'),
      { 'scheme__col-inner-active': !direction },
      { 'scheme__col-inner-first-node': row },
      { 'scheme__arrow-bottom': isDownArrow },
    )}
  >
    <div className={getBlocksWith('__col-inner-number')}>{number}</div>
    <p>{children}</p>
    <div className={cx({ 'scheme__col-inner-bottom': lastRow })} />
  </div>
);

export const EventNode = ({ children, direction }) => (
  <div className={cx(getBlocksWith('__col-action'), { 'scheme__col-action-active': !direction })}>
    <p>{children}</p>
    <div className={cx({ 'scheme__arrow-right': direction, 'scheme__arrow-left': !direction })} />
  </div>
);

export const ActionNode = ({ children, direction, infoArrow = true, info }) => (
  <div
    className={cx(getBlocksWith('__col-action'), getBlocksWith('__col-action-info'), {
      'scheme__col-action-active': !direction,
    })}
  >
    {infoArrow ? (
      <GraphicArrow info={info}>
        <p>{children}</p>
      </GraphicArrow>
    ) : (
      <p>{children}</p>
    )}

    <div className={cx({ 'scheme__arrow-right': direction, 'scheme__arrow-left': !direction })} />
  </div>
);

const GraphicArrow = ({ children, info }) => {
  const [state, { toggle }] = useToggle();
  const ref = useRef(null);

  useClickAway(() => {
    if (state) {
      toggle();
    }
  }, ref);

  return (
    <Popover
      content={PopupContent(info)}
      placement="bottom"
      title={createTitleComponent(info.type)}
      trigger="click"
      showArrow={false}
    >
      <Button>
        <div ref={ref} className={getBlocksWith('__btn-arrow-wrapper')} onClick={toggle}>
          {children && children}
          <span
            className={cx(getBlocksWith('__btn-arrow'), { 'scheme__btn-arrow-active': state })}
          />
        </div>
        {/* <Arrow ref={ref} state={state}>
          {children}
        </Arrow> */}
      </Button>
    </Popover>
  );
};

// eslint-disable-next-line react/display-name
export const Arrow = forwardRef(({ children = null, state }, ref) => (
  <div ref={ref} className={getBlocksWith('__btn-arrow-wrapper')}>
    {children && children}
    <span className={cx(getBlocksWith('__btn-arrow'), { 'scheme__btn-arrow-active': state })} />
  </div>
));
