import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { BlogPostPage } from '@/containers/BlogPostPage';
import { Layout } from '@/components/Layout';
import { DataProps } from './types';

const BlogPostTemplate = ({ data }: PageProps<DataProps>) => {
  const { industry, title, author, date, articleBody } = data?.contentfulBlogPost;

  return (
    <Layout>
      <BlogPostPage {...{ industry, title, author, date, articleBody }} />
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      slug
      industry
      title {
        title
      }
      date(formatString: "MMMM D, YYYY")
      author
      articleBody {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData
          }
        }
      }
    }
  }
`;
