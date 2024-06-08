import React, { FC } from 'react';
import classNames from 'classnames';
import { createBemBlockBuilder, FormattedComparePlansDto, OfferingPlansDto } from '@app/utils';
import { usePricingHeroProps } from '@app/hooks/usePricingHeroProps';
import { FooterContent } from '@app/components/Layout';
import { TrustedOrganizations } from '@app/components/TrustedOrganizations';
import { Banner } from '@app/components/Banner';
import { Link } from '@app/components/Link';
import { PricingHero } from '@app/components/PricingHero';
import { ComparePlans } from '@app/components/ComparePlans';
import { Faq } from '@app/components/Faq';
import InfoIcon from '@app/svg/infoIcon.inline.svg';

import { TimeScale } from './TimeScale';
import { PentagonCard } from './PentagonCard';

import './OfferPageWrapper.scss';

interface OfferPageWrapperProps {
  hero: {
    title: string;
    subtitle?: string;
    description: string;
    offerType: string;
  };
  page: string;
  pagePath: 'on-premises' | 'd4j' | 'qasp' | 'hlm';
  timeScaleData: {
    time: number | string;
    items: string[] | React.ReactNode[];
  }[];
  plans: OfferingPlansDto;
  comparePlans: FormattedComparePlansDto;
  faqData: {
    key: number;
    label: string;
    children: React.ReactNode;
  }[];
  contactUsLink: string;
  utilizationDescription: string;
  faqLink?: string;
  isScaleShifted?: boolean;
  isAccelerator?: boolean;
}

const getBlocksWith = createBemBlockBuilder(['offer-page-wrapper']);

export const OfferPageWrapper: FC<OfferPageWrapperProps> = ({
  hero: { title, subtitle, description, offerType },
  page,
  pagePath,
  timeScaleData,
  plans,
  comparePlans,
  faqData,
  contactUsLink,
  utilizationDescription,
  faqLink,
  isScaleShifted = false,
  isAccelerator = false,
}) => {
  const { buttons, isDiscount, toggleDiscount } = usePricingHeroProps(page);

  const discount = isDiscount ? 'yearly' : 'quarterly';

  return (
    <>
      <PricingHero
        title={title}
        subtitle={subtitle}
        buttons={buttons}
        activeButton={offerType}
        offerType={offerType}
        description={description}
        switcherProps={{
          isDiscount,
          toggleDiscount,
          messageInactive: 'Quarterly',
          messageActive: 'Yearly (Save 5%)',
        }}
      />
      <div className={getBlocksWith('__pentagons')}>
        {plans.items.map((plan, index) => {
          const pricingValue = plan.price?.[discount];
          const href = plan.cta.link.url;
          const actionLink = !isAccelerator && pricingValue ? `${href}/${discount}` : href;

          return (
            <PentagonCard
              key={plan.title}
              title={plan.title}
              description={plan.description}
              pricingInfo={plan.pricingInfo}
              priceValue={plan.price?.[discount]}
              currency={plan.price?.currency as string}
              period={plan.price?.period as string}
              progressNumber={index + 1}
              actionText={plan.cta.link.title}
              contactLink={actionLink}
              actionVariant={plan.cta.type}
            />
          );
        })}
      </div>
      <div className={getBlocksWith('__utilization')}>
        <h2>Indicative Professional Service Point utilization</h2>
        <div className={getBlocksWith('__utilization-subtitle')}>{utilizationDescription}</div>
        <TimeScale data={timeScaleData} isShifted={isScaleShifted} />
        <div className={getBlocksWith('__subscription-info')}>
          <InfoIcon />
          <div>
            Subscription plan Professional Service Points are accumulated monthly and last depending
            on the plan selected.
            <Link to="#faq">More details in FAQ</Link>
          </div>
        </div>
      </div>
      <ComparePlans plans={comparePlans} isCollapsibleOnMobile={false} />
      {page === 'pricing' && (
        <div
          className={classNames(getBlocksWith('__trusted-organizations-container'), 'container')}
        >
          <TrustedOrganizations />
        </div>
      )}
      <div className={getBlocksWith('__faq-container')}>
        <Faq
          items={faqData}
          titleId="faq"
          documentationLink={faqLink}
          showMoreInfoLink={pagePath !== 'qasp'}
        />
      </div>
      <FooterContent>
        <Banner title="Do you still have questions?" linkTitle="Contact us" link={contactUsLink} />
      </FooterContent>
    </>
  );
};
