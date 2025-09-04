---
sidebar_position: 9
title: The CloudShell Grain
---

The CloudShell grain allows you to integrate Torque with Quali CloudShell. CloudShell blueprints are treated as assets in Torque, extending Torque's capabilities to manage physical resources alongside cloud and container environments.

## Prerequisites

Before using the CloudShell grain, ensure you have:

- A healthy CloudShell instance with proper connectivity
- Configured integration between Torque and CloudShell
- An agent with direct connectivity to the self-hosted CloudShell instance

For detailed setup instructions, see [Self-Managed Quali CloudShell](/admin-guide/source-control/source-managed-cloudshell).

## Environment lifecycle management

When launching an environment in Torque with the CloudShell grain, Torque will start a sandbox in CloudShell with the same duration. The lifecycle is fully synchronized:

- **Extension**: If the Torque environment is extended, the CloudShell sandbox will be extended accordingly
- **Termination**: When the Torque environment ends, the CloudShell sandbox will be terminated as well

## Usage example

```yaml
spec_version: 2
description: CloudShell integration example with physical network devices

inputs:
  agent:
    type: agent
  device_model:
    type: string
    default: "Cisco Catalyst 3850"
  network_segment:
    type: string
    default: "10.0.1.0/24"

grains:
  network_lab:
    kind: cloudshell
    spec:
      source:
        store: cloudshell-assets
        path: NetworkTestingLab
      agent:
        name: '{{ .inputs.agent }}'
      inputs:
        - device_model: '{{ .inputs.device_model }}'
        - network_segment: '{{ .inputs.network_segment }}'
        - lab_duration: "4h"
```

## Grain Spec Reference

### `source`

The `source` section specifies where the CloudShell blueprint is located. The `path` property should reference the exact CloudShell Blueprint name as it appears in your CloudShell portal.

**Example - repository:**

```yaml
cloudshell_grain:
  kind: cloudshell
  spec:
    source:
      store: cloudshell-assets
      path: NetworkTestingLab
```

:::info
The `path` must match the exact name of the CloudShell Blueprint in your CloudShell environment. Blueprint names are case-sensitive.
:::

### `agent`

The agent executing the CloudShell grain must have direct network connectivity to the self-hosted CloudShell instance. This includes access to CloudShell Portal API and the CloudShell orchestration services.

Please see [the grain agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#host) for more details.

### `inputs`

Similar to blueprint inputs, the CloudShell grain `inputs` allow you to reuse the same CloudShell Blueprint in different configurations. Inputs provided to the CloudShell grain are used when launching the CloudShell Blueprint.

:::tip
We recommend using Torque's auto-discovery capability to quickly model your CloudShell Blueprint within Torque, including all defined inputs and their types.
:::

**Example:**

```yaml
grains:
  network_lab:
    kind: cloudshell
    spec:
      source:
        store: cloudshell-assets
        path: NetworkTestingLab
      agent:
        name: '{{ .inputs.agent }}'
      inputs:
        - device_model: '{{ .inputs.device_model }}'
        - network_segment: '{{ .inputs.network_segment }}'
        - test_duration: '{{ .inputs.test_duration }}'
        - lab_environment: 'staging'
```

The inputs are passed to CloudShell when the sandbox is created, allowing you to customize the physical infrastructure deployment based on your specific requirements.

## Limitations

The CloudShell grain has the following current limitations:

- **Drift detection**: Not supported for CloudShell resources
- **Update operations**: Environment updates are not supported
- **Auto-tagging**: Automatic resource tagging is not available
- **Outputs**: CloudShell grain outputs are not currently supported
- **Unlimited environments**: Not supported for CloudShell grains

:::warning
These limitations are specific to the CloudShell grain integration. Other grain types in the same blueprint may support these features.
:::
