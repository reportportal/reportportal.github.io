import React, { FC, useRef, useEffect } from 'react';
import { Heading } from '@app/components/Heading';
import { useScrollDirection, Directions } from '@app/hooks/useScrollDirection';

import { TOP_REQUEST_LIST, BOTTOM_REQUEST_LIST } from './constants';

import './CommonRequests.scss';

export const CommonRequests: FC = () => {
  const requestsWrapper = useRef<HTMLDivElement>(null);
  const scrollDirection = useScrollDirection({ isMenuOpen: false });

  useEffect(() => {
    const onRequestScroll = () => {
      if (requestsWrapper.current) {
        const { top, width } = requestsWrapper.current!.getBoundingClientRect();
        const { scrollLeft, scrollWidth } = requestsWrapper.current;
        const isScrollingDown = top < 200 && scrollLeft < scrollWidth - width;
        const isScrollingUp = top > -200 && scrollLeft > 0;

        if (scrollDirection === Directions.UP && isScrollingUp) {
          requestsWrapper.current!.scrollTo(scrollLeft - 15, 0);
        } else if (scrollDirection === Directions.DOWN && isScrollingDown) {
          requestsWrapper.current!.scrollTo(scrollLeft + 10, 0);
        }
      }
    };

    window.addEventListener('scroll', onRequestScroll);

    return () => window.removeEventListener('scroll', onRequestScroll);
  }, [scrollDirection]);

  return (
    <div className="common-requests">
      <Heading title="Samples of client requests we helped with" />
      <div className="common-requests__sub-header">
        Industry agnostic, we address your specific business needs
      </div>
      <div ref={requestsWrapper} className="requests__wrapper">
        <div className="requests">
          {TOP_REQUEST_LIST.map(({ description, groupName }, index) => (
            <div className="requests__item" key={index}>
              <div className="requests__item-description">
                {description.map(({ bold, text }) => (
                  <span key={text} {...(bold && { className: 'requests__item-description--bold' })}>
                    {text}
                  </span>
                ))}
              </div>
              <div className="requests__item-group-name">{groupName}</div>
            </div>
          ))}
        </div>
        <div className="requests">
          {BOTTOM_REQUEST_LIST.map(({ description, groupName }, index) => (
            <div className="requests__item" key={index}>
              <div className="requests__item-description">
                {description.map(({ bold, text }) => (
                  <span key={text} {...(bold && { className: 'requests__item-description--bold' })}>
                    {text}
                  </span>
                ))}
              </div>
              <div className="requests__item-group-name">{groupName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
