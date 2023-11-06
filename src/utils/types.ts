export interface ContentfulAsset {
  url: string;
  title: string;
}

export interface Organization {
  id: string;
  title: string;
  primaryLogo?: ContentfulAsset;
  secondaryLogo?: ContentfulAsset;
}

export interface CarouselSlide {
  id: string;
  organizations: Organization[];
}
