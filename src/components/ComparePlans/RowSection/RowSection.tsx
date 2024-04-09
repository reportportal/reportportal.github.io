import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { createBemBlockBuilder, MEDIA_DESKTOP_SM } from '@app/utils';

import { FooterColumns } from './FooterColums';

import './RowSection.scss';

interface RowSectionProps {
  footerButtons: {
    btn: string;
    mode: string;
    href: string;
    compareHref?: string;
  }[];
  footer?: boolean;
}

const getBlocksWith = createBemBlockBuilder(['row-section']);

export const RowSection: FC<RowSectionProps> = ({ footer, footerButtons }) => {
  const isDesktop = useMediaQuery({ query: MEDIA_DESKTOP_SM });

  const titleRow = (
    <div className={getBlocksWith(isDesktop ? '__features' : '', '__title')}>Premium Features</div>
  );

  return <>{footer ? <FooterColumns footerButtons={footerButtons} /> : titleRow}</>;
};
