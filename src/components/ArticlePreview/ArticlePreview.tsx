import React, { FC } from 'react';
import isEmpty from 'lodash/isEmpty';
import chunk from 'lodash/chunk';
import { useMediaQuery } from 'react-responsive';
import { BlogPostDto, MEDIA_DESKTOP_SM, MEDIA_TABLET_SM } from '@app/utils';

import { ArticlePreviewRow } from './ArticlePreviewRow';

import './ArticlePreview.scss';

interface ArticlePreviewProps {
  posts: BlogPostDto[];
}

const getItemsPerRow = (isDesktop: boolean, isTablet: boolean) => {
  if (isDesktop) {
    return 3;
  }

  if (isTablet) {
    return 2;
  }

  return 1;
};

export const ArticlePreview: FC<ArticlePreviewProps> = ({ posts }) => {
  const isDesktop = useMediaQuery({ query: MEDIA_DESKTOP_SM });
  const isTablet = useMediaQuery({ query: MEDIA_TABLET_SM });
  const rows = chunk(posts, getItemsPerRow(isDesktop, isTablet));

  return !isEmpty(posts) ? (
    <ul>
      {rows.map((row, rowIndex) => (
        <ArticlePreviewRow key={rowIndex} row={row} />
      ))}
    </ul>
  ) : null;
};
