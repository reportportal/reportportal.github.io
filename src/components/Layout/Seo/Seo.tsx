import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

interface SeoProps {
  title?: string;
  image?: string;
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
            siteName
            siteUrl
          }
        }
      }
    `,
  );

  const location = useLocation();
  const url = `${site?.siteMetadata?.siteUrl}${location.pathname}`
  const defaultTitle = site.siteMetadata?.title;
  const titlePS = site.siteMetadata?.titlePS;
  const combinedTitle = `${title || defaultTitle} | ${titlePS}`;
  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || site.siteMetadata?.image;
  const keywords = site.siteMetadata?.keywords;
  const metaSiteName = site.siteMetadata?.siteName;

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
          content: metaImage,
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
    >
      <script
        type="text/javascript"
        src="https://cookie-cdn.cookiepro.com/consent/77055ecd-ec2c-461a-bf1c-3e84d715e668/OtAutoBlock.js"
      />
      <script
        type="text/javascript"
        src="https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js"
        data-domain-script="77055ecd-ec2c-461a-bf1c-3e84d715e668"
      />
      <script type="text/javascript">{'function OptanonWrapper() { }'}</script>
    </Helmet>
  );
};
