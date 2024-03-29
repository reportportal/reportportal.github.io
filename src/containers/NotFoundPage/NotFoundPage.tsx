import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from '@app/components/Link';
import { createBemBlockBuilder, DOCUMENTATION_URL } from '@app/utils';

import NotFoundIcon from './svg/not-found.inline.svg';

import './NotFoundPage.scss';

const getBlocksWith = createBemBlockBuilder(['not-found-page']);

export const NotFoundPage: FC = () => (
  <div className={getBlocksWith()}>
    <div className={getBlocksWith('__hero')}>
      <div className={classNames(getBlocksWith('__container'), 'container')}>
        <div>
          <NotFoundIcon />
          <h1>Page not found</h1>
          <p className={getBlocksWith('__sub-title')}>
            Sorry, this page doesn&apos;t exist or may have been moved
            <br />
            Here are some helpful options:
          </p>
        </div>
        <div>
          <div>
            <div className={getBlocksWith('__options')}>
              <p>
                Check our <Link to={DOCUMENTATION_URL}>Documentation</Link>
              </p>
              <p>
                Contact <Link to="mailto:support@reportportal.io">Support</Link>
              </p>
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
