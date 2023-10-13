import React from 'react';
import { Collapse } from 'antd';
import classNames from 'classnames';

import ArrowIcon from '../../svg/arrow.inline.svg';
import { iconsCommon } from '../../utils/imageSource';
import { DOCUMENTATION_URL } from '../../utils/constants';
import { createBemBlockBuilder } from '../../utils';

import { Link } from '../Link';

import './Faq.scss';

interface Props {
  items: {
    key: Number
    label: String
    children: React.ReactNode
  }[]
  titleId?: String
  documentationLink?: String
  showMoreInfoLink: Boolean
}

const getBlocksWith = createBemBlockBuilder(['faq']);

export const Faq: React.FC<Props> = ({
  items,
  titleId,
  documentationLink = `${DOCUMENTATION_URL}/FAQ/`,
  showMoreInfoLink = true,
}) => {
  return (
    <>
      <div className={classNames('container', getBlocksWith())}>
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
                className={classNames(getBlocksWith('__expand-icon'), {
                  [getBlocksWith('__expand-icon--active')]: isActive,
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
