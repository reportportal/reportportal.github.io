import React, { useRef } from 'react';
import { Button } from 'antd';
import { useClickAway, useToggle } from 'ahooks';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';
import { PopupContent } from './PopupContent';

import './IntegrationScheme.scss';
import '../../InstallationPage.scss';

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

  const isBoundaryNode = (index) =>
    isLastRow() ? isLastNode(index) : row === 1 && index === FIRST_ROW_NODE;

  const isLastNode = (index) =>
    !!((!isEvenRow() && index === FIRST_ROW_NODE) || (isEvenRow() && index === LAST_ROW_NODE));

  const isDownArrow = (index) =>
    isLastRow()
      ? false
      : (isEvenRow() && index === LAST_ROW_NODE) || (!isEvenRow() && index === FIRST_ROW_NODE);

  const calculateNumber = (index) =>
    isEvenRow()
      ? (row - 1) * ROW_NODE_NUMBER + nodePosition[index]
      : (row - 1) * ROW_NODE_NUMBER + ADJUSTING_COEFFICIENT - nodePosition[index];

  const isLastRow = () => row === lastRow;

  const constructElementKey = (index) =>
    portion
      .slice(0, index + 1)
      .map((item) => item.text)
      .join('');

  const renderEntity = (item, index) => {
    const entities = {
      node: (
        <Node
          row={isBoundaryNode(index)}
          direction={isEvenRow()}
          isDownArrow={isDownArrow(index)}
          number={calculateNumber(index)}
          lastRow={isLastRow()}
        >
          {item.text}
        </Node>
      ),
      event: <EventNode direction={isEvenRow()}>{item.text}</EventNode>,
      action: (
        <ActionNode info={item.info} direction={isEvenRow()}>
          {item.text}
        </ActionNode>
      ),
    };

    return entities[item.entity];
  };

  return (
    <div className={getBlocksWith('__row')}>
      {portion.map((item, index) => (
        <div key={constructElementKey(index)} className={getBlocksWith('__col')}>
          {renderEntity(item, index)}
        </div>
      ))}
    </div>
  );
};

const Node = ({ children, direction, row, isDownArrow, number, lastRow }) => (
  <div
    className={cx(
      getBlocksWith('__col-inner'),
      { [getBlocksWith('__col-inner-active')]: !direction },
      { [getBlocksWith('__col-inner-first-node')]: row },
      { [getBlocksWith('__arrow-bottom')]: isDownArrow },
      { [getBlocksWith('__arrow-bottom-accent')]: !direction },
    )}
  >
    <div className={getBlocksWith('__col-inner-number')}>{number}</div>
    <p>{children}</p>
    <div className={cx({ [getBlocksWith('__col-inner-bottom')]: lastRow })} />
  </div>
);

export const EventNode = ({ children, direction }) => (
  <div
    className={cx(getBlocksWith('__col-action'), {
      [getBlocksWith('__col-action-active')]: !direction,
    })}
  >
    <p>{children}</p>
    <div
      className={cx({
        [getBlocksWith('__arrow-right')]: direction,
        [getBlocksWith('__arrow-left')]: !direction,
      })}
    />
  </div>
);

export const ActionNode = ({ children, direction, infoArrow = true, info }) => (
  <div
    className={cx(getBlocksWith('__col-action'), getBlocksWith('__col-action-info'), {
      [getBlocksWith('__col-action-active')]: !direction,
    })}
  >
    {infoArrow ? (
      <GraphicArrow info={info}>
        <p>{children}</p>
      </GraphicArrow>
    ) : (
      <p>{children}</p>
    )}

    <div
      className={cx({
        [getBlocksWith('__arrow-right')]: direction,
        [getBlocksWith('__arrow-left')]: !direction,
      })}
    />
  </div>
);

const GraphicArrow = ({ children, info }) => {
  const [isPopupOpen, { toggle: togglePopupOpenState }] = useToggle();
  const popupButtonRef = useRef(null);
  const popupRef = useRef(null);

  useClickAway(() => {
    if (isPopupOpen) {
      togglePopupOpenState();
    }
  }, [popupButtonRef, popupRef]);

  return (
    <div className={getBlocksWith('__popup-container')}>
      <Button>
        <div ref={popupButtonRef} onClick={togglePopupOpenState}>
          <Arrow state={isPopupOpen}>{children}</Arrow>
        </div>
      </Button>
      {isPopupOpen && (
        <div ref={popupRef} className={getBlocksWith('__popup-dropdown')}>
          <div className={getBlocksWith('__popup-title')}>{info.type}</div>
          <PopupContent info={info} />
        </div>
      )}
    </div>
  );
};

export const Arrow = ({ children, state }) => (
  <div
    className={cx(getBlocksWith('__btn-arrow-wrapper'), {
      [getBlocksWith('__btn-arrow-active-text')]: state,
    })}
  >
    <span>{children && children}</span>
    <span
      className={cx(getBlocksWith('__btn-arrow'), {
        [getBlocksWith('__btn-arrow-active')]: state,
      })}
    />
  </div>
);
