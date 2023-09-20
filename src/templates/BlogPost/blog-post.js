import React from 'react';
import { Link, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage } from 'gatsby-plugin-image';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

import { Layout } from '../../components/Layout';
import { SubscriptionBanner } from '../../components/SubscriptionBanner';
import User from './icons/user.svg';
import Calendar from './icons/calendar.svg';
import ArrowLeft from './icons/arrow-left.svg';

import './blog-post.scss';

const BlogPostTemplate = ({ data }) => {
  const { industry, title, author, date, articleBody } = data?.contentfulBlogPost;

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="blog-post-page__bold-text">{text}</b>,
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { gatsbyImageData } = node.data.target;

        return (
          <div className="blog-post-page__gatsby-image">
            <GatsbyImage image={gatsbyImageData} alt="" />
          </div>
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="blog-post-page__second-heading">{children}</h2>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="blog-post-page__forth-heading">{children}</h4>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (children?.[0].startsWith?.('blueBg')) {
          children[0] = children[0].replace('blueBg ', '');

          return <p className="blog-post-page__colorful-paragraph">{children}</p>;
        }

        return <p className="blog-post-page__paragraph">{children}</p>;
      },
      [BLOCKS.OL_LIST]: (node, children) => <ol className="blog-post-page__ol">{children}</ol>,
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="blog-post-page__blockquote">{children}</blockquote>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a className="blog-post-page__hyperlink" href={node.data.uri}>
          {children}
        </a>
      ),
    },
  };

  return (
    <Layout>
      <div className="blog-post-page">
        <div className="blog-post-page__head">
          <p className="blog-post-page__industry">{industry}</p>
          <h1 className="blog-post-page__title">{title?.title}</h1>
          <div className="blog-post-page__info">
            <Link className="btn btn--white btn--large back-to-blog" to={'/blog/'}>
              <img src={ArrowLeft} alt="arrow left" />
              Back to blog
            </Link>
            <div className="blog-post-page__info-aside">
              <div className="button-with-icon">
                <img className="button-with-icon__image" src={User} alt="user" />
                <span className="button-with-icon__text">{author}</span>
              </div>
              <div className="button-with-icon">
                <img className="button-with-icon__image" src={Calendar} alt="calendar" />
                <span className="button-with-icon__text">{date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-post-page__container container">
        {articleBody?.raw && renderRichText(articleBody, options)}
      </div>
      <SubscriptionBanner />
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
