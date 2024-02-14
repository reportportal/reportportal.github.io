import React, { FC } from 'react';
import { Layout } from '@app/components';
import { InstallationPage } from '@app/containers/InstallationPage';
import { SEO_DATA } from "@app/utils";

const Installation: FC = () => (
  <Layout seoData={SEO_DATA.installation}>
    <InstallationPage />
  </Layout>
);

export default Installation;
