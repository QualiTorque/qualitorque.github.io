---
sidebar_position: 4
title: Blueprint Families
---

A **blueprint family** groups related blueprints together so catalog users can choose between variations of an environment from a single catalog entry. Instead of browsing multiple individual blueprints, a user selects the family and picks the right variation for their needs.

## When to use families

Families work well when you have multiple blueprints that represent different implementations of the same environment type. Common examples:

- **Multi-cloud deployments** — the same application stack deployed to AWS, Azure, or GCP, where each variation has its own inputs and cloud-specific infrastructure
- **Environment tiers** — dev, staging, and production flavors of the same application, or small/medium/large resource configurations

Grouping these under one family keeps the catalog clean and surfaces the right options at launch time without cluttering the catalog with near-duplicate entries.

## How families work

A family is itself a valid blueprint file. It lives in the same `blueprints` folder as your other blueprints (or any folder with a `.blueprints` marker). When published to the catalog, it appears alongside regular blueprints.

The family YAML does not contain grains. Instead, it defines a `family` section that lists its **member blueprints** by name. Each member points to a blueprint YAML file in your repository. Members can have entirely different inputs, grains, and target infrastructure — they only need to represent the same logical environment. 

:::tip
Once a blueprint becomes a family member, consider unpublishing it as a standalone blueprint. If left published, it will appear twice in the catalog — once on its own and once inside the family.
:::

## Family YAML structure

```yaml
spec_version: 2

description: A blueprint family

metadata:
  display-name: My App Environments
  icon: graphics/myicon.png
  self-service: true
  blueprint-labels:
    - key: 'team'
      value: 'platform'

instructions:
  text: "Select the environment tier that matches your needs."

family:
  members:
    dev:
      source:
        store: my-repo
        path: blueprints/app-dev.yaml
    staging:
      source:
        store: my-repo
        path: blueprints/app-staging.yaml
    production:
      source:
        store: my-repo
        path: blueprints/app-production.yaml
```

### Key sections

| Section | Description |
|---|---|
| `metadata` | Same metadata fields as a regular blueprint: display name, icon, labels, and self-service flag. |
| `instructions` | Optional message shown to users in the catalog. Useful for guiding variation selection. |
| `family.members` | A named map of member blueprints. Each entry needs a `source` with `store` (repository name) and `path` (path to the blueprint YAML). |

:::info
The `family` section replaces the `grains` section. A family YAML does not deploy infrastructure itself — it delegates to its member blueprints.
:::

## Publishing a family to the catalog

Families are published the same way as regular blueprints. Once published, the family appears in the catalog and users can launch a specific member variation from it.

Families are included in catalog listings when no filter is applied or when filtering for blueprints. They are not returned when filtering specifically for workflows or IaC assets.

## Example: multi-cloud application deployment

Your platform team supports deploying the same web application to AWS, Azure, and a local on-prem Kubernetes cluster. Each deployment has different inputs (cloud credentials, region, cluster endpoint) and uses different Terraform modules. Rather than publishing three separate blueprints and leaving users to figure out which to pick, you create one family:

```yaml
spec_version: 2

description: Web app — choose your target cloud

metadata:
  display-name: Web Application
  self-service: true
  blueprint-labels:
    - key: 'app'
      value: 'web'

instructions:
  text: "Choose the cloud or local variation that matches your deployment target."

family:
  members:
    aws:
      source:
        store: platform-repo
        path: blueprints/web-app-aws.yaml
    azure:
      source:
        store: platform-repo
        path: blueprints/web-app-azure.yaml
    on-prem:
      source:
        store: platform-repo
        path: blueprints/web-app-onprem.yaml
```

Users see one **Web Application** entry in the catalog. At launch, they select the variation that targets their infrastructure. Each variation presents its own inputs — AWS users fill in region and VPC details, Azure users provide subscription and resource group, on-prem users specify the cluster endpoint.

## Related topics

- [Blueprint YAML Overview](/blueprint-designer-guide/blueprints/blueprints-overview)
- [Blueprint Publishing](/blueprint-designer-guide/blueprint-publishing)
- [Torque Assets Markers](/blueprint-designer-guide/torque-assets-markers)
