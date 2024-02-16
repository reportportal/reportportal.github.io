import React, { FC } from 'react';
import { Layout } from '@app/components';
import { QualityEngineeringConsultingPage } from '@app/containers/QualityEngineeringConsultingPage';
import { SEO_DATA } from "@app/utils";

const QualityEngineeringConsulting: FC = () => (
  <Layout seoData={SEO_DATA.qeConsulting}>
    <QualityEngineeringConsultingPage />
  </Layout>
);

export default QualityEngineeringConsulting;
