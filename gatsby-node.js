const fs = require('node:fs');
const path = require('node:path');

const axios = require('axios');

const { config: contactUsConfigs } = require('./src/templates/contact-us/config.js');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  await axios
    .get('https://status.reportportal.io/github/stars')
    .then(response => response.data)
    .then(data => {
      fs.writeFileSync('static/github.json', JSON.stringify(data));
    });

  const blogPost = path.resolve('./src/templates/BlogPost/blog-post.js');

  const result = await graphql(
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

  const posts = result.data.allContentfulBlogPost.nodes;

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  posts.forEach(post => {
    createPage({
      path: `/blog/${post.slug}/`,
      component: blogPost,
      context: {
        slug: post.slug,
      },
    });
  });

  const ContactUsPage = path.resolve('./src/templates/contact-us/contact-us.js');

  contactUsConfigs.forEach(contactUsConfig => {
    createPage({
      path: contactUsConfig.url,
      component: ContactUsPage,
      context: {
        config: contactUsConfig,
      },
    });
  });
};
