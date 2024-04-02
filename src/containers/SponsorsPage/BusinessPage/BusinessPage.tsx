import React, { FC } from 'react';
import { LinkedCardBlock } from '@app/components/LinkedCardBlock';
import { Banner } from '@app/components/Banner';
import { FooterContent } from '@app/components/Layout';

import { WhySponsors } from '../WhySponsors';
import { SponsorshipTiers } from '../SponsorshipTiers';
import { HowToBecomeSponsor } from '../HowToBecomeSponsor';
import { SponsorsHero } from '../SponsorsHero';
import { BUSINESS_CARDS, CONTACT_US_LINK } from './constants';

import './BusinessPage.scss';

export const BusinessPage: FC = () => (
  <div className="business">
    <SponsorsHero />
    <WhySponsors sponsorshipType="business" />
    <LinkedCardBlock
      title="Sponsoring as a Business"
      subtitle="By sponsoring us, businesses not only contribute to the development of high-quality software tools but also enjoy numerous benefits:"
      cardsInfo={BUSINESS_CARDS}
    />
    <SponsorshipTiers sponsorshipType="business" />
    <HowToBecomeSponsor contactUsLink={CONTACT_US_LINK} />
    <FooterContent>
      <Banner
        title="Still have questions about sponsorship?"
        linkTitle="Contact us"
        link={CONTACT_US_LINK}
        dataGtm="contact_us"
      />
    </FooterContent>
  </div>
);
