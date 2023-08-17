import React from 'react';
import classNames from 'classnames';

import './Heading.scss';

const headingSize = {
  h2: 'secondary-heading',
  h3: 'third-heading',
};

export const Heading = ({ title, color, tag: Tag }) => (
  <Tag className={classNames('heading', headingSize[Tag], color)}>{title}</Tag>
);

Heading.defaultProps = {
  tag: 'h2',
  color: 'black-heading',
};
