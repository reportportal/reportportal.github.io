# ReportPortal Landing page. Dev guide

## Prerequisites
- Node.js v18 and above (* Must Have)

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
- Go to Contentful -> Settings -> API Keys ->  Content management tokens
- Generate your personal token

## Start App

1. To run the application in development mode use the following command:
```bash
npm run dev
```
2. Open `http://localhost:8080/`


## Deployment Instructions for Git Branch
## To deploy your Git branch to AWS S3, please follow these steps:

1. Navigate to the "Deploy to AWS S3" action in your repository.
2. Choose "Run Workflow" from the dropdown menu.
3. Enter the name of your branch and click on the "Run workflow" button.
4. Wait for the deployment process to complete. You can check the progress in the "Actions" tab of your repository.
5. Once the deployment is finished, verify that your changes have been deployed by checking the website at the following URL: https://reportportal.github.io/.

That's it! Your changes should now be live on the website. If you encounter any issues during the deployment process, please consult the documentation or reach out to the project maintainers for assistance.
