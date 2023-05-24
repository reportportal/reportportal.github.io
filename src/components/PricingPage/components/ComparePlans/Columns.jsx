import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import isBoolean from 'lodash/isBoolean';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';
import { $tabletSm } from '../../../../utils/breakpoint';
import CrossIcon from '../../icons/cross.inline.svg';
import MarkIcon from '../../icons/mark.inline.svg';

import './ComparePlans.scss';

const getCompareContainer = createBemBlockBuilder(['compare']);

export const Columns = ({ title = '', cols, bigFont = false, fontSize = 16 }) => {
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
