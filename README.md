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

- Run `npm run setup`
- Use next information for prompts during setup:

1. Open Contentful and grab Space_ID from URL - https://app.contentful.com/spaces/{SPACE_ID}/home (requires [Contentful account](#ask-admin-to-give-you-credentials-to-contentful))
2. Content Management API access token (see [Get API Keys](#get-api-keys))
3. Content Delivery API access token (see [Get API Keys](#get-api-keys))

### Ask admin to give you credentials to Contentful
- https://www.contentful.com

### Get API Keys
- Get logged in to contentful https://www.contentful.com
- Go to Contentful -> Settings -> API Keys -> Content Delivery/Preview Tokens
- Open one of the items and copy Content Delivery API access token and Content Preview API access token
- Go to Contentful -> Settings -> API Keys ->  Content management tokens
-  Generate your personal token

## Start App

1. To run the application in development mode use the following command:
```bash
npm run dev
```
2. Open `http://localhost:8080/`
