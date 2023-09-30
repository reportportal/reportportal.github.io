import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import { Layout } from '@components/Layout';
import { CaseStudyPage } from '@containers/CaseStudyPage';

const CaseStudyTemplate = props => {
  const caseStudy = get(props, 'data.contentfulCaseStudy');
  const { title, industry, challenges, highlights, benefitsResults } = caseStudy;

  return (
    <Layout>
      <CaseStudyPage {...{ title, industry, challenges, highlights, benefitsResults }} />
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default CaseStudyTemplate;

export const pageQuery = graphql`
  query CaseStudyBySlug($slug: String!) {
    contentfulCaseStudy(slug: { eq: $slug }) {
      title
      industry
      challenges {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            url
          }
        }
      }
      highlights {
        raw
      }
      benefitsResults {
        raw
      }
    }
  }
`;
