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

export interface ImageWrapperDto {
  title: string;
  description: string;
  link: string;
  icon: ContentfulAsset;
  subTitle?: string;
  hoverIcon?: ContentfulAsset;
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

interface PricingConfigOptionDto {
  yearly: number;
  quarterly: number;
}

export interface PricingConfigShared {
  currency: string;
  period: string;
}

export interface PricingConfigDto extends PricingConfigShared {
  currency: string;
  period: string;
  saas: {
    startup: PricingConfigOptionDto;
    business: PricingConfigOptionDto;
    enterprise: string;
  };
  onPremises: {
    openSource: string;
    package25: PricingConfigOptionDto;
    package60: PricingConfigOptionDto;
    package160: PricingConfigOptionDto;
  };
}

export type SassPricingConfig = PricingConfigShared & { prices: PricingConfigDto['saas'] };

export type OnPremisesPricingConfig = PricingConfigShared & {
  prices: PricingConfigDto['onPremises'];
};

export type Discount = 'quarterly' | 'yearly';
