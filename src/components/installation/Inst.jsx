import React from 'react';
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
  // {
  //   text: 'With Kubernetes11',
  //   active: false,
  //   iconComponent: (item) => <KubernetesIcon color={item.active ? '#36A8C4' : 'white'} />,
  // },
];

export const Inst = () => {
  const handleSwitch = (data) => {
    console.log('=== handleSwitch ====>', data);
  };
  return (
    <div>
      <div className={cx(getBlocksWith(), 'bg')}>
        <Container>
          <h1 className={getBlocksWith('__title')}>Installation guide</h1>
          <p className={getBlocksWith('__subtitle')}>3 steps to get started with ReportPortal</p>

          <div className="btn__box">
            <SwitchButtons buttons={buttons} onSwitch={handleSwitch} btnWidth={'239px'} />
          </div>
        </Container>
      </div>

      <Container>
        <div style={{ background: 'gray' }}>
          <p>HELLO</p>
        </div>
        <div className="btn btn--secondary" style={{ width: '150px' }}>
          Button
        </div>

        <br />
        <a className={cx('btn', 'btn--outline', 'full-width')}>Button</a>
        <br />
      </Container>
    </div>
  );
};
