import React from 'react';

import { UnorderedList } from '@components/UnorderedList';
import { Heading } from '@components/Heading';
import RepeatSvg from '@svg/testing/Repeat.svg';

import {
  CLIENT_VERSION_LIST,
  EPAM_EXPERTISE_LIST,
  INPUTS_LIST,
  EXCLUSIVE_REPORT_LIST,
  ANALYSIS_DETAILS_LIST,
  ASSESSMENT_REPORT_LIST,
} from './constants';

import './QualityApproach.scss';

export const QualityApproach = () => (
  <div className="quality-approach">
    <div className="quality-approach__block">
      <div className="quality-approach__block-top block-top">
        <div className="block-top__item">
          <div className="block-top__item-title">Client vision & goal</div>
          <UnorderedList list={CLIENT_VERSION_LIST} />
        </div>
        <div className="block-top__item">
          <div className="block-top__item-title">EPAM expertise</div>
          <UnorderedList list={EPAM_EXPERTISE_LIST} />
        </div>
        <div className="block-top__item block-top__item--unique">
          <div className="block-top__item-title">Inputs</div>
          <UnorderedList list={INPUTS_LIST} />
        </div>
      </div>
      <div className="quality-approach__block-bottom" />
    </div>
    <div className="quality-approach__circle-process">
      <div className="circle-process">
        <div className="circle-process__wrapper">
          <div className="circle-process__item">Process</div>
          <div className="circle-process__item">People</div>
          <div className="circle-process__item">Tools</div>
          <div className="circle-process__item">Infrastructure</div>
        </div>
        <img className="circle-process__image" src={RepeatSvg} alt="repeat" />
      </div>
    </div>
    <div className="quality-approach__deliverables">
      <Heading title="Deliverables" tag="h3" color="white-heading" />
      <div className="deliverables">
        <div className="deliverables__item">
          <div className="deliverables__item-title">Executive report</div>
          <UnorderedList list={EXCLUSIVE_REPORT_LIST} />
        </div>
        <div className="deliverables__item">
          <div className="deliverables__item-title">Hard data analysis details</div>
          <UnorderedList list={ANALYSIS_DETAILS_LIST} />
        </div>
        <div className="deliverables__item">
          <div className="deliverables__item-title">Detailed assessment report</div>
          <UnorderedList list={ASSESSMENT_REPORT_LIST} />
        </div>
      </div>
    </div>
  </div>
);
