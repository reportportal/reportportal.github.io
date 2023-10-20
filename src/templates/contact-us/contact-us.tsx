import React from 'react';

import { Layout } from '@app/components/Layout';
import { ContactUsPage } from '@app/containers/ContactUsPage';

import { DataProps } from './types';

const ContactUs = ({ pageContext: { config } }: DataProps) => (
  <Layout className="features-page-layout">
    <ContactUsPage config={config} />
  </Layout>
);

export default ContactUs;
