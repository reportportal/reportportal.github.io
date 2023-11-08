import React, { FC } from 'react';
import classNames from 'classnames';
import { TrustedOrganizations } from '@app/components';
import { createBemBlockBuilder } from '@app/utils';

import { ContactUsForm } from './ContactUsForm';

import './ContactUsPage.scss';

interface ContactUsPageProps {
  config: {
    info: string;
    isDiscussFieldShown: boolean;
    options: string;
    title: string;
  };
}
const getBlocksWith = createBemBlockBuilder(['contact-us']);

export const ContactUsPage: FC<ContactUsPageProps> = ({ config }) => (
  <div className={getBlocksWith()}>
    <div className={getBlocksWith('__hero')}>
      <div className="container">
        <h1 className={getBlocksWith('__title')}>{config.title}</h1>
        <div
          className={getBlocksWith('__details')}
          dangerouslySetInnerHTML={{ __html: config.info }}
        />
      </div>
    </div>
    <div className={classNames(getBlocksWith('__content-container'), 'container')}>
      <ContactUsForm
        title={config.title}
        isDiscussFieldShown={config.isDiscussFieldShown}
        options={config.options}
      />
      <div className={classNames(getBlocksWith('__trusted-organizations-container'))}>
        <TrustedOrganizations />
      </div>
    </div>
  </div>
);
