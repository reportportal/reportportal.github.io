# ReportPortal Landing page. Dev guide

## Prerequisites

- Node.js v18 and above (\* Must Have)

## Installation

To install all project dependencies use the next command:

```bash
npm install
```

## Setup App

### Option 1:

If you already have Space_ID and Content Delivery API access token and do not have access to the Contentful profile that's enough for basic setup.

1. Create file `.env.development` (do not commit it to the VCS)
2. Fill in it with:

```bash
CONTENTFUL_SPACE_ID={SPACE_ID}
CONTENTFUL_ACCESS_TOKEN={ACCESS_TOKEN}
```

### Option 2:

Run the next command to start setup:

```bash
npm run setup
```

Use next information for prompts during setup:

1. Open Contentful and grab Space_ID from URL - https://app.contentful.com/spaces/{SPACE_ID}/home (requires [Contentful account](#ask-admin-to-give-you-credentials-to-contentful))
2. Content Management API access token (see [Get API Keys](#get-api-keys))
3. Content Delivery API access token (see [Get API Keys](#get-api-keys))

### Ask admin to give you credentials to Contentful

- https://www.contentful.com

### Get API Keys

- Get logged in to [contentful](https://www.contentful.com)
- Go to Contentful -> Settings -> API Keys -> Content Delivery/Preview Tokens
- Open one of the items and copy Content Delivery API access token and Content Preview API access token
- Go to Contentful -> Settings -> API Keys -> Content management tokens
- Generate your personal token

## Start App

1. To run the application in development mode use the following command:

```bash
npm run start
```

2. Open `http://localhost:8080/`

## Deployment

Each changes pushing (direct pushing or via merging a Pull Request) to the:

- `develop` branch will trigger the deployment to the dev environment to AWS S3 bucket.
- `master` branch will trigger the deployment to the prod environment to GitHub Pages (https://reportportal.io).

### To deploy your Git branch to dev environment (AWS S3), please follow these steps:

1. Navigate to the "Deploy to Dev (AWS S3)" action in your repository.
2. Choose "Run Workflow" from the dropdown menu.
3. Enter the name of your branch and click on the "Run workflow" button.
4. Wait for the deployment process to complete. You can check the progress in the "Actions" tab of your repository.
5. Once the deployment is finished, verify that your changes have been deployed by checking the website at the following URL: http://rpp-landing.s3-website.eu-central-1.amazonaws.com/.

That's it! Your changes should now be live on the website. If you encounter any issues during the deployment process, please consult the documentation or reach out to the project maintainers for assistance.

## Libraries

- [Gatsby](https://www.gatsbyjs.com/). Project is built on top of Gatsby to leverage its Static Site Generation feature. Make sure that you check that app works and looks correctly both in dev mode (`npm run dev`) and in production mode `npm run build && npm run serve`. You should pay attention whether elements are not shifting/jumping on the initial load in the production mode.
- [And Design](https://ant.design/components/overview/). Project uses components from Ant Design. Use them when you can to avoid creating things from scratch, but make sure to style them according [to our design](https://www.figma.com/file/JDa2JNX88qMJbdWeFpBfNz/%F0%9F%8C%90-RP-Landing-2.0). As an example check out how `Steps` component is used and styled in the [HowItWorks](./src/containers/LandingPage/HowItWorks) component

## SCSS/CSS

- To set the font use mixins from [font](./src/styles/mixins/font.scss) folder
- To set the font size and line height use [font-scale](./src/styles/mixins/font-scale.scss) mixin
- To work with different screens use [breakpoint](./src/styles/mixins/breakpoint.scss) mixin. Check styles for mobile on 360px width. To write styles for tablet use _breakpoint_ mixin with `$tablet-sm-exact: 768px` variable. To write styles for desktop use _breakpoint_ mixin with `$desktop-sm: 1239px` variable. Don't use other [screen variables](./src/styles/variables/screen.scss) unless it is really needed.
- [Don't use modular CSS](https://github.com/reportportal/reportportal.github.io/pull/380#discussion_r1298267799)
- [Follow import ordering](https://github.com/reportportal/reportportal.github.io/pull/380#discussion_r1298270084)

  ```
    import { GatsbyImage, getImage } from 'gatsby-plugin-image';
    import { renderRichText } from 'gatsby-source-contentful/rich-text';

    import { ArticleAuthor } from '../ArticleAuthor';

    import from './ArticlePreview.scss';
  ```

- [Use @use instead of @import to import mixins and variables](https://github.com/reportportal/reportportal.github.io/pull/377#discussion_r1295708603)
  ```
    @use 'src/styles/mixins' as m;
    @use 'src/styles/variables' as v;
  ```
- [Include mixins first and add empty line after them](https://github.com/reportportal/reportportal.github.io/pull/377#discussion_r1295710195)

## JS

- For links use [Link](src/components/Link) component

## SVG

- Store icons as svg with '.inline.svg' ending and then reference as it as component. Example - 'arrow.inline.svg'
