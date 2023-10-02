import React from 'react';

import { createBemBlockBuilder } from '@utils';

import AuthorIcon from './icons/author.inline.svg';

import './ArticleAuthor.scss';

const getBlocksWith = createBemBlockBuilder(['article-author']);

export const ArticleAuthor = ({ authorName }) => {
  return (
    <p className={getBlocksWith()}>
      <span className={getBlocksWith('__icon')}>
        <AuthorIcon />
      </span>
      {authorName}
    </p>
  );
};
