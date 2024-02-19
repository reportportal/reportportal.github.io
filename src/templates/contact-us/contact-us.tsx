import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@app/components';
import { ContactUsPage } from '@app/containers/ContactUsPage';
import { SEO_DATA } from '@app/utils';

const CONTACT_US_GENERAL_PATH = '/contact-us/general';

interface ContextProps {
  config: {
    info: string;
    isDiscussFieldShown: boolean;
    options: string;
    title: string;
    url: string;
  };
}

const ContactUs: FC<PageProps<null, ContextProps>> = ({ pageContext: { config } }) => {
  const noIndex = config?.url !== CONTACT_US_GENERAL_PATH;

  return (
    <Layout seoData={{ noIndex, ...SEO_DATA.contactUsGeneral }} className="features-page-layout">
      <ContactUsPage config={config} />
    </Layout>
  );
};

export default ContactUs;
