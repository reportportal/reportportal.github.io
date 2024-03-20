import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import { BlogPostPage } from '@app/containers/BlogPostPage';
import { Layout } from '@app/components/Layout';

interface DataProps {
  contentfulBlogPost: {
    industry: string;
    author: string;
    date: string;
    articleBody: string;
    title?: {
      title: string;
    };
    seoTitle?: string;
    seoDescription?: string;
  };
}

const BlogPostTemplate: FC<PageProps<DataProps>> = ({ data }) => {
  const { industry, title, seoTitle, seoDescription, author, date, articleBody } =
    data.contentfulBlogPost;

  return (
    <Layout seoData={{ title: seoTitle ?? title?.title, description: seoDescription }}>
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
      seoTitle
      seoDescription
      date(formatString: "MMMM D, YYYY")
      author
      articleBody {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData
            description
          }
        }
      }
    }
  }
`;
