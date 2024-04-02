import React, { useCallback, useRef, memo, FC } from 'react';
import classNames from 'classnames';
import { Carousel as AntdCarousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { createBemBlockBuilder } from '@app/utils';

import ArrowWhiteIcon from './icons/arrow-white.inline.svg';
import ArrowBlackIcon from './icons/arrow-black.inline.svg';

import './Carousel.scss';

interface CarouselProps {
  children: React.ReactNode;
  autoplay?: boolean;
  buttonColor?: string;
  isButtonHidden?: string;
}

const BUTTON_ICON_MAP = {
  white: ArrowWhiteIcon,
  black: ArrowBlackIcon,
};

const getBlocksWith = createBemBlockBuilder(['carousel']);

export const Carousel: FC<CarouselProps> = memo(
  ({ children, buttonColor = 'white', autoplay = true, isButtonHidden = false }) => {
    const carouselRef = useRef<CarouselRef | null>(null);
    const ButtonIcon = BUTTON_ICON_MAP[buttonColor];

    const handlePrevClick = useCallback(() => {
      return carouselRef.current?.prev();
    }, []);

    const handleNextClick = useCallback(() => {
      return carouselRef.current?.next();
    }, []);

    return (
      <div className={getBlocksWith()}>
        <button
          className={classNames(getBlocksWith('__button'), {
            [getBlocksWith('__button--hidden')]: isButtonHidden,
          })}
          onClick={handlePrevClick}
        >
          <ButtonIcon />
        </button>
        <AntdCarousel
          ref={carouselRef}
          autoplay={autoplay}
          pauseOnHover={false}
          autoplaySpeed={5000}
        >
          {children}
        </AntdCarousel>
        <button
          className={classNames(getBlocksWith('__button'), {
            [getBlocksWith('__button--hidden')]: isButtonHidden,
          })}
          onClick={handleNextClick}
        >
          <ButtonIcon />
        </button>
      </div>
    );
  },
);

Carousel.displayName = 'Carousel';
