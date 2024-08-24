/* eslint-disable react/no-multi-comp */
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { Link } from '@app/components/Link';

export const OPTIONS = {
  renderMark: {
    [MARKS.BOLD]: text => <b className="blog-post-page__bold-text">{text}</b>,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { gatsbyImageData, description } = node.data.target;

      return (
        <div className="blog-post-page__gatsby-image">
          <GatsbyImage image={gatsbyImageData} alt={description} />
        </div>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="blog-post-page__second-heading">{children}</h2>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="blog-post-page__forth-heading">{children}</h4>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (children?.[0].startsWith?.('blueBg')) {
        children[0] = children[0].replace('blueBg ', '');

        return <p className="blog-post-page__colorful-paragraph">{children}</p>;
      }

      return <p className="blog-post-page__paragraph">{children}</p>;
    },
    [BLOCKS.OL_LIST]: (node, children) => <ol className="blog-post-page__ol">{children}</ol>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="blog-post-page__ul">{children}</ul>,
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="blog-post-page__blockquote">{children}</blockquote>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <Link to={node.data.uri} className="blog-post-page__hyperlink">
        {children}
      </Link>
    ),
  },
};
