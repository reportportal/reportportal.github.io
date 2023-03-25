import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { ArticlePreview } from '../components/ArticlePreview';
import { Showcase } from '../components/Showcase';

const RootIndex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Showcase />
      <ArticlePreview posts={data.allContentfulBlogPost.nodes} />
    </Layout>
  );
};

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
