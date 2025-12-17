import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Create a component that fetches the config value
const ProductName = () => {
  const { siteConfig } = useDocusaurusContext();
  return <>{siteConfig.customFields.productName}</>;
};

export default {
  // Re-use the default mapping (tags like <a>, <img>, etc.)
  ...MDXComponents,
  // Map your custom variables to tags
  ProductName,
};
