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

import { WE_HOST_ID, YOU_HOST_ID, FULL_PERIOD, FREE, START_UP, PRO, ENTERPRISE, PACKAGE_32, PACKAGE_60, PACKAGE_168 } from './constants';

const compareTableTitles = {
  instance: { id: 'instance', name: 'Individual Instance', info: 'You can choose instance type: multi-tenant (1 project on shared instances) or individual instances (only your company is on the instance)' },
  support: { id: 'support', name: 'Professional Support (hours)', info: 'A Professional Support Hour is a blended hour, which may consist of the time of various specialists, whether it is the time of a business analyst, architect, lead automation engineer, DevOps (System Engineer) or performance engineer.It can be used for various purposes related to ReportPortal installation, configuration, integration, customization, feature implementation, TAF updates, test case implementation, etc.' },
  storage: { id: 'storage', name: 'Data storage', info: 'This parameter defines how much data can be pulled into ReportPortal and saved in DB. The total amount of launches, tests, logs, and attachments in Gb are defined  on a daily basis, and the system automatically deletes over-usage in DB' },
  history: { id: 'history', name: 'History' },
  features: { id: 'features', name: 'Enterprise features', info: <span>Additional features which are not available in a scope of the Free Open Source version, <a href="https://reportportal.io/docs/Enterprise-Features" target="_blank" rel="noreferrer">link to the List with features and description</a></span> },
};

export const planTypes = [
  {
    id: WE_HOST_ID,
    name: 'We Host',
    iconType: 'cloud',
    footerDescription: '*payment is made quarterly',
    description: 'High-performance multi-tenant or individual instances of the SaaS ReportPortal that is running in AWS Cloud with the latest, most recent application version at all times, with no updating necessary.',
    planNames: [FREE, START_UP, PRO, ENTERPRISE],
    planCompareTableTitles: [
      compareTableTitles.instance,
      compareTableTitles.support,
      compareTableTitles.storage,
      compareTableTitles.history,
      compareTableTitles.features,
    ],
  },
  {
    id: YOU_HOST_ID,
    name: 'You Host & We Manage',
    iconType: 'home',
    footerDescription: '*minimum engagement type 6 month',
    description: 'ReportPortal instance deployed On-premise Behind Your Firewall or in the Cloud. All your test data is located on your own instance and it is 100% secured',
    planNames: [PACKAGE_32, PACKAGE_60, PACKAGE_168],
    planCompareTableTitles: [
      compareTableTitles.support,
      compareTableTitles.features,
    ],
  },
];

export const periods = [
  { id: 'sale', name: 'Yearly (save 5%)' },
  { id: FULL_PERIOD, name: 'Monthly' },
];

const plansData = [
  {
    name: FREE,
    price: { full: '$0', sale: '$0' },
    options: {
      storage: '3 Gb',
      history: '7 days',
      features: true,
    },
  },
  {
    name: START_UP,
    price: { full: '$1,000', sale: '$950' },
    options: {
      storage: '50 Gb',
      history: '90 days',
      features: true,
    },
  },
  {
    name: PRO,
    price: { full: '$1,500', sale: '$1,425' },
    options: {
      instance: true,
      support: '8',
      storage: '200 Gb',
      history: '1 year',
      features: true,
    },
  },
  {
    name: ENTERPRISE,
    price: { full: '$4,000', sale: '$3,800' },
    options: {
      instance: true,
      support: '10',
      storage: '500 Gb',
      history: '5 years',
      features: true,
    },
  },
  {
    name: PACKAGE_32,
    price: { full: '$2,500' },
    options: { support: '32' },
  },
  {
    name: PACKAGE_60,
    price: { full: '$4,000' },
    options: { support: '60' },
  },
  {
    name: PACKAGE_168,
    price: { full: '$10,000+' },
    options: { support: '168+', features: true },
  },
];

export const getPlansDataByNames = (names) => plansData.filter(({ name }) => names.includes(name))
