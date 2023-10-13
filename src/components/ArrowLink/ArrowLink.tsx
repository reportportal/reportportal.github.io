import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '../../utils';

import { Link } from '../Link';
import ArrowIcon from './icons/arrow-icon.inline.svg';

interface Props {
  text: string
  mode: string
}

const getBlocksWith = createBemBlockBuilder(['arrow-link']);

import './ArrowLink.scss';

export const ArrowLink: React.FC<Props> = ({ text, mode, ...rest }) => (
  <Link {...rest} className={classNames(getBlocksWith(), getBlocksWith(`--${mode}`))}>
    {text}
    <ArrowIcon />
  </Link>
);
