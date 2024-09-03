import React, { FC } from 'react';
import { motion } from 'framer-motion';
import {
  BlogPostDto,
  createBemBlockBuilder,
  getEaseInOutTransition,
  opacityScaleAnimationProps,
} from '@app/utils';
import { useInView } from '@app/hooks/useInView';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';

import { ArticlePreviewItem } from '../ArticlePreviewItem';

interface ArticlePreviewRowProps {
  row: BlogPostDto[];
}

const getBlocksWith = createBemBlockBuilder(['article-preview-list']);

export const ArticlePreviewRow: FC<ArticlePreviewRowProps> = ({ row }) => {
  const [rowRef, isInView] = useInView();
  const getAnimation = useMotionEnterAnimation({
    ...opacityScaleAnimationProps,
    ...getEaseInOutTransition(0.7),
  });

  return (
    <motion.div
      ref={rowRef}
      className={getBlocksWith()}
      {...getAnimation({
        inView: isInView,
        additionalEffects: {
          hiddenAdditional: {
            y: 150,
          },
          enterAdditional: {
            y: 0,
          },
        },
      })}
    >
      {row.map(post => (
        <ArticlePreviewItem key={post.id} post={post} />
      ))}
    </motion.div>
  );
};
