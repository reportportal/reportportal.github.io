import React, { FC } from 'react';
import { Link } from '@app/components';

import { TitleBlock } from '../TitleBlock';

import './JoinOurCommunity.scss';

export const JoinOurCommunity: FC = () => (
  <div className="join-our-community">
    <TitleBlock
      title="Join our Slack community"
      subtitle="Unlock a world of insights, collaborate, and learn together — join our vibrant Slack
      community of 8700+ members"
    />
    <Link
      className="btn btn--primary btn--large join-our-community__button"
      to="https://slack.epmrpp.reportportal.io"
    >
      Join our Slack
    </Link>
  </div>
);
