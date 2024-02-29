import React, { FC } from 'react';
import classNames from 'classnames';
import { ArticlePreview, Link } from '@app/components';
import { createBemBlockBuilder } from '@app/utils';
import { useLatestFromOurBlog } from '@app/hooks';

import './LatestFromOurBlog.scss';

const getBlocksWith = createBemBlockBuilder(['latest-from-our-blog']);

interface LatestFromOurBlogProps {
  isViewAll?: boolean;
}

export const LatestFromOurBlog: FC<LatestFromOurBlogProps> = ({ isViewAll }) => {
  const posts = useLatestFromOurBlog();

  return (
    <section className={classNames(getBlocksWith(), 'container')}>
      <h2 className={getBlocksWith('__title')}>Latest from our blog</h2>
      <div className={getBlocksWith('__latest-post')}>
        <ArticlePreview posts={posts} />
      </div>
      {isViewAll && (
        <Link className="btn btn--outline btn--large latest-from-our-blog__button" to="/blog">
          View all
        </Link>
      )}
    </section>
  );
};
