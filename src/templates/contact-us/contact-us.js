import React from 'react';

import { Layout } from '@components/Layout';
import { ContactUsPage } from '@containers/ContactUsPage';

const ContactUs = ({ pageContext: { config } }) => (
  <Layout className="features-page-layout">
    <ContactUsPage config={config} />
  </Layout>
);

// eslint-disable-next-line import/no-default-export
export default ContactUs;
