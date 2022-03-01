import React from 'react';
import Button from 'react-components/button/button.jsx';

const planCompareTableTitles = {
  instance: { id: 'instance', name: 'Individual Instance', info: 'You can choose instance type: multi-tenant (1 project on shared instances) or individual instances (only your company is on the instance)' },
  support: { id: 'support', name: 'Professional Support (hours)', info: 'A Professional Support Hour is a blended hour, which may consist of the time of various specialists, whether it is the time of a business analyst, architect, lead automation engineer, DevOps (System Engineer) or performance engineer.It can be used for various purposes related to ReportPortal installation, configuration, integration, customization, feature implementation, TAF updates, test case implementation, etc.' },
  storage: { id: 'storage', name: 'Data storage', info: 'This parameter defines how much data can be pulled into ReportPortal and saved in DB. The total amount of launches, tests, logs, and attachments in Gb are defined  on a daily bases, and the system automatically deletes over-usage in DB' },
  history: { id: 'history', name: 'History' },
  features: { id: 'features', name: 'Enterprise features', info: 'Additional features which are not available in a scope of the Free Open Source version, <a href="" target="_blank" rel="noreferrer">link to the List with features and description</a>' },
};

const plansData = [
  {
    name: 'We Host',
    iconType: 'cloud',
    isActive: true,
    periods: [
      { id: 'sale', name: 'Yearly save 5%' },
      { id: 'full', name: 'Monthly', isActive: true },
    ],
    plansInfo: [
      {
        name: 'Free',
        description: 'For quick start',
        price: { full: '$0', sale: '$0' },
        button: <Button className='light'>Sign Up</Button>,
        options: {
          storage: '3 Gb.',
          history: '7 days',
          features: 'true',
        },
      },
      {
        name: 'Start-Up',
        description: 'For small team',
        price: { full: '$1000', sale: '$950' },
        button: <Button>Sign Up</Button>,
        popular: 'popular',
        options: {
          storage: '50 Gb.',
          history: '90 days',
          features: 'true',
        },
      },
      {
        name: 'Pro',
        description: 'For large companies',
        price: { full: '$1500', sale: '$1425' },
        button: <Button className='light'>Contact Us</Button>,
        options: {
          instance: 'true',
          support: '8',
          storage: '200 Gb.',
          history: '1 year',
          features: 'true',
        },
      },
      {
        name: 'Enterprise',
        description: 'Enterprise-Ready',
        price: { full: '$4000', sale: '$3800' },
        button: <Button className='light'>Contact Us</Button>,
        options: {
          instance: 'true',
          support: '10',
          storage: '500 Gb.',
          history: '5 year',
          features: 'true',
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
    description: 'High-performance multi-tenant or individual instances of the SaaS ReportPortal that is running in AWS Cloud with the latest, most recent application version at all times, with no updating necessary.',
  },
  {
    name: 'You Host & We Manage',
    iconType: 'home',
    plansInfo: [
      {
        name: 'Package 32',
        shortName: '32',
        description: <div className="double-level-description">
          <div className="first-level-description">hours</div>
          <div className="second-level-description">of support</div>
        </div>,
        price: { full: '$2,500' },
        button: <Button className='light'>Contact Us</Button>,
        withClock: 'with-clock',
        options: { support: '32' },
      },
      {
        name: 'Package 60',
        shortName: '60',
        description: <div className="double-level-description">
          <div className="first-level-description">hours</div>
          <div className="second-level-description">of support</div>
        </div>,
        price: { full: '$4,000' },
        button: <Button className='light'>Contact Us</Button>,
        popular: 'popular',
        withClock: 'with-clock',
        options: { support: '60' },
      },
      {
        name: 'Package 168+',
        shortName: '168+',
        description: <div className="double-level-description">
          <div className="first-level-description">hours</div>
          <div className="second-level-description">of support</div>
        </div>,
        price: { full: '$10,000+' },
        button: <Button className='light'>Contact Us</Button>,
        withFullClock: 'with-full-clock',
        options: { support: '168+', features: 'true' },
      },
    ],
    compareTableTitles: [
      planCompareTableTitles.support,
      planCompareTableTitles.features,
    ],
    description: 'ReportPortal instance deployed On-premise Behind Your Firewall or in the Cloud. All your test data is located on your own instance and it is 100% secured',
  },
];

export default plansData;
