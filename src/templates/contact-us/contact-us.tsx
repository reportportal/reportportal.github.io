import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@app/components';
import { ContactUsPage } from '@app/containers/ContactUsPage';
import { SEO_DATA } from "@app/pages/constants";

interface ContextProps {
  config: {
    info: string;
    isDiscussFieldShown: boolean;
    options: string;
    title: string;
  };
}

const ContactUs: FC<PageProps<null, ContextProps>> = ({ pageContext: { config } }) => (
  <Layout seoData={SEO_DATA.contactUsGeneral} className="features-page-layout">
    <ContactUsPage config={config} />
  </Layout>
);

export default ContactUs;
