import React, { FC } from 'react';
import { createBemBlockBuilder } from '@app/utils';

import { EventNode } from '../EventNode';
import { ActionNode } from '../ActionNode';
import { Node } from './Node';
import {
  NODE_POSITION,
  ADJUSTING_COEFFICIENT,
  LAST_ROW_NODE,
  ROW_NODE_NUMBER,
  FIRST_ROW_NODE,
} from './constants';

import '../IntegrationScheme.scss';
import '../../../InstallationPage.scss';

interface SchemeRowProps {
  portion: { text: string }[];
  row: number;
  lastRow: number;
}

const getBlocksWith = createBemBlockBuilder(['scheme']);

export const SchemeRow: FC<SchemeRowProps> = ({ portion, row, lastRow }) => {
  const isEvenRow = row % 2 !== 0;
  const isLastRow = row === lastRow;

  const isBoundaryNode = (index: number) =>
    isLastRow ? isLastNode(index) : row === 1 && index === FIRST_ROW_NODE;

  const isLastNode = (index: number) =>
    !!((!isEvenRow && index === FIRST_ROW_NODE) || (isEvenRow && index === LAST_ROW_NODE));

  const isDownArrow = (index: number) =>
    isLastRow
      ? false
      : (isEvenRow && index === LAST_ROW_NODE) || (!isEvenRow && index === FIRST_ROW_NODE);

  const calculateNumber = (index: number) =>
    isEvenRow
      ? (row - 1) * ROW_NODE_NUMBER + NODE_POSITION[index]
      : (row - 1) * ROW_NODE_NUMBER + ADJUSTING_COEFFICIENT - NODE_POSITION[index];

  const constructElementKey = index =>
    portion
      .slice(0, index + 1)
      .map(item => item.text)
      .join('');

  const renderEntity = (item, index) => {
    const entities = {
      node: (
        <Node
          row={isBoundaryNode(index)}
          direction={isEvenRow}
          isDownArrow={isDownArrow(index)}
          number={calculateNumber(index)}
          lastRow={isLastRow}
        >
          {item.text}
        </Node>
      ),
      event: <EventNode direction={isEvenRow}>{item.text}</EventNode>,
      action: (
        <ActionNode info={item.info} direction={isEvenRow}>
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
