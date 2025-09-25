import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from '@app/components/Link';
import { createBemBlockBuilder } from '@app/utils';
import { useMenuList } from '@app/hooks/useMenuList';

import { MenuProps } from '../../constants';
import { SectionList } from '../SectionList';
import { PRICING_CONFIG, SERVICE_LIST } from './constants';

import '../Menu.scss';

export const OfferingsMenu: FC<MenuProps> = ({ isDesktop = true, isOpen, menuContainerRef }) => {
  const { pricing } = useMenuList();

  const getBlocksWith = createBemBlockBuilder(['menu-dialog', 'menu-dialog-offerings']);

  const pricingList = (
    <SectionList className="pricing-list" title="ReportPortal Pricing" items={PRICING_CONFIG} />
  );

  const servicesList = (
    <SectionList className="services-list" title="Services" items={SERVICE_LIST} />
  );

  const pricingForSolutionsList = (
    <SectionList
      className={classNames('pricing-solutions-list', { 'section-list-secondary': isDesktop })}
      title="Pricing for Solutions"
      items={pricing}
    />
  );

  const footer = (
    <div className={classNames(getBlocksWith('__footer'), 'temporary-hide')}>
      <div className={getBlocksWith('__footer-container')}>
        <div className={getBlocksWith('__btn-group')}>
          <Link
            className="btn btn--outline"
            to="/contact-us/general"
            data-gtm="get_a_quote_offerings"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </div>
  );

  if (!isDesktop) {
    return (
      <div className={getBlocksWith()}>
        {pricingList}
        {servicesList}
        {pricingForSolutionsList}
      </div>
    );
  }

  return (
    <div hidden={!isOpen} ref={menuContainerRef} className={getBlocksWith()}>
      <div className={getBlocksWith('__body')}>
        <div className={getBlocksWith('__body-row')}>
          <div className={classNames(getBlocksWith('__body-col--lf'), 'row')}>
            {pricingList}
            {servicesList}
          </div>
          <div className={getBlocksWith('__body-col--rt', '__body-col--flex-column')}>
            {pricingForSolutionsList}
          </div>
        </div>
      </div>
      {footer}
    </div>
  );
};
