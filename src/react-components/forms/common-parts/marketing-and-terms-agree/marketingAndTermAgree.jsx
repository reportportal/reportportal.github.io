/*
 * Copyright 2022 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import CustomCheckbox from 'react-components/common/custom-checkbox/customCheckbox.jsx';
import FormFieldWrapper from 'react-components/forms/form-field-wrapper/formFieldWrapper.jsx';
import styles from './marketingAndTermsAgree.scss';

const cx = classNames.bind(styles);

const MarketingAndTermsAgree = ({
  className,
  termsAgree,
  onTermsAgreeChange,
}) => {

  const onTermsAgree = (e) => {
    onTermsAgreeChange(e.target.checked);
  };

  return (
    <div className={className}>
      <div className={cx('terms-of-use')}>
        <CustomCheckbox
          className={cx('term-checkbox')}
          value={termsAgree}
          onChange={onTermsAgree}
        />
        <div className={cx('term-description')}>
          I consent to EPAM Systems, Inc. ("EPAM") processing my personal information as set out in the
          <a target="_blank" href='https://privacy.epam.com/core/interaction/showpolicy?type=CommonPrivacyPolicy' rel='noreferrer'> Privacy Policy </a>
          and
          <a target="_blank" href='https://privacy.epam.com/core/interaction/showpolicy?type=CommonCookiePolicy' rel='noreferrer'> Cookie Policy </a>
          and outside of my home jurisdiction.<span className={cx('red')}>*</span>
        </div>
      </div>
      <div className={cx('marketing')}>
        <FormFieldWrapper name='00N7T000000i00E'>
          <CustomCheckbox
            className={cx('marketing-checkbox')}
          />
        </FormFieldWrapper>
        <div className={cx('marketing-description')}>
          I would like to receive updates by email on Reportportal.io news, product releases, support advertising and marketing notes.
        </div>
      </div>
    </div>
  );
}
MarketingAndTermsAgree.propTypes = {
  className: PropTypes.string,
  termsAgree: PropTypes.bool,
  onTermsAgreeChange: PropTypes.func,
};
MarketingAndTermsAgree.defaultProps = {
  className: '',
  termsAgree: false,
  onTermsAgreeChange: () => null,
};

export default MarketingAndTermsAgree;
