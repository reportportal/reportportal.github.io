import React, { useState } from 'react';
import cx from 'classnames';

import { Container } from '../Container';
import { createBemBlockBuilder } from '../../utils';
import { DockerIcon, KubernetesIcon } from './icons';
import { SwitchButtons } from '../switchButtons';

import './Inst.scss';

const getBlocksWith = createBemBlockBuilder(['installer']);

const buttons = [
  {
    text: 'With Docker',
    active: true,
    iconComponent: (item) => (
      <DockerIcon color={item.active ? 'var(--color-primary-500)' : 'var(--white)'} />
    ),
  },
  {
    text: 'With Kubernetes',
    active: false,
    iconComponent: (item) => (
      <KubernetesIcon color={item.active ? 'var(--color-primary-500)' : 'var(--white)'} />
    ),
  },
];

export const Inst = () => {
  const [contentSate, setContentState] = useState(true);

  const handleSwitch = (data) => {
    setContentState((previous) => !previous);
    console.log('=== handleSwitch ====>', data);
  };
  return (
    <div>
      <div className={cx(getBlocksWith(), 'bg')}>
        <Container>
          <h1 className={getBlocksWith('__title')}>Installation guide</h1>
          <p className={getBlocksWith('__subtitle')}>3 steps to get started with ReportPortal</p>

          <div className={getBlocksWith('__btn-box')}>
            <SwitchButtons buttons={buttons} onSwitch={handleSwitch} />
          </div>
        </Container>
      </div>

      {contentSate ? <div>First Page</div> : <div>Second Page</div>}
    </div>
  );
};
