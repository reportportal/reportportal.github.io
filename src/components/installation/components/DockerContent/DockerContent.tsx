import React from 'react';

import { DockerStepOne } from './DockerStepOne';
import { DockerInstall } from './DockerInstall';
import { DockerStepTwo } from './DockerStepTwo';

import '../../Installation.scss';

export const DockerContent = () => {
  return (
  <div>
    <DockerInstall />

    <DockerStepOne />

    <DockerStepTwo />
  </div>
)};
