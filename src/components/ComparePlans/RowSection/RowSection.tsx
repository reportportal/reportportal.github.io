import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
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

const getBlocksWith = createBemBlockBuilder(['row-section']);

export const RowSection: FC<RowSectionProps> = ({ footer, footerButtons }) => {
  const isDesktop = useMediaQuery({ query: $desktopSm });

  const titleRow = (
    <div className={getBlocksWith(isDesktop ? '__features' : '', '__title')}>Premium Features</div>
  );

  return <>{footer ? <FooterColumns footerButtons={footerButtons} /> : titleRow}</>;
};
