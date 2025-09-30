import React, { FC, ReactNode, useRef } from 'react';
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
import { PricingCard } from '@app/components/PricingCard';
import { Faq } from '@app/components/Faq';
import { CertificationCard } from '@app/components/CertificationCard';
import { InfoCard } from '@app/components/InfoCard';
import { useInView } from '@app/hooks/useInView';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';
import { useAnimationEnabledForSiblingRoutes } from '@app/hooks/useAnimationEnabledForSiblingRoutes';
import ToolIcon from '@app/svg/tool.inline.svg';
import HeadphonesIcon from '@app/svg/headphones.inline.svg';
import InfoIcon from '@app/svg/infoIcon.inline.svg';

import openSourceIcon from './icons/opensource.svg';
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
    items: string[] | ReactNode[];
  }[];
  plans: OfferingPlansDto;
  comparePlans: FormattedComparePlansDto;
  faqData: {
    key: number;
    label: string;
    children: ReactNode;
  }[];
  contactUsLink: string;
  utilizationDescription: string;
  faqLink?: string;
  isScaleShifted?: boolean;
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
}) => {
  const { buttons } = usePricingHeroProps(page);
  const [cardsRef, areCardsInView] = useInView();
  const utilizationRef = useRef<HTMLDivElement>(null);
  const isAnimationEnabled = useAnimationEnabledForSiblingRoutes();
  const getCardsAnimation = useMotionEnterAnimation(
    easeInOutOpacityScaleAnimationProps,
    isAnimationEnabled,
  );

  const isPricingPage = page === 'pricing';
  const pricingCardsAnimation = getCardsAnimation({
    isInView: areCardsInView,
    delay: 0.6,
    additionalEffects: {
      hiddenAdditional: { y: 50 },
      enterAdditional: { y: 0 },
    },
  });
  const [openSourcePlan, ...paidPlans] = plans.items;

  return (
    <>
      <PricingHero
        title={title}
        subtitle={subtitle}
        buttons={buttons}
        activeButton={offerType}
        offerType={offerType}
        description={description}
        isAnimationEnabled={isAnimationEnabled}
      />
      <motion.section
        className={classNames(getBlocksWith('__plans-container'), 'container')}
        ref={cardsRef}
        {...pricingCardsAnimation}
      >
        <h2>Get a full year of benefits with our service packages</h2>
        <div className={getBlocksWith('__plans')}>
          {paidPlans.map(paidPlan => (
            <PricingCard key={paidPlan.title} plan={paidPlan} planType="yearly" />
          ))}
        </div>
        <div className={getBlocksWith('__plans-topology')}>
          <div className={getBlocksWith('__subscription-info')}>
            <HeadphonesIcon />
            <div>
              Technical Support Points (hours) refer to the duration of the available technical
              consultations.
            </div>
          </div>
          <div className={getBlocksWith('__subscription-info')}>
            <ToolIcon />
            <div>
              Professional Service Points (hours) reflect our specialists&apos; efforts on feature
              development, integrations, etc.{' '}
              <Link
                to="#"
                onClick={event => {
                  event.preventDefault();

                  utilizationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <InfoCard
          icon={openSourceIcon}
          title={openSourcePlan.title}
          description={openSourcePlan.description as string}
          link={{
            title: openSourcePlan.cta.link.title,
            url: openSourcePlan.cta.link.url,
          }}
        />
      </motion.section>
      <ComparePlans plans={comparePlans} isCollapsibleOnMobile={false} />
      <div ref={utilizationRef} className={getBlocksWith('__utilization')}>
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
      {isPricingPage && (
        <div className={getBlocksWith('__gradient-container')}>
          <div className="container">
            <TrustedOrganizations />
            <CertificationCard
              subtitle="Ensuring the highest security standards"
              shouldDisplayLink
            />
          </div>
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
