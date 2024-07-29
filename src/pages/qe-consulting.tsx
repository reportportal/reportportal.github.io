import React, { FC } from 'react';
import { Layout, Seo } from '@app/components/Layout';
import { QualityEngineeringConsultingPage } from '@app/containers/QualityEngineeringConsultingPage';
import { SEO_DATA } from '@app/utils';

const QualityEngineeringConsulting: FC = () => (
  <Layout>
    <QualityEngineeringConsultingPage />
  </Layout>
);

export default QualityEngineeringConsulting;

export const Head = () => {
  const { title, description } = SEO_DATA.qeConsulting;

  return <Seo title={title} description={description} />;
};
