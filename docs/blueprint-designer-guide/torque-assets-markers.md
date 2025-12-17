---
sidebar_position: 18
title: Assets Markers
---

# <ProductName /> Markers for Asset Discovery

## Overview

<ProductName /> Markers is a feature designed to enhance the discovery and management of <ProductName />-related assets, including Blueprints, Environments, Instructions, Workflows, and Layouts. This capability improves asset scanning efficiency and provides better organization for repositories with multiple <ProductName /> assets.

## How It Works

<ProductName /> Markers use special marker files to indicate directories containing <ProductName /> assets. These marker files help <ProductName /> focus its scanning efforts on relevant directories, optimizing the asset discovery process.

### Marker File Implementation

- Marker files have specific extensions to indicate different <ProductName /> asset types:
  - `.environments`
  - `.blueprints`
  - `.workflows`
  - `.layouts`
  - `.instructions`
- Marker files should have no filename, only the extension (e.g., `.blueprints`)
- Place marker files in the Git directories that <ProductName /> will scan for changes and assets

:::note
For `.instructions` <ProductName /> will recursively scan for `image` and `.md` files.
:::

:::info
1. `Multiple Marker` files can not coexist in the same directory
2. <ProductName /> will still scan the default directory naming convention at root. (e.g., `blueprints/`, `environmnets/`, etc.)
:::


### Directory Structure Examples

```yaml
# devops-repo
dev/
  dont_care_dir/
    .blueprints
// highlight-start
    dev.yaml
// highlight-end


# dev-repo-1
infra/
  config/
    environment/
// highlight-start
      .environments
      env.yaml -> (infra__config__environment__dev-env.yaml)
// highlight-end
      stg/
// highlight-start
        .environments
        env.yaml -> (infra__config__environment__stg-env.yaml)
// highlight-end


# dev-repo-1
app/
  config/
    environment/
// highlight-start
      env1.yaml -> (app__config__environment__env1.yaml)
// highlight-end

```

## Optimized Scanning Process

- <ProductName /> scans only directories containing <ProductName /> marker files for associated assets
- This approach reduces scanning time and resource usage
- Eliminates the need to parse all files in the repository, improving performance

## Benefits

- Improved repository organization and asset management
- Reduced scanning time and resource usage
- Clear indication of <ProductName />-related asset locations
- Flexibility in structuring repositories with multiple <ProductName /> assets
- Enhanced support for GitOps workflows

## Implementation Considerations

- The <ProductName /> scanning algorithm has been updated to recognize and utilize marker files
- Documentation and guidelines are available for users on how to implement and use <ProductName /> markers
- Backward compatibility with existing <ProductName /> implementations is ensured

## Getting Started

To start using <ProductName /> Markers in your repository:

1. Identify the directories containing <ProductName /> assets (Blueprints, Environments, etc.)
2. Add the appropriate marker file to each directory (e.g., `.blueprints`, `.environments`)
3. Ensure your asset files are properly named and located within the marked directories
4. Commit and push your changes to the repository
5. <ProductName /> will automatically detect and use the new marker system on the next scan

## Best Practices

- Use marker files consistently across your repositories
- Organize your assets logically within your repository structure
- Avoid placing unrelated files in directories with <ProductName /> markers
- Regularly review and update your marker placement as your repository evolves

## Conclusion

<ProductName /> Markers provide an efficient and flexible way to manage <ProductName /> assets within your Git repositories. By adopting this feature, you can improve your asset organization, reduce scanning times, and enhance your overall GitOps workflow.

For more information or assistance, please refer to the <ProductName /> documentation or contact our support team.