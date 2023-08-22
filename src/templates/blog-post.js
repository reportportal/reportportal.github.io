import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { GatsbyImage } from 'gatsby-plugin-image';
import readingTime from 'reading-time';

import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import * as styles from './blog-post.module.css';

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost');
    const previous = get(this.props, 'data.previous');
    const next = get(this.props, 'data.next');
    const plainTextBody = documentToPlainTextString(JSON.parse(post.articleBody.raw));
    const { minutes: timeToRead } = readingTime(plainTextBody);

    const options = {
      renderNode: {
        'embedded-asset-block': node => {
          const { gatsbyImageData } = node.data.target;

          console.log(node.data.target);

          return <GatsbyImage image={gatsbyImageData} />;
        },
      },
    };

    return (
      <Layout location={this.props.location}>
        <Hero image={post.heroImage?.gatsbyImage} title={post.title} content={post.description} />
        <div className={styles.container}>
          <span className={styles.meta}>
            {post.author?.name} &middot; <time dateTime={post.rawDate}>{post.publishDate}</time> –{' '}
            {timeToRead} minute read
          </span>
          <div className={styles.article}>
            <div className={styles.body}>
              {post.articleBody?.raw && renderRichText(post.articleBody, options)}
            </div>
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/blog/${previous.id}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/blog/${next.id}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

// eslint-disable-next-line import/no-default-export
export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      id
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
