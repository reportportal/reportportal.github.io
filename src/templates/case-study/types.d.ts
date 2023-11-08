import {
  RenderRichTextData,
  ContentfulRichTextGatsbyReference,
} from 'gatsby-source-contentful/rich-text';

export interface CaseStudyProps {
  contentfulCaseStudy: CaseStudy;
}

export interface CaseStudy {
  benefitsResults: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  challenges: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  industry: string;
  highlights: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  title: string;
}
