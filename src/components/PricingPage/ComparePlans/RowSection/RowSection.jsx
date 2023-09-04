import React from 'react';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames';

import { $tabletLg } from '../../../../utils/breakpoint';
import { createBemBlockBuilder } from '../../../../utils';
import { FooterColumns } from './FooterColums';

import './RowSection.scss';

const getBlocksWith = createBemBlockBuilder(['rowSection']);

export const RowSection = ({ footer }) => {
  const isDesktop = useMediaQuery({ query: $tabletLg });

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

  return <>{footer ? <FooterColumns /> : getTitleRow()}</>;
};
