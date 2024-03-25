import React, { FC } from 'react';
import classNames from 'classnames';
import { WhyInstanceBlocks } from '@app/components/WhyInstanceBlocks';
import { createBemBlockBuilder } from '@app/utils';

import { REPORT_PORTAL_INFO } from './constants';

import './WhyReportPortal.scss';

const getBlocksWith = createBemBlockBuilder(['why-report-portal']);

export const WhyReportPortal: FC = () => (
  <section className={classNames(getBlocksWith(), 'container')}>
    <WhyInstanceBlocks title="Why ReportPortal?" explanations={REPORT_PORTAL_INFO} />
  </section>
);
