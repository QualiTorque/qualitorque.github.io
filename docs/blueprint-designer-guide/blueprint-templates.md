---
sidebar_position: 5
title: Blueprint Templates
---

A **blueprint template** is a reusable blueprint foundation you can standardize and reuse across teams. It lets you publish a blueprint skeleton with shared metadata, inputs, outputs, and grains, then adapt it for specific use cases.

:::warning Beta Feature
Blueprint Templates is currently in beta.
Behavior and schema details may change as the feature evolves.
:::

To mark a blueprint as a template, add a `template` section with `placeholders`:

```yaml
template:
  placeholders: []
```

## When to use templates

Templates are useful when you want consistency and speed while still allowing teams to customize implementation details.

Common examples:

- **Standardized infrastructure starters** - provide a base VM, Kubernetes, or application deployment pattern that teams can reuse
- **Organization guardrails** - enforce shared conventions (metadata labels, required inputs, common setup grains) in a single reusable blueprint definition

## How templates work

A template is a valid blueprint YAML file. It is authored and stored like any other blueprint, and includes the same blueprint sections (`spec_version`, `metadata`, `inputs`, `outputs`, `grains`, and so on).

The difference is the `template` block:

- `template.placeholders` indicates this blueprint is intended to be used as a template
- placeholders can be used to keep explicit extension points in the blueprint structure

This allows platform teams to maintain one reusable baseline while keeping room for per-template adaptations.

## Template YAML structure

```yaml
spec_version: 2

description: Reusable blueprint template

template:
  placeholders: []

metadata:
  display-name: Template VM Deployment
  blueprint-labels:
    - key: Category
      value: VMaaS

inputs:
  agent:
    type: agent

outputs:
  status:
    value: '{{ .grains.health-check.outputs.status }}'

grains:
  initial-setup:
    kind: shell
    spec: ...

  vm-deployment:
    kind: terraform
    spec: ...

  health-check:
    kind: shell
    depends-on: vm-deployment
    spec: ...
```

### Key sections

| Section | Description |
|---|---|
| `template.placeholders` | Marks the blueprint as a template and defines placeholder slots. |
| `metadata` | Standard catalog metadata such as display name, labels, and icon. |
| `inputs` | Parameters exposed to the end user (for example `agent`). |
| `outputs` | Values exposed from deployed grains (for example health or endpoint status). |
| `grains` | The reusable deployment flow that template consumers can adapt. |

## Example: template VM deployment blueprint

The following example shows a VM deployment blueprint marked as a template:

```yaml
spec_version: 2
description: An Ubuntu Template VM Deployment Blueprint is a standardized framework that automates the provisioning and configuration of virtual machines (VMs) across various cloud platforms and on-premises environments. It provides a reusable template for deploying VMs with predefined settings, such as operating system, resource allocation, and network configurations. This blueprint streamlines the deployment process, ensures consistency across environments, and accelerates time-to-deployment for applications and services that require VM infrastructure.

template:
  placeholders: []
  
metadata:
  blueprint-labels:
    - key: Category
      value: VMaaS
  display-name: Template VM Deployment
  icon:
    path: graphics/Ubuntu.svg

inputs:
  agent:
    type: agent

outputs:
  status:
    # placeholder. should be adapted if changed in the health-check
    value: '{{.grains.health-check.outputs.status}}'

grains:
  initial-setup:
    kind: shell
    spec:
      agent:
        name: '{{.inputs.agent}}'
      ...

  vm-deployment:
    kind: terraform
    spec:
      agent:
        name: '{{.inputs.agent}}'
      ...

  # placeholder for grain
  health-check:
    kind: shell
    depends-on: vm-deployment
    spec:
      agent:
        name: '{{.inputs.agent}}'
      ...
```

## Related topics

- [Blueprint YAML Structure](/blueprint-designer-guide/blueprints/blueprints-yaml-structure)
- [Blueprint Families](/blueprint-designer-guide/blueprint-families)
- [Blueprint Publishing](/blueprint-designer-guide/blueprint-publishing)
