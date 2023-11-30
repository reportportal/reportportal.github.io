import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';

export interface ContentfulAsset {
  url: string;
  title: string;
}

export interface OrganizationDto {
  id: string;
  title: string;
  primaryLogo?: ContentfulAsset;
  secondaryLogo?: ContentfulAsset;
}

export interface CommunityListDto {
  title: string;
  link: string;
  icon: ContentfulAsset;
  hoverIcon: ContentfulAsset;
}

export interface CarouselSlideDto {
  id: string;
  organizations: OrganizationDto[];
}

export interface BlogPostDto {
  id: number;
  slug: string;
  title: {
    title: string;
  };
  featuredImage: {
    file: ContentfulAsset;
  };
  category: string;
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  publishDate: string;
  leadParagraph: {
    leadParagraph: string;
  };
  author: string;
}

export interface BlogPostsQueryDto {
  allContentfulBlogPost: { nodes: BlogPostDto[] };
}
