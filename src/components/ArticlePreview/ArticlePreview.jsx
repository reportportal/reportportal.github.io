import React from 'react';

import { ArticlePreviewItem } from '../ArticlePreviewItem';
import { createBemBlockBuilder } from '../../utils';

import './ArticlePreview.scss';

const getBlocksWith = createBemBlockBuilder(['article-preview-list']);

export const ArticlePreview = ({ posts }) => {
  if (!posts) return null;
  if (!Array.isArray(posts)) return null;

  return (
    <div className="container">
      <ul className={getBlocksWith()}>
        {posts.map(post => (
          <ArticlePreviewItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};
