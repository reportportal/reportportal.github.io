import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';

import './IntegrationScheme.scss';

// const getBlocksWith = createBemBlockBuilder(['notice']);

const nodePosition = {
  0: 1,
  2: 2,
  4: 3
}

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
  }

  const isLastNode = (index) => {
    if(!isEvenRow() && index === FIRST_ROW_NODE) {
      return true
    }

    if(isEvenRow() && index === LAST_ROW_NODE) {
      return true
    }
  }

  const isDownArrow = (index) => {
    if (isLastRow()) {return false};

    return (isEvenRow() && index === LAST_ROW_NODE || !isEvenRow() && index === FIRST_ROW_NODE);
  }

  const calculateNumber = (index) => {
    let number

    if (isEvenRow()) {
      return number = (row - 1) * ROW_NODE_NUMBER + nodePosition[index];
    } else {
      return number = (row - 1) * ROW_NODE_NUMBER + ADJUSTING_COEFFICIENT - nodePosition[index];
    }
  };

  const isLastRow = () => row === lastRow;

  return (
    <div className="scheme__row">
      {portion.map((item, index) => (
        <div className="scheme__col">
          {
            item.entity === 'node'
              ? <Node
                  key={item.text}
                  row={isBoundaryNode(index)}
                  direction={isEvenRow()}
                  isDownArrow={isDownArrow(index)}
                  number={calculateNumber(index)}
                  lastRow={isLastRow()}
                >{item.text}</Node>
              : item.entity === 'event'
                  ? <EventNode key={item.text} direction={isEvenRow()}>{item.text}</EventNode>
                  : <ActionNode key={item.text} direction={isEvenRow()}>{item.text}</ActionNode>
          }
        </div>
      ))}
    </div>
  )
}

const Node = ({ children, direction, row, isDownArrow, number, lastRow }) => (
  <div className={cx(
    'scheme__col-inner',
    { 'scheme__col-inner-active': !direction },
    { 'scheme__col-inner-first-node': row },
    { 'scheme__arrow-bottom': isDownArrow }
  )}>
    <div className="scheme__col-inner-number">{number}</div>
    <p>{children}</p>
    <div className={cx({ 'scheme__col-inner-bottom': lastRow })} />
  </div>
)

const EventNode = ({ children, direction }) => (
  <div className={cx('scheme__col-action', {'scheme__col-action-active': !direction})}>
    <p>{children}</p>
    <div className={cx({'scheme__arrow-right': direction, 'scheme__arrow-left': !direction})} />

  </div>
)

const ActionNode = ({ children, direction }) => (
  <div className={cx(
    'scheme__col-action',
    'scheme__col-action-info',
    { 'scheme__col-action-active': !direction }
  )}>
    <p>{children}</p> <span className="scheme__btn-arrow" />
    <div className={cx({'scheme__arrow-right': direction, 'scheme__arrow-left': !direction})} />
  </div>
)
