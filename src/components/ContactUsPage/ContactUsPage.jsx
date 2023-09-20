import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { TrustedOrganizations } from '../TrustedOrganizations';
import { ContactUsForm } from './ContactUsForm';

import './ContactUsPage.scss';

const getBlocksWith = createBemBlockBuilder(['contact-us']);

export const ContactUsPage = ({ config }) => {
  return (
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
      <div className={cx(getBlocksWith('__content-container'), 'container')}>
        <ContactUsForm
          title={config.title}
          isDiscussFieldShown={config.isDiscussFieldShown}
          options={config.options}
        />
        <div className={cx(getBlocksWith('__trustedOrganizationsContainer'))}>
          <TrustedOrganizations />
        </div>
      </div>
    </div>
  );
};
