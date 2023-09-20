import React from 'react';
import isEmpty from 'lodash/isEmpty';

import { ArticlePreviewItem } from '../ArticlePreviewItem';
import { createBemBlockBuilder } from '../../utils';

import './ArticlePreview.scss';

const getBlocksWith = createBemBlockBuilder(['article-preview-list']);

export const ArticlePreview = ({ posts }) =>
  !isEmpty(posts) ? (
    <ul className={getBlocksWith()}>
      {posts.map(post => (
        <ArticlePreviewItem key={post.id} post={post} />
      ))}
    </ul>
  ) : null;
