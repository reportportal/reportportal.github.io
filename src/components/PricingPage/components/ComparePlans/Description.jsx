import React from 'react';

import { createBemBlockBuilder } from '../../../../utils';
import { Link } from '../../../Link';

import './ComparePlans.scss';

const getCompareContainer = createBemBlockBuilder(['compare']);

export const Description = ({ text, href }) => {
  const formComponent = (str, anchorHref) => {
    const match = str.match(/([^*]*)\*([^*]+)\*([^*]*)/);

    if (match) {
      const beforeText = match[1];
      const highlightedText = match[2];
      const afterText = match[3];

      return (
        <>
          {beforeText}{' '}
          <Link className={getCompareContainer('__description-anchor')} to={anchorHref}>
            {highlightedText}
          </Link>{' '}
          {afterText}
        </>
      );
    }
    return text;
  };

  return <>{href ? <span>{formComponent(text, href)}</span> : <span>{text}</span>}</>;
};
