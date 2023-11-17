import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SeoProps {
  title: string;
  image: string;
  description?: string;
  lang?: string;
  meta?: ConcatArray<{
    name: string;
    content: string;
    property?: string;
  }>;
}

export const Seo: FC<SeoProps> = ({ description = '', lang = 'en', meta = [], title, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const keywords = site.siteMetadata?.keywords;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={defaultTitle && `%s | ${defaultTitle}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'image',
          content: image,
        },
        {
          property: 'og:title',
          content: title,
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
          content: image,
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
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: keywords,
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
