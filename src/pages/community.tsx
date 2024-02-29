import React, { FC } from 'react';
import { Layout } from '@app/components';
import { CommunityPage } from '@app/containers/CommunityPage';
import { SEO_DATA } from '@app/utils';

const Community: FC = () => (
  <Layout seoData={SEO_DATA.community}>
    <CommunityPage />
  </Layout>
);

export default Community;
