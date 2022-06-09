/*
 * Copyright 2022 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';

import {
  WE_HOST_ID,
  YOU_HOST_ID,
  FULL_PERIOD,
  SALE_PERIOD,
  STARTUP,
  BUSINESS,
  ENTERPRISE,
  PACKAGE_25,
  PACKAGE_60,
  PACKAGE_168,
} from './constants';

const compareTableTitles = {
  instance: {
    id: 'instance',
    name: 'Individual Instance',
    info: <span>
      You can choose instance type:<br/>
      <br/>
      <b>Shared instance</b> you share a multi-tenant instance of application with other clients. Access limited on the project. Better for profitability.<br/>
      <br/>
      <b>Dedicated instance</b> only your company is on this instance. Better for data isolation, simplified scalability, increased availability, personalization, company-based authorization.
    </span>,
  },
  storage: {
    id: 'storage',
    name: 'Data storage',
    info: 'This parameter defines how much data can be pulled into ReportPortal and saved in DB. The total amount of launches, tests, logs and attachments in Gb are defined on a daily basis. The system automatically deletes over-usage in DB.',
  },
  retention: {
    id: 'retention',
    name: 'Data retention',
    info: 'This parameter defines how long your test results will be stored in ReportPortal.',
  },
  support: {
    id: 'support',
    name: 'Technical support hours',
    info: <span>
      A technical support hour (pre-paid) is a blended hour, included into your subscription plan, which may consist of the time of various specialists, whether it is the time of a business analyst, architect, lead automation engineer, DevOps (System Engineer) or performance engineer.<br/>
      <br/>
      It can be used for various purposes related to ReportPortal installation, configuration, integration, customization, feature implementation, TAF updates, test case implementation, etc.
    </span>,
  },
  additionalSupport: {
    id: 'additionalSupport',
    name: 'Additional technical support',
    info: <span>
      If your usage exceeds the specified quantity of technical support hours included into the subscription package, you will need to pay for the exceeding amount at pay-as-you-go system.<br/>
      <br/>
      A technical support hour is a blended hour, which may consist of the time of various specialists, whether it is the time of a business analyst, architect, lead automation engineer, DevOps (System Engineer) or performance engineer.<br/>
      <br/>
      It can be used for various purposes related to ReportPortal installation, configuration, integration, customization, feature implementation, TAF updates, test case implementation, etc.
    </span>,
  },
  features: {
    id: 'features',
    name: 'Enterprise features',
    info: <span>
      Additional features which are not available in a scope of the Free Open Source version, <a href="https://reportportal.io/docs/Enterprise-Features" target="_blank" rel="noreferrer">link to the List with features and description</a>
    </span>,
  },
  minimumCommitment: {
    id: 'minimumCommitment',
    name: 'Minimum commitment',
    info: <span>
      Minimum commitment of time for use of a certain subscription package.
    </span>,
  },
  professionalSupport: {
    id: 'professionalSupport',
    name: 'Professional service hours',
    info: <span>
      A professional service hour is a blended hour included into your subscription plan, which may consist of the time of various specialists, whether it is the time of a business analyst, architect, lead automation engineer, DevOps (System Engineer) or performance engineer.<br/>
      <br/>
      It can be used for various purposes related to ReportPortal installation, configuration, integration, customization, feature implementation, TAF updates, test case implementation, etc.
    </span>,
  },
};

export const planTypes = [
  {
    id: WE_HOST_ID,
    name: 'We Host',
    iconType: 'cloud',
    footerDescription: '*payment is made quarterly',
    description: 'An instance of ReportPortal application is hosted for you.\n' +
      'ReportPortal Team takes care about infrastructure, availability, backups, monitoring and version updates and provides support by request.',
    planNames: [STARTUP, BUSINESS, ENTERPRISE],
    planCompareTableTitles: [
      compareTableTitles.instance,
      compareTableTitles.storage,
      compareTableTitles.retention,
      compareTableTitles.support,
      compareTableTitles.additionalSupport,
      compareTableTitles.features,
    ],
  },
  {
    id: YOU_HOST_ID,
    name: 'You Host & We Manage',
    iconType: 'home',
    footerDescription: '*payment is made quarterly',
    description: 'ReportPortal instance deployed on-premise behind your firewall or in the Cloud. All your test data is located on your own instance and it is 100% secured.',
    planNames: [PACKAGE_25, PACKAGE_60, PACKAGE_168],
    planCompareTableTitles: [
      compareTableTitles.professionalSupport,
      compareTableTitles.minimumCommitment,
      compareTableTitles.features,
    ],
  },
];

export const periods = [
  { id: SALE_PERIOD, name: 'Yearly (save 5%)' },
  { id: FULL_PERIOD, name: 'Quarterly' },
];

const plansData = [
  {
    name: STARTUP,
    price: { full: '$600', sale: '$570' },
    options: {
      storage: '100 Gb',
      retention: '12 months',
      support: '5',
      additionalSupport: '$150/h',
      features: true,
    },
  },
  {
    name: BUSINESS,
    price: { full: '$2,500', sale: '$2,350' },
    options: {
      instance: true,
      storage: '1 Tb',
      retention: '5 years',
      support: '10',
      additionalSupport: '$150/h',
      features: true,
    },
  },
  {
    name: ENTERPRISE,
    price: { full: 'Custom price', sale: 'Custom price' },
    options: {
      instance: true,
      storage: 'Unlimited',
      retention: 'Unlimited',
      support: {
        isMultiLine: true,
        value: 'Dedicated\n' +
        'specialist',
      },
      additionalSupport: '$150/h',
      features: true,
    },
  },
  {
    name: PACKAGE_25,
    price: { full: '$3,000', sale: '$2,850' },
    options: {
      professionalSupport: '25',
      minimumCommitment: '6 months',
      features: true,
    },
  },
  {
    name: PACKAGE_60,
    price: { full: '$6,000', sale: '$5,700' },
    options: {
      professionalSupport: '60',
      minimumCommitment: '6 months',
      features: true,
    },
  },
  {
    name: PACKAGE_168,
    price: { full: '$14,000+', sale: '$13,300+' },
    options: {
      professionalSupport: '168+',
      minimumCommitment: '3 months',
      features: true,
    },
  },
];

export const getPlansDataByNames = (names) => plansData.filter(({ name }) => names.includes(name))
