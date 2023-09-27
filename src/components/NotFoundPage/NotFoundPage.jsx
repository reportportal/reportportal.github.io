import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { Link } from '../Link';
import ArrowIcon from '../../svg/arrow.inline.svg';
import NotFoundIcon from './svg/not-found.inline.svg';

import './NotFoundPage.scss';

const DOCUMENTATION_URL = process.env.DOCUMENTATION_URL;
const getBlocksWith = createBemBlockBuilder(['not-found-page']);

export const NotFoundPage = () => (
  <div className={getBlocksWith()}>
    <div className={getBlocksWith('__hero')}>
      <div className={classNames(getBlocksWith('__container'), 'container')}>
        <div>
          <NotFoundIcon />
          <h1>Page not found</h1>
          <p className={getBlocksWith('__sub-title')}>
            Sorry, this page doesn&apos;t exist or may have been moved
          </p>
        </div>
        <div>
          <div>
            <p>Here are some helpful options:</p>
            <div className={getBlocksWith('__options')}>
              <p>Check our:</p>
              <Link to={DOCUMENTATION_URL}>
                Documentation
                <ArrowIcon />
              </Link>
              <p>Contact Support:</p>
              <Link to="mailto:support@reportportal.io">support@reportportal.io</Link>
            </div>
          </div>
        </div>
        <Link className="btn btn--large btn--outline-2" to="/">
          Back to Home page
        </Link>
      </div>
    </div>
  </div>
);
