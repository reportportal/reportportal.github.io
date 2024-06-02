import { graphql } from 'gatsby';

export const LinkFragment = graphql`
  fragment LinkFields on ContentfulLink {
    title
    url
  }
`;

export const CTAWithoutNameFragment = graphql`
  fragment CTAFields on ContentfulCta {
    link {
      ...LinkFields
    }
    type
  }
`;

export const ComparePlanItemFragment = graphql`
  fragment ComparePlanItemFields on ContentfulComparePlanItem {
    name
    plans
    description {
      raw
    }
  }
`;

export const ComparePlanFragment = graphql`
  fragment ComparePlanFields on ContentfulComparePlan {
    columns
    mobileColumns
    sections {
      title
      items {
        ...ComparePlanItemFields
      }
    }
    ctas {
      ...CTAFields
    }
    note
  }
`;
