import React, { FC } from 'react';
import { Link } from '@app/components';

import './StyleMeets.scss';

export const StyleMeets: FC = () => (
  <div className="style-meets">
    <div className="container">
      <div className="style-meets__info">
        <div className="style-meets__title">Style meets QA passion</div>
        <div className="style-meets__description">
          <p>
            Elevate your style with unique merchandise from the ReportPortal Merch Store! Our wide
            range of stylish offerings is the perfect way to show your support and stay connected
            with our network of professionals.
          </p>
          <p>Explore the collection and add a dash of ReportPortal to your wardrobe today!</p>
        </div>
        <Link
          className="btn btn--secondary-2 btn--large style-meets__button"
          to="https://merch.reportportal.io"
        >
          Shop now
        </Link>
      </div>
    </div>
  </div>
);
