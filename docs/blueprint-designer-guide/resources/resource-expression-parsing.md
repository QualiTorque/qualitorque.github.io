---
sidebar_position: 5
title: Resource Expression Parsing
---

# Resource Expression Parsing

Torque introduces a powerful new capability for resource filtering through expression parsing, allowing users to create more flexible and sophisticated queries using logical operators (AND, OR). This enhancement significantly expands the possibilities for selecting and matching resources based on complex criteria.

## Overview

The expression parsing feature enables users to define advanced selection criteria for resources in blueprints using a combination of logical operators. The implementation supports both AND and OR operations to provide more granular filtering capabilities.

## Key Features

### Logical Operators

#### AND Operations
AND operations are used to combine multiple criteria where all conditions must be met for a resource to match:
- All fields within the same level are treated as AND conditions
- Resources must satisfy all specified criteria to be selected

#### OR Operations  
OR operations allow selecting resources that match any of several alternative criteria:
- Use `any-of` blocks to define alternatives
- Each alternative within an `any-of` block can have its own set of attributes
- Resources matching any single alternative will be selected

## Usage Examples

### Basic OR Logic
```yaml
resources:
  vm:
    selector:
      any-of:
        - type: azure_vm
          provider-type: azure
        - type: vcenter_vm
          provider-name: lab_vcenter
```

### Complex Conditions with AND/OR
```yaml
resources:
  compute:
    selector:
      quantity: 2
      attributes:
        - region: '{{ .inputs.region }}'
      any-of:
        - type: azure_vm
          provider-type: azure
        - type: vcenter_vm
          provider-name: lab_vcenter
          attributes:
            - pool: builds
```

## Integration with Existing Features

The expression parsing capabilities integrate seamlessly with existing blueprint features:

- Works alongside existing input and parameter usage
- Compatible with dynamic selectors using `{{ .inputs }}` and `{{ .params }}`
- Complements the `labels-selector` functionality in workflows
- Supports all existing resource type and attribute definitions

## Limitations

- When using `any-of`, all attributes within that block use OR logic
- All attributes within a single criteria level use AND logic
- Complex nesting requires careful attention to grouping by logical operators