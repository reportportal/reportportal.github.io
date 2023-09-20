import React, { useState } from 'react';
import { Tag } from 'antd';
import isEmpty from 'lodash/isEmpty';
import xor from 'lodash/xor';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../utils';

import '../ContactUsPage.scss';

const getBlocksWith = createBemBlockBuilder(['contact-us-form', 'how-did-you-hear']);

const tagsData = [
  'Friends/Colleagues',
  'Email newsletter',
  'Social Media',
  'Google etc.',
  'Course',
  'Conference',
  'Article',
];

export const FeedbackForm = ({ title }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = tag => setSelectedTags(xor(selectedTags, [tag]));

  const handleSubmit = () => {
    setIsSubmitted(true);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'ga_event',
      custom_dimensions: {
        place: title,
        type: selectedTags.join('#'),
        button: 'Submit feedback',
        category: 'Thank You Modal',
      },
      event_name: 'click',
      timestamp: Date.now().valueOf(),
    });
  };

  return (
    <div className={getBlocksWith('-container')}>
      <div className={cx(getBlocksWith(), { 'is-submitted': isSubmitted })}>
        <strong className={getBlocksWith('__title')}>Thank you</strong>
        <div className={getBlocksWith('__subtitle')}>
          {!isSubmitted
            ? "Your message is received. We'll be in touch shortly"
            : 'Your feedback has been received'}
        </div>
        {!isSubmitted && (
          <div className={getBlocksWith('__tags')}>
            <div className={getBlocksWith('__tags-title')}>How did you hear about us?</div>
            <div className={getBlocksWith('__tags-container')}>
              {tagsData.map(tag => (
                <Tag.CheckableTag
                  key={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleChange(tag)}
                >
                  {tag}
                </Tag.CheckableTag>
              ))}
            </div>
            <button
              className={cx('btn', 'btn--primary', 'btn--large')}
              disabled={isEmpty(selectedTags)}
              onClick={handleSubmit}
            >
              Submit feedback
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
