---
sidebar_position: 1
title: Custom Resources
---

# Custom Resources

## Introduction

Torque Custom Resources enables you to reserve and manage custom resource types for your environments based on blueprint requirements. This feature allows you to define logical, physical, or any custom resource type with specific attributes, create concrete resource instances, and reserve them for environments when needed.

With Custom Resources, administrators can:

- Define custom resource types with specific attributes
- Create concrete resource instances of those types
- Allow blueprints to reserve resources based on requirements
- Access reserved resource data from blueprint grains during execution

## Key Features

- **Resource Type Definition**: Create custom resource types with configurable attributes
- **Resource Inventory Management**: Manage concrete instances of your custom resource types
- **Blueprint Integration**: Seamlessly integrate resource requirements into your blueprint specifications
- **Automatic Resource Reservation**: Automatically reserve resources based on blueprint requirements
- **Resource Data Access**: Access reserved resource information within blueprint grains and workflows

## How It Works

1. **Admin Setup**: Administrators define custom resource types and create concrete resource instances
2. **Blueprint Definition**: Blueprint authors specify resource requirements in the blueprint YAML
3. **Environment Launch**: When launching an environment, Torque automatically reserves the required resources
4. **Resource Access**: Reserved resource data becomes available to blueprint grains for use in deployment activities

## Resource Requirements in Blueprints

Custom resources are specified in blueprint YAML files using the `resources` section:

```yaml
spec_version: 2
description: Example blueprint with custom resource requirements

inputs:
  gpu_type:
    type: string
    default: L40
    allowed-values: ["A100","H100","L40"]

  gpu_quantity:
    type: string
    default: 1
    allowed-values: ["1","2","4","8"]

resources:
  gpu:
  selector:
    type: gpu
    quantity: '{{ .inputs.gpu_quantity }}'
    attributes:
      - gpu_type: '{{ .inputs.gpu_type }}'
      - serial_number: ''  # empty string is supported, null is not

grains:
  deploy:
    kind: shell
    spec:
      activities:
        deploy:
          commands:
            - 'echo "reserved resource: {{ .resources.gpu }}"'
```

## Getting Started

To start using Custom Resources:

1. **[Set up Custom Resources](./setup.md)** - Configure resource types and create resource instances
2. **[Explore Use Cases](./use-cases.md)** - Understand common scenarios and applications

## Resource Selection

Resources are reserved based on selector criteria:

- **Type**: Specify the resource type to match
- **Quantity**: Define how many resources to reserve (supports liquid expressions)
- **Attributes**: Filter resources by specific attribute values (coming in phase 2)

The system automatically selects and reserves available resources that match the specified criteria when an environment is launched.

## Next Steps

- [Setup Custom Resources](./setup.md) - Learn how to configure resource types and instances
- [Use Cases](./use-cases.md) - Discover practical applications for your infrastructure needs