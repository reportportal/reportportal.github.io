import React, { useState, useEffect, FC } from 'react';
import { PageProps, graphql } from 'gatsby';
import { Layout, Seo } from '@app/components/Layout';
import { Case, CasesPage } from '@app/containers/CasesPage';
import { SEO_DATA } from '@app/utils';

interface CasesProps {
  allContentfulCaseStudy: {
    nodes: Case[];
  };
}

const Cases: FC<PageProps<CasesProps>> = ({ data }) => {
  const {
    allContentfulCaseStudy: { nodes },
  } = data;

  const [caseStudies, setCaseStudies] = useState(nodes.slice(0, 12));
  const [displayCount, setDisplayCount] = useState(12);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 12);
  };

  useEffect(() => {
    setCaseStudies(nodes.slice(0, displayCount));
  }, [displayCount, nodes]);

  return (
    <Layout className="cases-page-layout">
      <CasesPage
        cases={caseStudies}
        handleLoadMore={handleLoadMore}
        showLoadMore={displayCount < nodes.length}
      />
    </Layout>
  );
};

export default Cases;

export const pageQuery = graphql`
  query CaseStudyIndexQuery {
    allContentfulCaseStudy(sort: { createdAt: DESC }) {
      nodes {
        id
        industry
        icon {
          file {
            url
          }
          description
        }
        createdAt
        cardBackgroundImage {
          file {
            url
          }
        }
        title
        slug
      }
    }
  }
`;

// eslint-disable-next-line react/no-multi-comp
export const Head = () => {
  const { title, description } = SEO_DATA.caseStudies;

  return <Seo title={title} description={description} />;
};
