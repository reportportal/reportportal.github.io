import React from 'react';

import { ArticlePreview } from '@/components/ArticlePreview';
import { SubscriptionBanner } from '@/components/SubscriptionBanner';
import { createBemBlockBuilder } from '@/utils';

import './BlogPage.scss';

interface Props {
  loadMorePost: () => void
  nodes: unknown[]
  posts: unknown[]
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
