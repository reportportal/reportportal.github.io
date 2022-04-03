import React from 'react';

const planCompareTableTitles = {
  instance: { id: 'instance', name: 'Individual Instance', info: 'You can choose instance type: multi-tenant (1 project on shared instances) or individual instances (only your company is on the instance)' },
  support: { id: 'support', name: 'Professional Support (hours)', info: 'A Professional Support Hour is a blended hour, which may consist of the time of various specialists, whether it is the time of a business analyst, architect, lead automation engineer, DevOps (System Engineer) or performance engineer.It can be used for various purposes related to ReportPortal installation, configuration, integration, customization, feature implementation, TAF updates, test case implementation, etc.' },
  storage: { id: 'storage', name: 'Data storage', info: 'This parameter defines how much data can be pulled into ReportPortal and saved in DB. The total amount of launches, tests, logs, and attachments in Gb are defined  on a daily basis, and the system automatically deletes over-usage in DB' },
  history: { id: 'history', name: 'History' },
  features: { id: 'features', name: 'Enterprise features', info: <span>Additional features which are not available in a scope of the Free Open Source version, <a href="" target="_blank" rel="noreferrer">link to the List with features and description</a></span> },
};

const plansData = [
  {
    name: 'We Host',
    iconType: 'cloud',
    periods: [
      { id: 'sale', name: 'Yearly save 5%' },
      { id: 'full', name: 'Monthly' },
    ],
    plansInfo: [
      {
        name: 'Free',
        description: 'For quick start',
        price: { full: '$0', sale: '$0' },
        button: { light: true, name: 'Sign Up' },
        form: {
          title: 'Contact form for package registration',
          description: 'Please provide your details below, and ReportPortal will help you set up your subscription.',
          options: [{ name: 'ReportPortalSource__c', value: 'Landing page/ "We Host" / Request Free Plan' }],
        },
        options: {
          storage: '3 Gb.',
          history: '7 days',
          features: true,
        },
      },
      {
        name: 'Start-Up',
        description: 'For small team',
        price: { full: '$1000', sale: '$950' },
        button: { name: 'Sign Up' },
        form: {
          title: 'Contact form for package registration',
          description: 'Please provide your details below, and ReportPortal will help you set up your subscription.',
          options: [{ name: 'ReportPortalSource__c', value: 'Landing page/ "We Host" / Request Start Up Plan' }],
        },
        popular: true,
        options: {
          storage: '50 Gb.',
          history: '90 days',
          features: true,
        },
      },
      {
        name: 'Pro',
        description: 'For large companies',
        price: { full: '$1500', sale: '$1425' },
        button: { light: true, name: 'Contact Us' },
        form: {
          title: 'Contact form for package registration',
          description: 'Please provide your details below, and ReportPortal will help you set up your subscription.',
          options: [{ name: 'ReportPortalSource__c', value: 'Landing page/ "We Host" / Request Pro Plan' }],
        },
        options: {
          instance: true,
          support: '8',
          storage: '200 Gb.',
          history: '1 year',
          features: true,
        },
      },
      {
        name: 'Enterprise',
        description: 'Enterprise-Ready',
        price: { full: '$4000', sale: '$3800' },
        button: { light: true, name: 'Contact Us' },
        form: {
          title: 'Contact form for package registration',
          description: 'Please provide your details below, and ReportPortal will help you set up your subscription.',
          options: [{ name: 'ReportPortalSource__c', value: 'Landing page/ "We Host" / Request Enterprise Plan' }],
        },
        options: {
          instance: true,
          support: '10',
          storage: '500 Gb.',
          history: '5 years',
          features: true,
        },
      },
    ],
    compareTableTitles: [
      planCompareTableTitles.instance,
      planCompareTableTitles.support,
      planCompareTableTitles.storage,
      planCompareTableTitles.history,
      planCompareTableTitles.features,
    ],
    footerDescription: '*payment is made quarterly',
    description: 'High-performance multi-tenant or individual instances of the SaaS ReportPortal that is running in AWS Cloud with the latest, most recent application version at all times, with no updating necessary.',
  },
  {
    name: 'You Host & We Manage',
    iconType: 'home',
    plansInfo: [
      {
        name: 'Package 32',
        shortName: '32',
        description: {
          doubleLevelDescription: {
            firstLevelDescription: 'hours',
            secondLevelDescription: 'of support',
          }
        },
        price: { full: '$2,500' },
        button: { light: true, name: 'Contact Us' },
        form: {
          title: 'Contact form for package registration with 32 hours of support',
          description: 'Please provide your details below, and ReportPortal will help you set up your subscription.',
          options: [{ name: 'ReportPortalSource__c', value: 'Landing page/ "You Host|We manage" / Request Support "Package 32"' }],
        },
        withClock: true,
        options: { support: '32' },
      },
      {
        name: 'Package 60',
        shortName: '60',
        description: {
          doubleLevelDescription: {
            firstLevelDescription: 'hours',
            secondLevelDescription: 'of support',
          }
        },
        price: { full: '$4,000' },
        button: { light: true, name: 'Contact Us' },
        form: {
          title: 'Contact form for package registration with 60 hours of support',
          description: 'Please provide your details below, and ReportPortal will help you set up your subscription.',
          options: [{ name: 'ReportPortalSource__c', value: 'Landing page/ "You Host|We manage" / Request Support "Package 60"' }],
        },
        popular: true,
        withClock: true,
        options: { support: '60' },
      },
      {
        name: 'Package 168+',
        shortName: '168+',
        description: {
          doubleLevelDescription: {
            firstLevelDescription: 'hours',
            secondLevelDescription: 'of support',
          }
        },
        price: { full: '$10,000+' },
        button: { light: true, name: 'Contact Us' },
        form: {
          title: 'Contact form for package registration with 168+ hours of support',
          description: 'Please provide your details below, and ReportPortal will help you set up your subscription.',
          options: [{ name: 'ReportPortalSource__c', value: 'Landing page/ "You Host|We manage" / Request Support "Package 168+"' }],
        },
        withFullClock: true,
        options: { support: '168+', features: true },
      },
    ],
    compareTableTitles: [
      planCompareTableTitles.support,
      planCompareTableTitles.features,
    ],
    footerDescription: 'Minimum engagement type 6 month',
    description: 'ReportPortal instance deployed On-premise Behind Your Firewall or in the Cloud. All your test data is located on your own instance and it is 100% secured',
  },
];

export default plansData;
