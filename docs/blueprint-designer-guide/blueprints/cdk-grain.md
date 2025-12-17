---
sidebar_position: 7
title: The CDK Grain
---

The AWS CDK grain enables you to orchestrate the deployment and management of AWS resources using the [AWS Cloud Development Kit (CDK)](https://aws.amazon.com/cdk/) as part of a <ProductName /> blueprint. This grain allows you to define, provision, and manage AWS infrastructure using familiar programming languages and the CDK toolchain.

:::info
Currently, the CDK grain supports only the Python SDK.
:::

## Overview

With the AWS CDK grain, you can:

- Deploy AWS infrastructure as code using CDK apps.
- Pass environment variables and inputs to parameterize your deployments.
- Use workspace directories to provide additional files or configuration to your CDK app.
- Control deployment agents and service accounts for secure execution.

## Example: Basic AWS CDK Grain

```yaml
spec_version: 2

inputs:
  agent:
    type: agent

grains:
  common:
    kind: aws-cdk
    spec:
      source:
        store: 'cdk-repo'
        path: 'cdk/python/dev/s3'
      agent:
        name: '{{ .inputs.agent }}'
```

In this example:

- The CDK app is sourced from the `cdk-repo` store at `cdk/python/dev/s3`.
- The deployment runs on the agent specified by the blueprint input.


## Example: Advanced AWS CDK Grain

```yaml
spec_version: 2

inputs:
  app_name:
    type: string
  branch:
    type: string
  region:
    type: string
    default: eu-west-1
    allowed-values:
    - eu-west-1
    - us-west-1
  account:
    type: string
  agent:
    type: agent

grains:
  prod-deployment:
    kind: 'aws-cdk'
    spec:
      source:
        store: 'common-cdk'
        path: 'cdk/python/aws/prod'
        branch: '{{ .inputs.branch }}'
      agent:
          name: '{{ .inputs.agent }}'
          service-account: 'prod-sa'
      workspace-directories:
        - source:
            name: 'CONFIG_REPO_PATH'
            store: 'config-repo'
      env-vars:
        - CDK_CONFIG_FILE: '$CONFIG_REPO_PATH/s3'
        - APP: '{{ .inputs.app_name }}'
        - AWS_DEFAULT_REGION: 'eu-west-1'
        - REGION: '{{ .inputs.region }}'
        - ACCOUNT_NAME: '{{ .inputs.account }}'
```

This example demonstrates:

- Using a specific branch of a CDK app from a connected store.
- Passing multiple environment variables, including dynamic values from blueprint inputs.
- Specifying both the agent and the service account for execution.
- The environment variable `CDK_CONFIG_FILE` is set, referencing a workspace directory.
- The `workspace-directories` section mounts additional files from another repository.

:::note
For more details on how to use workspace directories effectively, refer to the [Workspace Directories Documentation](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#workspace-directories).
:::

## Grain Spec Reference

### `source`

Defines where the CDK app is located. Supports:

- `store`: The name of the connected repository or asset store.
- `path`: Path to the CDK app within the store.
- `branch` (optional): Git branch to use.
- `commit` (optional): Git commit to use.
- `tag` (optional): Git tag to use.

### `agent`

Specifies the agent on which to run the CDK deployment. You can also specify a `service-account` for AWS credentials.

### `env-vars`

A list of environment variables to set for the CDK process. Supports static values and <ProductName /> templating.

### `workspace-directories`

Mounts additional directories from other stores or repositories into the CDK app's workspace. Useful for providing configuration files or dependencies.

Example:

```yaml
workspace-directories:
  - source:
      store: config-repo
      name: CONFIG_REPO_PATH
```

### `inputs`

Inputs can be used to parameterize your CDK deployment, typically referenced in environment variables or within your CDK code.

### `depends-on`

Defines dependencies on other grains, ensuring this grain runs after the specified ones.

## Notes

- The AWS CDK grain expects a valid CDK app (e.g., Python, TypeScript, etc.) in the specified path.
- Ensure that your agent has the necessary AWS credentials and permissions to deploy the resources defined in your CDK app.
- Use environment variables to pass configuration and secrets securely.
- You can use <ProductName />'s templating engine to inject dynamic values from blueprint inputs or parameters.

## See Also

- [AWS CDK Documentation](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
- [<ProductName /> Templating Engine](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#torque-templating-engine)
- [Blueprint YAML Structure](/blueprint-designer-guide/blueprints/blueprints-yaml-structure)
