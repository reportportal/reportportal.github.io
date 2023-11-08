import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { createBemBlockBuilder, $desktopSm } from '@app/utils';

import { FooterColumns } from './FooterColums';

import './RowSection.scss';

interface RowSectionProps {
  footer: string;
  footerButtons: {
    btn: string;
    mode: string;
    href: string;
    compareHref: string;
  }[];
}

const getBlocksWith = createBemBlockBuilder(['rowSection']);

export const RowSection: FC<RowSectionProps> = ({ footer, footerButtons }) => {
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