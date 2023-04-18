import React from 'react';

import { DockerDeployingStep } from './DockerDeployingStep';
import { DockerInstall } from './DockerInstall';

import '../../Installation.scss';

export const DockerContent = () => {
  return (
  <div>
    <DockerInstall />

    <DockerDeployingStep />
  </div>
)};
