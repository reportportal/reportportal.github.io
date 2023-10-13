import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { isAbsoluteURL } from '../../utils';
import { DOCUMENTATION_URL } from '../../utils/constants';

interface Props {
  activeClassName?: String
  children: String | React.ReactNode
  className?: String
  onClick?: (event: any) => void
  partiallyActive?: String
  to: String
}

// These links are considered SEO trusted, they should be opened in the new tab without "rel" attribute set
const TRUSTED_DOMAINS = [
  'https://tdspora.ai',
  'https://drill4j.github.io/',
  'https://healenium.io',
  DOCUMENTATION_URL,
];

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
export const Link: React.FC<Props> = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const isTrustedLink = TRUSTED_DOMAINS.some(domain => to.startsWith(domain));
  const isInternal = !isTrustedLink && !isAbsoluteURL(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (isInternal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }

  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={to}
      target="_blank"
      {...(!isTrustedLink && {
        rel: 'noopener noreferrer',
      })}
      {...other}
    >
      {children}
    </a>
  );
};
