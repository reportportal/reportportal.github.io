import React, { FC, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import isBoolean from 'lodash/isBoolean';
import classNames from 'classnames';
import { createBemBlockBuilder, $desktopSm } from '@app/utils';

import MarkIcon from './icons/mark.inline.svg';
import CrossIcon from './icons/cross.inline.svg';

import '../ComparePlans.scss';

interface ColumnsProps {
  title: string;
  cols: string[];
  mobileColumns: {
    [key: string]: string;
  };
}
const getCompareContainer = createBemBlockBuilder(['compare']);

export const Columns: FC<ColumnsProps> = ({ title = '', cols, mobileColumns = {} }) => {
  const isDesktop = useMediaQuery({ query: $desktopSm });
  const [isVisibility, setIsVisibility] = useState(true);

  useEffect(() => {
    const shouldShow = (title && isDesktop) || (!title && !isDesktop);

    setIsVisibility(shouldShow);
  }, [isDesktop, title]);

  const constructElementKey = (item: string, index: number) => {
    let str = String(item);

    if (str.length < 3) {
      str = str.repeat(3);
    }

    return str.substring(0, index + 1);
  };

  const getMark = (value: string) =>
    value ? (
      <div className={getCompareContainer('__mark-icon')}>
        <MarkIcon />
      </div>
    ) : (
      <div className={getCompareContainer('__cross-icon')}>
        <CrossIcon />
      </div>
    );

  return (
    <div className={getCompareContainer('__row-title-wrapper')}>
      {title && <div className={getCompareContainer('__row-title')}>{title}</div>}
      {isVisibility && (
        <div className={getCompareContainer('__row-title-cols')}>
          {cols.map((columnValue, index) => (
            <div
              key={constructElementKey(columnValue, index)}
              className={classNames(getCompareContainer('__row-title-col'))}
              data-short={mobileColumns[columnValue] ?? columnValue}
            >
              {!isBoolean(columnValue) ? <div>{columnValue}</div> : getMark(columnValue)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
