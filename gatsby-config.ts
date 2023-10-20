import { GatsbyConfig } from "gatsby";

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});


const config: GatsbyConfig = {
  siteMetadata: {
    title:
      'ReportPortal test automation analytics platform and real-time reporting, powered by Machine Learning',
    description:
      'Provides real-time analytics in reporting, automated test results visualization and an integration with your existing test automation process. Powered by Machine Learning to categorize test automation fails, leveraging historical data. Free and Open Sourced. Fork Us on GitHub.',
    keywords: ''
  },
  plugins: [
    'gatsby-plugin-svgr-svgo',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GTM_ID,
      },
    },
  ],
  trailingSlash: 'never',
};

export default config
