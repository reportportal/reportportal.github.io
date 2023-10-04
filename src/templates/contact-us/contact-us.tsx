import React from 'react';

import { Layout } from '@/components/Layout';
import { ContactUsPage } from '@/containers/ContactUsPage';
import { DataProps } from './types'

export const ContactUs = ({ pageContext: { config } }: DataProps) => (
  <Layout className="features-page-layout">
    <ContactUsPage config={config} />
  </Layout>
);
