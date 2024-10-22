import React, { FC } from 'react';
import cn from 'classnames';
import { createBemBlockBuilder } from '@app/utils';

import Soc2 from './svg/soc2.inline.svg';
import Isae3402 from './svg/isae3402.inline.svg';
import Iso9001 from './svg/iso9001.inline.svg';
import Iso27001 from './svg/iso27001.inline.svg';

import './Certificates.scss';

const getBlocksWith = createBemBlockBuilder(['certificates']);

const certificatesIcons = [Soc2, Isae3402, Iso9001, Iso27001];

interface CertificatesProps {
  className?: string;
}

export const Certificates: FC<CertificatesProps> = ({ className }) => (
  <div className={cn(getBlocksWith(), className)}>
    {certificatesIcons.map(Certificate => (
      <Certificate key={Certificate} />
    ))}
  </div>
);
