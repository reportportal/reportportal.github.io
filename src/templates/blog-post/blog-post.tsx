import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import { BlogPostPage } from '@app/containers/BlogPostPage';
import { Layout, Seo } from '@app/components/Layout';

interface DataProps {
  contentfulBlogPost: {
    industry: string;
    author: string;
    date: string;
    articleBody: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    title?: {
      title: string;
    };
    seoTitle?: string;
    seoDescription?: string;
    featuredImage?: {
      file: {
        url: string;
      };
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
      seoTitle
      seoDescription
      featuredImage {
        file {
          url
        }
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
            description
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => {
  const { title, seoTitle, seoDescription, featuredImage } = data.contentfulBlogPost;

  return (
    <Seo
      title={seoTitle ?? title?.title}
      description={seoDescription}
      previewImage={featuredImage?.file?.url}
    />
  );
};
