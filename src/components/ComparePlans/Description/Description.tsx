import React, { FC } from 'react';
import { createBemBlockBuilder } from '@app/utils';

import { Link } from '../../Link';

import '../ComparePlans.scss';

interface DescriptionProps {
  text: string;
  href: string;
}

const getBlocksWith = createBemBlockBuilder(['compare']);

export const Description: FC<DescriptionProps> = ({ text, href }) => {
  const getLink = () => {
    const match = /([^*]*)\*([^*]+)\*([^*]*)/.exec(text);

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
