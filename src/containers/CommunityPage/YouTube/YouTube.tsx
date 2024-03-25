import React, { FC, useCallback, useState, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import chunk from 'lodash/chunk';
import classNames from 'classnames';
import { Link } from '@app/components/Link';
import { Carousel } from '@app/components/Carousel';
import { TitleBlock } from '@app/components/TitleBlock';
import { EmbedVideo } from '@app/components/Layout/EmbedVideo';
import { createBemBlockBuilder, MEDIA_DESKTOP_SM } from '@app/utils';

import { SlideItem } from './SlideItem';
import { prepareYoutubeVideos } from './utils';
import youtubeVideos from '../../../../static/youtube.json'; // Will be generated at build time

import './YouTube.scss';

const getBlocksWith = createBemBlockBuilder(['youtube']);

export const YouTube: FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);
  const isDesktop = useMediaQuery({ query: MEDIA_DESKTOP_SM });

  const videos = useMemo(() => prepareYoutubeVideos(youtubeVideos), []);

  const openEmbedVideo = useCallback(
    id => () => {
      setVideoId(id);
      setIsVideoModalOpen(true);
    },
    [],
  );

  const closeEmbedVideo = useCallback(() => {
    setVideoId(null);
    setIsVideoModalOpen(false);
  }, []);

  return (
    <div className={getBlocksWith()}>
      <div className="container">
        <TitleBlock
          title="Explore ReportPortal on YouTube"
          subtitle="Your source for tutorials, event recordings, and documentation guides"
        />
        {isDesktop ? (
          <Carousel buttonColor="black" autoplay={false}>
            {chunk(videos, 4)?.map((chunkVideos, index) => (
              <div key={index} className="slide">
                {chunkVideos.map(video => (
                  <SlideItem key={video.id} openEmbedVideo={openEmbedVideo(video.id)} {...video} />
                ))}
              </div>
            ))}
          </Carousel>
        ) : (
          <div className={getBlocksWith('__video-block')}>
            {videos.map(video => (
              <SlideItem key={video.id} openEmbedVideo={openEmbedVideo(video.id)} {...video} />
            ))}
          </div>
        )}
        <EmbedVideo isOpen={isVideoModalOpen} embedId={videoId} onClick={closeEmbedVideo} />
        <Link
          className={classNames(getBlocksWith('__button'), 'btn btn--outline btn--large')}
          to="https://www.youtube.com/@ReportPortal"
        >
          Watch more on YouTube
        </Link>
      </div>
    </div>
  );
};
