import React, { useEffect } from 'react';
import classNames from 'classnames';
import noop from 'lodash/noop';
import compact from 'lodash/compact';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';

import { ArrowLeft } from '@svg/arrowLeft.jsx';
import { createBemBlockBuilder } from '@utils';
import DownloadIcon from '@svg/download.inline.svg';
import { Link } from '@components/Link';
import { SubscriptionBanner } from '@components/SubscriptionBanner';

import './CaseStudyPage.scss';

const getBlocksWith = createBemBlockBuilder(['case-page']);

export const CaseStudyPage = ({ title, industry, challenges, highlights, benefitsResults }) => {
  useEffect(() => {
    function setupTable() {
      const tables = Array.from(document.querySelectorAll('table')).reverse();

      if (!tables.length) return;

      if (window.matchMedia('(min-width: 768px)').matches) {
        let counter = 0;

        tables.forEach((table, idx) => {
          const ulPrevHeight = table.previousElementSibling.getBoundingClientRect().height;

          table.style.height = `${ulPrevHeight}px`;
          table.style.bottom = idx === 0 ? '0px' : `${counter}px`;

          counter += ulPrevHeight;
        });
      } else {
        tables.forEach(table => {
          table.style.height = 'initial';
        });
      }
    }

    setupTable();
    window.addEventListener('resize', setupTable);
    return () => window.removeEventListener('resize', setupTable);
  });

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        const childrenArray = React.Children.toArray(children);

        if (!compact(childrenArray).length) {
          return null;
        }

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
    <>
      <div className={getBlocksWith()}>
        <div className={getBlocksWith('__hero')}>
          <div className={classNames(getBlocksWith('__head'), 'container')}>
            <div className={getBlocksWith('__titles')}>
              <p className={getBlocksWith('__industry')}>{industry}</p>
              <h1 className={getBlocksWith('__title')}>{title}</h1>
            </div>
            <div className={getBlocksWith('__button-group')}>
              <Link
                className={classNames('btn btn--white btn--large', getBlocksWith('__back-to-list'))}
                to="/case-studies"
              >
                <ArrowLeft />
                Back to Case Studies
              </Link>
              <a
                className={classNames(
                  'btn btn--white btn--large temporary-hide',
                  getBlocksWith('__download-pdf'),
                )}
                download
                onClick={noop}
              >
                <DownloadIcon />
                Download PDF version
              </a>
            </div>
          </div>
        </div>
        <div className={classNames(getBlocksWith('__case-body'), 'container')}>
          <div className={getBlocksWith('__case-columns')}>
            <div className={getBlocksWith('__challenges')}>
              <div className={getBlocksWith('__challenges--body')}>
                {challenges?.raw && renderRichText(challenges, options)}
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
      </div>
      <SubscriptionBanner />
    </>
  );
};
