---
sidebar_position: 35
title: The OpenTofu Grain
---

OpenTofu is a fork of Terraform that is open-source, community-driven, and managed by the Linux Foundation. Since it's forked from terraform, the 2 grains structure and syntax are similar. You can use any element in the Terraform grain also for OpenTofu grains.

The main difference is the grain kind:

```yaml
grains:
  database:
    kind: opentofu
    spec:
      source:
        store: 
        path: 
      ...
```        

The rest of the syntax and structure is identical to [the terraform grain](blueprint-designer-guide/blueprints/terraform-grain.md). 