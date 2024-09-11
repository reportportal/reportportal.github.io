import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

interface SeoProps {
  title?: string;
  image?: string;
  previewImage?: string;
  description?: string;
  noIndex?: boolean;
  lang?: string;
  meta?: ConcatArray<{
    name: string;
    content: string;
    property?: string;
  }>;
}

export const Seo: FC<SeoProps> = ({
  title,
  image,
  previewImage,
  description = '',
  lang = 'en',
  meta = [],
  noIndex = false,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titlePS
            description
            keywords
            image
            previewImage
            siteName
            siteUrl
          }
        }
      }
    `,
  );

  const location = useLocation();
  const url = `${site?.siteMetadata?.siteUrl}${location.pathname}`;
  const defaultTitle = site.siteMetadata?.title;
  const titlePS = site.siteMetadata?.titlePS;
  const combinedTitle = `${title ?? defaultTitle} | ${titlePS}`;
  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image ?? site.siteMetadata?.image;
  const keywords = site.siteMetadata?.keywords;
  const metaSiteName = site.siteMetadata?.siteName;
  // https added for correct link construction. Without it, Helmet and browser breaks the link.
  const previewImageUrl = previewImage ? `https:${previewImage}` : site.siteMetadata?.previewImage;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={titlePS && `%s | ${titlePS}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'image',
          content: metaImage,
        },
        {
          property: 'og:title',
          content: combinedTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: previewImageUrl || metaImage,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata?.social?.twitter || '',
        },
        {
          name: 'twitter:title',
          content: combinedTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: keywords,
        },
        {
          name: 'og:site_name',
          content: metaSiteName,
        },
        {
          name: 'og:url',
          content: url,
        },
        {
          name: 'robots',
          content: noIndex ? 'noindex' : '',
        },
      ].concat(meta)}
    />
  );
};
