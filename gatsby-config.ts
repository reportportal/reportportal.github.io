import { GatsbyConfig } from "gatsby";

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});


const config: GatsbyConfig = {
  siteMetadata: {
    title:
      'ReportPortal test automation analytics platform and real-time reporting, powered by Machine Learning',
    description:
      'Centralized test automation dashboard. Provides AI-based defects triage and real time test report dashboard.',
    keywords:
      'test automation dashboard, test automation reporting, qa automation dashboard, test automation results dashboard, test report dashboard, qa metrics dashboard, test execution report, end to end testing reporting tools, ReportPortal installation, ReportPortal integration, ReportPortal dashboard',
    siteUrl: 'https://reportportal.io/',
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
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: [
          '/contact-us/taas',
          '/contact-us/taaas',
          '/contact-us/qaaas',
          '/contact-us/saas/**',
          '/contact-us/on-premises/**',
          '/contact-us/qasp',
          '/contact-us/d4j',
          '/contact-us/hlm',
          '/contact-us/qasp/**',
          '/contact-us/d4j/**',
          '/contact-us/hlm/**',
        ],
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        serialize: ({ path }: { path: string }) => {
          return {
            url: path,
          };
        },
      },
    },
  ],
  trailingSlash: 'never',
};

export default config
