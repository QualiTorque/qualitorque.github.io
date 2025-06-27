---
sidebar_position: 15
title: The Terragrunt Grain
---

# The Terragrunt Grain

The Terragrunt grain is Torque's native support for [Terragrunt](https://terragrunt.gruntwork.io/) modules. Terragrunt is a thin wrapper for Terraform that provides extra tools for working with multiple Terraform modules and keeping your configurations DRY. Torque allows designers to use Terragrunt-specific features to easily orchestrate self-developed and community Terragrunt modules in a standard way and share them as building blocks.

## Tools and technologies
The following tools and technologies are installed out of the box on our agents in the Kubernetes pods and can be used when writing Terragrunt grain scripts (pre/post, etc.):

- terragrunt
- terraform
- git
- python3
- pip3
- jq
- docker-compose
- curl
- awscli
- kubectl
- helm
- opa

## Grain Spec Reference

### `source`
The `source` block specifies the location of the Terragrunt module. The `path` field should point to the root directory of the Terragrunt module, and the `store` field should reference the repository or storage location where the module is stored.

```yaml
grains:
  terragrunt-grain:
    kind: terragrunt
    spec:
      source:
        path: terragrunt/s3-bucket/non-prod/us-east-1/qa/bucket
        store: my_repository
```

### `agent`
Please see [the grain agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent) for more details. The agent block specifies the agent to use for executing the Terragrunt module. You can reference an input to dynamically specify the agent.

```yaml
agent:
  name: '{{ .inputs.agent }}'
```

### `inputs`
The `inputs` block is a list of input values to pass to the Terragrunt module. You can reference blueprint inputs or use static values. Inputs are passed as variables to the underlying Terraform modules managed by Terragrunt.

```yaml
inputs:
  - name: '{{ .inputs.bucket_name }}'
  - region: 'us-east-1'
```

### `outputs`
The `outputs` block is a list of output values to capture from the Terragrunt module. These outputs can be referenced in other grains or in the blueprint outputs.

```yaml
outputs:
  - bucket_arn
```

### `tf-version`
The `tf-version` field is optional and allows you to specify the Terraform version to use for this Terragrunt module. If not specified, the latest compatible version will be used.

```yaml
tf-version: 1.5.5
```

### `env-vars`
Environment variables declared in the Terragrunt grain will be available during both deployment and destroy phases.

```yaml
env-vars:
  - AWS_PROFILE: my-profile
  - CUSTOM_TOKEN: '{{ .params.token }}'
```

### `scripts`
Torque provides the ability to execute custom scripts before or after Terragrunt commands. The available script hooks are:
- pre-tf-init: Runs before `terragrunt init`
- post-tf-plan: Runs after `terragrunt plan`
- pre-tf-destroy: Runs before `terragrunt destroy`

Example:
```yaml
scripts:
  pre-tf-init:
    source:
      store: scripts-repo
      path: scripts/authenticate.sh
    arguments: '{{ .inputs.ACCOUNT_ID }}'
```

:::info
Scripts should be stored next to your IaC code to be used under the scripts section.
:::

### `auto-approve`
The `auto-approve` flag is used to automatically approve and apply changes without requiring manual confirmation. By default, Torque will apply the Terragrunt module with auto-approval. To require manual approval, set `auto-approve: false`.

```yaml
auto-approve: false
```

## Usage Example

Below is a complete example of a Torque blueprint using a Terragrunt grain:

```yaml
spec_version: 2
description: Example blueprint using Terragrunt grain

inputs:
  agent:
    type: agent
  bucket_name:
    type: string

outputs:
  bucket_arn:
    value: '{{ .grains.terragrunt-grain.outputs.bucket_arn }}'
    kind: string

grains:
  terragrunt-grain:
    kind: terragrunt
    tf-version: 1.5.5
    spec:
      auto-approve: true
      source:
        path: terragrunt/s3-bucket/non-prod/us-east-1/qa/bucket
        store: my_repository
      agent:
        name: '{{ .inputs.agent }}'
      inputs:
        - name: '{{ .inputs.bucket_name }}'
      outputs:
        - bucket_arn
      env-vars:
        - AWS_PROFILE: my-profile
      scripts:
        pre-tf-init:
          source:
            store: scripts-repo
            path: scripts/authenticate.sh
          arguments: '{{ .inputs.agent }}'

```

## Best Practices and Notes
- Use blueprint inputs to make your Terragrunt modules reusable and dynamic.
- Outputs from Terragrunt grains can be referenced in other grains or blueprint outputs.
- Use scripts to handle authentication or custom logic before/after Terragrunt commands.
- Always validate and adjust the generated blueprint YAML before running it, especially the outputs section, to ensure it behaves as expected.

:::tip
For more information on Terragrunt, see the [official documentation](https://terragrunt.gruntwork.io/docs/).
:::
