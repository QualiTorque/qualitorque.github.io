---
sidebar_position: 15
title: Policies
---

Torque role: Account admin

Policies allow you to govern the way that the self-service users use Torque, and as a result, also the cloud resources. 

Examples include:
* List of allowed AWS regions
* Require the use of private S3 buckets
* Prohibited instance types 

:::info
* Policies are triggered at environment launch.
* At this point, policies apply to Terraform grains.   
:::

## How to add a  policy

1. Open the __Administration__ page and click __Policies__.
2. Click __New Policy__ in the top right corner of the page.
3. Select the suitable policy template.
4. Give it a __Name__.
5. Select the __Scope__. __Account__ indicates that the policy applies to your entire Torque account, including all spaces.
6. Specify the appropriate values, if required. For details, see the policy's description below.

## Available policies

* __Allowed Providers__: Lists the allowed Terraform providers an environment is allowed to deploy on. For example: aws, azurerm. 
* __AWS Allowed Regions__: Lists the AWS allowed regions for deploying environments. For example, us-east-2, eu-west-1. The list of AWS regions and codes is [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions).
* __AWS Allowed Resource Types__: Lists the AWS resources types an environment is allowed to deploy. The list of allowed resource types is [here](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#skip_requesting_account_id).
* __AWS Prohibited Instance Types__: Lists the instance types (such as for EC2) that environments are not allowed to deploy on AWS. The list of AWS instance types is [here](https://aws.amazon.com/ec2/instance-types/).
* __AWS Only Private S3 Buckets__: Allows to deploy only private AWS S3 Bucket.
* __Azure Allowed Locations__: Lists the Azure allowed regions for deploying environments. The list of Azure regions and codes is [here](https://azureprice.net/regions).
* __Azure Only Private Blob Storage__: Allows to deploy only private Azure blob storage.
* __Azure Allowed Resource Types__: Lists the Azure resource types an environment is allowed to deploy.
* __Azure Prohibited VM Sizes__: Lists the VM sizes that environments are not allowed to deploy on Azure. The list of Azure VM sizes is [here](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes).

