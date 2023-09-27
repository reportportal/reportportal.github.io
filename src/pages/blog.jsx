import React, { useState } from 'react';
import { graphql } from 'gatsby';
import cx from 'classnames';

import { ArticlePreview } from '../components/ArticlePreview';
import { Layout } from '../components/Layout';
import { SubscriptionBanner } from '../components/SubscriptionBanner';
import { createBemBlockBuilder } from '../utils';

import '../components/BlogPage/BlogPage.scss';

const PAGE_SIZE = 9;
const getBlocksWith = createBemBlockBuilder(['blog']);

const BlogIndex = ({
  data: {
    allContentfulBlogPost: { nodes },
  },
}) => {
  const [posts, setPosts] = useState(nodes.slice(0, PAGE_SIZE));

  const loadMorePost = () => setPosts(nodes.slice(0, posts.length + PAGE_SIZE));

  return (
    <Layout>
      <div className={getBlocksWith()}>
        <div className="container">
          <h1 className={getBlocksWith('__title')}>Blog</h1>
          <p className={getBlocksWith('__subtitle')}>
            Product updates, news and technology articles
          </p>
          <ArticlePreview posts={posts} />
          {posts.length < nodes.length && (
            <div className={getBlocksWith('__footer')}>
              <button className={cx('btn', 'btn--outline', 'btn--large')} onClick={loadMorePost}>
                Load more
              </button>
            </div>
          )}
        </div>
      </div>
      <SubscriptionBanner />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { date: DESC }) {
      nodes {
        id
        slug
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
`;
