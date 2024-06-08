import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import { Required } from 'utility-types';

export interface ContentfulAsset {
  url: string;
  title: string;
  width?: number;
  height?: number;
}

export interface OrganizationDto {
  id: string;
  title: string;
  primaryLogo?: ContentfulAsset;
  secondaryLogo?: ContentfulAsset;
}

export interface LinkDto {
  url: string;
  title: string;
}

export interface ImageWrapperDto {
  title: string;
  description: string;
  link: LinkDto;
  icon: ContentfulAsset;
  alt?: string;
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
    description: string;
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

export interface PricingConfigOptionDto {
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

export interface OfferingPlansQuery {
  allContentfulComparePlan: { nodes: ComparePlansDto[] };
  allContentfulSection: { nodes: OfferingPlansDto[] };
}

export interface CTA {
  type: string;
  name?: string;
  link?: LinkDto;
}

export interface ComparePlansItemDto {
  name: string;
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  plans: string;
}

export interface OfferingPlanPrice {
  title: string;
  currency: string;
  period: string;
  quarterly: number;
  yearly: number;
}

export interface OfferingPlanDto {
  title: string;
  isPopular: boolean;
  description?: string;
  features?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  pricingInfo?: string;
  price?: OfferingPlanPrice;
  cta: Required<CTA, 'link'>;
}

export interface ComparePlansDto {
  note: string;
  ctas: Required<CTA, 'link'>[];
  columns: string;
  mobileColumns: string;
  sections: { title: string; items: ComparePlansItemDto[] }[];
}

export interface OfferingPlansDto {
  title: string;
  items: OfferingPlanDto[];
}

export type SassPricingConfig = PricingConfigShared & { prices: PricingConfigDto['saas'] };

export type OnPremisesPricingConfig = PricingConfigShared & {
  prices: PricingConfigDto['onPremises'];
};

export type Discount = 'quarterly' | 'yearly';

export enum DataGTM {
  ContactUs = 'contact_us',
  BecomeSponsor = 'become_sponsor',
}
