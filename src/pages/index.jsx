import React from 'react';

import { Layout } from '../components/Layout';
import { LandingPage } from '../components/LandingPage';

const Root = () => {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
};

export function Head() {
  return (
    <>
      <script
        type="text/javascript"
        src="https://cookie-cdn.cookiepro.com/consent/77055ecd-ec2c-461a-bf1c-3e84d715e668/OtAutoBlock.js"
        defer
      />
      <script
        type="text/javascript"
        src="https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js"
        defer
        data-domain-script="77055ecd-ec2c-461a-bf1c-3e84d715e668"
      />
      <script type="text/javascript">{'function OptanonWrapper() {}'}</script>
    </>
  );
}

export default Root;
