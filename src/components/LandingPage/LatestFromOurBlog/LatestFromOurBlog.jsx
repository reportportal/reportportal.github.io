import React from 'react';
import cx from 'classnames';

import { ArticlePreview } from '../../ArticlePreview';
import { createBemBlockBuilder } from '../../../utils';
import { useLatestFromOurBlog } from '../../../hooks/useLatestFromOurBlog';

import './LatestFromOurBlog.scss';

const getBlocksWith = createBemBlockBuilder(['latest-from-our-blog']);

export const LatestFromOurBlog = () => {
  const { nodes } = useLatestFromOurBlog();

  return (
    <section className={cx(getBlocksWith(), 'container')}>
      <h2 className={getBlocksWith('__title')}>Latest from our blog</h2>
      <div className={getBlocksWith('__latest-post')}>
        <ArticlePreview posts={nodes} />
      </div>
    </section>
  );
};
