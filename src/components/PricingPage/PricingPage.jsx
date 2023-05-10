import React, { useState } from 'react';
import { useToggle } from 'ahooks';

import { Hero } from './components/Hero';
import { PricingCards } from './components/PricingCards';
import { ComparePlans } from './components/ComparePlans';
import { ServerIcon, CloudIcon } from './icons';
import { pricingData } from './components/PricingCards/pricingData';

import './PricingPage.scss';

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
  const [discountState, { toggle }] = useToggle(true);

  const isFirstBtnActive = () => activeButton === buttons[0].text;

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
        switchDiscount={toggle}
        discountState={discountState}
      />

      {isFirstBtnActive() ? (
        <>
          <PricingCards discountState={discountState} pricingData={pricingData} />
          <ComparePlans />
        </>
      ) : (
        <p>Another page</p>
      )}
    </div>
  );
};
