import React from 'react';

export const faqData = [
  {
    key: 1,
    label: 'What is the validity period for professional service hours?',
    children: (
      <div>
        The professional service hours included into the subscription plan are accumulated on a
        monthly basis and are valid for the payment term only. If quarterly payment option is
        chosen, no more than 3 monthly amounts of professional service hours can be accumulated or
        used prospectively; if yearly payment option is chosen, up to 12 monthly amounts of
        professional service hours can be accumulated or used prospectively.
      </div>
    ),
  },
  {
    key: 2,
    label: 'How is my subscription charged?',
    children: (
      <div>
        Company will pay a fixed fee, in advance, based on the service level elected in the Order
        Form.
      </div>
    ),
  },
  {
    key: 3,
    label: 'Can I pay monthly?',
    children: (
      <>
        <div>Unfortunately, not for now.</div>
        <div>
          But we work to make it possible. Currently we do semi-manual invoice processing which
          requires effort of the operations and accounting teams.
        </div>
        <div>
          Monthly payments will be available as soon as we add online payment capabilities. This is
          our highest priority at the moment.
        </div>
      </>
    ),
  },
  {
    key: 4,
    label: 'What payment methods do you accept?',
    children: (
      <div>
        As for now, the payment can be made via bank transfer (ACH, Wire) or check. Later on, we
        plan to provide alternative forms of payment.
      </div>
    ),
  },
  {
    key: 5,
    label: 'Can I change billing plans at any time?',
    children: (
      <>
        <div>Unfortunately, no.</div>
        <div>You can&apos;t downgrade your billing plan at any time.</div>
        <div>
          However, if you need more professional service hours, we can discuss the plan upgrade. For
          that, please, press &quot;Get a Quote&quot; in the upper right corner of our landing page.
          We&apos;ll be happy to help you to find the most suitable plan for your team and provide a
          quote.
        </div>
      </>
    ),
  },
  {
    key: 6,
    label: 'What if I overuse or underuse my monthly limit?',
    children: (
      <>
        <div>
          If Company seeks to consume more professional service hours than have been contracted for
          according to the Order, overage fees of 25% on a per professional service hour basis will
          apply.
        </div>
        <div>
          Professional service hours may be used for the duration of the payment term, and expire at
          that time. For example, annual upfront payment entitles Company to use the contracted
          monthly service points at any point in the year. For a quarterly upfront payment, service
          points must be used within three months.
        </div>
      </>
    ),
  },
  {
    key: 7,
    label: 'What are the business hours of the service team?',
    children: (
      <div>
        Unless otherwise agreed in writing, ReportPortal service personnel are located in the CET
        time zone (UTC +1). Commercially reasonable efforts will be made to find overlap times where
        synchronous communication with a Company is required. For purposes of finding overlap times,
        the Company agrees to make its personnel available between 8 AM and 6 PM when synchronous
        communication is required.
      </div>
    ),
  },
  {
    key: 8,
    label: 'I need a quote. How can I request one?',
    children: (
      <>
        <div>Just press &quot;Get a Quote&quot; in the upper right corner of our landing page.</div>
        <div>
          We&apos;ll be happy to help you to find the most suitable plan for your team and provide a
          quote.
        </div>
      </>
    ),
  },
];
