import React from 'react';
import classNames from 'classnames';

import './Heading.scss';

interface Props {
  title: string
  color: string
  tag?: keyof JSX.IntrinsicElements;
}

const headingSize = {
  h2: 'secondary-heading',
  h3: 'third-heading',
};

export const Heading: React.FC<Props> = ({ title, color = 'black-heading', tag: Tag = 'h2' }) => (
  <Tag className={classNames('heading', headingSize[Tag as keyof typeof headingSize], color)}>{title}</Tag>
);
