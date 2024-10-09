import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function ProjectTitle() {
  const {siteConfig} = useDocusaurusContext();
  return (
    siteConfig.title
  );
}