if (process.env.STAGING) {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}.staging`,
  });
} else {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}

module.exports = {
  siteMetadata: {
    title:
      'ReportPortal test automation analytics platform and real-time reporting, powered by Machine Learning',
    description:
      'Centralized test automation dashboard. Provides AI-based defects triage and real time test report dashboard.',
    keywords:
      'test automation dashboard, test automation reporting, qa automation dashboard, test automation results dashboard, test report dashboard, qa metrics dashboard, test execution report, end to end testing reporting tools, ReportPortal installation, ReportPortal integration, ReportPortal dashboard',
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
