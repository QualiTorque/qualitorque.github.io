---
sidebar_position: 8
title: Blueprint YAML
---

Torque blueprints are reusable components designed to model a required environment from the infrastructure to the application. **Blueprint designers** utilize Torque's VSCode plugin or the Torque's self-service UI to build a YAML based imperative blueprints that aimed to fulfill business requirements in a self-service manner for their end-users. 

:::tip__Note__
Blueprints are written in YAML files that reside in a __/blueprints__ folder within a Github, Gitlab or BitBucket repository (the folder name is case-sensitive and must be "blueprints"). The __/blueprints__ folder must be defined as the blueprint repository in the space's __Settings > Repositories__ page. 
:::

Common example will be a platform team or a DevOps team building Dev, Test and staging environments for their development, QA and product teams. With Torque, the DevOps team can focus on design, best practices, and security for environment, while their end users are being self-served from the torque UI, API or eco-system integrations based on governance and policies without having the 'keys-to-the-cloud'.

In this article:
* [Torque's Blueprint YAML](#torques-blueprint-yaml)
* [The Terraform Grain](#the-terraform-grain)
* [The HELM Grain](#the-helm-grain)
* [The CloudFormation Grain​](#the-cloudformation-grain)
* [The Kubernetes Grain​](#the-kubernetes-grain)
* [The Shell Grain](#the-shell-grain)

## Torque's Blueprint YAML
The Torque's blueprint YAML is the main bluperint definition file. It contains general information about the environment as well as the grains that make up the environment's applications and services. The blueprint YAML is published to end-users in Torque's blueprint catalog. 

### spec_version
The spec_version determines the blueprint YAML type. Currently, Torque supports spec_version:2 as the default and recommended version. With time, new preview releases and official feature releases will bring more and more features and users will be able to use other spec versions.

```yaml"
spec_version: 2
```

### Description
The blueprint’s description is an optional but recommended field. Blueprint description will be presented in the Torque's UI and API so users consuming environment will have more information about the blueprints to batter match their business need to the available set of blueprints published in the account catalog.


```yaml"
spec_version: 2
description: Performance testing deployment based on RDS, EKS and Lambda

```

### Inputs
Blueprint designers can publish blueprint inputs to their end-users to add flexibility while launching a new environment from the blueprints, without altering the blueprint code itself. Input data can be later used in the blueprint to control orchestration, pass information to automation processes, and more.

The input definition is composed out of the following fields: 
- The input name
- ```description``` is presented to all users in the Torque UI and API's (Optional)
- ```type``` of the input. Options are:
  - ```string```
  - ```execution-host``` allows the environment end-user to select the execution host that will deploy the grain(s) from a dropdown list. By default, all execution hosts are listed in the dropdown list, but you can add ```allowed values``` to only display a subset of the execution hosts. For details, see [host](#host).
- ```sensitive```: ```true``` masks the value behind asterisks in the UI and API. (Default is ```false```) 
- ```default``` - (Optional) Value to be used in the Torque UI and will be used in case no other value provided for the input. If a default value is not defined, the environment end-user will need to provide one when launching the environment.
- ```allowed values``` converts the input into a dropdown list, allowing the environment end-user to select the appropriate value. If a ```default``` is specified, it must be included in the allowed values list. 

```yaml"
inputs:
  app_version:
    type: string
    allowed-values: [0.9.7, 0.9.8, 0.9.9]
    default: "0.9.9"
    description: "The version of the application to be deployed on the EKS cluster"
  host:
    type: execution-host
    allowed-values [NY, Tokyo, London]
    description: "Select your site's host."
```

### Outputs
Outputs exposes information about your newly deployed environment and make it available for the environment's end-user or automation processes. Outputs will usually be available at the end of the environment's initialization and accessible throughout the environment lifecycle.

Outputs are a dictionary composed by the output name and the output value.

```yaml"
outputs:
  WebsiteUrl:
    value: 'application-name-{{ sandboxid | downcase }}.testquali.click:8080'
    kind: link
  DB_Hostname:
    value: '{{ .grains.mySqlDB.outputs.hostname }}'
```

:::info
The example above includes some of the Torque's YAML templating engine capabilities allowing the blueprint designer more flexibility and leads to less code that will require maintenance. More examples for templating will be described [Torque Templating engine](/blueprint-designer-guide/blueprints#torque-templating-engine).
:::

### Grains
Grains are the basic building blocks of a blueprint utilizing infrastructure as code (IaC) assets or automation processes to orchestrate the desired environment. In many organization, the blueprint designers will have a predefined set of grains they can use in blueprints provided by the IT/Ops/DevOps or platform team. 

The basic grain template is composed out of the grain name, kind, inputs and output. specific grains might support other features that are technology specific.

```yaml" 
grain_name:
    kind: terraform
    spec:
      source: 
        path: <path to repository>
      host:
        name: '{{ .inputs.host_name }}'
      inputs:
        - input1: '{{ .inputs.value1 }}'
        - input1: '{{ .inputs.value2 }}'
      outputs:
        - output1
        - output2
```

:::info
Note that in auto-generated blueprints, the __grain_name.spec.host.name__ is automatically published as a blueprint input, which the blueprint designer can use. As a best practice, it's recommended to remove the __host.name__ input once the blueprint is published to the catalog.
:::


The following grains are available:
* [Terraform](#the-terraform-grain)
* [Helm](#the-helm-grain)
* [CloudFormation](#the-cloudformation-grain)
* [Kubernetes](#the-kubernetes-grain)

### Source
Sources are repositories storing IaC, CM or other configuration technology that will be utilized by Torque to launch and operate an environment. Torque supports multiple ways to define grain sources. 
Sources can be defined in the following ways:

__1) Direct link to a source control folder__: Composed from the repository URL followed by the folder structure leading to the folder where IaC code resides. For example:
  ```yaml" 
grains:
  aurora:
    kind: terraform
    spec:
      source:
        path: github.com/organization/repository.git//folder1/folder2
```

__2) location based on a repository (blueprints or assets) onboarded to Torque__: The name of the repository should be provided under the 'store' field, while the IaC code folder location should be specified under the path field. In the below example, nginx helm chart resides in the 'nginx' folder within a repository onboarded to Torque with the name 'web_servers'.

```yaml" 
grains:
  nginx:
    kind: helm
    spec:
      source:
        store: web_servers
        path: nginx
```
:::info
In case your IaC code is not under folder in the repository, the path should be set as in the following example:
```yaml" 
      source:
        store: web_servers
        path: .
```
:::

### Host
Hosts, or **Execution Hosts** are the locations where grains will be deployed from. While different grains behave differently, it's important to choose the right execution host for a grain to make sure authentication, networking and configuration is all properly configured. Different grains in the same blueprint can use different Execution Hosts to allow maximum flexibility during the orchestration processes.

You can specify the execution host in two ways:
- Literally. For example:
  ```yaml" 
grains:
  # launch an RDS instance using Terraform
  rds:
    kind: terraform
    spec:
      host:
        name: my-execution-host
 ``` 
- Using an execution-host input, which allows the environment end-user to select the execution host to use from a dropdown list. For details, see the [blueprint yaml's inputs](#inputs) section.
  ```yaml" 
grains:
  # launch an RDS instance using Terraform
  rds:
    kind: terraform
    spec:
      host:
        name: '{{ inputs.my_execution_host }}'
 ```  

:::info
Execution hosts gives the flexibility of deploying the same blueprints over different cloud accounts and cloud vendors. For example, the same blueprint can be utilized for Azure or GCP simply by exposing the host as a blueprint input, from which the end-user to choose his preferred cloud provider, each represented with a different execution host.
:::

The Execution host configuration must include:
* **name** - the given name for the kubernetes cluster configured under the cloud account area where the grain will be executed.
* **service-account** - The service-account name configured within the kubernetes cluster that will be used to execute the grain

```yaml" 
grains:
  # launch an RDS instance using Terraform
  rds:
    kind: terraform
    spec:
      host:
        name: eks-ohio
        service-account: torque-sa
 ```   


### Grain inputs & outputs
Inputs and outputs are used both in the blueprint level and in the grains level. Grains can use inputs and outputs to pass data between IaC components, validate information and eventually lead to reducing the amount of IaC components that needs to be maintained by the organization.

In the below example, a Terraform deployment generates a connection string to a managed database that can then be utilized by the application itself using the ability to pass output from one grain as a input to the other.
```yaml" 
grains:
  # launch an RDS instance using Terraform
  rds:
    kind: terraform
    spec:
      ...
	  ...
      outputs:
        - connection_string

  my_app_demo:
	# Launcing k8s based microservices application using HELM
    kind: helm
    depends-on: rds
	...
	...
      inputs:
        - connectionString: '{{ .grains.rds.outputs.connection_string }}'
 ```    

### Grain dependencies
The need to deploy one IaC component before the other is common and usually required when 3rd party components, managed services and other teams need to provide the infrastructure. Using dependencies in the blueprint YAML Torque will evaluate and optimize the deployment process to make sure dependencies are respected and components with no dependencies will be deployed in parallel to maximize efficiency and reduce overall uptime.

In the example below, 3 grain in the bluerpint will be deployed in the following order: rds and redis will be deployed in parallel - and my_app will be deployed next, only in case of a successful deployment.

```yaml" 
grains:
  # launch an RDS instance using Terraform
  rds:
    kind: terraform

grains:
  # launch an ElastiCache 
  redis:
    kind: terraform

  my_app_demo:
	# Launcing k8s based microservices application using HELM
    kind: helm
    depends-on: rds, redis
 ```   


:::info
The ability to use outputs from specific grain usually requires the grain deployment to finish successfully. designing a blueprint with output usually requires dependencies between the grains.
:::



### Torque Templating engine
Templating engines are a great way to enrich the YAML format to allow extensibility points and text manipulations. Torque utilized Shopify's [liquid](https://shopify.github.io/liquid/) engine to allow multiple text manipulations in runtime.

In the below example the [downcase](https://shopify.github.io/liquid/filters/downcase/) and [strip](https://shopify.github.io/liquid/filters/strip/) keywords are used with concatenation of the sandbox id to create a new S3 bucket (AWS) using Terraform while making sure the bucket name will be valid and unique.

```yaml" 
  s3_bucket:
    kind: terraform
    spec:
      source:
        path: s3
      host:
        name: '{{ .inputs.host_name }}'
      inputs:
        - bucket_name: '{{ .inputs.bucket_name | strip }}-bucket-{{ sandboxid | downcase }}'
```

:::info
Blueprint designers might need extra details about the account, space or environment during the environment's orchestration. Torque provides dynamic attributes such as a sandboxid, accountid and spaceid that can be used through the orchestration and automation process.   
:::

### Parameters
Torque's [Parameters](/admin-guide/params) store allows admins to set pre-defined account-level parameters. Blueprint designers can use the parameters in the blueprint YAML, instead of inputs if they don't want the environment end-user to provide the value, but also don't want to hard-code it in the blueprint.

The syntax is: ```{{.params.param-value}}```

```yaml" 
  s3_bucket:
    kind: terraform
    spec:
      source:
        path: s3
      host:
        name: '{{ .inputs.host_name }}'
      inputs:
        - bucket_name: '{{ .params.my-bucket }}'
```

### Environment Variables
In many cases, passing information through environment variables is required for IaC modules to properly execute with the right data in mind. The environment variables provided under a specific grain will be accessible only during the grain lifecycle of the specific grain and can be used as a specific string or to be derived from a blueprint input or other grain output. 

```yaml" 
  s3_bucket:
    kind: 
    spec:
    ...
    ...
      env-vars:
      - VAR_NAME1: value1
      - VAR_NAME2: '{{ .inputs.input_name }}'
      - VAR_NAME3: '{{ .grains.vm.outputs.host_name }}'
```

## The Terraform Grain
The Terraform grain is Torque's native support for HashiCorp Terraform modules. Torque allows designers to use Terraform specific features to easily orchestrate self-developer and community Terraform modules in a standard way and share them with others as building blocks. Note that to deploy Terraform modules, you will need to authenticate Terraform on the Kubernetes cluster. For details, see [Terraform Authentication on EKS](/blueprint-designer-guide/service-accounts-for-aws) or [Terraform Authentication on AKS](/blueprint-designer-guide/service-accounts-for-azure).

### source 
Please see [the grain source](blueprints.md#source) for more details.

### host
Please see [the grain host](blueprints.md#host) for more details.

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

Note that invalid tokens will be parsed as strings. Keep in mind that json strings require double quotes, so ```"my value``` is a string but ```my value``` is not a valid json value and therefore will also be passed as a string. As such, the following values will all be passed as strings: ```"my value"```, ```my value```, ```"[1,2,3]"```


```yaml"
grains:
  database:
    kind: terraform
    spec:
      source:
        store: infra 
        path: terraform/rds
      ...
      inputs:
        - database_size: '{{ .inputs.db_size }}' 
        - database_name: '{{ .inputs.db_name }}' 
```

:::info
Note that in the above example, blueprint inputs are used as the values of the Terraform grain inputs, so the environment's owner is able to choose the db_size and db_name required for his need. The information provided by the user will be passed to Terraform and affect the deployment process
:::


### tags  
Whenever a Terraform grain is launched, all resources created during the deployment process will be automatically tagged with Torque's system tags, built-in tags and custom tags (for details, see [Tags](/admin-guide/tags). if you wish to disable tagging for all resources in a specific Terraform grain, use the following syntax:

```yaml" 
grains:
  database:
    kind: terraform
    spec:
      tags:
        auto-tag: false
```

### outputs 
Output are values generated by Terraform during the deployment process. Outputs should be defined in the outputs.tf file located in the Terraform module folder. We recommend using Torque's auto-discovery capability to quickly model your Terraform modules within Torque including it's defined outputs.


```yaml" 
grains:
  database:
    kind: terraform
    spec:
      source:
        path: github.com/org/repo.git//terraform/rds
      ...
      outputs:
        - hostname
        - connection_string
```

### scripts
Torque provides the ability to execute custom code before the executing the Terraform module init and before the Terraform destroy process. Scripts allows to run CLI commands to make sure authentication and requirements are set prior to the Terraform execution at the environment's initialization and destroy process.
In the below example, authentication script is used to assume role to another AWS account prior to deploying workload into that account.

```yaml" 
grains:
  amazon_emr:
    kind: terraform
    spec:
    ...
      source:
        store: tf-repo
        path: .
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
          arguments: '{{.inputs.ACCOUNT_ID}}'
```

:::info
Note that scripts should be stored next to your IaC code to be used under the scripts section.
:::

## The HELM Grain
The HELM grain is Torque's native support for HELM v3 charts. Torque allows designers to use HELM specific features to easily orchestrate self-developer and community charts in a standard way and share them with others as building blocks.

### source 
Please see [the grain source](blueprints.md#source) for more details.

### host
Please see [the grain host](blueprints.md#host) for more details.

### inputs
Similar to blueprint inputs and Terraform inputs, the HELM grain inputs allow you to reuse the same HELM chart in different ways using different values overrides. Inputs provided to the HELM grain are used when launching the HELM chart. We recommend using Torque's auto-discovery capability to quickly model your HELM chart within Torque including all defined inputs.

```yaml"
grains:
  nginx:
    kind: helm
    spec:
      source:
        path: https://github.com/bitnami/charts.git//bitnami/nginx
      host:
      ...
      inputs:
        - replicaCount: '{{ .inputs.replicaCount }}'
```

:::info
Note that in the above example, blueprint input is used as the value of the HELM grain input, so the environment's owner is able to choose the replicaCount required for his need. The information provided by the user will be passed to HELM chart as values and affect the deployment process.
:::

### outputs
Helm does not natively expose outputs. However, this can be done using a ```post-helm-install``` script that assigns environment variables after the grain's deployment. The script must be referenced, along with the names of the environment variables in the grain's [scripts](#scripts-1). To expose the outputs to the environment, the names of the environment variables must be referenced in the blueprint's ```outputs``` section.

:::tip __tip__
For illustration purposes, here's a [Helm chart](https://github.com/orel-h/test-spec2-public/blob/master/blueprints/helm-outputs-demo.yaml) that declares a __URL__ environment variable and references the [post-install script](https://github.com/orel-h/test-spec2-public/blob/master/scripts/orel_helm_script_args_demo.sh) that publishes that environment variable as an output.
:::

For example:

```yaml"
spec_version: 2
description: 
  ...

inputs:
  ...

outputs:
  output1:
    kind: regular
    value: '{{.grains.<grain name>.scripts.post-helm-install.outputs.<output name>}}'
  output2:
    kind: regular
    value: '{{.grains.<grain name>.scripts.post-helm-install.outputs.<output name>}}'
```

### commands
The commands section allows to execute CLI code prior to the HELM chart deployment to make sure all dependencies are met to ensure a successful deployment. Common use for commands is to execute HELM dependencies update to collect all the sub-charts required for the deployment.

```yaml"
grains:
  nginx:
    kind: helm
    spec:
      source:
        path: https://github.com/bitnami/charts.git//bitnami/nginx
      host:
        name: aws-demo
      inputs:
        - replicaCount: '{{ .inputs.replicaCount }}'
      commands:
        - dep up bitnami/nginx
```

### scripts
Torque provides the ability to execute custom code after Torque executes the Helm chart. This is useful for generating and using outputs, as explained in [helm outputs](#outputs-2).

For example - grain with a post-install script and outputs "test1" and "test2":

```yaml"
grains:
  nginx:
    kind: helm
    spec:
      source:
        path: ...
      host:
        name: ...
        service-account: ...
      inputs:
        - replicaCount: ...
      commands:
        - dep up bitnami/nginx
      scripts:
        post-helm-install:
          source:  
            path: github.com/steve/my-public.git//scripts/helm_script.sh
          outputs:
            - test1
            - test2
```


## The CloudFormation Grain​
The CloudFormation grain is Torque's native support for AWS CloudFormation templates. Torque allows designers to use CloudFormation features to easily orchestrate self-developer and community CloudFormation modules in a standard way and share them with others as building blocks.

### source 
Please see [the grain source](blueprints.md#source) for more details.

### host
Please see [the grain host](blueprints.md#host) for more details.

### inputs​
Similar to blueprint inputs, CloudFormation grain inputs allow you to reuse the same CloudFormation module in different ways. Inputs provided to the CloudFormation grain are used when launching the CloudFormation module.

### tags​
Whenever a CloudFormation grain is launched, all resources created during the deployment process are automatically tagged with Torque's system tags, built-in tags and custom tags.

### outputs​
Outputs are strings generated by CloudFormation during the deployment process.

```yaml"
grains:
  database:
    kind: cloudformation
    spec:
      source:
        path: github.com/org/repo.git//cloudformation/rds
        ...
      outputs:
        - hostname
        - connection_string
```

## The Kubernetes Grain​
The Kubernetes grain allows you to use native Kubernetes manifests, manifest catalogs in a given user's repository. Currently, it is not possible to launch multiple concurrent environments from the same blueprint on the same namespace (because the manifest resources are static and their names are not unique).

### source 
Please see [the grain source](blueprints.md#source) for more details.

### host
Please see [the grain host](blueprints.md#host) for more details.

### tags​
Whenever a Kubernetes grain is launched, all resources created during the deployment process are automatically tagged with Torque's system tags, built-in tags and custom tags. If you wish to disable tagging for all resources in a specific Kubernetes grain, use the following syntax:

```yaml"
grains:
  database:
    kind: kubernetes
    spec:
      tags:
        auto-tag: false
```

### namespace
The deployment namespace must exist in the cluster prior to the deployment. It must not be equal to the namespaces used by Torque for agent deployments.

```yaml"
grains:
  web-client:
    kind: kubernetes
    spec:
      sources:
        ...
      namespace: '{{ .inputs.namespace }}'
```
:::tip __Note__:
* Launching concurrent environments with a Kubernetes grain is not supported for the same namespace. 
* Make sure the Torque execution host has permissions to use those namespaces.
:::

### scripts (outputs)
Kubernetes does not natively support outputs. Using Torque, you can overcome this and provide outputs from the manifest installation process using scripts. In this approach, the script must export environment variables. These environment variables can later be declared also as outputs.
The script is defined in the blueprint and executed after the grain's installation.

For example, script named __post-install-script.sh__ that generates two outputs:
 
```yaml"
outputs:
  output1:
    kind: regular
    value: '{{.grains.nginx.scripts.post-kubernetes-install.outputs.output1}}'
  output2:
    kind: regular
    value: '{{.grains.nginx.scripts.post-kubernetes-install.outputs.output2}}'

grains:
  nginx:
    kind: kubernetes
    spec:
      source:
        ...
      namespace:
      host:
        ...
      scripts:
        post-kubernetes-install:
          source:
            store: Torque-Spec2-Demos
            path: scripts/post-install-script.sh
          outputs:
            - output1
            - output2
```

## The Shell Grain
The Shell grain is an asset-agnostic grain that allows you to run bash/python3 commands as part of your environment’s launch and/or teardown. It’s useful if you need to prepare or clean up your environment’s cloud infrastructure as part of the deployment. For example, you could use this grain to run "datree" validations on a Kubernetes grain’s asset, or perhaps back up/clone a DB before environment deployment.
```yaml”
grains:
  validate:
    kind: shell
    spec:
      host:
        name: …
      activities:
        deploy:
          commands:
            - …
        destroy:
          commands:
            - …
```
### host
Please see [the grain host](blueprints.md#host) for more details.

### inputs
Similar to blueprint inputs, inputs provided to the Shell grain are used when launching the shell. Unlike other grains, in the Shell grain, inputs are used inside the __commands__ section, wrapped in double curly brackets - ```" {{ .inputs.input1 }}"```.

```yaml"
grains:
  validate:
    kind: shell
    spec:
      host:
        name: kubernetes-testing1
      activities:
        deploy:
          commands:
            - "{{ .inputs.repoURL }}"
            - "git clone {{ .inputs.repoUrl }}"
```

### commands
The commands section allows to execute bash/python3 code as part of the launch and/or end of the environment. The Shell grain has two command types - __deploy__ for running code at the launch of the environment, and __destroy__ for running code as part of the environment’s teardown. 

```yaml”
grains:
  validate:
    kind: shell
    spec:
      host:
        name: kubernetes-testing1
      activities:
        deploy:
          commands:
            - "apt-get -y install git unzip curl"
            - "git clone {{ .inputs.repoUrl }}"
            - "curl https://get.datree.io | /bin/bash"
            - "datree test {{.inputs.repoName}}/{{.inputs.filePath}}"
        destroy:
          commands:
            - "https://gist.githubusercontent.com/.../check.py"
            - "python3 check.py"
```

:::tip __note__
You can specify the code to be run as freetext bash/python3 commands or by referencing a bash/python3 file:

```jsx title="Python 3 example:"
commands
  - "apt-get -y install wget"
  - "wget https://.../check.py"
  - "python3 check.py"
```

```jsx title="Bash example:"
commands
  - "apt-get -y install wget"
  - "wget https://.../simple.sh"
  - "/bin/bash simple.sh"
```

:::

