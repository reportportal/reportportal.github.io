import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import isBoolean from 'lodash/isBoolean';
import { createBemBlockBuilder, FormattedComparePlansItemDto, MEDIA_DESKTOP_SM } from '@app/utils';

import MarkIcon from './icons/mark.inline.svg';
import CrossIcon from './icons/cross.inline.svg';

import '../ComparePlans.scss';

interface ColumnsProps {
  cols: FormattedComparePlansItemDto['plans'];
  title?: string;
  mobileColumns?: FormattedComparePlansItemDto['plans'];
}

const getBlocksWith = createBemBlockBuilder(['compare']);

export const Columns: FC<ColumnsProps> = ({ title = '', cols, mobileColumns = [] }) => {
  const isDesktop = useMediaQuery({ query: MEDIA_DESKTOP_SM });

  const getMark = (value: boolean) =>
    value ? (
      <div className={getBlocksWith('__mark-icon')}>
        <MarkIcon />
      </div>
    ) : (
      <div className={getBlocksWith('__cross-icon')}>
        <CrossIcon />
      </div>
    );

  const isColumnsVisible = (title && isDesktop) || (!title && !isDesktop);

  return (
    <div className={getBlocksWith('__row-title-wrapper')}>
      {title && <div className={getBlocksWith('__row-title')}>{title}</div>}
      {isColumnsVisible && (
        <div className={getBlocksWith('__row-title-cols')}>
          {cols.map((columnValue, index) => (
            <div
              key={index}
              className={getBlocksWith('__row-title-col')}
              data-short={mobileColumns[index] ?? columnValue}
            >
              {!isBoolean(columnValue) ? <div>{columnValue}</div> : getMark(columnValue)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
