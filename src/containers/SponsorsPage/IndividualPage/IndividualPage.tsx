import React, { FC } from 'react';
import { LinkedCardBlock } from '@app/components/LinkedCardBlock';
import { HowToBecomeSponsor } from '@app/containers/SponsorsPage/HowToBecomeSponsor';
import { FooterContent } from '@app/components/Layout';
import { Banner } from '@app/components/Banner';

import { WhySponsors } from '../WhySponsors';
import { SponsorshipTiers } from '../SponsorshipTiers';
import { SponsorsHero } from '../SponsorsHero';
import { INDIVIDUAL_CARDS } from './constants';

export const IndividualPage: FC = () => (
  <div className="individual">
    <SponsorsHero />
    <WhySponsors sponsorKind="individual" />
    <LinkedCardBlock
      title="Sponsoring as an Individual"
      subtitle="By sponsoring ReportPortal, individuals can make a significant impact, helping to ensure the project's longevity and success."
      cardsInfo={INDIVIDUAL_CARDS}
    />
    <SponsorshipTiers sponsorshipType="individual" />
    <HowToBecomeSponsor />
    <FooterContent>
      <Banner
        title="Still have questions about sponsorship?"
        linkTitle="Contact us"
        link="/contact-us/sponsorship"
      />
    </FooterContent>
  </div>
);
