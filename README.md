# Start Up The Project

## Prerequisites
- Node JS V18 (* Must Have)
---
## Ask admin to give you credentials to Contentful
- https://www.contentful.com
---

## Get API Keys
- Get logged in to contentful https://www.contentful.com
- Go to Contentful -> Settings -> API Keys -> Conent Delivery/Preview Tokens
- Open one of the items and copy Content Delivery API - access token and  Content Preview API - access token
- Go to Contentful -> Settings -> API Keys ->  Content management tokens
-  Generate your personal token
---

## Setup App

- Run `npm run setup` 
- Use Next Information For Prompts During Setup

---
 1. SpaceID https://app.contentful.com/spaces/SPACE_ID/home (open contentfull and grab space id from url)
 2. Content Management API access token (STEP: Get API Keys)
 3. Content Delivery API access token (STEP: Get API Keys)


 ## Start App
 `npm run dev`

 App to listens to `8080` Port
