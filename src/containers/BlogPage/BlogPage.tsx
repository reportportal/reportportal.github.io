import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { ArticlePreview } from '@app/components/ArticlePreview';
import { SubscriptionBanner } from '@app/components/SubscriptionBanner';
import {
  createBemBlockBuilder,
  BlogPostDto,
  defaultSpringTransition,
  heroBackgroundAnimationProps,
} from '@app/utils';
import { AnimatedHeader } from '@app/components/AnimatedHeader';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';

import './BlogPage.scss';

interface BlogPageProps {
  visiblePosts: BlogPostDto[];
  allPosts: BlogPostDto[];
  loadMorePosts: () => void;
}

const getBlocksWith = createBemBlockBuilder(['blog']);

export const BlogPage: FC<BlogPageProps> = ({ visiblePosts, allPosts, loadMorePosts }) => {
  const getBackgroundAnimation = useMotionEnterAnimation(heroBackgroundAnimationProps);

  return (
    <>
      <motion.div className={getBlocksWith()} {...getBackgroundAnimation({ inView: true })}>
        <div className="container">
          <AnimatedHeader
            headerLevel={1}
            transition={defaultSpringTransition}
            className={getBlocksWith('__title')}
          >
            Blog
          </AnimatedHeader>
          <AnimatedHeader
            transition={defaultSpringTransition}
            delay={0.1}
            className={getBlocksWith('__subtitle')}
          >
            Product updates, news and technology articles
          </AnimatedHeader>
          <ArticlePreview posts={visiblePosts} />
          {visiblePosts.length < allPosts.length && (
            <div className={getBlocksWith('__footer')}>
              <button className="btn btn--outline btn--large" onClick={loadMorePosts}>
                Load more
              </button>
            </div>
          )}
        </div>
      </motion.div>
      <SubscriptionBanner />
    </>
  );
};
