import React from 'react';

import { createBemBlockBuilder } from '../../../../utils';

import AuthorIcon from './icons/author.inline.svg';

import './ArticleAuthor.scss';

interface Props {
  authorName: string
}

const getBlocksWith = createBemBlockBuilder(['article-author']);

export const ArticleAuthor: React.FC<Props> = ({ authorName }) => {
  return (
    <p className={getBlocksWith()}>
      <span className={getBlocksWith('__icon')}>
        <AuthorIcon />
      </span>
      {authorName}
    </p>
  );
};
