import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { ArticlePreview } from '../components/ArticlePreview';

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes');
    const [author] = get(this, 'props.data.allContentfulPerson.nodes');

    return (
      <Layout location={this.props.location}>
        <Hero
          image={author.heroImage?.gatsbyImage}
          title={author?.name}
          content={author?.shortBio}
        />
        <ArticlePreview posts={posts} />
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { date: DESC }) {
      nodes {
        date(formatString: "MMMM Do, YYYY")
        title {
          title
        }
        author
        id
      }
    }
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      nodes {
        name
        shortBio {
          raw
        }
        heroImage: image {
          gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
        }
      }
    }
  }
`;
