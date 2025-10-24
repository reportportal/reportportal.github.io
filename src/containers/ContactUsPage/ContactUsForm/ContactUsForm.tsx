import React, { useState } from 'react';
import { FormikProvider, useFormik } from 'formik';
import { useBoolean } from 'ahooks';
import isEmpty from 'lodash/isEmpty';
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
import { RecaptchaChallenge } from './RecaptchaChallenge';
import { MAX_LENGTH } from './constants';
import ArrowIcon from '../../../svg/arrow.inline.svg';

import '../ContactUsPage.scss';

const getBlocksWith = createBemBlockBuilder(['contact-us-form']);

export const ContactUsForm = ({ title, options, isDiscussFieldShown }) => {
  const [isFeedbackFormVisible, { setTrue: showFeedbackForm }] = useBoolean(false);
  const [isLoading, setIsLoading] = useState(false);
  const [challengeToken, setChallengeToken] = useState<string | null>(null);
  const { executeRecaptcha, recaptchaError, clearError, showChallenge, setShowChallenge } =
    useRecaptcha({
      action: 'contact_us',
      timeout: 10000,
      retryCount: 2,
      retryDelay: 1000,
    });
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      company: '',
      termsAgree: false,
      wouldLikeToReceiveAds: false,
      ...(isDiscussFieldShown && { discuss: '' }),
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate,
    onSubmit: async values => {
      const errors = await validateForm();

      if (!isEmpty(errors)) {
        return;
      }

      try {
        setIsLoading(true);
        clearError();

        const recaptchaToken = challengeToken || (await executeRecaptcha());

        if (recaptchaError) {
          return;
        }

        const baseSalesForceValues = getBaseSalesForceValues(options);
        const postData = {
          ...values,
          ...baseSalesForceValues,
          ...(recaptchaToken && { recaptchaToken }),
        };

        if (values.wouldLikeToReceiveAds) {
          subscribeUser(values.email).catch(console.error);
        }

        const response = await axios.post(CONTACT_US_URL, postData);
        console.log('response', response);

        const responseData =
          typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

        if (responseData.success) {
          showFeedbackForm();
        } else if (
          response.data.reason === 'low_score' ||
          response.data.score < 0.5 ||
          response.data.reason === 'failed_verification'
        ) {
          setChallengeToken(null);
          setShowChallenge(true);
          setIsLoading(false);
        } else {
          console.error('Form submission failed:', responseData);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Form submission error:', error);
        setIsLoading(false);
      }
    },
  });
  const { getFieldProps, validateForm } = formik;

  const handleChallengeSuccess = (token: string) => {
    setChallengeToken(token);
    setShowChallenge(false);
    clearError();
    formik.handleSubmit();
  };

  const handleChallengeError = () => {
    setShowChallenge(false);
    clearError();
  };

  const handleChallengeExpired = () => {
    setChallengeToken(null);
  };

  if (isFeedbackFormVisible) {
    return <FeedbackForm title={title} />;
  }

  return (
    <FormikProvider value={formik}>
      <div className={getBlocksWith('-container')}>
        <form noValidate className={getBlocksWith()} onSubmit={formik.handleSubmit}>
          <FormInput name="first_name" label="First name" placeholder="John" maxLength={40} />
          <FormInput name="last_name" label="Last name" placeholder="Smith" maxLength={80} />
          <FormInput
            name="email"
            label="Email"
            placeholder="name@company.com"
            type="email"
            maxLength={80}
          />
          <FormInput name="company" label="Company name" placeholder="ABC" maxLength={MAX_LENGTH} />
          {isDiscussFieldShown && (
            <FormInput
              name="discuss"
              label="What would you like to discuss?"
              placeholder="Please, share more details"
              InputElement="textarea"
              maxLength={MAX_LENGTH}
            />
          )}
          <FormFieldWrapper name="wouldLikeToReceiveAds">
            <CustomCheckbox label="Subscribe to ReportPortal newsletter" />
          </FormFieldWrapper>
          <FormFieldWrapper name="termsAgree">
            <CustomCheckbox
              label={
                <>
                  I consent to EPAM Systems, Inc. (&quot;EPAM&quot;) processing my personal
                  information as set out in the{' '}
                  <Link to="https://privacy.epam.com/core/interaction/showpolicy?type=PrivacyPolicy">
                    Privacy Policy <ArrowIcon />
                  </Link>
                </>
              }
            />
          </FormFieldWrapper>
          {showChallenge && (
            <div style={{ marginBottom: '16px' }}>
              <p style={{ marginBottom: '12px', fontSize: '14px', color: '#666' }}>
                Please complete the security verification to continue:
              </p>
              <RecaptchaChallenge
                onSuccess={handleChallengeSuccess}
                onError={handleChallengeError}
                onExpired={handleChallengeExpired}
              />
            </div>
          )}
          {recaptchaError && (
            <div className="error-message" style={{ color: '#d32f2f', marginBottom: '16px' }}>
              {recaptchaError}
            </div>
          )}
          <button
            className="btn btn--primary btn--large"
            type="submit"
            data-gtm="send_request"
            disabled={!getFieldProps('termsAgree').value || isLoading}
          >
            Send request
          </button>
        </form>
      </div>
    </FormikProvider>
  );
};
