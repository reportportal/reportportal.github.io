import React, { useEffect, useState } from 'react';
import { FormikProvider, useFormik } from 'formik';
import { useBoolean } from 'ahooks';

import ArrowIcon from '../../../svg/arrow.inline.svg';
import { createBemBlockBuilder } from '../../../utils';
import { Link } from '../../Link';
import { FormInput } from '../FormInput';
import { FormFieldWrapper } from '../FormFieldWrapper';
import { CustomCheckbox } from '../CustomCheckbox';
import { SalesForceFormBase } from '../SalesForceFormBase';
import { FeedbackForm } from '../FeedbackForm';
import { validate } from '../util';

import '../ContactUsPage.scss';

const getBlocksWith = createBemBlockBuilder(['contact-us-form']);
const MAX_LENGTH = 255;

export const ContactUsForm = ({ title, options, isDiscussFieldShown }) => {
  const [isFeedbackFormVisible, { setTrue: showFeedbackForm }] = useBoolean(false);
  const [iframe, setIframe] = useState(null);
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      company: '',
      termsAgree: false,
      ...(isDiscussFieldShown && { discuss: '' }),
    },
    validate,
  });

  const { dirty, isValid, getFieldProps } = formik;
  const iframeName = 'dummyframe';

  useEffect(() => {
    const dummyFrame = document.createElement('iframe');

    dummyFrame.name = iframeName;
    dummyFrame.id = iframeName;
    dummyFrame.style.display = 'none';

    document.body.appendChild(dummyFrame);

    setIframe(dummyFrame);

    return () => dummyFrame.parentNode.removeChild(dummyFrame);
  }, []);

  const handleSubmit = () => {
    iframe.onload = () => showFeedbackForm();
    iframe.onerror = () => showFeedbackForm();
  };

  if (isFeedbackFormVisible) {
    return <FeedbackForm title={title} />;
  }

  return (
    <FormikProvider value={formik}>
      <div className={getBlocksWith('-container')}>
        <form
          className={getBlocksWith()}
          action={process.env.SALESFORCE_URL}
          method="POST"
          target={iframeName}
        >
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
          <FormFieldWrapper name={process.env.SALESFORCE_MARKETING_AGREE_INPUT_NAME}>
            <CustomCheckbox label="Subscribe to ReportPortal news" />
          </FormFieldWrapper>
          <FormFieldWrapper name="termsAgree">
            <CustomCheckbox
              label={
                <>
                  By clicking &quot;Send&quot;, I agree to ReportPortal&apos;s{' '}
                  <Link to="https://privacy.epam.com/core/interaction/showpolicy?type=PrivacyPolicy">
                    Privacy Policy <ArrowIcon />
                  </Link>{' '}
                  and outside of my home jurisdiction.
                </>
              }
            />
          </FormFieldWrapper>
          <button
            className="btn btn--primary btn--large"
            type="submit"
            data-gtm="send_request"
            disabled={!(isValid && dirty && getFieldProps('termsAgree').value)}
            onClick={handleSubmit}
          >
            Send request
          </button>
        </form>
      </div>
    </FormikProvider>
  );
};
