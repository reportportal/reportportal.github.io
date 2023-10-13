import { ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';

export interface Post {
    id: number,
    slug: string
    title: {
      title: string
    },
    featuredImage: {
      file: {
        url: string
      }
    },
    category: string
    description: RenderRichTextData<ContentfulRichTextGatsbyReference>,
    publishDate: string
    leadParagraph: {
      leadParagraph: string
    },
    author: string
  }
}
