import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from '@app/components/Link';
import { TitleBlock } from '@app/components/TitleBlock';
import { createBemBlockBuilder } from '@app/utils';

import './JoinOurCommunity.scss';

const getBlocksWith = createBemBlockBuilder(['join-our-community']);

export const JoinOurCommunity: FC = () => (
  <div className={getBlocksWith()}>
    <TitleBlock
      title="Join our Slack community"
      subtitle="Unlock a world of insights, collaborate, and learn together — join our vibrant Slack
      community of 8700+ members"
    />
    <Link
      className={classNames(getBlocksWith('__button'), 'btn btn--primary btn--large')}
      to="https://slack.epmrpp.reportportal.io"
    >
      Join our Slack
    </Link>
  </div>
);
