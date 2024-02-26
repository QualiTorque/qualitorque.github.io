---
sidebar_position: 1
title: The layout yaml
---


With the layout yaml file, you can devops to customize the way end users see resources and their properties, both on the table view as well as the resource cards (catalog).

Example use-cases:
- Hide specific resources from the end users view due to security considerations or simplicity
- Only show specific resources
- Customize the card view of a resource - the icon and attributes which will be shown

## Referencing layout for a blueprint

Layout is a separate yaml that will be referenced from the blueprint yaml like so:

```yaml
spec_version: 2
description: ...
layout:
  source:
    store:
    path:
  exclude-from-layout:  # optional
    - grain_name_1
    - grain_name_2
```

- The **layout** element is where the blueprint references the layout that will be applied to environments created from it.
  - *source* is similart to the source element in the blueprint yaml. See [source](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source) for more details.

- The **exclude-from-layout** element is optional, use it in case you need to apply the layout only to part of the grains but not all of them.


## Layout structure

```yaml my_layout.yaml

kind: layout
description: "layout for ..."

table:
  hide:
    resource-types:
      - "aws_e2_instance"
      - "aws_bucket"
      - "AWS::BUCKET"
      - "*"
```

The main entries in the file are the "table" and "catalog" - each affecting the relevant view. Currently, only "table" is supported, but resources hidden will also be hidden from the resource cards.
- **hide**: resource types listed under hide will be invisible in the relevant view.
- **resource-types** is a list of strings which must be equivalent to the resource type of the resource in the grain. Note that this depends on the IaC technology which provisioned the resource. For example, an EC2 instance provisioned by terraform will have the type "aws_ec2_instance" while the same EC2 if provisioned by cloudformation will have the type "AWS::EC2::Instance".
- "*" is a legitimate value, means to hide all resources from the table view.

Users with VIEW_ENVIRONMENT_INFRASTRUCTURE permission set to true (by default, all users) can turn off the layout from the different views by using the toggle:

> ![Locale Dropdown](/img/layouts_toggle.png)
