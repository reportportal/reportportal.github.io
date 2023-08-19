import React from 'react';
import classNames from 'classnames';

import './Heading.scss';

const headingSize = {
  h2: 'secondary-heading',
  h3: 'third-heading',
};

export const Heading = ({ title, color = 'black-heading', tag: Tag = 'h2' }) => (
  <Tag className={classNames('heading', headingSize[Tag], color)}>{title}</Tag>
);
