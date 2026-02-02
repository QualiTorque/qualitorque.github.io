---
sidebar_position: 2
title: Setup
---

# Custom Resources Setup

This guide walks you through setting up Custom Resources in <ProductName />, from defining resource types to creating resource instances that can be reserved by blueprints.

## Prerequisites

- Administrator access to <ProductName />
- Understanding of your infrastructure resource requirements
- Basic knowledge of YAML syntax for blueprint integration

## Define Resource Types

Before creating resource instances, you need to define the resource types that will be available in your inventory.

### Creating a Resource Type

1. Navigate to the **Admin** section in <ProductName />
2. Go to **Custom Resources** > **Resource Types**
3. Click **Create Resource Type**
4. Fill in the resource type details:

**Basic Information:**
- **Name**: Unique identifier for the resource type (e.g., "Ignite_Pod", "Test_Server", "Database_Instance")
- **Description**: Brief description of what this resource type represents
- **Category**: Logical grouping (e.g., "Compute", "Storage", "Network")

**Attributes:**
Define the attributes that resources of this type will have:

- **Attribute Name**: The key identifier (e.g., "cpu_cores", "memory_gb", "location")
- **Attribute Type**: Data type (string, number, boolean)
- **Required**: Whether this attribute must be specified for all resource instances
- **Description**: What this attribute represents

### Example Resource Type Configuration
import pic1 from '/img/custom-resource-1.png';

<img src={pic1} style={{width: 700}} />

## Create Resource Instances

After defining resource types, create concrete instances that can be reserved by environments.

### Adding Resource Instances

1. Go to **Custom Resources** > **Resource Inventory**
2. Click **Add Resource**
3. Select the **Resource Type** from the dropdown
4. Fill in the resource details:

**Basic Information:**
- **Resource ID**: Unique identifier for this specific resource
- **Name**: Human-readable name
- **Status**: Available, Reserved, Maintenance, etc.

**Attribute Values:**
Provide values for all required attributes defined in the resource type.

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
