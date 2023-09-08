import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';
import { useMediaQuery } from '@uidotdev/usehooks';

import { ArticlePreview } from '../../ArticlePreview';
import { createBemBlockBuilder } from '../../../utils';
import { getSlidesPerRow } from './utils/getSlidesToShow';

import './LatestFromOurBlog.scss';

const getBlocksWith = createBemBlockBuilder(['latest-from-our-blog']);

export const LatestFromOurBlog = () => {
  const { allContentfulBlogPost } = useLatestBlogPostsQuery();

  // Breakpoints references from the screen.scss file
  const isMobile = useMediaQuery('only screen and (max-width: 460px)');
  const isTablet = useMediaQuery('only screen and (max-width: 1023px');
  const isDesktop = useMediaQuery('only screen and (min-width: 1239px');

  console.log(getSlidesPerRow(isMobile, isTablet));

  return (
    <section className={cx(getBlocksWith(), 'container')}>
      <h2 className={getBlocksWith('__title')}>Latest from our blog</h2>
      <div className={getBlocksWith('__latest-post')}>
        <ArticlePreview
          carousel={!isDesktop}
          slidesToShow={getSlidesPerRow(isMobile, isTablet)}
          posts={allContentfulBlogPost.nodes}
        />
      </div>
    </section>
  );
};

export const useLatestBlogPostsQuery = () => {
  const data = useStaticQuery(graphql`
    query LatestBlogPostQuery {
      allContentfulBlogPost(sort: { date: DESC }, limit: 3) {
        nodes {
          id
          date(formatString: "MMMM Do, YYYY")
          author
          articleBody {
            raw
          }
          title {
            title
          }
          leadParagraph {
            leadParagraph
          }
          category
          featuredImage {
            file {
              url
            }
          }
        }
      }
    }
  `);

  return data;
};
