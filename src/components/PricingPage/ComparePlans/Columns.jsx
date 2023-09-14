import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import isBoolean from 'lodash/isBoolean';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../utils';
import { $tabletLg } from '../../../utils/breakpoint';
import MarkIcon from '../icons/mark.inline.svg';
import CrossIcon from '../icons/cross.inline.svg';

import './ComparePlans.scss';

const getCompareContainer = createBemBlockBuilder(['compare']);

export const Columns = ({ title = '', cols }) => {
  const isDesktop = useMediaQuery({ query: $tabletLg });
  const [isVisibility, setIsVisibility] = useState(true);

  useEffect(() => {
    const shouldShow = (title && isDesktop) || (!title && !isDesktop);

    setIsVisibility(shouldShow);
  }, [isDesktop, title]);

  const constructElementKey = (item, index) => {
    let str = String(item);

    if (str.length < 3) {
      str = str.repeat(3);
    }

    return str.substring(0, index + 1);
  };

  const getMark = value =>
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
          {cols.map((item, index) => (
            <div
              key={constructElementKey(item, index)}
              className={cx(getCompareContainer('__row-title-col'))}
            >
              {!isBoolean(item) ? <div>{item}</div> : getMark(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
