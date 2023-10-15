import React from 'react';
import { useAtom } from 'jotai';
import classNames from 'classnames';

import { createBemBlockBuilder } from '../../../../../utils';
import { DOCUMENTATION_URL } from '../../../../../utils/constants';

import { watchProductOverviewAtom } from '../../../Layout';
import { Link } from '../../../../Link';
import { ArrowLink } from '../../../../ArrowLink';
import { SectionList } from '../SectionList';
import { PlayIcon } from './icons';
import { GENERAL_LIST, FEATURES_LIST, INTEGRATIONS_LIST } from './constants';

import '../Menu.scss';
import './ProductMenu.scss';

interface Props {
  isDesktop: boolean
  isOpen: boolean
  menuContainerRef: string
}

export const ProductMenu: React.FC<Props> = ({ isDesktop = true, isOpen, menuContainerRef }) => {
  const getBlocksWith = createBemBlockBuilder(['menu-dialog', 'menu-dialog-product']);
  const [, setWatchProductOverviewState] = useAtom(watchProductOverviewAtom);

  const generalList = (
    <SectionList
      className="general-list"
      title="General"
      itemsPerRow={isDesktop ? 1 : 2}
      items={GENERAL_LIST}
    />
  );

  const featuresList = (
    <SectionList
      className="features-list"
      title="Features"
      itemsPerRow={isDesktop ? 3 : 6}
      items={FEATURES_LIST}
    />
  );

  const integrationsList = (
    <SectionList
      className={classNames('section-list--secondary', 'integrations-list')}
      title="Integrations"
      items={INTEGRATIONS_LIST}
    />
  );

  const footer = (
    <div className={getBlocksWith('__footer')}>
      <div className={getBlocksWith('__footer-container')}>
        <div className={getBlocksWith('__btn-group')}>
          <Link
            className={classNames('btn btn--primary', 'temporary-hide')}
            to="/contact-us/general"
            data-gtm="start_free_trial"
          >
            Start free trial
          </Link>
          <Link
            className="btn btn--outline"
            to="/contact-us/general"
            data-gtm="get_a_quote_product"
          >
            Get a quote
          </Link>
        </div>
        <button
          type="button"
          className={getBlocksWith('__btn-text')}
          onClick={() => setWatchProductOverviewState({ isOpen: true })}
        >
          <PlayIcon />
          Watch product overview
        </button>
      </div>
    </div>
  );

  if (!isDesktop) {
    return (
      <div className={getBlocksWith()}>
        {generalList}
        {featuresList}
        <ArrowLink to="/features" text="See all features" />
      </div>
    );
  }

  return (
    <div hidden={!isOpen} ref={menuContainerRef} className={getBlocksWith()}>
      <div className={getBlocksWith('__body-row')}>
        <div className={getBlocksWith('__body-col--lf')}>
          {generalList}
          {featuresList}
          <div>
            <ArrowLink to="/features" text="See all features" />
          </div>
        </div>
        <div
          className={classNames(
            getBlocksWith('__body-col--rt'),
            getBlocksWith('__body-col--flex-column'),
          )}
        >
          {integrationsList}
          <div>
            <ArrowLink to={`${DOCUMENTATION_URL}/category/plugins/`} text="See all integrations" />
          </div>
        </div>
      </div>
      {footer}
    </div>
  );
};
