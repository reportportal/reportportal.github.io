import React, { useState } from 'react';

import { DiagonalHero } from './components/DiogonalHero';
import { PricingCards } from './components/PricingCards';
import { PlanCompare } from './components/PlanComare';
import { ServerIcon, CloudIcon } from './icons';

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

  const isFirstBtnActive = () => activeButton === buttons[0].text;

  const switchActiveBtn = (btnName) => {
    if (btnName !== activeButton) {
      setActiveButton(btnName);
    }
  };

  return (
    <div>
      <DiagonalHero
        buttons={buttons}
        switchActiveBtn={switchActiveBtn}
        activeButton={activeButton}
      />
      {isFirstBtnActive() ? (
        <>
          <PricingCards />
          <PlanCompare />
        </>
      ) : (
        <p>Another page</p>
      )}
    </div>
  );
};
