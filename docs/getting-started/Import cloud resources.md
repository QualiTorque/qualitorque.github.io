---
sidebar_position: 3
title: Import Cloud Resources
---

__Torque Control plane__ helps you to accelerate migration of existing cloud resources into fully managed Torque enviornments with a few simple steps regardless of how the resources were deploy in the cloud in the first place. 

In the below article, we will cover the following steps for importing cloud resources into Torque using Terraform generation:
1. Generate **Terraform code(modules)** representing your existing deployed resources in the cloud.
2. Generate **Terraform state file** that represent the deployment status.
3. Generate **Torque blueprint** that uses the Terrafrom code as an automation grain. 
4. Import your cloud resources into a fully managed **Torque enviornment**.

:::info
NOTE: This guide will focus on AWS workloads as an example, but it's possible to use it for other cloud providers (cloud and on-prem), network providers, monitoring systems and more.
:::


![import flow](/img/tf-export.png)



## Step #1: Export your cloud resources to Terraform format using [**Terraformer**](https://github.com/GoogleCloudPlatform/terraformer)
:::info
[**Terraformer**](https://github.com/GoogleCloudPlatform/terraformer) is an open source tool created by the Waze SRE team at Google. Terraformer is a CLI tool that generates tf/json and tfstate files based on existing infrastructure (reverse Terraform). Terraformer supports large number of providers, see full list [here](https://github.com/GoogleCloudPlatform/terraformer/tree/master/docs)
:::

1. Install Terraformer using th following [installtion instructions](https://github.com/GoogleCloudPlatform/terraformer/tree/master/docs)
2. Make sure to get authenticated to your cloud provider/service of choice. This can be done using the dedicated cloud CLI or using environment variables. For example, when exporting AWS resources, you can authenticate by adding AWS_ACCESS_KEY_ID,  AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN to the terminal enviornment variables.
3. Execute terraformer with your desire command line parameters to export the desire cloud resource. It's possible to export only a subset of resources by type, name or other filters.

```cli
  terraformer import aws --resources=vpc,subnet --filter=vpc=myvpcid --regions=eu-west-1
```

The exported files will be placed in your working directory and will include the Terrafrom code and the state file for the cloud resources.

![import flow](/img/exported-tf.png)


:::info
When authnticating to AWS using SSO, make sure to add --profile="" to your CLi command to properly authenticate to AWS using Terraformer
:::


## Step #2: Import Terraform configuration into Torque
Now, that you have a code representation of your cloud resources, we will import the code and state file into Torque, this will include multiple steps:

1. Terraform module - Commit the Terraform module into your repository and onboard the repository to Torque. Auto-discover the terraform module to create a blueprint representation for the module. This will create a single grain blueprint that points to the generated Terraform module.

```yaml
  spec_version: 2
  description: Torque auto generated blueprint
  inputs:
    agent:
      type: agent
  outputs:
    s3_aws_s3_bucket_tfer--cf-templates-1uu4hi2nxisgp-eu-west-1_id:
      value: '{{ .grains.s3.outputs.aws_s3_bucket_tfer--cf-templates-1uu4hi2nxisgp-eu-west-1_id }}'
      quick: true
    s3_aws_s3_bucket_tfer--torque-demo-webapp-bucket-0anevfcj2sfv_id:
      value: '{{ .grains.s3.outputs.aws_s3_bucket_tfer--torque-demo-webapp-bucket-0anevfcj2sfv_id }}'
      quick: true
  grains:
    s3:
      kind: terraform
      spec:
        source:
          store: tf-import
          path: generated/aws/s3
        agent:
          name: '{{ .inputs.agent }}'
        outputs:
        - aws_s3_bucket_tfer--cf-templates-1uu4hi2nxisgp-eu-west-1_id
        - aws_s3_bucket_tfer--torque-demo-webapp-bucket-0anevfcj2sfv_id
      tf-version: 1.5.5
```

2. Upload the state file to your preffered Terraform backend, in this example, we've uploaded the state file to an s3 bucket.
  
![state in s3](/img/tfstate-aws.png)

## Step #3: Create a Torque enviornment using the blueprint and state file
Using the Toruqe API, use the ["Import Using Blueprint"](https://portal.qtorque.io/api_reference/#/paths/api-spaces-space_name--environments-import_using_blueprint/post) method in the following way:


```cli
  curl -L 'https://portal.qtorque.io/api/spaces/01-Development/environments/import_using_blueprint' \
  -H 'Authorization: Bearer <Torque token>' \
  -H 'Content-Type: application/json' \
  -d '{
      "environment_name": "imported-from-cloud",
      "source": {        
          "blueprint_name": "s3",
          "repository_name": "tf-import",
          "branch": "master"
      },
      "inputs": {
          "agent": "demo-dev"
      },
      "grains": [
          {
              "kind": "terraform",
              "name": "s3_bucket",            
              "backend": {
                  "type": "s3",
                  "bucket": "terraform-production-state",
                  "region": "eu-central-1",
                  "key": "terraform.tfstate"
              }
          }
      ]
  }'
```

:::info
1. Make sure to provide the Torque authentication token. This can be a short or long-token
2. The source section points to the blueprint generated and the repository name onboarded to Torque.
3. The backend section added in under the grain should point to the state file exported and uploaded to the remote backend of choice.
:::