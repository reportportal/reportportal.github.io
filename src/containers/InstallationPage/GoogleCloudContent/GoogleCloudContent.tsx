import React, { FC } from 'react';
import { Link } from '@app/components/Link';
import { createBemBlockBuilder } from '@app/utils';

import { Notice } from '../Notice';

import '../InstallationPage.scss';

export const GoogleCloudContent: FC = () => {
  const getBlocksWith = createBemBlockBuilder(['installation']);

  return (
    <div className={getBlocksWith('__wrapper')}>
      <div className={getBlocksWith('__chapter')}>Step 1</div>
      <h3 className={getBlocksWith('__title-content')}>
        Configure and deploy ReportPortal on Google Cloud Marketplace
      </h3>
      <p>
        Starting from December 2023, the ReportPortal application is available in the Google Cloud
        Marketplace.
      </p>
      <Notice title="PRECONDITION">
        Please create a{' '}
        <Link
          className={getBlocksWith('__link')}
          to="https://cloud.google.com/billing/docs/how-to/create-billing-account"
        >
          Cloud Billing account
        </Link>{' '}
        before proceeding with the deployment
      </Notice>
      <p>
        1.{' '}
        <Link
          className={getBlocksWith('__link')}
          to="https://console.cloud.google.com/marketplace/product/epam-mp-rp/reportportal?project=epam-mp-rp"
        >
          Open ReportPortal
        </Link>{' '}
        at Google Cloud Marketplace and press <b>&apos;Get Started&apos;</b>.
      </p>
      <p>
        2. Choose an existing Project from the dropdown menu, or create a new one. Once selected,
        click <b>&apos;Agree&apos;</b>.
      </p>
      <p>
        3. If not completed already, set up your billing account for the chosen project. Click on
        the <b>&apos;Deploy&apos;</b> button to proceed.
      </p>
      <p>
        4. Ensure the Kubernetes Engine API is enabled. If it&apos;s not, press{' '}
        <b>&apos;Enable&apos;</b> on the appeared page to proceed.
      </p>
      <p>
        5. Fill up the mandatory fields and <b>create a new cluster</b> on the &apos;Click to deploy
        on GKE&apos; tab.
      </p>
      <Notice>
        By default, we create a three-node cluster, which reduces to one after installation, but can
        be expanded to five based on project needs.
      </Notice>
      <p>Once complete, start deploying.</p>
    </div>
  );
};
