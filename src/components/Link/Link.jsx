import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { isAbsoluteURL } from '../../utils';

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
export const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const isInternal = !isAbsoluteURL(to);

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
    <a href={to} target="_blank" rel="noreferrer" {...other}>
      {children}
    </a>
  );
};
