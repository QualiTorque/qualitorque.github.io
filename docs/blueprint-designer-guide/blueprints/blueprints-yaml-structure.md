---
sidebar_position: 6
title: Blueprint YAML Structure
---

The Torque's blueprint YAML is the main blueprint definition file. It contains general information about the environment as well as the grains that make up the environment's applications and services. The blueprint YAML is published to end-users in Torque's blueprint catalog. 

### spec_version
The spec_version determines the blueprint YAML type. Currently, Torque supports spec_version:2 as the default and recommended version. With time, new preview releases and official feature releases will bring more and more features and users will be able to use other spec versions.

```yaml
spec_version: 2
```

### Description
The blueprint’s description is an optional but recommended field. Blueprint description will be presented in the Torque's UI and API so users consuming environment will have more information about the blueprints to batter match their business need to the available set of blueprints published in the account catalog.


```yaml
spec_version: 2
description: Performance testing deployment based on RDS, EKS and Lambda

```

### Instructions

Instructions are the recommended way for the blueprint developer to communicate with the end user and explain how to use this blueprint. The instructions can be simple text, or a complete MarkDown file, hosted in your git repository. 

```yaml
spec_version: 2
description: Performance testing deployment based on RDS, EKS and Lambda
instructions:
  text: "This is what you need to know ... " # text option
  source:
    store: <The name of the repository which contains the instructions as it was onboarded to Torque>
    path : <instructions/something.md> # path inside the repository where the instructions md file is located. Must be in a folder called "instructions".

```

:::info
- Blueprint instructions can be located in the same repository as the blueprints or a different repository
- Torque will use only markdown files located in the “/instructions” folder under the root of the onboarded repository
- Torque will support external resources embed in the markdown under the following rules:
  - Any link to external and publicly exposed resource
  - Relative path to images, svg and gif files located within the /instructions folder
  - Images, svg and gif files smaller than 1MB.
- Torque will not support relative .md references -Torque will not allow to load/redirect to another markdown mentioned in the markdown provided as the blueprint instructions.
:::


### Inputs
Blueprint designers can publish blueprint inputs to their end-users to add flexibility while launching a new environment from the blueprints, without altering the blueprint code itself. Input data can be later used in the blueprint to control orchestration, pass information to automation processes, and more.

The input definition is composed out of the following fields: 
- The input name
- ```description``` is presented to all users in the Torque UI and API's (Optional)
- ```type``` of the input. Options are:
  - ```string```
  - ```agent``` allows the environment end-user to select the agent that will deploy the grain(s) from a dropdown list. By default, all agents are listed in the dropdown list, but you can add ```allowed-values``` to only display a subset of the agents. For details, see [agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent).
  - ```parameter``` will take the input's allowed values from the parameter-store, from a parameter with the name ```parameter-name```. The parameter can be defined either in the account level or in the space level. If the parameter's value is built as a comma separated list, Torque will convert them to a set of values and present it to the end-user as a drop down list of the values. See an example below. For more info about the parameter store, click [here](admin-guide/params.md).
  - ```credentials``` allows the environment end-user to select the credentials that will be used to deploy the grain(s) from a dropdown list. By default, all credentials in the account are listed in the dropdown list, but you can add ```allowed-values``` to only display a subset of the credentials. 
- ```sensitive```: ```true``` masks the value behind asterisks in the UI and API. (Default is ```false```) 
- ```default``` - (Optional) Value to be used in the Torque UI and will be used in case no other value provided for the input. If a default value is not defined, the environment end-user will need to provide one when launching the environment.
- ```allowed-values``` converts the input into a dropdown list, allowing the environment end-user to select the appropriate value. If a ```default``` is specified, it must be included in the allowed values list. 
- ```quick``` is an optional boolean value. Setting it to "true" or omitting it will cause the input to be presented to the end user in the "quick links" section of the environment. Setting it to "false" means it will not appear in that section.

```yaml
inputs:
  app_version:
    type: string
    allowed-values: [0.9.7, 0.9.8, 0.9.9]
    default: "0.9.9"
    description: "The version of the application to be deployed on the EKS cluster"
  agent:
    type: agent
    allowed-values: [NY, Tokyo, London]
    description: "Select your site's agent."
```

The inputs section in the Torque blueprint YAML also supports spaces to make inputs more user friendly. Configuring an input with a friendly name can be done in the following way:

```yaml
inputs:
  Application Version:
    type: string
    default: "0.4.3"
    description: "The version of the microservices application"
```

To use an input that was configured using spaces, make sure to encase the input in the following way:

```yaml
inputs:
  Application Version:
    type: string

grains:
  nested-bp:
    kind: blueprint
    spec: 
      inputs: 
        - version: '{{ .inputs.["Application Version"] }}'
```

To apply a set of allowed input values from the parameter store, use the following syntax:

```yaml
inputs:
  region:
    type: parameter
    parameter-name: aws-allowed-regions 
```

We then configure a parameter with name: aws-allowed-regions and value "us-east-1,us-east2" .
The end user will be presented with a drop down of these 2 values as the allowed values options.

### Outputs
Outputs exposes information about your newly deployed environment and make it available for the environment's end-user or automation processes. Outputs will usually be available at the end of the environment's initialization and accessible throughout the environment lifecycle.

Outputs are a dictionary composed by the output name and the output value.

```yaml
outputs:
  WebsiteUrl:
    value: 'application-name-{{ sandboxid | downcase }}.testquali.click:8080'
    kind: link
    quick: true
  DB_Hostname:
    value: '{{ .grains.mySqlDB.outputs.hostname }}'
```

The "quick" attribute is optional and defaults to false. Setting it to "true" will cause the specific output to be presented in the quick access section of the environment for ease of use.

:::info
The example above includes some of the Torque's YAML templating engine capabilities allowing the blueprint designer more flexibility and leads to less code that will require maintenance. More examples for templating will be described [Torque Templating engine](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#torque-templating-engine).
:::

The outputs section in the Torque blueprint YAML also supports spaces to make outputs more user friendly in the following way:

```yaml
outputs:
  Database Connection String:
    value: '{{ .grains.mySqlDB.outputs.connection_string }}'
```

When using outputs with spaces in a nested blueprint, make sure encase the output name in the following way:

```yaml
outputs:
  Database Connection String:
    value: '{{ .grains.mySqlDB.outputs.["Database Connection String"] }}'

grains:
  nested-bp:
    kind: blueprint
    spec: 
      outputs: 
      - "Database Connection String"
```


### Grains
Grains are the basic building blocks of a blueprint utilizing infrastructure as code (IaC) assets or automation processes to orchestrate the desired environment. In many organization, the blueprint designers will have a predefined set of grains they can use in blueprints provided by the IT/Ops/DevOps or platform team. 

The basic grain template is composed out of the grain name, kind, inputs and output. specific grains might support other features that are technology specific.

```yaml 
grain_name:
    kind: terraform
    spec:
      source: 
        path: <path to repository>
      agent:
        name: '{{ .inputs.agent_name }}'
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
* [Terraform](/blueprint-designer-guide/blueprints/terraform-grain)
* [Helm](/blueprint-designer-guide/blueprints/helm-grain)
* [CloudFormation](/blueprint-designer-guide/blueprints/cloudformation-grain)
* [Kubernetes](/blueprint-designer-guide/blueprints/kubernetes-grain)
* [Shell](/blueprint-designer-guide/blueprints/shell-grain)
* [Ansible](/blueprint-designer-guide/blueprints/ansible-grain)
* [CloudShell](/blueprint-designer-guide/blueprints/cloudshell-grain)
* [Blueprint](/blueprint-designer-guide/blueprints/blueprint-grain)

### Source
Sources are repositories storing IaC, CM or other configuration technology that will be utilized by Torque to launch and operate an environment. Torque supports multiple ways to define grain sources. 
Sources can be defined in the following ways:

__1. Direct link to a source control folder__:

Composed from the repository URL followed by the folder structure leading to the folder where IaC code resides. For example:
```yaml 
grains:
  aurora:
    kind: terraform
    spec:
      source:
        store: my-repo
        path: folder/my-app

```

__2. Location based on a repository (blueprints or assets) onboarded to Torque__: 

The name of the repository should be provided under the 'store' field, while the IaC code folder location should be specified under the path field. In the below example, nginx helm chart resides in the 'nginx' folder within a repository onboarded to Torque with the name 'web_servers'.

```yaml 
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
```yaml 
      source:
        store: web_servers
        path: .
```
:::

__3. Working with branches, commits and tags__:

You can reference an asset in a specific branch, commit or tag.

```yaml: 
grains:
  dev-env:
    kind: terraform
    spec:
      source:
        store: infra
        path: vms
        branch: feature/one
        commit: b39e0a9e86aab97d255af22507f700936a3f2ef5
        tag: test-133 
```

:::tip note
* You can specify only one of the parameters (```branch``` or ```commit``` or ```tag```).
* If "tag" is provided, Torque will track the repo for newer tags. In other words, if a newer tag is found, then an "update" will be detected.
* If "branch" is provided, Torque will track the head of the branch. In other words, when new commits arrive, an "update" will be detected.
* If "commit" is provided, Torque __will not__ track changes.
:::

### Agent
The ```agent``` defines the agent that will deploy the grain. While different grains behave differently, it's important to choose the right agent for a grain to make sure authentication, networking and configuration is all properly configured. Different grains in the same blueprint can use different agents to allow maximum flexibility during the orchestration processes.

You can specify the agent in two ways:
- Literally. For example:
```yaml 
grains:
  # launch an RDS instance using Terraform
  rds:
    kind: terraform
    spec:
      agent:
        name: my-agent
 ``` 
- Using an input of type "agent", which allows the environment end-user to select the agent to use from a dropdown list. For details, see the [blueprint yaml's inputs](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#inputs) section.
```yaml 
grains:
  # launch an RDS instance using Terraform
  rds:
    kind: terraform
    spec:
      agent:
        name: '{{ inputs.my_agent_ }}'
 ```  

:::info
Agents gives the flexibility of deploying the same blueprints over different cloud accounts and cloud vendors. For example, the same blueprint can be utilized for Azure or GCP simply by exposing the agent as a blueprint input, from which the end-user to choose their preferred cloud provider, each represented with a different agent.
:::

The agent's configuration must include:
* **name** - the given name for the kubernetes cluster configured under the cloud account area where the grain will be executed.


Optionally, the agent configuration may include:
* **storage-size** - Set the size of storage allocated to this grain. The size is in MB. The size must be smaller than the overall storage size which was defined in the [agent settings](torque-agent/advanced-settings.md). If not defined, Torque will use the default size. This is an advanced configuration option, it is recommended to consult with Torque's support team before making a change.
* **runner-namespace** - The namespace where the runner pod will be provisioned. If not defined, the runners will be provisioned in the default namespace defined in the agent level. This is an advanced configuration option, it is recommended to consult with Torque's support team before making a change.
* **service-account** - The service-account name configured within the kubernetes cluster that will be used to execute the grain. A kubernetes 
service account provides an identity for processes that run in a pod. If not specified, Torque will use the default service account defined for the agent. The service account must be defined in the runner namespace. 


```yaml 
grains:
  # launch an RDS instance using Terraform
  rds:
    kind: terraform
    spec:
      agent:
        name: eks-ohio # Required
        storage-size: 800 # Optional. 
        runner-namespace: my-namespace # Optional
        service-account: torque-sa # Optional
 ```   

You can add the ```nodeSelector``` section to your grain and specify the node labels you want the target node(s) to have. The nodeSelector and its labels will be applied on the pod specification. Kubernetes only schedules the pod onto nodes that have each of the labels you specify. For example:
```yaml
grains:
  nginx:
    kind: helm
    spec: 
      source:
        ...
      host:
        name:
        kubernetes:
          nodeSelector:
          - app: torque
```

### Grain inputs & outputs
Inputs and outputs are used both in the blueprint level and in the grains level. Grains can use inputs and outputs to pass data between IaC components, validate information and eventually lead to reducing the amount of IaC components that needs to be maintained by the organization.

In the below example, a Terraform deployment generates a connection string to a managed database that can then be utilized by the application itself using the ability to pass output from one grain as a input to the other.
```yaml 
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

You can add the ```quick: true``` tag to outputs you wish to display in the __Quick Access__ section of the environment.
```yaml 
outputs:
  default_output:
    value: 'https://www.google.com:443'
    quick: true
```
The above output will be displayed as follows:
> ![Locale Dropdown](/img/quick-output.png)

### Grain dependencies
The need to deploy one IaC component before the other is common and usually required when 3rd party components, managed services and other teams need to provide the infrastructure. Using dependencies in the blueprint YAML Torque will evaluate and optimize the deployment process to make sure dependencies are respected and components with no dependencies will be deployed in parallel to maximize efficiency and reduce overall uptime.

In the example below, 3 grain in the blueprint will be deployed in the following order: rds and redis will be deployed in parallel - and my_app will be deployed next, only in case of a successful deployment.

```yaml 
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
Templating engines are a great way to enrich the YAML format to allow extensibility points and text manipulations. Torque utilizes a GO-Lang style engine called [Shopify Liquid](https://shopify.github.io/liquid/) to allow dynamic injection of parameters and inputs as well as provider attribute values via reference of other attributes within the same YAML. 
Example:
* Insert Blueprint input from the user as a value for a Grain input. 
* Insert Parameter Store information as a value for a Grain attribute or input. 
* Reference an output from a grain as an input or attribute of another grain (mandates "depends-on:" relationship between the grains)


In the below example the [downcase](https://shopify.github.io/liquid/filters/downcase/) and [strip](https://shopify.github.io/liquid/filters/strip/) keywords are used with concatenation of the sandbox id to create a new S3 bucket (AWS) using Terraform while making sure the bucket name will be valid and unique.

```yaml 
  s3_bucket:
    kind: terraform
    spec:
      source:
        path: s3
      agent:
        name: '{{ .inputs.agent_name }}'
      inputs:
        - bucket_name: '{{ .inputs.bucket_name | strip }}-bucket-{{ envid | downcase }}'
```

For details and examples of how to use the parameters from the parameter store inside blueprints, check [this article](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#parameters).

### Dynamic Attributes
Blueprint designers might need extra details about the account, space or environment during the environment's orchestration. Torque provides dynamic attributes which are pre-defined parameters blueprints designers can use. The currently supported dynamic attributes are:

- envId
- blueprintName 
- ownerEmail
- environmentName
- accountName
- spaceName

Here is an example of how it can be used:

```yaml 
  s3_bucket:
      ...
      inputs:
        - bucket_name: 'bucket-{{ envId | downcase }}'
```

:::note
The dynamic attributes calculation is case insensitive so you can use either "envId" or "envid" etc.
:::


### Parameters
Torque's [Parameters](/admin-guide/params) store allows admins to set pre-defined account/space-level parameters. Blueprint designers can use the parameters in the blueprint YAML, instead of inputs if they don't want the environment end-user to provide the value, but also don't want to hard-code it in the blueprint.

The syntax is: ```{{.params.param-value}}```

The syntax is the same for both account and space level parameters. A space-level parameter will take precedence over an account-level parameter with the same name.

```yaml 
  s3_bucket:
    kind: terraform
    spec:
      source:
        path: s3
      agent:
        name: '{{ .inputs.agent_name }}'
      inputs:
        - bucket_name: '{{ .params.my-bucket }}'
```

### Environment Variables
In many cases, passing information through environment variables is required for IaC modules to properly execute with the right data in mind. The environment variables provided under a specific grain will be accessible only during the grain lifecycle of the specific grain and can be used as a specific string or to be derived from a blueprint input or other grain output. 

```yaml 
  s3_bucket:
    kind: 
    spec:
    ...
    ...
      env-vars:
      - VAR_NAME1: value1
      - VAR_NAME2: '{{ .inputs.input_name }}'
      - VAR_NAME3: '{{ .grains.vm.outputs.agent_name }}'
```

### Disabling Auto-Retry
In some situations, Torque will automatically retry to deploy failed grains. This behavior is usually very beneficial but it might not be suitable in all cases.
In case you wish to exclude a specific grain from the auto-retry, include the following in the blueprint:

:::note
The auto-retry currently applies only to terraform grain. To learn more about auto retry, see [auto-retry](/environment-services/drift-and-update#auto-retry-failed-deployments)
:::


```yaml 
grain_name:
    kind: terraform
    spec:
      source:
      ...
      auto-retry: false  
```

The auto-retry element is optional . If not present, it defaults to "true". Can be "true" or "false".


### layout 

Layout is a separate yaml that will be referenced from the blueprint yaml like so:

```yaml
spec_version: 2
description: ...
layout:
  source:
    store:
    path:
  exclude-from-layout:  # optional
    - grain_name_1
    - grain_name_2
```

:::note
The layout yaml must reside inside a folder named "layouts".
:::


The **layout** element is where the blueprint references the layout that will be applied to environments created from it. To learn more, visit [layouts](blueprint-designer-guide/layouts/layouts.md)

The **exclude-from-layout** element is optional, use it in case you need to apply the layout only to part of the grains but not all of them.