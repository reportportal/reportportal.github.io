import React, { useState } from 'react';
import { useToggle } from 'ahooks';

import { Hero } from './components/Hero';
import { PricingCards } from './components/PricingCards';
import { ComparePlans } from './components/ComparePlans';
import { pricingData } from './components/PricingCards/pricingData';
import { Organizations } from './components/Organizations';
import { Faq } from './components/Faq';

import CloudIcon from './icons/cloud-icon.inline.svg';
import ServerIcon from './icons/server-icon.inline.svg';

import './PricingPage.scss';
import { Banner } from '../InstallationPage/components/Banner';

const buttons = [
  {
    text: 'SaaS',
    iconComponent: () => <CloudIcon />,
  },
  {
    text: 'On-Premises',
    iconComponent: () => <ServerIcon />,
  },
];

const ACTIVE_BUTTON = buttons[0].text;

export const PricingPage = () => {
  const [activeButton, setActiveButton] = useState(ACTIVE_BUTTON);
  const [discountState, { toggle: toggleDiscountState }] = useToggle(true);

  const isSassBtnActive = () => activeButton === buttons[0].text;

  const switchActiveBtn = (btnName) => {
    if (btnName !== activeButton) {
      setActiveButton(btnName);
    }
  };

  return (
    <div>
      <Hero
        buttons={buttons}
        switchActiveBtn={switchActiveBtn}
        activeButton={activeButton}
        switchDiscount={toggleDiscountState}
        discountState={discountState}
      />

      {isSassBtnActive() ? (
        <>
          <PricingCards discountState={discountState} pricingData={pricingData} />
          <ComparePlans />
          <Organizations />
          <div className={'faq_contianer'}>
            <Faq />
          </div>
          <div className={'still_have_question'}>
            <Banner title="Do you still have questions?" linkTitle="Contact Us" link="#" />
          </div>
        </>
      ) : (
        <p>Another page</p>
      )}
    </div>
  );
};
