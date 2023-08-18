import React, { useState } from 'react';
import { Tag } from 'antd';
import { isEmpty } from 'lodash';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../utils';

import '../ContactUsPage.scss';

const getBlocksWith = createBemBlockBuilder(['contact-us-form', 'how-did-you-hear']);

const tagsData = [
  'Friends/Colleague',
  'Podcast',
  'Social Media',
  'Youtube',
  'Google etc.',
  'Streaming',
  'Other',
];

export const HowDidYouHearAboutUs = ({ title }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (tag, isChecked) => {
    setSelectedTags(
      isChecked ? [...selectedTags, tag] : selectedTags.filter(selectedTag => selectedTag !== tag),
    );
  };

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
    <div className={cx(getBlocksWith('-container'), 'container')}>
      <div className={cx(getBlocksWith(), { 'is-submitted': isSubmitted })}>
        <strong className={getBlocksWith('__title')}>Thank you</strong>
        <div className={getBlocksWith('__subtitle')}>
          {!isSubmitted
            ? 'We got your message and at soon time our expert contact with you'
            : 'Your feedback has been accepted'}
        </div>
        {!isSubmitted && (
          <div className={getBlocksWith('__tags')}>
            <div className={getBlocksWith('__tags-title')}>How did you hear about us?</div>
            <div className={getBlocksWith('__tags-container')}>
              {tagsData.map(tag => (
                <Tag.CheckableTag
                  key={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={checked => handleChange(tag, checked)}
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
