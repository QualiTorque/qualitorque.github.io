---
sidebar_position: 36
title: The Terragrunt Grain
---

# The Terragrunt Grain

The Terragrunt grain is Torque's native support for Terragrunt modules. [Terragrunt](https://terragrunt.gruntwork.io/) is a thin wrapper that provides extra tools for working with multiple Terraform modules and keeping your configurations DRY. Torque allows designers to use Terragrunt-specific features to easily orchestrate self-developed and community Terragrunt modules in a standard way and share them as building blocks.

## Terragrunt Grain Specification

```yaml
grains:
  terragrunt-grain:
    kind: terragrunt
    tf-version: 1.5.5 # Optional, specify the Terraform version to use
    spec:
      source:
        path: terragrunt/s3-bucket/non-prod/us-east-1/qa/bucket
        store: my_repository
      agent:        
        name: '{{ .inputs.agent }}' # Reference an input to specify the agent
      inputs:
        - name: '{{ .inputs.bucket_name }}' # Reference an input as the input value
      outputs:
        - bucket_arn # Specify the outputs to capture from the Terragrunt module
```

In the above example, we define a Terragrunt grain named `terragrunt-grain`. The `kind` field is set to `terragrunt` to indicate that this is a Terragrunt grain.

### Terraform Version

The `tf-version` field is optional and allows you to specify the Terraform version to use for this Terragrunt module. If not specified, the latest compatible version will be used.

### Source

The `source` block specifies the location of the Terragrunt module. The `path` field should point to the root directory of the Terragrunt module, and the `store` field should reference the repository or storage location where the module is stored.

### Agent

The `agent` block specifies the agent to use for executing the Terragrunt module. In the example, we reference an input named `agent` to dynamically specify the agent.

### Inputs

The `inputs` block is a list of input values to pass to the Terragrunt module. In the example, we reference an input named `bucket_name` as the value for the input named `name`.

### Outputs

The `outputs` block is a list of output values to capture from the Terragrunt module. In the example, we specify `bucket_arn` as an output to capture.

## Blueprint Usage Example

Here's an example of how the Terragrunt grain can be used in a Torque blueprint:

```yaml
spec_version: 2

inputs:
  agent:
    type: agent
  bucket_name:
    type: string

outputs:
  output1:
    value: 'http://my-env-{{ envId }}/some/api'
    kind: link
    quick: true
  output2:
    value: '{{ .grains.terragrunt-grain.outputs.bucket_arn }}'     

grains:
  terragrunt-grain:
    kind: terragrunt
    tf-version: 1.5.5
    spec:
      source:
        path: terragrunt/s3-bucket/non-prod/us-east-1/qa/bucket
        store: test-spec2-public
      agent:        
        name: '{{.inputs.agent}}'
      inputs:
        - name: '{{.inputs.bucket_name}}'     
      outputs:
        - bucket_arn
```

In this example, we define two inputs: `agent` and `bucket_name`. We also define four outputs, including a link to an external URL, references to the input values, and a reference to the `bucket_arn` output captured from the `terragrunt-grain` grain.

The `terragrunt-grain` grain is defined with the `kind` set to `terragrunt`, and we specify the Terraform version to use (`1.5.5`). The `source` block points to the location of the Terragrunt module, and the `agent` block references the `agent` input value. The `inputs` block includes the `bucket_name` input value, and the `outputs` block specifies `bucket_arn` as an output to capture.

When this blueprint is deployed, Torque will execute the Terragrunt module specified in the `terragrunt-grain` grain, passing in the `bucket_name` input value and capturing the `bucket_arn` output value. The captured output value can then be referenced in the blueprint's outputs or used in other parts of the blueprint.
