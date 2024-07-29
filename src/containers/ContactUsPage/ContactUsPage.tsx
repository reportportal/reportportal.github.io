import React, { FC } from 'react';
import classNames from 'classnames';
import { TrustedOrganizations } from '@app/components/TrustedOrganizations';
import { ContactUsConfig, createBemBlockBuilder } from '@app/utils';

import { ContactUsForm } from './ContactUsForm';
import { ContactUsDetails } from './ContactUsDetails';

import './ContactUsPage.scss';

const getBlocksWith = createBemBlockBuilder(['contact-us']);

export const ContactUsPage: FC<ContactUsConfig> = config => {
  const {
    title,
    price,
    message,
    messagePosition,
    options,
    discount = undefined,
    isDiscussFieldShown = false,
  } = config;

  return (
    <div className={getBlocksWith()}>
      <div className={getBlocksWith('__hero')}>
        <div className="container">
          <h1 className={getBlocksWith('__title')}>{title}</h1>
          <ContactUsDetails
            message={message}
            messagePosition={messagePosition}
            price={price}
            discount={discount}
          />
        </div>
      </div>
      <div className={classNames(getBlocksWith('__content-container'), 'container')}>
        <ContactUsForm title={title} options={options} isDiscussFieldShown={isDiscussFieldShown} />
        <div className={getBlocksWith('__trusted-organizations-container')}>
          <TrustedOrganizations />
        </div>
      </div>
    </div>
  );
};
