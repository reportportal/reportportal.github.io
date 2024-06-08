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

export const OfferingPlansFragment = graphql`
  fragment OfferingPlansFields on ContentfulSection {
    title
    items {
      ... on ContentfulOfferingPlan {
        title
        description
        isPopular
        pricingInfo
        features {
          raw
        }
        price {
          title
          currency
          period
          quarterly
          yearly
        }
        cta {
          ...CTAFields
        }
      }
    }
  }
`;
