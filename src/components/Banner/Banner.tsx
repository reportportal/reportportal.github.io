import React, { FC } from 'react';
import { Link } from '@app/components/Link';
import { createBemBlockBuilder } from '@app/utils';

import './Banner.scss';

const getBlocksWith = createBemBlockBuilder(['banner']);

interface BannerProps {
  title: string;
  link?: string;
  linkTitle?: string;
  subtitle?: string;
  dataGtm?: string;
  children?: React.JSX.Element;
}

export const Banner: FC<BannerProps> = ({
  title,
  subtitle,
  link,
  linkTitle,
  dataGtm,
  children,
}) => (
  <div className={getBlocksWith()}>
    <div className={getBlocksWith('__wrapper')}>
      <div className={getBlocksWith('__inner')}>
        <div className={getBlocksWith('__titles')}>
          <div className={getBlocksWith('__title')}>{title}</div>
          {subtitle && <div className={getBlocksWith('__subtitle')}>{subtitle}</div>}
        </div>
        {link && (
          <div className={getBlocksWith('__btn-wrapper')}>
            <Link
              className="btn btn--primary btn--large"
              to={link}
              {...(dataGtm && { 'data-gtm': dataGtm })}
            >
              {linkTitle}
            </Link>
          </div>
        )}
        {children}
      </div>
    </div>
  </div>
);
