import React, { useState } from 'react';
import { graphql } from 'gatsby';
import cx from 'classnames';

import { ArticlePreview } from '../components/ArticlePreview';
import { Layout } from '../components/Layout';
import { createBemBlockBuilder } from '../utils';

import '../components/BlogPage/BlogPage.scss';

const PAGE_SZIE = 9;
const getBlocksWith = createBemBlockBuilder(['blog']);

const BlogIndex = (props) => {
  const {
    data: {
      allContentfulBlogPost: { nodes },
    },
    location,
  } = props;

  const [posts, setPosts] = useState(nodes.slice(0, PAGE_SZIE));

  const handleClick = () => setPosts(nodes.slice(0, posts.length + PAGE_SZIE));

  return (
    <Layout location={location}>
      <div>
        <div className={getBlocksWith()}>
          <div className="container">
            <h1 className={getBlocksWith('__title')}>Blog</h1>
            <p className={getBlocksWith('__subtitle')}>
              Product updates, news and technology articles
            </p>
            <ArticlePreview posts={posts} />
            {posts.length < nodes.length && (
              <div className={getBlocksWith('__footer')}>
                <button className={cx('btn', 'btn--outline', 'btn--large')} onClick={handleClick}>
                  Load more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { date: DESC }) {
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
          gatsbyImageData(width: 384, placeholder: BLURRED, formats: [PNG])
        }
      }
    }
  }
`;
