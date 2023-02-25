import React from 'react';
import Icon from '@ant-design/icons';
import { Input, Form } from 'antd';
import { useAtom } from 'jotai';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { EnvelopeIcon } from '../NavMenu/icons/Envelope';
import { subscriptionFormAtom } from '../Layout';

import './SubscriptionForm.scss';

export const SubscriptionForm = () => {
  const [subscriptionFormState, setSubscriptionFormState] = useAtom(subscriptionFormAtom);
  const [form] = Form.useForm();
  const getBlocksWith = createBemBlockBuilder(['subscription-form']);

  const handleFinish = () => {
    setSubscriptionFormState((prevState) => ({ ...prevState, isSubmitted: true }));
  };

  if (subscriptionFormState.isSubmitted) {
    return (
      <div className={getBlocksWith('__card')}>
        <span className={getBlocksWith('__card-title')}>Thank you for the request!</span>
        <span className={getBlocksWith('__card-subtitle')}>
          Please check your inbox to confirm the subscription.
        </span>
      </div>
    );
  }

  if (subscriptionFormState.isAlreadySubscribed) {
    return (
      <div className={getBlocksWith('__card')}>
        <span className={getBlocksWith('__card-title')}>Already subscribed!</span>
        <span className={getBlocksWith('__card-subtitle')}>
          You already have a subscription linked to this email address.
        </span>
      </div>
    );
  }

  const validateMessages = {
    required: 'Please use a valid email format',
    pattern: {
      mismatch: 'Please use a valid email format',
    },
  };

  return (
    <Form
      validateMessages={validateMessages}
      form={form}
      onFinish={handleFinish}
      className={cx(getBlocksWith('__form'), getBlocksWith('__form--error'))}
    >
      <div className={getBlocksWith('__form-group')}>
        <Form.Item
          className={getBlocksWith('__form-input')}
          name={['email']}
          rules={[{ required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g }]}
        >
          <Input
            placeholder="Email address"
            prefix={<Icon component={(props) => <Icon component={EnvelopeIcon} {...props} />} />}
          />
        </Form.Item>
      </div>
      <Form.Item shouldUpdate>
        {() => (
          <button
            type="submit"
            className={cx('btn', 'btn--primary')}
            disabled={
              form.isFieldsTouched(true) &&
              form.getFieldsError().some(({ errors }) => Boolean(errors.length))
            }
          >
            Subscribe
          </button>
        )}
      </Form.Item>
      <span className={getBlocksWith('__form-info')}>
        By subscribing, you agree to receive marketing emails from Report Portal team and associated
        partners and accept our{' '}
        <a href="https://privacy.epam.com/core/interaction/showpolicy?type=CommonPrivacyPolicy">
          Privacy Policy
        </a>
      </span>
    </Form>
  );
};
