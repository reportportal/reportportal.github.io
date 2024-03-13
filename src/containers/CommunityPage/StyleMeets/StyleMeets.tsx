import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from '@app/components/Link';
import { createBemBlockBuilder } from '@app/utils';

import './StyleMeets.scss';

const getBlocksWith = createBemBlockBuilder(['style-meets']);

export const StyleMeets: FC = () => (
  <div className={getBlocksWith()}>
    <div className={classNames(getBlocksWith('__content'), 'container')}>
      <div className={getBlocksWith('__info')}>
        <div className={getBlocksWith('__title')}>Style meets QA passion</div>
        <div className={getBlocksWith('__description')}>
          <p>
            Elevate your style with unique merchandise from the ReportPortal Merch Store! Our wide
            range of stylish offerings is the perfect way to show your support and stay connected
            with our network of professionals.
          </p>
          <p>Explore the collection and add a dash of ReportPortal to your wardrobe today!</p>
        </div>
        <Link
          className={classNames(getBlocksWith('__button'), 'btn btn--secondary-2 btn--large')}
          to="https://merch.reportportal.io"
        >
          Shop now
        </Link>
      </div>
      <div className={getBlocksWith('__images')} />
    </div>
  </div>
);
