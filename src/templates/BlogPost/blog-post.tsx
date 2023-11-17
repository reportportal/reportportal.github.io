import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import { BlogPostPage } from '@app/containers/BlogPostPage';
import { Layout } from '@app/components';

interface DataProps {
  contentfulBlogPost: {
    industry: string;
    author: string;
    date: string;
    articleBody: string;
    title?: {
      title: string;
    };
  };
}

const BlogPostTemplate: FC<PageProps<DataProps>> = ({ data }) => {
  const { industry, title, author, date, articleBody } = data.contentfulBlogPost;

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
