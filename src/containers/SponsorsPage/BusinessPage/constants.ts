import { LinkedCardProps } from '@app/components/LinkedCard';

import brandVisibilityIcon from './icons/brand-visibility.svg';
import communityEngagementIcon from './icons/community-engagement.svg';
import productImprovementIcon from './icons/product-improvement.svg';
import talentAttractionIcon from './icons/talent-attraction.svg';

export const BUSINESS_CARDS: LinkedCardProps[] = [
  {
    itemTitle: 'Brand visibility',
    description:
      "Boost your brand's visibility worldwide among developers and QA experts, showcasing your dedication to innovative software development practices",
    icon: brandVisibilityIcon,
  },
  {
    itemTitle: 'Talent attraction',
    description:
      'Attract top talent by prominently displaying your commitment to investing in tools and technologies that improve software quality and development efficiency',
    icon: talentAttractionIcon,
  },
  {
    itemTitle: 'Community engagement',
    description:
      'Establish your company as a tech thought leader by engaging with the community via sponsored events, webinars, and content',
    icon: communityEngagementIcon,
  },
  {
    itemTitle: 'Product improvement',
    description:
      'Directly influence the future development of ReportPortal to better serve your business needs, ensuring the tool aligns with industry standards and practices',
    icon: productImprovementIcon,
  },
];

export const CONTACT_US_LINK = '/contact-us/sponsorship-program/business';
