import React, { FC } from 'react';
import { createBemBlockBuilder } from '@app/utils';

import AuthorIcon from './icons/author.inline.svg';

import './ArticleAuthor.scss';

interface Props {
  authorName: string;
}

const getBlocksWith = createBemBlockBuilder(['article-author']);

export const ArticleAuthor: FC<Props> = ({ authorName }) => {
  return (
    <p className={getBlocksWith()}>
      <span className={getBlocksWith('__icon')}>
        <AuthorIcon />
      </span>
      {authorName}
    </p>
  );
};
