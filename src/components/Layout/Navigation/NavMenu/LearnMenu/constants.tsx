import React from 'react';
import { DOCUMENTATION_URL } from '@app/utils';

import DocumentationIcon from './icons/documentation.inline.svg';
import BlogIcon from './icons/blog.inline.svg';
import SuccessStoriesIcon from './icons/success-stories.inline.svg';

export const RESOURCES_LIST = [
  {
    icon: <DocumentationIcon />,
    title: 'Documentation',
    text: 'All the technical docs',
    link: { url: DOCUMENTATION_URL },
  },
  {
    icon: <BlogIcon />,
    title: 'Blog',
    text: 'News, updates and more',
    link: { url: '/blog' },
  },
  {
    icon: <SuccessStoriesIcon />,
    title: 'Success stories',
    text: 'Our Case Studies',
    link: { url: '/case-studies' },
  },
];
