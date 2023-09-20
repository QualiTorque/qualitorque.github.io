---
sidebar_position: 9
title: The Terraform Grain
---

The Terraform grain is Torque's native support for HashiCorp Terraform modules. Torque allows designers to use Terraform-specific features to easily orchestrate self-developer and community Terraform modules in a standard way and share them with others as building blocks. For a full blueprint yaml example, see the examples in section [Create a multi-asset blueprint](/blueprint-designer-guide/blueprint-quickstart-guide#create-a-multi-asset-blueprint).

Note that to deploy Terraform modules, you will need to authenticate Terraform on the Kubernetes cluster. For details, see [Terraform EKS Authentication](/torque-agent/service-accounts-for-aws), [Terraform AKS Authentication](/torque-agent/service-accounts-for-azure), or [Terraform GKE Authentication](/torque-agent/service-accounts-for-gcp).

### Tools and technologies
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

### source 
Please see [the grain source](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source) for more details.

### agent
Please see [the grain agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent) for more details.

### authentication
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

### terraform.tfstate remote backend storage

When launching the environment, Torque creates a tfstate file for each Terraform grain in the blueprint. By default, the file is saved locally on the PVC of the grain runner (volume for Docker agents). However, as the TF state file may contain sensitive information, Torque allows you to optionally choose to save the file in your own remote backend storage. Torque supports the following remote backends: __[S3](https://developer.hashicorp.com/terraform/language/settings/backends/s3)__, __[gcs](https://developer.hashicorp.com/terraform/language/settings/backends/gcs)__, __[azurerm](https://developer.hashicorp.com/terraform/language/settings/backends/azurerm)__, and __[http](https://developer.hashicorp.com/terraform/language/settings/backends/http)__.

__Prerequisites:__
* The remote backend must already exist. Torque will not create the remote backend if it doesn't exist.
* Role Arn or service account defined in the ```authentication``` must have access permissions to the remote backend.

The remote backend is specified in the ```backend``` section of the grain. Based on the blueprint YAML definition, Torque will create an override file that contains the remote backend configurations.

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
* __type__: s3, azurerm, gcs, http
* __bucket__: Mandatory for s3 and gcs
* __region__: Mandatory for S3
* __resource-group-name__ : Mandatory for azurerm
* __storage-account-name__: Mandatory for azurerm
* __container-name__: Mandatory for azurerm
* __base-address__: Mandatory for http
* __key-prefix__: Optional. tfstate file path in the remote storage. Relevant for s3, azurerm, gcs. 
   * S3, Azure Blobs & GCS have a key name limit of 1024 ascii chars

__S3__:

```yaml
backend:
  type: "s3"
  bucket: "my-bucket-name"
  region: "us-east-1"
  key-prefix: folder1/folder2"
``` 

__azurerm__:

```yaml
backend:
  type: "azurerm"
  resource-group-name: "my_rg"
  storage-account-name: "terraform123abc"
  container-name: "terraform-state"
  key-prefix: folder1/folder2"
```

__gcs__:

```yaml
backend:
  type: "gcs"
  bucket: "my-bucket-name"
  key-prefix: folder1/folder2"
```

__http__:

```yaml
backend:
  type: "http"
  base-address: "http://myrest.api.com/foo"
```

Torque uses a "1 to many" model, meaning that one blueprint definition is used to launch many standalone environments. When using a backend for Terraform grains, it is important to ensure that each live instance of the grain has its own unique tfstate file, so Torque will auto-generate the tfstate file name. 

For s3, gcs, azurerm backends, the tfstate file location will be: 

* Format when the “key-prefix” is not defined: 
  ```yaml“
  torque-remote-state/{environmentId}_{grainName}.tfstate“
* Format when “key-prefix” defined in the blueprint: 
   Using the optional “key-prefix” property the blueprint designer can choose the folder where the tfstate file will be located. 

   ```yaml
   “{key-prefix}/{environmentId}_{grainName}.tfstate 
* For http backend the tfstate file address will be: 

   ```yaml
   “{base-address}/{environmentId}_{grainName}” 


__Cleaning up the tfstate file when the Terraform grain is destroyed:__

When destroying a Terraform environment, Terraform does not delete the tfstate file but rather leaves behind an empty file. To clean up the leftovers, set a file retention policy on the remote storage to ensure the removal of files that have not been recently accessed. Since Torque runs drift detection on a 1-hour schedule, the tfstate file will be considered as “accessed” by the remote storage when running drift detection. And when the Torque environment ends, the tfstate file will not be “accessed” anymore by Torque. 

### tf-version
Torque provides the flexibility to choose a specific Terraform version with which the Terraform module will be deployed (minimum supported version is 0.14).
:::info
Note that Torque supports all Terraform versions available by Hashicorp without Alpha and Beta versions.
List of supported releases can be found [here](https://releases.hashicorp.com/terraform/)
:::

### inputs
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

### tfvars files as inputs to Terraform grain

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



### tags  
Whenever a Terraform grain is launched, all resources created during the deployment process will be automatically tagged with Torque's system tags, built-in tags and custom tags (for details, see [Tags](/governance/tags). 
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


### outputs 
Output are values generated by Terraform during the deployment process. Outputs should be defined in the outputs.tf file located in the Terraform module folder. We recommend using Torque's auto-discovery capability to quickly model your Terraform modules within Torque including it's defined outputs.


```yaml 
grains:
  database:
    kind: terraform
    spec:
      source:
        path: github.com/org/repo.git//terraform/rds
      ...
      outputs:
        - agent_name
        - connection_string
```

### scripts
Torque provides the ability to execute custom code before the executing the Terraform module init and before the Terraform destroy process. Scripts allows to run CLI commands to make sure authentication and requirements are set prior to the Terraform execution at the environment's initialization and destroy process.
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
        pre-tf-destroy:
          source:
            store: tf-repo
            path : scripts/authenticate.sh
          arguments: "{{.inputs.ACCOUNT_ID}},{{.inputs.ID2}},3"
```

:::info
Note that scripts should be stored next to your IaC code to be used under the scripts section.
:::
