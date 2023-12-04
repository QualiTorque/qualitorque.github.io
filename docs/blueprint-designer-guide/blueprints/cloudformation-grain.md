---
sidebar_position: 15
title: The CloudFormation Grain
---

The CloudFormation grain represents Torque's native support for AWS CloudFormation templates. Torque enables designers to utilize CloudFormation features for orchestrating both self-developed and community-driven CloudFormation modules in a consistent manner, making them accessible as reusable building blocks. For a complete YAML blueprint example, refer to [Example 2: Webgame on S3 (using CloudFormation and Terraform)](/blueprint-designer-guide/blueprint-quickstart-guide#example-multi-grain-blueprint-2-web-game-on-s3-using-cloudformation-and-terraform).

# Prerequisites

Before utilizing CloudFormation with Torque, ensure that you have the following prerequisites in place:

1. An S3 bucket designated for the temporary storage of large templates.
   

For templates exceeding 50K bytes in size, Torque requires a "template-storage" location to upload templates from a Git repository, enabling the creation of CloudFormation stacks. To fulfill this requirement, you must either create a new S3 bucket or provide an existing one, which will serve as the landing area. Templates are fetched from Git and stored in this bucket, from where they can be launched.


2. An AWS policy for use of cloudformation.


To grant Torque the necessary permissions to successfully provision resources, your credentials must include at least the following policy:

```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "BasicBucketOperations",  // Sid for the template-storage bucket. If all your temaplates are smaller than 50K, this can be ommitted. 
			"Effect": "Allow",
			"Action": [
				"s3:PutObject",
				"s3:GetObject",
				"s3:DeleteObject"
			],
			"Resource": [
				"arn:aws:s3:::<your-bucket>/*" // the template-storage bucket name. 
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
		},
    {
    // Any other permissions that are required to launch the resources inside the template. For example, if your template is using EC2 you can use:
    //"Statement": [
    //  {
    //    "Action": "ec2:*",
    //    "Effect": "Allow",
    //    "Resource": "*"
    //  }
    // ]
    }
	]
}
```


### source 
Please see [the grain source](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source) for more details.

### agent
```agent``` is now **required** for CloudFormation Grain. Please see [the agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#Agent) for more details.

### authentication
To enable Torque to connect to the AWS account and deploy the CloudFormation template, you have two options:
1. Authenticate with Torque credentials (AWS access key and secret key OR AWS role ARN to be assumed by Torque)
2. Authenticate with a service account that will be attached to the runner which provisions the infrastructure. The service account needs to be annotated by an AWS role ARN to be assumed by Torque. 

Option 1:
```yaml
grains:
  database:
    kind: cloudformation
    spec:
      source:
        path: github.com/org/repo.git//cloudformation/rds
        ...
      agent: 
        name: my-agent  
      authentication:
        - credential_name or {{.inputs.credentials_input_name}}
```

Option 2:
```yaml
grains:
  database:
    kind: cloudformation
    spec:
      source:
        path: github.com/org/repo.git//cloudformation/rds
        ...
      agent:
        name: my-agent 
        service-account: agent-service-account # Optional. If not provided, Torque will try to use the default service account of the agent.

```


### Template-Storage Configuration
In the CloudFormation grain, you will need to specify the details of the S3 bucket serving as the template-storage for larger templates.
```yaml
grains:
  database:
    kind: cloudformation
    spec:
        ...
      template-storage:
         bucket-name: <name> # required, can be templated 
         region: <region> # required, can be templated
         key-prefix: <prefix> # optional, can be templated . This is the file path where the template will be located inside the bucket.
```

The template-storage is an optional element in the grain, however if you will not provide it only templates which are smaller than 50K bytes will be supported. It is also required when using nested stacks.
If you provide a bucket for template-storage, ensure that your service-account or credentials which you provided for Torque to provision your stack contain the permissions to read from the bucket as above.

### inputs​
Similar to blueprint inputs, CloudFormation grain inputs allow you to reuse the same CloudFormation module in different ways. Inputs provided to the CloudFormation grain are used when launching the CloudFormation module.

### tags​
Whenever a CloudFormation grain is launched, all resources created during the deployment process are automatically tagged with Torque's system tags, built-in tags and custom tags.

### outputs​
Outputs are strings generated by CloudFormation during the deployment process.

```yaml
grains:
  database:
    kind: cloudformation
    spec:
      source:
        path: github.com/org/repo.git//cloudformation/rds
        ...
      authentication:
        ...
      outputs:
        - agent_name
        - connection_string
```
### Example
```yaml
grains:
  CFN-S3-Bucket:
    kind: cloudformation
    spec: 
      source:
        path: https://.../AWSS3Bucket.yaml
      inputs:
        - AccessControl: '{{ .inputs.["Access Control"] }}'
        - BucketName: '{{ .inputs.["Bucket Name"] }}-{{ sandboxid | downcase }}'
      outputs:
         - Arn
         - DomainName
```

### Note about reconciling an drifted Cloudformation grain (Beta)

Resolving drift in AWS CloudFormation involves acknowledging the updated configuration as the intended state and adjusting the stack template accordingly. Conversely, in Torque, the process of drift resolution or reconciliation entails undoing changes made to cloud resources and restoring them to the original template. It is important to understand this distinction before reconciling CloudFormation grains.

Due to AWS limitations, if the drift includes deleted resources Torque will not be able to restore these via reconciliation. It is advise to reconcile the stack manually via the AWS console or CLI.

