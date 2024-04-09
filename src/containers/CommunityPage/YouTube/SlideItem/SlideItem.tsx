import React, { FC } from 'react';
import { Typography } from 'antd';
import { createBemBlockBuilder } from '@app/utils';

import { formatYoutubeViews, timeSince, convertDuration } from '../utils';

interface SlideItemProps {
  openEmbedVideo: () => void;
  duration: string;
  title: string;
  viewCount: number;
  publishedAt: string;
  imageSrc?: string;
}

const getBlocksWith = createBemBlockBuilder(['slide']);

export const SlideItem: FC<SlideItemProps> = ({
  openEmbedVideo,
  imageSrc,
  publishedAt,
  viewCount,
  duration,
  title,
}) => {
  return (
    <div className={getBlocksWith('__item')} onClick={openEmbedVideo}>
      <div className={getBlocksWith('__image-wrapper')}>
        <img src={imageSrc} alt="" className={getBlocksWith('__image')} />
        <div className={getBlocksWith('__duration')}>{convertDuration(duration)}</div>
      </div>
      <Typography.Paragraph ellipsis={{ rows: 2 }} className={getBlocksWith('__title')}>
        {title}
      </Typography.Paragraph>
      <div className={getBlocksWith('__info')}>
        <span className={getBlocksWith('__info--views')}>{formatYoutubeViews(viewCount)}</span>
        <span className={getBlocksWith('__info--published')}>{timeSince(publishedAt)}</span>
      </div>
    </div>
  );
};
