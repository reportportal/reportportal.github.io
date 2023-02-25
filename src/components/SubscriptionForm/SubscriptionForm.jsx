import React from 'react';
import { useForm } from 'react-hook-form';

import { createBemBlockBuilder } from '../../utils';

import './SubscriptionForm.scss';
import cx from 'classnames';

export const SubscriptionForm = ({ isSubmitted, isAlreadySubscribed }) => {
  const { register, handleSubmit, formState } = useForm();
  const getBlocksWith = createBemBlockBuilder(['subscription-form']);
  const onSubmit = () => {};

  if (isSubmitted) {
    return (
      <div className={getBlocksWith('__card')}>
        <span className={getBlocksWith('__card-title')}>Thank you for the request!</span>
        <span className={getBlocksWith('__card-subtitle')}>
          Please check your inbox to confirm the subscription.
        </span>
      </div>
    );
  }

  if (isAlreadySubscribed) {
    return (
      <div className={getBlocksWith('__card')}>
        <span className={getBlocksWith('__card-title')}>Already subscribed!</span>
        <span className={getBlocksWith('__card-subtitle')}>
          You already have a subscription linked to this email address.
        </span>
      </div>
    );
  }

  return (
    <form className={getBlocksWith('__form')} onSubmit={handleSubmit(onSubmit)}>
      <div className={getBlocksWith('__form-group')}>
        <input
          className={getBlocksWith('__form-input')}
          {...register('email', { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
        />
        {formState.isSubmitted && formState.errors.email?.type === 'pattern' && (
          <span className={getBlocksWith('__form-error')}>Please use a valid email format</span>
        )}
        <span className={getBlocksWith('__form-info')}>
          By subscribing, you agree to receive marketing emails from Report Portal team and
          associated partners and accept our <a href="https://contentful.com/">Privacy Policy</a>
        </span>
      </div>
      <button
        className={cx('btn', 'btn--primary')}
        disabled={formState.isSubmitted && !formState.isValid}
        type="submit"
      >
        Subscribe
      </button>
    </form>
  );
};
