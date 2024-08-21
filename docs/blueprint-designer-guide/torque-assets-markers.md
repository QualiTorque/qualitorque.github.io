---
sidebar_position: 18
title: Torque Assets Markers
---

# Torque Markers for Asset Discovery

## Overview

Torque Markers is a feature designed to enhance the discovery and management of Torque-related assets, including Blueprints, Environments, Instructions, Workflows, and Layouts. This capability improves asset scanning efficiency and provides better organization for repositories with multiple Torque assets.

## How It Works

Torque Markers use special marker files to indicate directories containing Torque assets. These marker files help Torque focus its scanning efforts on relevant directories, optimizing the asset discovery process.

### Marker File Implementation

- Marker files have specific extensions to indicate different Torque asset types:
  - `.environments`
  - `.blueprints`
  - `.workflows`
  - `.layouts`
  - `.instructions`
- Marker files should have no filename, only the extension (e.g., `.blueprints`)
- Place marker files in the Git directories that Torque will scan for changes and assets

:::note
For `.instructions` Torque will recursively scan for `image` and `.md` files.
:::

:::info
1. `Multiple Marker` files can not coexist in the same directory
2. Torque will still scan the default directory naming convention at root. (e.g., `blueprints/`, `environmnets/`, etc.)
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

- Torque scans only directories containing Torque marker files for associated assets
- This approach reduces scanning time and resource usage
- Eliminates the need to parse all files in the repository, improving performance

## Benefits

- Improved repository organization and asset management
- Reduced scanning time and resource usage
- Clear indication of Torque-related asset locations
- Flexibility in structuring repositories with multiple Torque assets
- Enhanced support for GitOps workflows

## Implementation Considerations

- The Torque scanning algorithm has been updated to recognize and utilize marker files
- Documentation and guidelines are available for users on how to implement and use Torque markers
- Backward compatibility with existing Torque implementations is ensured

## Getting Started

To start using Torque Markers in your repository:

1. Identify the directories containing Torque assets (Blueprints, Environments, etc.)
2. Add the appropriate marker file to each directory (e.g., `.blueprints`, `.environments`)
3. Ensure your asset files are properly named and located within the marked directories
4. Commit and push your changes to the repository
5. Torque will automatically detect and use the new marker system on the next scan

## Best Practices

- Use marker files consistently across your repositories
- Organize your assets logically within your repository structure
- Avoid placing unrelated files in directories with Torque markers
- Regularly review and update your marker placement as your repository evolves

## Conclusion

Torque Markers provide an efficient and flexible way to manage Torque assets within your Git repositories. By adopting this feature, you can improve your asset organization, reduce scanning times, and enhance your overall GitOps workflow.

For more information or assistance, please refer to the Torque documentation or contact our support team.