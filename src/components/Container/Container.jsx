import React from 'react';

export const Container = ({ children, as = 'div' }) => {
  const Tag = as;

  return (
    <Tag
      style={{
        maxWidth: 'var(--size-max-width)',
        margin: '0 auto',
        padding: 'var(--space-2xl) var(--size-gutter)',
      }}
    >
      {children}
    </Tag>
  );
};
