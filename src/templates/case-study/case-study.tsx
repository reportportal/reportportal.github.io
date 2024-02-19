import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import {
  RenderRichTextData,
  ContentfulRichTextGatsbyReference,
} from 'gatsby-source-contentful/rich-text';
import { Layout } from '@app/components';
import { CaseStudyPage } from '@app/containers/CaseStudyPage';

export interface CaseStudyProps {
  contentfulCaseStudy: {
    benefitsResults: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    challenges: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    industry: string;
    highlights: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    title: string;
    seoTitle?: string;
    seoDescription?: string;
  };
}

const CaseStudyTemplate: FC<PageProps<CaseStudyProps>> = ({ data }) => {
  const { title, seoTitle, seoDescription, industry, challenges, highlights, benefitsResults } =
    data.contentfulCaseStudy;

  return (
    <Layout seoData={{ title: seoTitle || title, description: seoDescription }}>
      <CaseStudyPage {...{ title, industry, challenges, highlights, benefitsResults }} />
    </Layout>
  );
};

export default CaseStudyTemplate;

export const pageQuery = graphql`
  query CaseStudyBySlug($slug: String!) {
    contentfulCaseStudy(slug: { eq: $slug }) {
      title
      seoTitle
      seoDescription
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
