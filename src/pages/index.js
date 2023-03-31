import { ArticlePreview } from '../components/ArticlePreview';
import { Features } from '../components/Features';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';

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
      
      /* Comment Layout Abobe and uncomment this one to Render Features Page
      <Layout location={this.props.location}>
        <Features />
      </Layout>
      */
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
