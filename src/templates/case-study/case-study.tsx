import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { Layout } from '@app/components/Layout';
import { CaseStudyPage } from '@app/containers/CaseStudyPage';

import { CaseStudyProps } from './types';

const CaseStudyTemplate = ({ data }: PageProps<CaseStudyProps>) => {
  const { title, industry, challenges, highlights, benefitsResults } = data.contentfulCaseStudy;

  return (
    <Layout>
      <CaseStudyPage {...{ title, industry, challenges, highlights, benefitsResults }} />
    </Layout>
  );
};

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
