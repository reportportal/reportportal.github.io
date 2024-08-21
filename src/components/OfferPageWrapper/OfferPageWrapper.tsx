import React, { FC } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import {
  createBemBlockBuilder,
  easeInOutOpacityScaleAnimationProps,
  FormattedComparePlansDto,
  OfferingPlansDto,
} from '@app/utils';
import { usePricingHeroProps } from '@app/hooks/usePricingHeroProps';
import { FooterContent } from '@app/components/Layout';
import { TrustedOrganizations } from '@app/components/TrustedOrganizations';
import { Banner } from '@app/components/Banner';
import { Link } from '@app/components/Link';
import { PricingHero } from '@app/components/PricingHero';
import { ComparePlans } from '@app/components/ComparePlans';
import { Faq } from '@app/components/Faq';
import InfoIcon from '@app/svg/infoIcon.inline.svg';
import { useInView } from '@app/hooks/useInView';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';
import { useAnimationEnabledForSiblingRoutes } from '@app/hooks/useAnimationEnabledForSiblingRoutes';

import { PentagonCard } from './PentagonCard';
import { TimeScale } from './TimeScale';

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
  const [cardsRef, areCardsInView] = useInView();
  const isAnimationEnabled = useAnimationEnabledForSiblingRoutes();

  const discount = isDiscount ? 'yearly' : 'quarterly';

  const getCardsAnimation = useMotionEnterAnimation(
    easeInOutOpacityScaleAnimationProps,
    isAnimationEnabled,
  );

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
        isAnimationEnabled={isAnimationEnabled}
      />
      <motion.div
        className={getBlocksWith('__pentagons')}
        ref={cardsRef}
        {...getCardsAnimation({
          inView: areCardsInView,
          delay: 0.6,
          additionalEffects: {
            hiddenAdditional: {
              y: 50,
            },
            enterAdditional: {
              y: 0,
            },
          },
        })}
      >
        {plans.items.map((plan, index) => {
          const pricingValue = plan.price?.[discount];
          const href = plan.cta.link.url;
          const actionLink = !isAccelerator && pricingValue ? `${href}/${discount}` : href;

          return (
            <PentagonCard
              plan={plan}
              key={plan.title}
              progressNumber={index + 1}
              pricingValue={pricingValue as number}
              contactLink={actionLink}
            />
          );
        })}
      </motion.div>
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
