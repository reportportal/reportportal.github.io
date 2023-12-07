import React, { FC } from 'react';
import isEmpty from 'lodash/isEmpty';
import { createBemBlockBuilder, BlogPostDto } from '@app/utils';

import { ArticlePreviewItem } from './ArticlePreviewItem';

import './ArticlePreview.scss';

interface ArticlePreviewProps {
  posts: BlogPostDto[];
}

const getBlocksWith = createBemBlockBuilder(['article-preview-list']);

export const ArticlePreview: FC<ArticlePreviewProps> = ({ posts }) =>
  !isEmpty(posts) ? (
    <ul className={getBlocksWith()}>
      {posts.map(post => (
        <ArticlePreviewItem key={post.id} post={post} />
      ))}
    </ul>
  ) : null;
