import React from 'react';
import classNames from 'classnames';

import { ArticlePreview } from '@components/ArticlePreview';
import { SubscriptionBanner } from '@components/SubscriptionBanner';
import { createBemBlockBuilder } from '@utils';

import './BlogPage.scss';

const getBlocksWith = createBemBlockBuilder(['blog']);

export const BlogPage = ({ posts, nodes, loadMorePost }) => (
  <>
    <div className={getBlocksWith()}>
      <div className="container">
        <h1 className={getBlocksWith('__title')}>Blog</h1>
        <p className={getBlocksWith('__subtitle')}>Product updates, news and technology articles</p>
        <ArticlePreview posts={posts} />
        {posts.length < nodes.length && (
          <div className={getBlocksWith('__footer')}>
            <button
              className={classNames('btn', 'btn--outline', 'btn--large')}
              onClick={loadMorePost}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
    <SubscriptionBanner />
  </>
);
