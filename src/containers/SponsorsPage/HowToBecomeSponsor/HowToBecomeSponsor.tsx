import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from '@app/components/Link';
import { createBemBlockBuilder, DataGTM } from '@app/utils';
import { useScrollIntoViewHandler } from '@app/hooks/useScrollIntoViewHandler';
import ArrowIcon from '@app/svg/arrow.inline.svg';

import { SPONSORS_REPORT_PORTAL_URL } from '../SponsorshipTiers/constants';

import './HowToBecomeSponsor.scss';

interface HowToBecomeSponsorProps {
  contactUsLink: string;
}

const getBlocksWith = createBemBlockBuilder(['how-to-become-sponsor']);
const getStepsItemWith = createBemBlockBuilder(['steps-item']);

export const HowToBecomeSponsor: FC<HowToBecomeSponsorProps> = ({ contactUsLink }) => {
  const scrollIntoViewHandler = useScrollIntoViewHandler();

  return (
    <div className={getBlocksWith()}>
      <div className="container">
        <div className={getBlocksWith('__title')}>How to become a Sponsor</div>
        <div className={getBlocksWith('__steps')}>
          <div className={classNames(getBlocksWith('__steps-item'), getStepsItemWith())}>
            <div className={getStepsItemWith('__title')}>Step 1. Choose your tier</div>
            <div className={getStepsItemWith('__description')}>
              Review the sponsorship tiers above to select the one that aligns with your
              organization&lsquo;s goals or your personal commitment to support.
            </div>
            <div
              className={getStepsItemWith('__anchor')}
              onClick={() => scrollIntoViewHandler('sponsorship-tiers')}
            >
              Review tiers <ArrowIcon />
            </div>
          </div>
          <div className={classNames(getBlocksWith('__steps-item'), getStepsItemWith())}>
            <div className={getStepsItemWith('__title')}>Step 2. Reach out to us</div>
            <div className={getStepsItemWith('__description')}>
              For convenience, you can directly choose and manage your sponsorship through the
              ReportPortal{' '}
              <Link className={getStepsItemWith('__link')} to={SPONSORS_REPORT_PORTAL_URL}>
                GitHub Sponsorship page
                <ArrowIcon />
              </Link>
              . This platform allows both individuals and businesses to make contributions
              seamlessly.
            </div>
            <div className={getStepsItemWith('__description')}>
              If you prefer a more personalized approach or have specific questions, please feel
              free to reach out to us using the{' '}
              <Link
                className={getStepsItemWith('__link')}
                to={contactUsLink}
                data-gtm={DataGTM.ContactUs}
              >
                Contact us
              </Link>{' '}
              form with your chosen tier and any inquiries. We&lsquo;re here to assist you in every
              step of the process.
            </div>
          </div>
          <div className={classNames(getBlocksWith('__steps-item'), getStepsItemWith())}>
            <div className={getStepsItemWith('__title')}>Step 3. Confirmation & Onboarding</div>
            <div className={getStepsItemWith('__description')}>
              Once your sponsorship is confirmed, either through GitHub or direct communication with
              us, we will guide you through the onboarding process. This ensures your benefits are
              activated promptly, and you begin enjoying the advantages of being a ReportPortal
              sponsor without delay.
            </div>
          </div>
          <div className={getStepsItemWith('__buttons')}>
            <Link
              className={classNames('btn', 'btn--primary', 'btn--large')}
              to={SPONSORS_REPORT_PORTAL_URL}
            >
              Go to GitHub page
              <ArrowIcon />
            </Link>
            <Link
              className={classNames('btn', 'btn--outline', 'btn--large')}
              to={contactUsLink}
              data-gtm={DataGTM.ContactUs}
            >
              Contact us directly
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
