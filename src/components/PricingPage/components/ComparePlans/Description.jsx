import React from 'react';

import { createBemBlockBuilder } from '../../../../utils';
import { Link } from '../../../Link';

import './ComparePlans.scss';

const getCompareContainer = createBemBlockBuilder(['compare']);

export const Description = ({ text, href }) => {
  return (
    <>
      {href ? (
        <span>
          <FormComponent text={text} href={href} />
        </span>
      ) : (
        <span>{text}</span>
      )}
    </>
  );
};

const FormComponent = ({ text, href }) => {
  const match = text.match(/([^*]*)\*([^*]+)\*([^*]*)/);

  if (match) {
    const beforeText = match[1];
    const highlightedText = match[2];
    const afterText = match[3];

    return (
      <>
        {beforeText}{' '}
        <Link className={getCompareContainer('__description-anchor')} to={href}>
          {highlightedText}
        </Link>{' '}
        {afterText}
      </>
    );
  }

  return text;
};
