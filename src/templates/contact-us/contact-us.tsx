import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { useLocation } from '@reach/router';
import { Layout } from '@app/components';
import { ContactUsPage } from '@app/containers/ContactUsPage';
import { SEO_DATA } from "@app/utils";

const CONTACT_US_GENERAL_PATH = '/contact-us/general';

interface ContextProps {
  config: {
    info: string;
    isDiscussFieldShown: boolean;
    options: string;
    title: string;
  };
}

const ContactUs: FC<PageProps<null, ContextProps>> = ({ pageContext: { config } }) => {
  const location = useLocation();
  const noindex = location.pathname !== CONTACT_US_GENERAL_PATH;

  return (
    <Layout seoData={{ noindex: noindex, ...SEO_DATA.contactUsGeneral }} className="features-page-layout">
      <ContactUsPage config={config} />
    </Layout>
  );
}

export default ContactUs;
