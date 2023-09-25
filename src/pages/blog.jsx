import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '@components/Layout';
import { BlogPage } from '@containers/BlogPage';

const PAGE_SIZE = 9;

const BlogIndex = ({
  data: {
    allContentfulBlogPost: { nodes },
  },
}) => {
  const [posts, setPosts] = useState(nodes.slice(0, PAGE_SIZE));

  const loadMorePost = () => setPosts(nodes.slice(0, posts.length + PAGE_SIZE));

  return (
    <Layout>
      <BlogPage posts={posts} loadMorePost={loadMorePost} nodes={nodes} />
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
