import React from 'react';

import { ArticlePreview } from '@app/components/ArticlePreview';
import { Post } from '@app/components/ArticlePreview/types';
import { SubscriptionBanner } from '@app/components/SubscriptionBanner';
import { createBemBlockBuilder } from '@app/utils';

import './BlogPage.scss';

interface Props {
  loadMorePost: () => void;
  nodes: {
    [key: string]: any;
  };
  posts: Post[];
}
const getBlocksWith = createBemBlockBuilder(['blog']);

export const BlogPage: React.FC<Props> = ({ posts, nodes, loadMorePost }) => (
  <>
    <div className={getBlocksWith()}>
      <div className="container">
        <h1 className={getBlocksWith('__title')}>Blog</h1>
        <p className={getBlocksWith('__subtitle')}>Product updates, news and technology articles</p>
        <ArticlePreview posts={posts} />
        {posts.length < nodes.length && (
          <div className={getBlocksWith('__footer')}>
            <button className="btn btn--outline btn--large" onClick={loadMorePost}>
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
    <SubscriptionBanner />
  </>
);
