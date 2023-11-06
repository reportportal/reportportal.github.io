import { useStaticQuery, graphql } from 'gatsby';
import { Organization } from '@app/utils';

interface TrustedByOrganizations {
  organizations: Required<Organization>[];
}

export const useTrustedByOrganizations = (): TrustedByOrganizations['organizations'] => {
  const {
    allContentfulTrustedByOrganizations: {
      nodes: [{ organizations }],
    },
  } = useStaticQuery<{
    allContentfulTrustedByOrganizations: { nodes: TrustedByOrganizations[] };
  }>(graphql`
    query ContentfulTrustedByOrganizationsQuery {
      allContentfulTrustedByOrganizations(limit: 1) {
        nodes {
          id
          organizations {
            id
            title
            secondaryLogo {
              ... on ContentfulAsset {
                title
                contentful_id
                __typename
                url
              }
            }
          }
        }
      }
    }
  `);

  organizations.forEach(organization => {
    if (!organization.secondaryLogo?.url) {
      throw new Error(
        `'secondaryLogo' field should be present on the ${organization.title} organization Contentful record`,
      );
    }
  });

  return organizations;
};
