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
- **Custom Resources** turned on in **Admin > Configurations > Resources Inventory** (see [Resources Inventory](/admin-guide/configurations#8-resources-inventory))

## The Custom Resources Tab

Custom resources live on the **Custom Resources** tab of **Resources → Inventory**.

| Control | Description |
|---------|-------------|
| **Search** | Finds resources by name. |
| **Filters** | Narrow the list by **Type**, **Location**, **Tags**, **Attribute**, **Reservation Status**, or **Excluded**. |
| **Metrics** | Shows or hides the metric cards: **Reservation Status** (how many resources are **Available** and **Reserved**), **Types**, and **Location**. |
| **Actions** | **New Custom Resource Type** and **View All Custom Types**. See [Define Resource Types](#define-resource-types). |
| **New Resource** | Creates a resource instance. See [Create Resource Instances](#create-resource-instances). |

The table lists each resource's **Name**, **Type**, **Reservation Status** (**Available** or **Reserved**), **Location**, and **Last Modified** date; reserved resources also show who reserved them under **Reserved By**. Use the row menu to **Edit** or **Remove** a resource.

Select a resource's **Exclude** checkbox to keep it from being reserved by environments, for example during maintenance. Torque asks for a reason, which appears as a tooltip in the table. Clear the checkbox to make the resource available again.

<!-- SCREENSHOT: portal.qtorque.io/admin/resources_inventory (Custom Resources tab) — the Reservation Status, Types, and Location cards above the resource table -->

## Define Resource Types

Before creating resource instances, you need to define the resource types that will be available in your inventory.

### Creating a Resource Type

1. Go to **Resources → Inventory** and open the **Custom Resources** tab.
2. Click **Actions** and select **New Custom Resource Type**.
3. In the **New Custom Resource Type** dialog, fill in the **Resource Type Details**:
   - **Type Name**: A unique name for the resource type (e.g., "Ignite_Pod", "Test_Server", "Database_Instance").
   - **Attributes Definitions**: Click **Add Attribute** for each attribute that resources of this type will have, and give it an **Attribute Name** (e.g., "cpu_cores", "memory_gb", "location") and an **Attribute Description**.
4. Click **Create Type**.

To review or change the types later, click **Actions → View All Custom Types**. The drawer lists every custom resource type in the account with its **Attributes**, offers **Create a New Resource Type**, and each row's menu lets you **Edit** or **Remove** a type. Removing a type deletes all custom resources that use it.

### Example Resource Type Configuration
import pic1 from '/img/custom-resource-1.png';

<img src={pic1} style={{width: 700}} />

## Create Resource Instances

After defining resource types, create concrete instances that can be reserved by environments.

### Adding Resource Instances

1. In the **Custom Resources** tab, click **New Resource**.
2. On the **Add New Resource** page, fill in the **Resource Settings**:
   - **Resource Name**: A unique, human-readable name for this specific resource.
   - **Resource Type**: Select one of the resource types you defined.
   - **Location** (optional): Where the resource resides.
   - **Description** (optional).
   - **Attributes**: Provide an **Attribute Value** for each attribute defined by the selected type.
   - **Tags**: Click **Add Tag** to add **Tag Key** / **Tag Value** pairs.
3. Click **Create Resource**.

The resource appears in the Custom Resources table. See [The Custom Resources Tab](#the-custom-resources-tab).

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
