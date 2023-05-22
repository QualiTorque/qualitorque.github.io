---
sidebar_position: 27
title: The CloudShell Grain
---

The CloudShell grain allows to integrate Torque with Quali CloudShell. CloudShell blueprints are treated as assets in Torque. This integration allows to extend Torque capabilities to manage physical resources. 

When launching an enviorment in Torque with the CloudShell grain, Torque will start a sandbox in CloudShell with the same duration. If the Torque enviorment is extended the CloudShell sandbox will be extended accordingly. And when the Torque enviorment ends the CloudShell sandbox will be terminated as well.

Note that to use the CloudShell grain it's requiered to have a healthy CloudShell instance and to properly configure the integration. For details, see [Self-Managed Quali CloudShell](/admin-guide/source-control/source-managed-cloudshell).

### source 
The 'path' property of the source section should reference the CloudShell Blueprint name.
Please see [the grain source](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source) for more details.

### agent
The agent needs to have direct connectivity with the self-hosted CloudShell instance.
Please see [the grain agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent) for more details.

### inputs
Similar to blueprint inputs, the CloudShell grain input allows you to reuse the same CloudShell Blueprint in different ways. Inputs provided to the CloudShell grain are used when launching the CloudShell Blueprint. We recommend using Torque's auto-discovery capability to quickly model your CloudShell Blueprint within Torque including all defined inputs.

Example:

```yaml
grains:
  database:
    kind: cloudshell
    spec:
      source:
        store: local_cs_assets 
        path: cs_bp     
      agent:
      ...
      inputs:
        - input1: '{{ .inputs.input1 }}' 
        - input2: '{{ .inputs.input2 }}' 
        - input3: 'some value'        
```

### limitations  

Drift, Update, Auto-Tagging and Outputs are currently not supported for by the CloudShell grain. And also Unlimited environments not supported by the CloudShell grain.
