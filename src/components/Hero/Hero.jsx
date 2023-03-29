import * as styles from './Hero.module.scss';

import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export const Hero = ({ image, title, content }) => ( 
  <div className={styles.hero}>
    {image && <GatsbyImage className={styles.image} alt={title} image={image} />}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <div className={styles.content}>{renderRichText(content)}</div>}
    </div>
  </div>
);
