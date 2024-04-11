/* eslint-disable import/no-import-module-exports */

import fs from 'node:fs';
import path from 'node:path';

import { GatsbyNode, NodePluginArgs } from 'gatsby';
import axios from 'axios';
import pick from 'lodash/pick';
import camelCase from 'lodash/camelCase';

import { createContactUsConfig } from './src/utils/contactUsConfig';
import { PricingConfigDto } from './src/utils/types';

interface Slug {
  slug: string;
}

interface PostTypeDto {
  allContentfulBlogPost: {
    nodes: Slug[];
  };
}

interface CaseTypeDto {
  allContentfulCaseStudy: {
    nodes: Slug[];
  };
}

interface Repos {
  total: number;
  repos: Record<string, string>;
}

interface PricingConfigTypeDto {
  allContentfulPricingConfig: {
    nodes: PricingConfigDto[];
  };
}

const validThumbnailKeys = ['default', 'high', 'maxres', 'medium', 'standard'] as const;

type ValidThumbnailKeysType = (typeof validThumbnailKeys)[number];

type Thumbnail = Record<
  ValidThumbnailKeysType,
  {
    height: number;
    width: number;
    url: string;
  }
>;

interface YoutubeVideoDto {
  id: string;
  title: string;
  duration: string;
  published_at: string;
  statistics: {
    comment_count: number;
    like_count: number;
    view_count: number;
  };
  thumbnail: Partial<Thumbnail>;
}

const acceleratorsTemplatesPath = './src/templates/accelerators';
const pricingTemplatesPath = './src/templates/pricing';
const sponsorsTemplatesPath = './src/templates/sponsorship-program';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  await axios
    .get('https://status.reportportal.io/github/stars')
    .then((response: { data: Repos }) => response.data)
    .then((data: Repos) => {
      fs.writeFileSync('static/github.json', JSON.stringify(data));
    });

  await axios
    .get('https://status.reportportal.io/youtube?count=12')
    .then((response: { data: YoutubeVideoDto[] }) => response.data)
    .then(data => {
      fs.writeFileSync('static/youtube.json', JSON.stringify(data));
    });

  const blogPost = path.resolve('./src/templates/blog-post/blog-post.tsx');

  const blogsResponse = await graphql<PostTypeDto>(
    `
      {
        allContentfulBlogPost {
          nodes {
            slug
          }
        }
      }
    `,
  );

  if (blogsResponse.errors) {
    reporter.panicOnBuild('There was an error loading your Contentful posts', blogsResponse.errors);

    return;
  }

  const posts = blogsResponse.data?.allContentfulBlogPost.nodes;

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  posts?.forEach(post => {
    createPage({
      path: `/blog/${post.slug}/`,
      component: blogPost,
      context: {
        slug: post.slug,
      },
    });
  });

  const ContactUsPage = path.resolve('./src/templates/contact-us/contact-us.tsx');

  const pricingConfigResponse = await graphql<PricingConfigTypeDto>(
    `
      {
        allContentfulPricingConfig(
          filter: { title: { eq: "SaaS and On-Premises pricing configs" } }
        ) {
          nodes {
            currency
            period
            saas {
              startup {
                yearly
                quarterly
              }
              business {
                yearly
                quarterly
              }
              enterprise
            }
            onPremises {
              openSource
              package25 {
                yearly
                quarterly
              }
              package60 {
                yearly
                quarterly
              }
              package160 {
                yearly
                quarterly
              }
            }
          }
        }
      }
    `,
  );

  if (pricingConfigResponse.errors) {
    reporter.panicOnBuild(
      'There was an error loading Contentful pricing config',
      pricingConfigResponse.errors,
    );

    return;
  }

  const pricingConfig = pricingConfigResponse.data?.allContentfulPricingConfig
    .nodes[0] as PricingConfigDto;

  createContactUsConfig(pricingConfig).forEach((config: { url: string }) => {
    createPage({
      path: config.url,
      component: ContactUsPage,
      context: {
        config,
      },
    });
  });

  const caseStudyTemplate = path.resolve('./src/templates/case-study/case-study.tsx');
  const caseStudiesResponse = await graphql<CaseTypeDto>(
    `
      {
        allContentfulCaseStudy {
          nodes {
            slug
          }
        }
      }
    `,
  );

  if (caseStudiesResponse.errors) {
    reporter.panicOnBuild(
      'There was an error loading your Contentful case studies',
      caseStudiesResponse.errors,
    );

    return;
  }

  const caseStudies = caseStudiesResponse.data?.allContentfulCaseStudy.nodes;

  caseStudies?.forEach(caseStudy => {
    createPage({
      path: `/case-studies/${caseStudy.slug}/`,
      component: caseStudyTemplate,
      context: {
        slug: caseStudy.slug,
      },
    });
  });

  const sharedPricingContext = pick(pricingConfig, 'currency', 'period');

  fs.readdirSync(acceleratorsTemplatesPath).forEach(file => {
    const key = path.basename(file, '.tsx');

    createPage({
      path: `/accelerators/${key}/`,
      component: path.resolve(path.join(acceleratorsTemplatesPath, file)),
      context: {
        ...sharedPricingContext,
        prices: pricingConfig.onPremises,
      },
    });
  });

  fs.readdirSync(pricingTemplatesPath).forEach(file => {
    const key = path.basename(file, '.tsx');

    createPage({
      path: `/pricing/${key}/`,
      component: path.resolve(path.join(pricingTemplatesPath, file)),
      context: {
        ...sharedPricingContext,
        prices: pricingConfig[camelCase(key) as keyof PricingConfigDto],
      },
    });
  });

  fs.readdirSync(sponsorsTemplatesPath).forEach(file => {
    const key = path.basename(file, '.tsx');

    createPage({
      path: `/sponsorship-program/${key}/`,
      component: path.resolve(path.join(sponsorsTemplatesPath, file)),
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }: NodePluginArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, 'src'),
      },
    },
  });
};

exports.onPostBuild = () => {
  // Remove autogenerated `sitemap-index.xml` in favor of the existing one (sitemap.xml)
  if (fs.existsSync('./public/sitemap-index.xml')) {
    fs.unlinkSync('./public/sitemap-index.xml');
  }
};
