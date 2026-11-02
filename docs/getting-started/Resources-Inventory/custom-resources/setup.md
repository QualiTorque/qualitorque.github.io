---
sidebar_position: 2
title: Setup
---

# Custom Resources Setup

This guide walks you through setting up Custom Resources in Torque, from defining resource types to creating resource instances that can be reserved by blueprints.

## Prerequisites

- Administrator access to Torque
- Understanding of your infrastructure resource requirements
- Basic knowledge of YAML syntax for blueprint integration

## Define Resource Types

Before creating resource instances, you need to define the resource types that will be available in your inventory.

### Creating a Resource Type

1. Go to **Resources → Inventory** and open the **Custom Resources** tab.
2. Click **Actions** and select **Create a New Resource Type**.
3. In the **Create Custom Resource Type** dialog, fill in the **Resource Type Details**:
   - **Type Name**: A unique name for the resource type (e.g., "Ignite_Pod", "Test_Server", "Database_Instance").
   - **Attribute Definitions**: Click **Add Attribute** for each attribute that resources of this type will have, and give it an **Attribute Name** (e.g., "cpu_cores", "memory_gb", "location") and an **Attribute Description**.
4. Click **Create**.

To review or change the types later, click **Actions → View All Resource Types**. The drawer lists every custom resource type in the account, and each row's menu lets you **Edit** or **Remove** a type. Removing a type deletes all custom resources that use it.

### Example Resource Type Configuration
import pic1 from '/img/custom-resource-1.png';

<img src={pic1} style={{width: 700}} />

## Create Resource Instances

After defining resource types, create concrete instances that can be reserved by environments.

### Adding Resource Instances

1. In the **Custom Resources** tab, click **Create New Resource**.
2. In the **Create a New Resource** dialog, fill in the **Resource Settings**:
   - **Resource Name**: A unique, human-readable name for this specific resource.
   - **Resource Type**: Select one of the resource types you defined.
   - **Location** (optional): Where the resource resides.
   - **Description** (optional).
   - **Attributes**: Provide an **Attribute Value** for each attribute defined by the selected type.
   - **Tags**: Click **Add Tag** to add **Tag Key** / **Tag Value** pairs.
3. Click **Create Resource**.

The resource appears in the Custom Resources table with its **Type**, **Location**, **Reservation Status** (**Available** or **Reserved**), and **Reserved By**. Use the row menu to **Edit** or **Remove** a resource, and tick **Excluded** to keep a resource from being reserved by environments.

### Example Resource Instance

import pic2 from '/img/custom-resource-2.png';

<img src={pic2} style={{width: 500}} />

## Blueprint Integration

Once resources are set up, they can be used in blueprints.

### Basic Blueprint Configuration

Add a `resources` section to your blueprint YAML:

```yaml
spec_version: 2
description: Blueprint with custom resource reservation

resources:
  image:
    selector:
      quantity: 2
      type: 'AWS Image'
      attributes:
        - location: 'us-west-2'
```

### Dynamic Resource Type Selection

You can set the resource `selector.type` dynamically instead of hard-coding it.

Resource type resolution supports values from:

- `inputs`
- `params`

This is useful when the same blueprint should allow different approved resource types per environment, user input, or policy-driven parameter values.

When using dynamic values, make sure the resolved type name exactly matches an existing Custom Resource Type in your space.

Example:

```yaml
resources:
  compute:
    selector:
      type: '{{ .params.allowed-compute-type }}'
      quantity: 1
      attributes:
        - location: 'us-west-2'
```

You can use either `params` or `inputs` expressions for `selector.type`, depending on how your blueprint is designed.

### Resource Access in Grains

Access reserved resource data in your grains:

```yaml
grains:
  deploy:
    kind: shell
    spec:
      activities:
        deploy:
          commands:
            - "echo Reserved resources: {{ .resources.image }}"
```

### Validate Resource Setup

1. **Check Resource Availability**: Ensure resource instances are marked as "Available"
2. **Test Blueprint Validation**: Validate blueprints that use custom resources

### Test Resource Reservation

1. Create a test blueprint with resource requirements
2. Launch an environment using the blueprint
3. Verify resources are properly reserved
4. Check that resource data is accessible in grains

## Configuration Best Practices

### Resource Type Design

- **Consistent Naming**: Use clear, consistent naming conventions
- **Meaningful Attributes**: Include attributes that are actually needed by blueprints
- **Logical Grouping**: Organize resource types into logical categories

### Resource Instance Management

- **Adequate Inventory**: Maintain sufficient resource instances for demand
- **Regular Maintenance**: Keep resource status updated
- **Monitoring**: Track resource utilization and availability

### Blueprint Integration

- **Input Validation**: Use appropriate input types for resource selection
- **Error Handling**: Include proper error handling for resource access
- **Documentation**: Document resource requirements clearly

## Troubleshooting

### Common Issues

**Resource Type Not Found**
- Verify the resource type name matches exactly
- Check that the resource type is enabled for the space
- Ensure proper permissions are configured

**Resource Reservation Failed**
- Check that sufficient resources are available
- Verify resource status is "Available"
- Review quantity requirements vs. available instances

**Resource Data Not Accessible**
- Confirm resource reservation was successful
- Check liquid expression syntax
- Verify attribute names match resource type definition

### Monitoring Resource Usage

1. **Resource Dashboard**: Monitor resource utilization and availability
2. **Reservation History**: Track which environments reserved which resources
3. **Capacity Planning**: Analyze usage patterns for capacity planning

## Next Steps

- [Explore Use Cases](./use-cases) - Understand practical applications
