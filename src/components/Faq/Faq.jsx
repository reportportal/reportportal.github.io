import React from 'react';
import { Collapse } from 'antd';
import cx from 'classnames';

import { Link } from '../Link';
import ArrowIcon from '../../svg/arrow.inline.svg';
import { iconsCommon } from '../../utils/imageSource';
import { createBemBlockBuilder } from '../../utils';

import './Faq.scss';

const DOCUMENTATION_URL = process.env.DOCUMENTATION_URL;
const getBlocksWith = createBemBlockBuilder(['faq']);

export const Faq = ({
  items,
  titleId,
  documentationLink = `${DOCUMENTATION_URL}/FAQ/`,
  showMoreInfoLink = true,
}) => {
  return (
    <>
      <div className={cx('container', getBlocksWith())}>
        <div className={getBlocksWith('__heading')}>
          <h1 id={titleId}>Frequently asked questions</h1>
        </div>
        <div className={getBlocksWith('__content')}>
          <Collapse
            items={items}
            defaultActiveKey={['1']}
            size="large"
            expandIconPosition="end"
            expandIcon={({ isActive }) => (
              <img
                className={cx(getBlocksWith('__expandIcon'), {
                  [getBlocksWith('__expandIcon-active')]: isActive,
                })}
                src={iconsCommon.arrowLight}
                alt={isActive ? 'Collapse' : 'Expand'}
              />
            )}
          />
        </div>
        {showMoreInfoLink && (
          <div className={getBlocksWith('__link')}>
            <p>
              More information on the link to our
              <Link className={getBlocksWith('__link-documentation')} to={documentationLink}>
                Documentation
                <ArrowIcon />
              </Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};
