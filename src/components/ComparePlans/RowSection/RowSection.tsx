import React from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';

import { $desktopSm } from '../../../utils/breakpoint';
import { createBemBlockBuilder } from '../../../utils';

import { FooterColumns } from './FooterColums';

import './RowSection.scss';

interface Props {
  footer: string
  footerButtons: {
    btn: string;
    mode: string;
    href: string;
    compareHref: string;
  }[]
}

const getBlocksWith = createBemBlockBuilder(['rowSection']);

export const RowSection: React.FC<Props> = ({ footer, footerButtons }) => {
  const isDesktop = useMediaQuery({ query: $desktopSm });

  const getTitleRow = () => (
    <div
      className={classNames(
        isDesktop ? getBlocksWith('__features') : getBlocksWith(),
        getBlocksWith('__title'),
      )}
    >
      Premium Features
    </div>
  );

  return <>{footer ? <FooterColumns footerButtons={footerButtons} /> : getTitleRow()}</>;
};
