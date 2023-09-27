import React from 'react';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames';

import { $desktopSm } from '../../../../utils/breakpoint';
import { createBemBlockBuilder } from '../../../../utils';
import { FooterColumns } from './FooterColums';

import './RowSection.scss';

const getBlocksWith = createBemBlockBuilder(['rowSection']);

export const RowSection = ({ footer, footerButtons }) => {
  const isDesktop = useMediaQuery({ query: $desktopSm });

  const getTitleRow = () => (
    <div
      className={cx(
        isDesktop ? getBlocksWith('__features') : getBlocksWith(),
        getBlocksWith('__title'),
      )}
    >
      Premium Features
    </div>
  );

  return <>{footer ? <FooterColumns footerButtons={footerButtons} /> : getTitleRow()}</>;
};
