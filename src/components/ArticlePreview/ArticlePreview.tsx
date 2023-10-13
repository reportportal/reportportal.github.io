import React from 'react';
import isEmpty from 'lodash/isEmpty';

import { createBemBlockBuilder } from '../../utils';

import { ArticlePreviewItem } from './ArticlePreviewItem';
import { Post } from './types';

import './ArticlePreview.scss';

interface Props {
  posts: Post[]
}

const getBlocksWith = createBemBlockBuilder(['article-preview-list']);

export const ArticlePreview: React.FC<Props> = ({ posts }) =>
  !isEmpty(posts) ? (
    <ul className={getBlocksWith()}>
      {posts.map(post => (
        <ArticlePreviewItem key={post.id} post={post} />
      ))}
    </ul>
  ) : null;
