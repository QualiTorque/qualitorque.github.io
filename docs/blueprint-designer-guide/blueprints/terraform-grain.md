---
sidebar_position: 14
title: The Terraform Grain
---

The Terraform grain is Torque's native support for HashiCorp Terraform modules. Torque allows designers to use Terraform-specific features to easily orchestrate self-developer and community Terraform modules in a standard way and share them with others as building blocks. For a full blueprint yaml example, see the examples in section [Create a multi-asset blueprint](/blueprint-designer-guide/blueprint-quickstart-guide#option-b-create-a-multi-asset-blueprint-in-your-source-control-repository).

Note that to deploy Terraform modules, you will need to authenticate Terraform on the Kubernetes cluster. For details, see [Terraform EKS Authentication](/torque-agent/service-accounts-for-aws), [Terraform AKS Authentication](/torque-agent/service-accounts-for-azure), or [Terraform GKE Authentication](/torque-agent/service-accounts-for-gcp).

## Tools and technologies
The following tools and technologies are installed out of the box on our agents in the Kubernetes pods and can be used when writing grain scripts (pre/post, etc.):

- dotnet
- terraform
- git
- python3
- pip3
- jq
- docker-compose
- curl|- hcl2json
- awscli
- kubectl
- helm
- opa

## source 
Please see [the grain source](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source) for more details.

## agent
Please see [the grain agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent) for more details.

## authentication
To authenticate with AWS and deploy the terraform module, Torque will try to use the default service account configured for the selected agent. You can also supply different credentials in the  grain's ```authentication``` section. This is done by referencing a [credential](/admin-guide/credentials) that contains these authentication details. There are two ways to specify the credential, literally by name or using an input:

```yaml
grains:
  database:
    kind: terraform
    spec:
      source:
        store: infra 
        path: terraform/rds
      authentication:
        - credential_name or {{.inputs.credentials_input_name}} 
```        

## provider-overrides

The `provider-overrides` block allows you to dynamically inject provider blocks with custom attributes to Terraform grains. This is useful when you need to make modules "runnable" or "testable" in different cloud environments.

To use provider overrides, add a `provider-overrides` block to the Terraform grain spec:

```yaml
grains:
  database:
    kind: terraform
    spec:
      source: ..
      provider-overrides:
        - name: aws # in case no provider block is defined in the tf configuration
          source: hashicorp/aws
          version: ~>5.0.0 
          attributes:
            region: us-east-1
            assume_role: # the mounted service-account should have permissions to assume role
              role_arn: "arn:aws:iam::{{ .inputs.target-account }}:role/role-name"
        - name: aws
          source: hashicorp/aws
          version: ~>5.0.0 # Optional 
          attributes:
            alias: ue2
            region: us-east-2
      
      source: ...
      agent: ...
      inputs: ...
      outputs: ...
```

The `provider-overrides` block is a list where each item has:

- `name`: A unique name for the provider
- `source`: The source location for the provider (e.g. `hashicorp/aws`)
- `version` (optional): The version constraint for the provider
- `attributes`: Key/value attributes to set on the provider block

This will generate the following Terraform code:

```hcl
terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~>5.0.0" 
    }   
  }
}

provider {
 "aws": [{
    region      = "us-east-1"
    assume_role {
      role_arn = "arn:aws:iam::{{ .inputs.target-account }}:role/role-name"
    }
  },
  {
    alias       = "ue2" 
    region      = "us-east-2"
  }]
}
```

The `attributes` map allows setting any attributes on the generated provider blocks. Note that there is no schema validation on these attributes.

Liquid templating is supported in the `attributes` values, allowing blueprint inputs to be referenced like `{{ .inputs.target-account }}`.


## backend support

When launching the environment, Torque creates a tfstate file for each Terraform grain in the blueprint. By default, the state is saved locally on the PVC of the grain runner (volume for Docker agents). However, Torque allows you to optionally choose to save the terraform state in a backend of your choice. Torque supports the following backends: __[S3](https://developer.hashicorp.com/terraform/language/settings/backends/s3)__, __[gcs](https://developer.hashicorp.com/terraform/language/settings/backends/gcs)__, __[azurerm](https://developer.hashicorp.com/terraform/language/settings/backends/azurerm)__, __[http](https://developer.hashicorp.com/terraform/language/settings/backends/http)__, and __[remote](https://developer.hashicorp.com/terraform/language/backend/remote)__.

__Prerequisites:__
* The backend must already exist. Torque will not create the backend if it doesn't exist.
* RoleARN in the `service-account` or `authentication` block, must have access permissions to the backend specified.

Based on the `backend` block in the blueprint definition, Torque will create an override file that contains the backend configurations.

__Example__:

```yaml
grains:
  database:
    kind: terraform
    spec:
      ...
      backend:
        type: "s3"
        bucket: "my-bucket-name"
        region: "us-east-1"
        key-prefix: "folder1/folder2"
``` 

__Properties__:
* __type__: `s3`, `azurerm`, `gcs`, `http`, `remote`
* __bucket__: Mandatory for `s3` and `gcs`
* __region__: Mandatory for `s3`
* __resource-group-name__ : Mandatory for `azurerm`
* __storage-account-name__: Mandatory for `azurerm`
* __container-name__: Mandatory for `azurerm`
* __base-address__: Mandatory for `http`
* __organization__: Mandatory for `remote`
* __workspaces__: Mandatory for `remote`
* __key-prefix__: Optional. tfstate file path in the backend storage. Relevant for `s3`, `azurerm`, `gcs`. 
   * s3, Azure Blobs & GCS have a key name limit of 1024 ascii chars

### s3

```yaml
      backend:
        type: "s3"
        bucket: "my-bucket-name"
        region: "us-east-1"
        key-prefix: folder1/folder2"
``` 

### azurerm

```yaml
      backend:
        type: "azurerm"
        resource-group-name: "my_rg"
        storage-account-name: "terraform123abc"
        container-name: "terraform-state"
        key-prefix: folder1/folder2"
```

### gcs

```yaml
      backend:
        type: "gcs"
        bucket: "my-bucket-name"
        key-prefix: "folder1/folder2"
```

### http

```yaml
      backend:
        type: "http"
        base-address: "http://myrest.api.com/foo"
```

### remote

```yaml
      backend:
        type: 'remote'
        hostname: 'app.terraform.io'
        token: '{{ params.my_token }}'
        organization: 'my_org'
        workspaces:
          - name: 'my_workspace' # IMPORTANT: only one (name or prefix) is needed in each workspace element
            prefix: 'my_prefix'
```

`remote` token options:

* Using the `token` field in the `remote` backend definition is best practice.
* "TF_TOKEN" `env_var`, followed by the hostname (with replace of '.' in '_') is an alternative way to provide a token.
  * For example for the host 'app.terraform.io', the env-var name should be `TF_TOKEN_app_terraform_io`

Note:

Torque uses a "1 to many" model, meaning that one blueprint definition is used to launch many standalone environments. When using a backend for Terraform grains, it is important to ensure that each live instance of the grain has its own unique tfstate file, so Torque will auto-generate the tfstate file name. 

For s3, gcs, azurerm backends, the tfstate file location will be: 

* The format when the `key-prefix` is not defined in the blueprint:
  ```yaml
  torque-remote-state/{environmentId}_{grainName}.tfstate
  ```
* The format when `key-prefix` is defined in the blueprint: 
  * Using the optional “key-prefix” property the blueprint designer can choose the folder where the tfstate file will be located. 
   ```yaml
   {key-prefix}/{environmentId}_{grainName}.tfstate
   ```
* For `http` backend the tfstate file address will be:
   ```yaml
   {base-address}/{environmentId}_{grainName}
   ```


__Cleaning up the tfstate file when the Terraform grain is destroyed:__

When destroying a Terraform environment, Terraform does not delete the tfstate file but rather leaves behind an empty file. To clean up the leftovers, set a file retention policy on the remote storage to ensure the removal of files that have not been recently accessed. Since Torque runs drift detection on a 1-hour schedule, the tfstate file will be considered as “accessed” by the remote storage when running drift detection. And when the Torque environment ends, the tfstate file will not be “accessed” anymore by Torque. 

## version 
Torque provides the flexibility to choose a specific Terraform version with which the Terraform module will be deployed (minimum supported version is 0.14, last version supported is 1.5.5). Otherwise, you can use the [custom-grain option](/blueprint-designer-guide/blueprints/custom-grain).

```yaml
grains:
  hello_world:
    kind: terraform
    spec:
      version: 1.5.5
      source:
        store: terraform
        path: hello
      ...
```

## inputs
Similar to blueprint inputs, the Terraform grain input allows you to reuse the same Terraform module in different ways. Inputs provided to the Terraform grain are used when launching the Terraform module. Terraform grain inputs should be listed in the order defined in the module's variables.tf file. We recommend using Torque's auto-discovery capability to quickly model your Terraform modules within Torque including all defined inputs.

Every value that goes to the Terraform grain's input is interpreted as a json token. So you can pass any valid value by json: number, list, dictionary, boolean, string , etc.
For details, check out this Terraform Docs section [Variable Definitions (.tfvars) Files](https://www.terraform.io/language/values/variables#variable-definitions-tfvars-files)

Example:

```yaml
grains:
  database:
    kind: terraform
    spec:
      source:
        store: infra 
        path: terraform/rds
      authentication:
        - ...        
      ...
      inputs:
        - database_size: '{{ .inputs.db_size }}' 
        - database_name: '{{ .inputs.db_name }}' 
        - input_number: 6
        - input_string: '{" this is my input string "}'
        - input_list_strings: '["a","b","c"]'
        - input_map_strings: '{ "key1":"val1", "key2":"val2" }'
        - input_object: '{ "key1":val1, "key2":4 }'
```

:::info
Note that in the above example, some blueprint inputs are used as the values of the Terraform grain inputs, so the environment's owner is able to choose the db_size and db_name required for his need. The information provided by the user will be passed to Terraform and affect the deployment process. The blueprint input type is always "string". the actual parsing of the json type will be done automatically.
:::



Note that invalid tokens will be parsed as strings. Keep in mind that json strings require double quotes, so ```"my value``` is a string but ```my value``` is not a valid json value and therefore will also be passed as a string. As such, the following values will all be passed as strings: ```"my value"```, ```my value```, ```"[1,2,3]"```

### tfvars files

In Terraform, a tfvars file (short for "Terraform variables file") is a plain text file that contains a set of key-value pairs representing values for Terraform variables. Torque supports referencing tfvars files as inputs to the terraform grain, with the following syntax:

```yaml
grains:
  database:
    kind: terraform
    spec:
      source:
        store: infra 
        path: terraform/rds
      authentication:
        - ...        
      ...
      inputs:
        ...
      tfvars-files:
      - source:
          store: <> 
          path: <>
      - source:
          store: <>
          path: <>

```



## tags  
Whenever a Terraform grain is launched, all resources created during the deployment process will be automatically tagged with Torque's system tags, built-in tags and custom tags. For details, see [Tags](/governance/tags). 
Sometimes, you need to disable tagging for all or specific resources.
To disable *all* resources in a specific grain use the following syntax:

```yaml 
grains:
  database:
    kind: terraform
    spec:
      tags:
        auto-tag: false
```

To disable *specific* resources in a specific grain use the following syntax:

```yaml 
grains:
  database:
    kind: terraform
    spec:
      tags:
        disable-tags-for:
        - aws_s3_bucket_object ## the terraform resource type
```


## outputs 
Output are values generated by Terraform during the deployment process. Outputs should be defined in the outputs.tf file located in the Terraform module folder. We recommend using Torque's auto-discovery capability to quickly model your Terraform modules within Torque including it's defined outputs.


```yaml 
grains:
  database:
    kind: terraform
    spec:
      source:
        store: my-repo 
        path: my-asset     
      ...
      outputs:
        - agent_name
        - connection_string
```

## scripts
Torque provides the ability to execute custom code before the executing the Terraform module init and before the Terraform destroy process. Scripts allows to run CLI commands to make sure authentication and requirements are set prior to the Terraform execution at the environment's initialization and destroy process.

The available script hooks are:
- pre-tf-init: The script will run before the command ```terraform init```
- post-tf-plan: The script will run after the command ```terraform plan``` 
- pre-tf-destroy: The script will run before the command ```terraform destroy```
In the below example, authentication script is used to assume role to another AWS account prior to deploying workload into that account.

```yaml 
grains:
  amazon_emr:
    kind: terraform
    spec:
    ...
      source:
        store: tf-repo
        path: .
      authentication:
        - aws-auth        
      scripts: 
        pre-tf-init:
          source:
            store: tf-repo
            path : scripts/authenticate.sh
          arguments: '{{.inputs.ACCOUNT_ID}}'
        post-tf-plan:
          source:
            store: tf-repo
            path : scripts/verify-plan.sh
          arguments: '{{.inputs.ID2}'          
        pre-tf-destroy:
          source:
            store: tf-repo
            path : scripts/authenticate.sh
          arguments: "{{.inputs.ACCOUNT_ID}} {{.inputs.ID2}} 3"
```

:::info
Note that scripts should be stored next to your IaC code to be used under the scripts section.
:::

When writing the scripts, you can take advantage of the following out of the box environment variables provided by Torque:

- **TORQUE_TF_EXECUTABLE** - the terraform executable file name
- **TORQUE_TF_MODULE_PATH** - the path to the terraform executable.
- **TORQUE_TF_PLAN_PATH** - path to the results of the terraform plan command. This is very useful to be used in a post-tf-plan script for verification of the plan.
- **TORQUE_TF_PLAN_JSON_PATH** - path to the results of the terraform plan command in json format. 

For example, the script can contain the following :

```bash 
$TORQUE_TF_EXECUTABLE -chdir=$TORQUE_TF_MODULE_PATH state rm $1
```
Or

```bash 
$TORQUE_TF_EXECUTABLE -chdir=$TORQUE_TF_MODULE_PATH state rm <hardcoded_resource>
```

Here is another example which shows how to use the plan output in a post-tf-plan script:

```bash 

## validate-no-new-resources.sh

if grep -q 'Plan: [1-9][0-9]* to add, 0 to change, 0 to destroy' "$TORQUE_TF_PLAN_JSON_PATH"; then
  echo "Error: The plan indicates new resources"
  exit 1
else
  echo "Success: No new resources added."
  exit 0
fi

```

## auto-approve flag
The "auto-approve" flag in Terraform is used to automatically approve and apply changes without requiring manual confirmation. It is helpful in automation workflows or scripts where user interaction is not feasible, allowing for unattended execution of Terraform commands without the need for explicit approval during the apply phase. By default, Torque will apply the terraform module with auto-approval.
However, you might specifically want to ensure that critical or potentially destructive changes are reviewed and approved by a user before being applied. This adds an extra layer of safety, especially in scenarios where unintended consequences could result from applying infrastructure changes. It provides an opportunity to carefully inspect the proposed changes before confirming their execution.
To do that, you can set the auto-approve flag in the terraform grain spec to false (default will be true):

```yaml 
grains:
  my-tf-grain:
    kind: terraform
    spec:
    ...
      auto-approve: false
```

## environment variables

The environment variables declared in the terraform grain will be available during the grain deployment as well as the grain destroy phase.

In this example, terraform is using a backend of type [remote](https://developer.hashicorp.com/terraform/language/settings/backends/remote) with a custom host that requires a custom certificate.

You can mount the Terraform Runner, a Kubernetes secret containing the certificate file(s) to a directory in the container, and the certificate(s) will be available for use **without** running any additional commands (like "sudo update-ca-certificates")

:::tip
*Learn how to mount secrets to a runner - [Agent Advanced Settings](/torque-agent/advanced-settings#secret-mount) *
:::

**Environment variables usage example:**

```yaml
spec_version: 2
description: Passing environment variables to Terraform and using scripts before tf-init

inputs: ...
outputs: ...

grains:
  provision-s3-bucket:
    kind: terraform
    spec:  
      source:
        store: terraform-mono-repo
        path: aws/s3-bucket
      scripts:
        pre-tf-init: 
          source:
            store: scripts-repo
            path : scripts/gen-custom-remote-backend.sh
          arguments: '{{ .inputs.org }} {{ .inputs.workspace }}'
      agent: ...
      inputs: ...
      outputs: ...
      
      # The environment variables declared in this section will be available 
      #  during the grain deployment as well as the grain destroy phase
      env-vars: 
        - SSL_CERT_FILE: /etc/tls-certs/custom-cert.crt # This is a custom SSL cert file
        - CUSTOM_TOKEN: '{{ .params.token }}'

```

## target-resource

The `target-resource` block allows you to specify specific Terraform resources or modules to target during the deployment or destruction process. 

This is particularly useful when you want to apply changes or destroy only a subset of resources without affecting the entire Terraform configuration.

To use resource targeting, add a `target-resource` block to the Terraform grain spec:

```yaml
grains:
  s3:
    kind: terraform
    spec:
      target-resource: 
        - module.s3_bucket
        - {{ .inputs.tf_resource }}
      source:
        store: assets-repo
        path: terraform/s3
      agent:
        name: '{{ .inputs.agent }}'
```

Each item in the `target-resource` list represents a specific resource or module to target. You can use static values or dynamic inputs (e.g., `{{ .inputs.tf_resource }}`) to define the resources.

For more details on resource targeting, see the [Terraform documentation](https://developer.hashicorp.com/terraform/tutorials/state/resource-targeting).
