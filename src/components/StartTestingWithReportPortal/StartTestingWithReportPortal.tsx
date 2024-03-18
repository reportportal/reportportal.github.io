import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from '@app/components/Link';
import { createBemBlockBuilder, iconsCommon } from '@app/utils';

import './StartTestingWithReportPortal.scss';

const getBlocksWith = createBemBlockBuilder(['start-testing-with-report-portal']);

export const StartTestingWithReportPortal: FC = () => (
  <section className={classNames(getBlocksWith(), 'container')}>
    <div className={getBlocksWith('__leading')}>
      <div className={getBlocksWith('__leading-heading')}>
        <h2>Start testing with ReportPortal</h2>
        <h3>
          Ready to get the most of ReportPortal features? Start your <b>30-day free trial</b> or get
          in touch with us to learn more about our offer.
        </h3>
      </div>
      <div className={getBlocksWith('__leading-button-group')}>
        <Link
          className="btn btn--primary btn--large"
          to="/contact-us/general"
          data-gtm="start_free_trial"
        >
          Start free trial
        </Link>
        <Link
          className="btn btn--outline btn--large temporary-hide"
          to="/contact-us/general"
          data-gtm="get_a_quote"
        >
          Get a quote
        </Link>
      </div>
    </div>
    <div className={getBlocksWith('__trailing')}>
      <img src={iconsCommon.subscription} alt="" />
    </div>
  </section>
);
