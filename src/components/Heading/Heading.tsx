import React, { FC } from 'react';
import classNames from 'classnames';

import './Heading.scss';

interface HeadingProps {
  title: string;
  color?: string;
  tag?: keyof JSX.IntrinsicElements;
}

const headingSize = {
  h2: 'secondary-heading',
  h3: 'third-heading',
};

export const Heading: FC<HeadingProps> = ({ title, color = 'black-heading', tag: Tag = 'h2' }) => (
  <Tag className={classNames('heading', headingSize[Tag as keyof typeof headingSize], color)}>
    {title}
  </Tag>
);
