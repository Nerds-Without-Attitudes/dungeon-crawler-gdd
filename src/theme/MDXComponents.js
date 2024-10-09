import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import ProjectTitle from '@site/src/components/ProjectTitle'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<ProjectTitle>" tag to our ProjectTitle component
  // `ProjectTitle` will receive all props that were passed to `<ProjectTitle>` in MDX
  ProjectTitle,
};