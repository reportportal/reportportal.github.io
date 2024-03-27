import React, { FC } from 'react';
import { useAtom } from 'jotai';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import {
  ANNOUNCEMENT_CLOSED_KEY,
  announcementOpenAtom,
  createBemBlockBuilder,
  MEDIA_TABLET_SM,
} from '@app/utils';
import { CrossIcon } from '@app/components/Layout/Navigation/icons';
import { ArrowLink } from '@app/components/ArrowLink';

import MerchIcon from './MerchIcon.inline.svg';

import './AnnouncementBar.scss';

const getBlocksWith = createBemBlockBuilder(['announcement-bar']);

const mobileBannerHeight = 120;
const desktopBannerHeight = 56;

export const AnnouncementBar: FC = () => {
  const [, setAnnouncementOpen] = useAtom(announcementOpenAtom);
  const isTablet = useMediaQuery({ query: MEDIA_TABLET_SM });
  const bannerHeight = isTablet ? desktopBannerHeight : mobileBannerHeight;
  const heightAnimation = { y: bannerHeight * -1, height: 0 };

  const onClose = () => {
    sessionStorage.setItem(ANNOUNCEMENT_CLOSED_KEY, 'true');
    setAnnouncementOpen(false);
  };

  return (
    <motion.div
      className={getBlocksWith('__container')}
      initial={heightAnimation}
      animate={{ y: 0, height: bannerHeight }}
      exit={heightAnimation}
      transition={{ duration: 0.5 }}
      key="announcement-bar"
    >
      <div className={getBlocksWith('__body')}>
        <div className={getBlocksWith('__text-cross-wrapper')}>
          <div className={getBlocksWith('__text-with-icon')}>
            <MerchIcon />
            <span>Great news: Our merch store is now open!</span>
          </div>
          <button type="button" className={getBlocksWith('__close-button')} onClick={onClose}>
            <CrossIcon />
          </button>
        </div>
        <ArrowLink
          text="Shop now"
          to="https://merch.reportportal.io/"
          mode="primary"
          className={getBlocksWith('__link')}
        />
      </div>
    </motion.div>
  );
};
