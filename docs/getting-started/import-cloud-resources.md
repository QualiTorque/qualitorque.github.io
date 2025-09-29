---
sidebar_position: 4
title: Import Cloud Resources
---

__Torque Control plane__ helps you to accelerate migration of existing cloud resources into fully managed Torque environments with a few simple steps regardless of how the resources were deploy in the cloud in the first place. 

In the below article, we will cover the following steps for importing cloud resources into Torque using Terraform generation:
1. Generate **Terraform code (modules)** representing your existing deployed resources in the cloud.
2. Generate **Terraform state file** that represent the deployment status.
3. Generate **Torque blueprint** that uses the Terraform code as an automation grain. 
4. Import your cloud resources into a fully managed **Torque Environment**.

:::info
NOTE: This guide will focus on AWS workloads as an example, but it's possible to use it for other cloud providers (cloud and on-prem), network providers, monitoring systems and more.
:::


![import flow](/img/tf-export.png)


# Importing an Environment into Torque

This guide walks you through the process of importing an existing environment into Torque, starting from resource curation to final import using the API. Follow these steps to successfully onboard an environment into Torque.

#### Step 1: Curate and codify a Resource
- Start by curating the resource you want to manage in Torque. After curating, you'll obtain the Terraform files and the corresponding `tfstate` file.

#### Step 2: Edit the Providers File
- Open the `providers` file within the Terraform files and remove the following sensitive credentials:
  - Access Key
  - Secret Key
  - Token

#### Step 3: Upload Terraform Files to Git
- Upload all the Terraform files, excluding the `tfstate` file, to your Git repository. For this example, place them under the folder `terraform/curate-example`.

> ![import flow](/img/exported-tf.png)


#### Step 4: Create a Matching Blueprint
- Create a corresponding Torque blueprint for the environment, named `curate-example.yaml`. Here's an example blueprint:

  ```yaml
  spec_version: 2
  inputs:
    agent:
      type: 'agent'
  grains:
    s3:
      kind: 'terraform'
      spec:
        source:
          store: 'bps'
          path: 'terraform/curate-example'
        agent:
          name: '{{ .inputs.agent }}'
        inputs: []
  ```
- **Note**: There is no need to specify the Terraform backend in the blueprint.

#### Step 5: Create an S3 Bucket and upload the tfstate File
- Create a new S3 bucket to store the `tfstate` file, which will act as the Terraform backend for state management.
- Upload the `tfstate` file you received during the curation process to the S3 bucket created.

> ![state in s3](/img/tfstate-aws.png)


#### Step 6: Use the Import API
- To import the environment using the Torque API, make the following POST request using `curl`.
- The API response will include the `environment-id`. After importing, you will see an import step, followed by an apply step with Torque tags applied to the environment.

  ```bash
  curl -X POST "https://portal.qtorque.io/api/spaces/{space_name}/environments/import_using_blueprint" \
  -H "Content-Type: application/json" \
  -d '{
    "source": {
      "blueprint_name": "curate-example",
      "repository_name": "bps"
    },
    "environment_name": "my-env",
    "owner_email": "email@quali.com",
    "grains": [
      {
        "kind": "terraform",
        "name": "s3",
        "agent": {
          "name": "agent-name"
        },
        "backend": {
          "type": "s3",
          "bucket": "my-state-bucket",
          "region": "eu-west-1",
          "key": "terraform/terraform.tfstate"
        }
      }
    ],
    "inputs": {
      "agent": "agent-name"
    }
  }'
  ```

### Important Considerations
- **Destroying Resources**: If you are importing a resource that already exists in the cloud, keep in mind that ending the environment in Torque will destroy the resource.
- To avoid unintended deletion, you can release the environment by running the following API command using `curl`:
  
  ```bash
  curl -X DELETE "https://portal.qtorque.io/api/spaces/{space_name}/environments/{environment_id}/release?force={false/true}"
  ```
- Use the `release` API to ensure resources are not deleted during the termination process.

### Importing Terraform State from Another AWS Account
To import Terraform states from another account that cannot be accessed directly by the IAM role associated with the agent, follow these steps:

#### 1. Set Up IAM Role in Target Account
- Ensure the IAM role in the target account has a trust relationship that allows the role used in the automation account to assume the target account role.

#### 2. Configure Import Payload
- Add the following to the import payload:
  ```bash
    curl -X POST "https://portal.qtorque.io/api/spaces/{space_name}/environments/import_using_blueprint" \
    -H "Content-Type: application/json" \
    -d '{
      "grains": [
        {
          "kind": "terraform",
          "name": "s3",
          "agent": {
            "name": "agent-name"
          },
          "backend": {
            "type": "s3",
            "bucket": "my-state-bucket",
            "region": "eu-west-1",
            "key": "terraform/terraform.tfstate",
            "role-arn": "<arn-of-target-account-role>" # set up the target role-arn that has access to the bucket and key configured above
          }
        }
      ]
    }'
    ```

#### Important Notes
1. Terraform version 1.5.7 is recommended. You can set it in the blueprint or in the import request
2. You might need to use another role in the blueprint as well, using the provider-overrides feature

---

:::info
1. Make sure to provide the Torque authentication token. This can be a short or long-token
2. The source section points to the blueprint generated and the repository name onboarded to Torque.
3. The backend section added in under the grain should point to the state file exported and uploaded to the backend of choice.
:::

By following these steps, you'll be able to successfully import and manage an environment in Torque while ensuring security and state management.
