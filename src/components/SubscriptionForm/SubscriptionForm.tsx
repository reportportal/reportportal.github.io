import React, { useState, useEffect, FC } from 'react';
import jsonp from 'jsonp';
import Icon from '@ant-design/icons';
import { Input, Form } from 'antd';
import classNames from 'classnames';
import { Link } from '@app/components/Link';
import { createBemBlockBuilder, EMAIL_VALIDATION_REGEX } from '@app/utils';

import { EnvelopeIcon } from './icons';
import { SubscriptionFormCard } from './SubscriptionFormCard';

import './SubscriptionForm.scss';

interface SubscriptionFormProps {
  subscriptionFormState: {
    isSubmitted: boolean;
    isAlreadySubscribed: boolean;
  };
  setSubscriptionFormState: () => void;
}
const getBlocksWith = createBemBlockBuilder(['subscription-form']);
const alreadySubscribedStatusMessage =
  "You're already subscribed, your profile has been updated. Thank you!";
const thankYouStatusMessage = 'Thank you for subscribing!';

export const SubscriptionForm: FC = () => {
  const [form] = Form.useForm();
  const [validation, setValidation] = useState<{
    isValid: boolean;
    message?: string;
  }>({
    isValid: true,
  });
  const [responseMessage, setResponseMessage] = useState<string>();
  const email = Form.useWatch('email', form);

  const subscribeUser = (emailToSubscribe: string) => {
    jsonp(
      `${process.env.GATSBY_MAILCHIMP_URL}&MERGE0=${emailToSubscribe}`,
      { param: 'c' },
      (error, data) => {
        const { msg, result } = data;

        setResponseMessage(msg);

        if (result === 'error') {
          setValidation({
            isValid: false,
            message:
              'This email cannot be added to the list. Please enter a different email address.',
          });
        }
      },
    );
  };

  const handleFinish = () => {
    const isLengthValid = email?.length <= 128;
    const isFormatValid = EMAIL_VALIDATION_REGEX.test(email);

    if (!email || !isFormatValid || !isLengthValid) {
      setValidation({
        isValid: false,
        message: 'Please use a valid email format',
      });

      return;
    }

    subscribeUser(email);
  };

  useEffect(() => {
    setValidation({
      isValid: true,
    });
  }, [email]);

  if (responseMessage === thankYouStatusMessage) {
    return <SubscriptionFormCard title="Thank you for subscription!" />;
  }

  if (responseMessage === alreadySubscribedStatusMessage) {
    return (
      <SubscriptionFormCard
        title="Already subscribed!"
        subtitle="You already have a subscription linked to this email address."
      />
    );
  }

  return (
    <Form form={form} onFinish={handleFinish} className={getBlocksWith('__form', '__form--error')}>
      <div className={getBlocksWith('__form-group')}>
        <Form.Item
          validateTrigger="onSubmit"
          className={getBlocksWith('__form-input')}
          name={['email']}
          {...(!validation.isValid && {
            validateStatus: 'error',
            help: validation.message,
          })}
        >
          <Input
            placeholder="Email address"
            prefix={
              <Icon component={(props: object) => <Icon component={EnvelopeIcon} {...props} />} />
            }
          />
        </Form.Item>
      </div>
      <Form.Item shouldUpdate>
        {() => (
          <button
            type="submit"
            className="btn btn--primary"
            disabled={form.isFieldsTouched(true) && !validation.isValid}
          >
            Subscribe
          </button>
        )}
      </Form.Item>
      <span className={getBlocksWith('__form-info')}>
        By subscribing, you agree to receive marketing emails from ReportPortal team and associated
        partners and accept our{' '}
        <Link to="https://privacy.epam.com/core/interaction/showpolicy?type=PrivacyPolicy">
          Privacy Policy
        </Link>
      </span>
    </Form>
  );
};
