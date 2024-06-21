import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@app/components/Layout';
import { ContactUsPage } from '@app/containers/ContactUsPage';
import { ContactUsConfig, SEO_DATA } from '@app/utils';

const CONTACT_US_GENERAL_PATH = '/contact-us/general';

const ContactUs: FC<PageProps<null, ContactUsConfig>> = ({ pageContext: config }) => {
  const noIndex = config?.url !== CONTACT_US_GENERAL_PATH;

  return (
    <Layout seoData={{ noIndex, ...SEO_DATA.contactUsGeneral }} className="features-page-layout">
      <ContactUsPage {...config} />
    </Layout>
  );
};

export default ContactUs;
