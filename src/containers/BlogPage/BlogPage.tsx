import React, { FC } from 'react';
import { ArticlePreview } from '@app/components/ArticlePreview';
import { SubscriptionBanner } from '@app/components/SubscriptionBanner';
import { createBemBlockBuilder, BlogPostDto } from '@app/utils';

import './BlogPage.scss';

interface BlogPageProps {
  visiblePosts: BlogPostDto[];
  allPosts: BlogPostDto[];
  loadMorePosts: () => void;
}

const getBlocksWith = createBemBlockBuilder(['blog']);

export const BlogPage: FC<BlogPageProps> = ({ visiblePosts, allPosts, loadMorePosts }) => (
  <>
    <div className={getBlocksWith()}>
      <div className="container">
        <h1 className={getBlocksWith('__title')}>Blog</h1>
        <p className={getBlocksWith('__subtitle')}>Product updates, news and technology articles</p>
        <ArticlePreview posts={visiblePosts} />
        {visiblePosts.length < allPosts.length && (
          <div className={getBlocksWith('__footer')}>
            <button className="btn btn--outline btn--large" onClick={loadMorePosts}>
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
    <SubscriptionBanner />
  </>
);
