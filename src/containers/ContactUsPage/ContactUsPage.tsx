import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '@utils';
import { TrustedOrganizations } from '@components/TrustedOrganizations';

import { ContactUsForm } from './ContactUsForm';

import './ContactUsPage.scss';

interface Props {
  config: {
    info: string
    isDiscussFieldShown: boolean
    options: string
    title: string
  }
}
const getBlocksWith = createBemBlockBuilder(['contact-us']);

export const ContactUsPage: React.FC<Props> = ({ config }) => (
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
      <div className={classNames(getBlocksWith('__trustedOrganizationsContainer'))}>
        <TrustedOrganizations />
      </div>
    </div>
  </div>
);
