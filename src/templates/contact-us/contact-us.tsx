import React, { FC } from 'react';
import { Layout } from '@app/components/Layout';
import { ContactUsPage } from '@app/containers/ContactUsPage';

import { DataProps } from './types';

const ContactUs: FC<DataProps> = ({ pageContext: { config } }) => (
  <Layout className="features-page-layout">
    <ContactUsPage config={config} />
  </Layout>
);

export default ContactUs;
