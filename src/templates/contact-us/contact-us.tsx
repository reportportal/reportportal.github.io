import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@app/components';
import { ContactUsPage } from '@app/containers/ContactUsPage';

interface ContextProps {
  config: {
    info: string;
    isDiscussFieldShown: boolean;
    options: string;
    title: string;
  };
}

const ContactUs: FC<PageProps<null, ContextProps>> = ({ pageContext: { config } }) => (
  <Layout className="features-page-layout">
    <ContactUsPage config={config} />
  </Layout>
);

export default ContactUs;
