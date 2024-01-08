import React, { useState, useEffect, FC } from 'react';
import Icon from '@ant-design/icons';
import { Input, Form } from 'antd';
import classNames from 'classnames';
import { Link } from '@app/components';
import { createBemBlockBuilder } from '@app/utils';

import { EnvelopeIcon } from './icons';
import { SubscriptionFormCard } from './SubscriptionFormCard';

import './SubscriptionForm.scss';

interface SubscriptionFormProps {
  subscriptionFormState: string;
  setSubscriptionFormState: () => void;
}

export const SubscriptionForm: FC<SubscriptionFormProps> = ({
  subscriptionFormState,
  setSubscriptionFormState,
}) => {
  const [form] = Form.useForm();
  const [isValid, setIsValid] = useState(true);
  const email = Form.useWatch('email', form);
  const getBlocksWith = createBemBlockBuilder(['subscription-form']);

  const handleFinish = () => {
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      setIsValid(false);

      return;
    }

    setSubscriptionFormState(prevState => ({ ...prevState, isSubmitted: true }));
  };

  useEffect(() => {
    setIsValid(true);
  }, [email]);

  if (subscriptionFormState.isSubmitted) {
    return (
      <SubscriptionFormCard
        title="Thank you for the request!"
        subtitle="Please check your inbox to confirm the subscription."
      />
    );
  }

  if (subscriptionFormState.isAlreadySubscribed) {
    return (
      <SubscriptionFormCard
        title="Already subscribed!"
        subtitle="You already have a subscription linked to this email address."
      />
    );
  }

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      className={classNames(getBlocksWith('__form'), getBlocksWith('__form--error'))}
    >
      <div className={getBlocksWith('__form-group')}>
        <Form.Item
          validateTrigger="onSubmit"
          className={getBlocksWith('__form-input')}
          name={['email']}
          {...(!isValid && {
            validateStatus: 'error',
            help: 'Please use a valid email format',
          })}
        >
          <Input
            placeholder="Email address"
            prefix={<Icon component={props => <Icon component={EnvelopeIcon} {...props} />} />}
          />
        </Form.Item>
      </div>
      <Form.Item shouldUpdate>
        {() => (
          <button
            type="submit"
            className={classNames('btn', 'btn--primary')}
            disabled={form.isFieldsTouched(true) && !isValid}
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
