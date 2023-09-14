import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { Link } from '../Link';
import ArrowIcon from './icons/arrow-icon.inline.svg';

const getBlocksWith = createBemBlockBuilder(['arrow-link']);

import './ArrowLink.scss';

export const ArrowLink = ({ text, mode, ...rest }) => (
  <Link {...rest} className={cx(getBlocksWith(), getBlocksWith(`--${mode}`))}>
    {text}
    <ArrowIcon />
  </Link>
);
