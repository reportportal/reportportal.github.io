import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { createBemBlockBuilder, MEDIA_DESKTOP_SM } from '@app/utils';

import './RowSection.scss';

interface RowSectionProps {
  title?: string;
}

const getBlocksWith = createBemBlockBuilder(['row-section']);

export const RowSection: FC<RowSectionProps> = ({ title }) => {
  const isDesktop = useMediaQuery({ query: MEDIA_DESKTOP_SM });

  return title ? (
    <div className={getBlocksWith(isDesktop ? '__features' : '', '__title')}>{title}</div>
  ) : null;
};
