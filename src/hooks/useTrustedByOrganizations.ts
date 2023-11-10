import { useStaticQuery, graphql } from 'gatsby';
import { Organization } from '@app/utils';

interface TrustedByOrganizationsQuery {
  organizations: Required<Organization>[];
}

interface TrustedByOrganizationsQueryDto {
  allContentfulTrustedByOrganizations: { nodes: TrustedByOrganizationsQuery[] };
}

export const useTrustedByOrganizations = (): TrustedByOrganizationsQuery['organizations'] => {
  const {
    allContentfulTrustedByOrganizations: {
      nodes: [{ organizations }],
    },
  } = useStaticQuery<TrustedByOrganizationsQueryDto>(graphql`
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
