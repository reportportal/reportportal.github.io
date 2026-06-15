import React, { useEffect, useState } from 'react';
import { FormikProvider, useFormik } from 'formik';
import { useBoolean } from 'ahooks';
import isEmpty from 'lodash/isEmpty';
import { Select } from 'antd';
import { Link } from '@app/components/Link';
import { subscribeUser } from '@app/components/SubscriptionForm/utils';
import { createBemBlockBuilder, CONTACT_US_URL } from '@app/utils';
import { useRecaptcha } from '@app/hooks/useRecaptcha';
import axios from 'axios';

import { validate, getBaseSalesForceValues } from './utils';
import { FormFieldWrapper } from './FormFieldWrapper';
import { FeedbackForm } from './FeedbackForm';
import { FormInput } from './FormInput';
import { CustomCheckbox } from './CustomCheckbox';
import { MAX_LENGTH, REASON_OPTIONS, REASON_SALESFORCE_FIELD, ReasonValue } from './constants';
import ArrowIcon from '../../../svg/arrow.inline.svg';

import '../ContactUsPage.scss';

const getBlocksWith = createBemBlockBuilder(['contact-us-form']);

export const ContactUsForm = ({ title, options, isDiscussFieldShown }) => {
  const [isFeedbackFormVisible, { setTrue: showFeedbackForm }] = useBoolean(false);
  const [isLoading, setIsLoading] = useState(false);
  const [customError, setCustomError] = useState<string | null>(null);
  const { executeRecaptcha, recaptchaError, clearError } = useRecaptcha();

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      company: '',
      reason: '' as ReasonValue | '',
      reason_other: '',
      termsAgree: false,
      wouldLikeToReceiveAds: false,
      ...(isDiscussFieldShown && { discuss: '' }),
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate,
    onSubmit: async values => {
      if (isLoading) {
        return;
      }

      const errors = await validateForm();

      if (!isEmpty(errors)) {
        return;
      }

      try {
        setIsLoading(true);
        clearError();
        setCustomError(null);

        const contactRecaptchaToken = await executeRecaptcha();
        if (!contactRecaptchaToken || recaptchaError) {
          return;
        }

        const reasonLabel =
          values.reason === 'other'
            ? values.reason_other
            : REASON_OPTIONS.find(o => o.value === values.reason)?.label ?? '';

        const baseSalesForceValues = getBaseSalesForceValues(options);
        const postData = {
          ...baseSalesForceValues,
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          company: values.company,
          termsAgree: values.termsAgree,
          wouldLikeToReceiveAds: values.wouldLikeToReceiveAds,
          ...(isDiscussFieldShown && { discuss: values.discuss }),
          // TODO: replace REASON_SALESFORCE_FIELD with the real Salesforce field name
          [REASON_SALESFORCE_FIELD]: reasonLabel,
        };

        if (values.wouldLikeToReceiveAds) {
          const subscribeRecaptchaToken = await executeRecaptcha();
          if (subscribeRecaptchaToken) {
            subscribeUser(values.email, subscribeRecaptchaToken).catch(console.error);
          }
        }

        const headers = {
          'Content-Type': 'application/json',
          'RP-Recaptcha-Action': 'contact_us',
          ...(contactRecaptchaToken && { 'RP-Recaptcha-Token': contactRecaptchaToken }),
        };

        const response = await axios.post(CONTACT_US_URL, postData, { headers });

        let responseData = response.data;
        if (typeof responseData === 'string') {
          responseData = JSON.parse(responseData);
        }

        if (responseData.success) {
          showFeedbackForm();
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        setCustomError('Request failed. Please try again.');
        setIsLoading(false);
      }
    },
  });

  const { getFieldProps, validateForm, setFieldValue, values } = formik;

  // Pre-fill reason from URL param: ?reason=demo
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const urlReason = params.get('reason') as ReasonValue | null;
    if (urlReason && REASON_OPTIONS.some(o => o.value === urlReason)) {
      setFieldValue('reason', urlReason);
    }
  }, [setFieldValue]);

  if (isFeedbackFormVisible) {
    return <FeedbackForm title={title} />;
  }

  return (
    <FormikProvider value={formik}>
      <div className={getBlocksWith('-container')}>
        <form noValidate className={getBlocksWith()} onSubmit={formik.handleSubmit}>
          <p className={getBlocksWith('__title')}>Contact form</p>

          {/* Purpose of inquiry — primary field, comes first */}
          <div className={getBlocksWith('__select-field')}>
            <label className={getBlocksWith('__select-label')} htmlFor="reason-select">
              I&apos;m interested in <span className={getBlocksWith('__required')}>*</span>
            </label>
            <Select
              id="reason-select"
              className={getBlocksWith('__select')}
              value={values.reason || undefined}
              placeholder="Choose your inquiry type"
              suffixIcon={
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6.5L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              onChange={(value: ReasonValue) => {
                setFieldValue('reason', value);
              }}
              options={REASON_OPTIONS.map(({ label, value }) => ({ label, value }))}
            />
          </div>

          <div className={getBlocksWith('__name-row')}>
            <FormInput
              name="first_name"
              label={<>First name <span className={getBlocksWith('__required')}>*</span></>}
              placeholder="Jane"
              maxLength={80}
            />
            <FormInput
              name="last_name"
              label={<>Last name <span className={getBlocksWith('__required')}>*</span></>}
              placeholder="Doe"
              maxLength={80}
            />
          </div>
          <FormInput
            name="email"
            label={<>Email <span className={getBlocksWith('__required')}>*</span></>}
            placeholder="jane@mail.com"
            type="email"
            maxLength={80}
          />
          <FormInput
            name="company"
            label="Company name"
            placeholder="Acme Inc"
            maxLength={MAX_LENGTH}
          />

          <FormInput
            name="reason_other"
            label="Tell us more"
            placeholder="Provide a brief summary of your request"
            InputElement="textarea"
            maxLength={MAX_LENGTH}
          />

          {isDiscussFieldShown && (
            <FormInput
              name="discuss"
              label="What would you like to discuss?"
              placeholder="Please, share more details"
              InputElement="textarea"
              maxLength={MAX_LENGTH}
            />
          )}
          <FormFieldWrapper name="termsAgree">
            <CustomCheckbox
              label={
                <>
                  I consent to EPAM Systems, Inc. (&quot;EPAM&quot;) processing my personal
                  information as set out in the{' '}
                  <Link to="https://privacy.epam.com/core/interaction/showpolicy?type=PrivacyPolicy">
                    Privacy Policy <ArrowIcon />
                  </Link>{' '}
                  <span className={getBlocksWith('__required')}>*</span>
                </>
              }
            />
          </FormFieldWrapper>
          <FormFieldWrapper name="wouldLikeToReceiveAds">
            <CustomCheckbox label="Subscribe to ReportPortal newsletter" />
          </FormFieldWrapper>
          {(recaptchaError || customError) && (
            <div className="recaptcha-error">{recaptchaError || customError}</div>
          )}
          <button
            className="btn btn--primary btn--large"
            type="submit"
            data-gtm="send_request"
            disabled={!getFieldProps('termsAgree').value || isLoading}
          >
            {isLoading ? 'Sending...' : 'Send request'}
          </button>
          {!getFieldProps('termsAgree').value && !isLoading && (
            <p className={getBlocksWith('__submit-hint')}>
              Complete required fields (*) and check consent box to submit
            </p>
          )}
        </form>
      </div>
    </FormikProvider>
  );
};
