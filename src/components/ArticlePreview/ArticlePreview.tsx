import React from 'react';
import isEmpty from 'lodash/isEmpty';
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import { createBemBlockBuilder } from '@app/utils';

import { ArticlePreviewItem } from './ArticlePreviewItem';

import './ArticlePreview.scss';

interface Post {
  id: number;
  slug: string;
  title: {
    title: string;
  };
  featuredImage: {
    file: {
      url: string;
    };
  };
  category: string;
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  publishDate: string;
  leadParagraph: {
    leadParagraph: string;
  };
  author: string;
}

interface Props {
  posts: Post[];
}

const getBlocksWith = createBemBlockBuilder(['article-preview-list']);

export const ArticlePreview: React.FC<Props> = ({ posts }) =>
  !isEmpty(posts) ? (
    <ul className={getBlocksWith()}>
      {posts.map(post => (
        <ArticlePreviewItem key={post.id} post={post} />
      ))}
    </ul>
  ) : null;
