import React from 'react';
import { FormikProvider, useFormik } from 'formik';
import { useBoolean } from 'ahooks';
import isEmpty from 'lodash/isEmpty';
import { Link } from '@app/components';
import { createBemBlockBuilder } from '@app/utils';

import { validate } from './utils';
import { FormFieldWrapper } from './FormFieldWrapper';
import { FeedbackForm } from './FeedbackForm';
import { SalesForceFormBase } from './SalesForceFormBase';
import { FormInput } from './FormInput';
import { CustomCheckbox } from './CustomCheckbox';
import { MAX_LENGTH, CONTACT_US_URL } from './constants';

import ArrowIcon from '../../../svg/arrow.inline.svg';

import '../ContactUsPage.scss';

const getBlocksWith = createBemBlockBuilder(['contact-us-form']);

export const ContactUsForm = ({ title, options, isDiscussFieldShown }) => {
  const [isFeedbackFormVisible, { setTrue: showFeedbackForm }] = useBoolean(false);
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      company: '',
      termsAgree: false,
      ...(isDiscussFieldShown && { discuss: '' }),
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate,
  });
  const { getFieldProps, validateForm, values } = formik;

  const handleSubmit = event => {
    event.preventDefault();

    validateForm().then(errors => {
      if (isEmpty(errors)) {
        fetch(CONTACT_US_URL, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(() => {
            showFeedbackForm();
          })
          .catch(() => {
            showFeedbackForm();
          });
      }
    });
  };

  if (isFeedbackFormVisible) {
    return <FeedbackForm title={title} />;
  }

  return (
    <FormikProvider value={formik}>
      <div className={getBlocksWith('-container')}>
        <form className={getBlocksWith()}>
          <SalesForceFormBase
            additionalFields={options.map(option => (
              <input key={option.name} type="hidden" {...option} />
            ))}
          />
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
            <CustomCheckbox label="Subscribe to ReportPortal news" />
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
          <button
            className="btn btn--primary btn--large"
            type="submit"
            data-gtm="send_request"
            disabled={!getFieldProps('termsAgree').value}
            onClick={handleSubmit}
          >
            Send request
          </button>
        </form>
      </div>
    </FormikProvider>
  );
};
