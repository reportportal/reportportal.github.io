import fs from 'node:fs';
import path from 'node:path';

import axios from 'axios';

import { config as contactUsConfig } from './src/templates/contact-us/config';

import { GatsbyNode } from "gatsby"

type TypePost = {
  slug: string
}

type TypeData = {
  allContentfulBlogPost: {
    nodes: TypePost[]
  }
}

interface Repos {
  total: number,
  repos: {
    [key: string]: string
  }
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  await axios
    .get('https://status.reportportal.io/github/stars')
    .then((response: { data: Repos }) => response.data)
    .then((data: Repos) => {
      fs.writeFileSync('static/github.json', JSON.stringify(data));
    });

  const blogPost = path.resolve('./src/templates/BlogPost/blog-post.tsx');

  const result = await graphql<TypeData>(
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

  if (result.errors) {
    reporter.panicOnBuild('There was an error loading your Contentful posts', result.errors);

    return;
  }

  const posts = result.data?.allContentfulBlogPost.nodes;

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

  contactUsConfig.forEach((contactUsConfig: { url: string }) => {
    createPage({
      path: contactUsConfig.url,
      component: ContactUsPage,
      context: {
        config: contactUsConfig,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@containers': path.resolve(__dirname, 'src/containers'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@svg': path.resolve(__dirname, 'src/svg'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
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
