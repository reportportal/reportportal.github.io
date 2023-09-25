import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '@components/Layout';
import { CasesPage } from '@containers/CasesPage';

const Cases = ({
  data: {
    allContentfulCaseStudy: { nodes },
  },
}) => {
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

export const pageQuery = graphql`
  query CaseStudyIndexQuery {
    allContentfulCaseStudy(sort: { id: DESC }) {
      nodes {
        id
        industry
        icon {
          file {
            url
          }
        }
        cardBackgroundImage {
          file {
            url
          }
        }
        title
      }
    }
  }
`;

export default Cases;
