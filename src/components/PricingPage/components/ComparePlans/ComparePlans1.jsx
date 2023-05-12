import React from 'react';
import { createBemBlockBuilder } from '../../../../utils';
import { useMediaQuery } from 'react-responsive';
import './ComparePlans.scss';
import { $desktopSm } from '../../../../utils/breakpoint';

export const ComparePlans = () => {
  const getCompareContainer = createBemBlockBuilder(['compareContainer']);
  const getCompareTable = createBemBlockBuilder(['compareTable']);
  const isDesktop = useMediaQuery({ query: $desktopSm });

  return (
    <div className={getCompareContainer()}>
      <div className={getCompareContainer('__title')}>Compare plans</div>
      <div className={getCompareContainer('__desktopCols')}>
        <div>Startup</div>
        <div>Business</div>
        <div>Enterprise</div>
      </div>
      {!isDesktop && <div className={getCompareContainer('__description')}>Main functionality</div>}
      <div className={getCompareTable()}>
        <div className={getCompareTable('__row')}>
          <div className={getCompareTable('__title')}>Instance type</div>
          <div className={getCompareTable('__collapsedSection')}>
            <div className={getCompareTable('__rowDescription')}>
              <p>
                Shared instance is used by more than one tenant/client. Tenants access is restricted
                to the project space owned by them. Cost-effective option.
              </p>
              <p>
                Dedicated instance is hosted for one tenant/client only. No shared database and
                infrastructure — better for data isolation, availability, security and company-based
                company-based authorization.
              </p>
            </div>
            <div className={getCompareTable('__compareData')}>
              <div>
                {!isDesktop && <div className={getCompareTable('__mobile')}>Startup</div>}
                <div className={getCompareTable('__info')}>Shared</div>
              </div>
              <div>
                {!isDesktop && <div className={getCompareTable('__mobile')}>Business</div>}
                <div className={getCompareTable('__info')}>Individual</div>
              </div>
              <div>
                {!isDesktop && <div className={getCompareTable('__mobile')}>Enterprise</div>}
                <div className={getCompareTable('__info')}>Individual</div>
              </div>
            </div>
          </div>
        </div>
        <div className={getCompareTable('__row')}>
          <div className={getCompareTable('__title')}>Data storage</div>
          <div className={getCompareTable('__collapsedSection')}>
            <div className={getCompareTable('__rowDescription')}>
              <p>
                Shared instance is used by more than one tenant/client. Tenants access is restricted
                to the project space owned by them. Cost-effective option.
              </p>
              <p>
                Dedicated instance is hosted for one tenant/client only. No shared database and
                infrastructure — better for data isolation, availability, security and company-based
                company-based authorization.
              </p>
            </div>
            <div className={getCompareTable('__compareData')}>
              <div>
                {!isDesktop && <div className={getCompareTable('__mobile')}>Startup</div>}
                <div className={getCompareTable('__info')}>100 Gb.</div>
              </div>
              <div>
                {!isDesktop && <div className={getCompareTable('__mobile')}>Business</div>}
                <div className={getCompareTable('__info')}>1 Tb.</div>
              </div>
              <div>
                {!isDesktop && <div className={getCompareTable('__mobile')}>Enterprise</div>}
                <div className={getCompareTable('__info')}>Extended storage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
