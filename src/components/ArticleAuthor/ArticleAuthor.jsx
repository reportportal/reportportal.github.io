import React from 'react';

import { createBemBlockBuilder } from '../../utils';

import './ArticleAuthor.scss';

const getBlocksWith = createBemBlockBuilder(['article-author']);

export const ArticleAuthor = ({ authorName }) => {
  return (
    <p className={getBlocksWith()}>
      <svg
        className={getBlocksWith('__icon')}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
      >
        <path
          d="M13.3307 14.2646V12.9313C13.3307 12.2241 13.0498 11.5458 12.5497 11.0457C12.0496 10.5456 11.3713 10.2646 10.6641 10.2646H5.33073C4.62349 10.2646 3.94521 10.5456 3.44511 11.0457C2.94501 11.5458 2.66406 12.2241 2.66406 12.9313V14.2646"
          stroke="#8791AB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.0026 7.59798C9.47536 7.59798 10.6693 6.40407 10.6693 4.93132C10.6693 3.45856 9.47536 2.26465 8.0026 2.26465C6.52984 2.26465 5.33594 3.45856 5.33594 4.93132C5.33594 6.40407 6.52984 7.59798 8.0026 7.59798Z"
          stroke="#8791AB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {authorName}
    </p>
  );
};
