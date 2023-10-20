import React from 'react';

import { createBemBlockBuilder } from '@app/utils';

import { Link } from '../../Link';

import '../ComparePlans.scss';

interface Props {
  text: string;
  href: string;
}

const getBlocksWith = createBemBlockBuilder(['compare']);

export const Description: React.FC<Props> = ({ text, href }) => {
  const getLink = () => {
    const match = text.match(/([^*]*)\*([^*]+)\*([^*]*)/);

    if (match) {
      const [, beforeText, highlightedText, afterText] = match;

      return (
        <>
          {beforeText}{' '}
          <Link className={getBlocksWith('__description-anchor')} to={href}>
            {highlightedText}
          </Link>{' '}
          {afterText}
        </>
      );
    }

    return text;
  };

  return <span>{href ? getLink() : text}</span>;
};
