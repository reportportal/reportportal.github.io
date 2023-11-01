import React, { FC } from 'react';
import { Layout } from '@app/components/Layout';
import { ContactUsPage } from '@app/containers/ContactUsPage';

interface ContactUsProps {
  pageContext: {
    config: {
      info: string;
      isDiscussFieldShown: boolean;
      options: string;
      title: string;
    };
  };
}

const ContactUs: FC<ContactUsProps> = ({ pageContext: { config } }) => (
  <Layout className="features-page-layout">
    <ContactUsPage config={config} />
  </Layout>
);

export default ContactUs;
