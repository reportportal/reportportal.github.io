import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { noop } from 'lodash';
import cx from 'classnames';
import get from 'lodash/get';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';

import { Layout } from '../components/Layout';
import { Link } from '../components/Link';
import { createBemBlockBuilder } from '../utils';
import { SubscriptionBanner } from '../components/SubscriptionBanner';
import { ArrowLeft } from '../svg/arrowLeft';
import { Download } from '../svg/download';

import './case-study.scss';

const getBlocksWith = createBemBlockBuilder(['case-page']);

const CaseStudyTemplate = props => {
  useEffect(() => {
    function setupTable() {
      const tables = document.querySelectorAll('table');
      if (!tables.length) return;

      if (window.matchMedia('(min-width: 768px)').matches) {
        tables[tables.length - 1].style.bottom = '8px';
        tables.forEach((table, idx) => {
          if (idx === tables.length - 1) return;
          const bottom = (tables.length - (idx + 1)) * 46 + 18;
          table.style.bottom = `${bottom}px`;
        });
      }

      if (window.matchMedia('(min-width: 1239px)').matches) {
        tables[tables.length - 1].style.bottom = '22px';
        tables.forEach((table, idx) => {
          if (idx === tables.length - 1) return;
          const bottom = (tables.length - (idx + 1)) * 70 + 18;
          table.style.bottom = `${bottom}px`;
        });
      }
    }

    setupTable();
    window.addEventListener('resize', setupTable);
    return () => window.removeEventListener('resize', setupTable);
  });

  const caseStudy = get(props, 'data.contentfulCaseStudy');
  const { title, industry, challenges, highlights, benefitsResults } = caseStudy;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (!children) return null;
        return <p className={getBlocksWith('__column--description')}>{children}</p>;
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return children.map((item, index) => (
          <li className={getBlocksWith('__column--list--item')} key={index}>
            {item}
          </li>
        ));
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { url, description } = node.data.target;
        return <img className={getBlocksWith('__column--image')} src={url} alt={description} />;
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        return <h4 className={getBlocksWith('__column--title')}>{children}</h4>;
      },
      [BLOCKS.HEADING_6]: (node, children) => {
        return <h6 className={getBlocksWith('__column--intro')}>{children}</h6>;
      },
      [BLOCKS.TABLE]: (node, children) => (
        <table className={getBlocksWith('__column--table')}>
          <tbody>{children}</tbody>
        </table>
      ),
    },
  };

  return (
    <Layout>
      <div className={getBlocksWith()}>
        <div className={getBlocksWith('__head')}>
          <p className={getBlocksWith('__industry')}>{industry}</p>
          <h1 className={getBlocksWith('__title')}>{title}</h1>
          <div className={getBlocksWith('__button-group')}>
            <Link
              className={cx('btn btn--white btn--large', getBlocksWith('__back-to-list'))}
              to={'/case-studies/'}
            >
              <ArrowLeft />
              Back to Case Studies
            </Link>
            <Link
              className={cx('btn btn--white btn--large', getBlocksWith('__download-pdf'))}
              onClick={noop}
            >
              <Download />
              Download PDF version
            </Link>
          </div>
        </div>
      </div>

      <div className={getBlocksWith('__case-body')}>
        <div className={getBlocksWith('__case-columns')}>
          <div className={getBlocksWith('__challenges')}>
            <div className={getBlocksWith('__challenges--body')}>
              {challenges?.raw && renderRichText(challenges, options)}
            </div>
            <div className={cx(getBlocksWith('__download-btn'), 'temporary-hide')}>
              <button className={cx('btn', 'btn--primary', 'btn--large')} onClick={noop}>
                <Download />
                Download PDF version
              </button>
            </div>
          </div>

          <div className={getBlocksWith('__highlights')}>
            <div className={getBlocksWith('__highlights--body')}>
              {highlights?.raw && renderRichText(highlights, options)}
            </div>
            {benefitsResults?.raw && (
              <div className={getBlocksWith('__benefitsResults')}>
                <div className={getBlocksWith('__benefitsResults--body')}>
                  {renderRichText(benefitsResults, options)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <SubscriptionBanner />
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
