import React, { FC } from 'react';
import classNames from 'classnames';
import { createBemBlockBuilder } from '@app/utils';

import { Link, LinkProps } from '../Link';
import ArrowIcon from './icons/arrow-icon.inline.svg';

interface ArrowLinkProps extends Omit<LinkProps, 'children'> {
  text: string;
  mode?: 'primary';
}

const getBlocksWith = createBemBlockBuilder(['arrow-link']);

import './ArrowLink.scss';

export const ArrowLink: FC<ArrowLinkProps> = ({ text, mode, ...rest }) => (
  <Link
    {...rest}
    className={classNames(getBlocksWith(), { [getBlocksWith(`--${mode}`)]: Boolean(mode) })}
  >
    {text}
    <ArrowIcon />
  </Link>
);
