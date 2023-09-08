import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { LandingPage } from '../components/LandingPage';

const Root = ({ location }) => {
  return (
    <Layout location={location}>
      <LandingPage />
    </Layout>
  );
};

export default Root;

export const latestBlogPostQuery = graphql`
  query LatestBlogPostQuery {
    allContentfulBlogPost(sort: { date: DESC }, limit: 3) {
      nodes {
        id
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
          gatsbyImageData(width: 200, placeholder: BLURRED, formats: [PNG])
        }
      }
    }
  }
`;
