---
sidebar_position: 8
title: The CloudFormation Grain
---

The CloudFormation grain represents <ProductName />'s native support for AWS CloudFormation templates. <ProductName /> enables designers to utilize CloudFormation features for orchestrating both self-developed and community-driven CloudFormation modules in a consistent manner, making them accessible as reusable building blocks.

## Prerequisites

Before utilizing CloudFormation with <ProductName />, ensure that you have the following prerequisites in place:

1. **S3 bucket**: An S3 bucket designated for the temporary storage of large templates (required for templates exceeding 50K bytes)
2. **AWS policy**: Proper AWS permissions for CloudFormation operations

For templates exceeding 50K bytes in size, <ProductName /> requires a "template-storage" location to upload templates from a Git repository, enabling the creation of CloudFormation stacks. Templates are fetched from Git and stored in this bucket, from where they can be launched.

### Required AWS Policy

To grant <ProductName /> the necessary permissions to successfully provision resources, your credentials must include at least the following policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "BasicBucketOperations",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::<your-bucket>/*"
      ]
    },
    {
      "Sid": "BasicCfnOperations",
      "Effect": "Allow",
      "Action": [
        "cloudformation:CreateStack",
        "cloudformation:DeleteStack",
        "cloudformation:UpdateStack",
        "cloudformation:DescribeStacks",
        "cloudformation:DescribeStackEvents"
      ],
      "Resource": "*"
    }
  ]
}
```

:::info
Include any additional permissions required to launch the resources inside the template. For example, if your template uses EC2, add the appropriate EC2 permissions.
:::

## Usage example

```yaml
spec_version: 2
description: CloudFormation S3 bucket deployment

inputs:
  access_control:
    type: string
    default: 'Private'
    allowed-values: ['Private', 'PublicRead', 'PublicReadWrite']
  bucket_name:
    type: string
  agent:
    type: agent

outputs:
  bucket_arn:
    value: '{{ .grains.s3-bucket.outputs.Arn }}'
  domain_name:
    value: '{{ .grains.s3-bucket.outputs.DomainName }}'

grains:
  s3-bucket:
    kind: cloudformation
    spec:
      source:
        store: cfn-templates
        path: storage/s3-bucket.yaml
      agent:
        name: '{{ .inputs.agent }}'
      region: us-east-1
      authentication:
        - '{{ .inputs.aws_credentials }}'
      inputs:
        - AccessControl: '{{ .inputs.access_control }}'
        - BucketName: '{{ .inputs.bucket_name }}-{{ sandboxid | downcase }}'
      outputs:
        - Arn
        - DomainName
```

## Grain Spec Reference

### `region`

The `region` is a required key in the CloudFormation grain. It defines where the stack will be created.

__Example:__

```yaml
grains:
  my-stack:
    kind: cloudformation
    spec:
      region: us-west-2
```

### `source`

Please see [the grain source](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source) for more details.

### `agent`

The `agent` is now **required** for CloudFormation Grain. Please see [the grain agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent) for more details.

### `authentication`

To enable <ProductName /> to connect to the AWS account and deploy the CloudFormation template, you have two options:

1. **<ProductName /> credentials**: Authenticate with AWS access key and secret key OR AWS role ARN to be assumed by <ProductName />
2. **Service account**: Authenticate with a service account that will be attached to the runner which provisions the infrastructure

__Example - Option 1 (<ProductName /> credentials):__

```yaml
grains:
  database:
    kind: cloudformation
    spec:
      source:
        store: my-repo
        path: folder/my-cfn.yaml
      agent: 
        name: my-agent  
      authentication:
        - '{{ .inputs.aws_credentials }}'
```

__Example - Option 2 (Service account):__

```yaml
grains:
  database:
    kind: cloudformation
    spec:
      source:
        store: my-repo
        path: folder/my-cfn.yaml
      agent:
        name: my-agent 
        service-account: agent-service-account
```

:::info
The service account needs to be annotated by an AWS role ARN to be assumed by <ProductName />. If not provided, <ProductName /> will try to use the default service account of the agent.
:::

### `template-storage`

In the `cloudformation` grain, you need to specify the details of the S3 bucket serving as the template-storage for larger templates.

__Example:__

```yaml
grains:
  database:
    kind: cloudformation
    spec:
      source:
        store: my-repo
        path: folder/my-app
      template-storage:
        bucket-name: 'my-cfn-templates-bucket'
        region: 'us-east-1'
        key-prefix: 'templates/'
```

:::info
- The `template-storage` is optional, but required for templates larger than 50K bytes and when using nested stacks
- Ensure your service account or credentials have permissions to read from the bucket
- `bucket-name` and `region` are required and can be templated
- `key-prefix` is optional and defines the file path where the template will be located inside the bucket
:::

### `inputs`

Similar to blueprint inputs, CloudFormation grain `inputs` allow you to reuse the same CloudFormation module in different ways. Inputs provided to the CloudFormation grain are used when launching the CloudFormation module.

__Example:__

```yaml
grains:
  database:
    kind: cloudformation
    spec:
      source:
        store: my-repo
        path: cloudformation/rds.yaml
      inputs:
        - DBInstanceClass: '{{ .inputs.instance_type }}'
        - DBName: '{{ .inputs.database_name }}'
        - MasterUsername: '{{ .params.db_username }}'
```

### `tags`

Whenever a CloudFormation grain is launched, all resources created during the deployment process are automatically tagged with <ProductName />'s system tags, built-in tags and custom tags.

### `outputs`

Outputs are strings generated by CloudFormation during the deployment process.

__Example:__

```yaml
grains:
  database:
    kind: cloudformation
    spec:
      source:
        store: my-repo
        path: cloudformation/database.yaml
      authentication:
        - '{{ .inputs.aws_credentials }}'
      outputs:
        - DatabaseEndpoint
        - DatabasePort
        - ConnectionString
```

### `stack-name-prefix`

You can prefix all stacks created by <ProductName /> with a customized prefix to adhere to your organization standards or conventions.

__Example:__

```yaml
grains:
  my-stack:
    kind: cloudformation
    spec:
      source:
        store: my-repo
        path: cloudformation/stack.yaml
      stack-name-prefix: 'my-org-'
      region: us-east-1
```

:::info
You can also define a system parameter at the account or space level with the name `SYSTEM_CFN_STACK_NAME_PREFIX` to apply the prefix to all CloudFormation stacks in the account or space.
:::

## Drift Detection and Reconciliation

Resolving drift in AWS CloudFormation involves acknowledging the updated configuration as the intended state and adjusting the stack template accordingly. In <ProductName />, drift resolution or reconciliation entails undoing changes made to cloud resources and restoring them to the original template.

:::warning
Due to AWS limitations, if the drift includes deleted resources, <ProductName /> will not be able to restore these via reconciliation. It is advised to reconcile the stack manually via the AWS console or CLI.
:::


