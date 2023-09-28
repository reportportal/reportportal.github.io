import React from 'react';

import { AnimatedList } from '@components/AnimatedList';
import { Link } from '@components/Link';

import { BENEFITS_FOR_BUSINESS_LIST } from './constants';

export const BenefitsForBusiness = () => (
  <AnimatedList
    title="Benefits for business"
    subtitle="Features full of benefits from business perspective"
    data={BENEFITS_FOR_BUSINESS_LIST}
  >
    <Link
      className="btn btn--primary btn--large temporary-hide"
      to="/contact-us/general"
      data-gtm="start_free_trial"
    >
      Start free trial
    </Link>
    <Link className="btn btn--outline btn--large" to="/contact-us/general" data-gtm="get_a_quote">
      Get a quote
    </Link>
  </AnimatedList>
);
