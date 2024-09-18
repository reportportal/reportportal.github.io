import React, { FC } from 'react';
import { Layout, Seo } from '@app/components/Layout';
import { CommunityPage } from '@app/containers/CommunityPage';
import { SEO_DATA } from '@app/utils';

const Community: FC = () => (
  <Layout>
    <CommunityPage />
  </Layout>
);

export default Community;

export const Head = () => {
  const { title, description } = SEO_DATA.community;

  return <Seo title={title} description={description} />;
};
