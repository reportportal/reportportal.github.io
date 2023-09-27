import React from 'react';

import { Layout } from '../../components/Layout';
import { ContactUsPage } from '../../components/ContactUsPage';

const ContactUs = ({ pageContext: { config } }) => {
  return (
    <Layout className="features-page-layout">
      <ContactUsPage config={config} />
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default ContactUs;
