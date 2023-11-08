import React, { FC, useState } from 'react';
import { PageProps, graphql } from 'gatsby';
import { Layout } from '@app/components';
import { BlogPage } from '@app/containers/BlogPage';

const PAGE_SIZE = 9;

interface DataProps {
  allContentfulBlogPost: {
    nodes: {
      [key: string]: any;
    };
  };
}

const BlogIndex: FC<PageProps<DataProps>> = ({ data }) => {
  const { nodes } = data.allContentfulBlogPost;

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
