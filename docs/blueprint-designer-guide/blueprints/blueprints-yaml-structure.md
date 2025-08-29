---
sidebar_position: 4
title: Blueprint YAML Structure
---

The Torque's blueprint YAML is the main blueprint definition file. It contains general information about the environment as well as the grains that make up the environment's applications and services. The blueprint YAML is published to end-users in Torque's blueprint catalog.

## The Blueprint spec

### `spec_version`
The spec_version determines the blueprint YAML type. Currently, Torque supports spec_version:2 as the default and recommended version. With time, new preview releases and official feature releases will bring more and more features and users will be able to use other spec versions.

```yaml
spec_version: 2
```

### `description`
The blueprint’s description is an optional but recommended field. Blueprint description will be presented in the Torque's UI and API so users consuming environment will have more information about the blueprints to batter match their business need to the available set of blueprints published in the account catalog.


```yaml
spec_version: 2
description: Performance testing deployment based on RDS, EKS and Lambda

```

### `instructions`

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


### `inputs`
Blueprint designers can publish blueprint inputs to their end-users to add flexibility while launching a new environment from the blueprints, without altering the blueprint code itself. Input data can be later used in the blueprint to control orchestration, pass information to automation processes, and more.

The input definition is composed out of the following fields: 
- The input name
- ```description``` is presented to all users in the Torque UI and API's (Optional)
- ```type``` of the input. Options are:
  - ```string```
  - ```agent``` allows the environment end-user to select the agent that will deploy the grain(s) from a dropdown list. By default, all agents are listed in the dropdown list, but you can add ```allowed-values``` to only display a subset of the agents. For details, see [agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent).
  - ```parameter``` will take the input's allowed values from the parameter-store, from a parameter with the name ```parameter-name```. The parameter can be defined either in the account level or in the space level. If the parameter's value is built as a comma separated list, Torque will convert them to a set of values and present it to the end-user as a drop down list of the values. See an example below. For more info about the parameter store, click [here](admin-guide/params.md).
  - ```credentials``` allows the environment end-user to select the credentials that will be used to deploy the grain(s) from a dropdown list. By default, all credentials in the account are listed in the dropdown list, but you can add ```allowed-values``` to only display a subset of the credentials. 
  - ```file``` allows the environment end-user to upload one or more files from the launch form. The uploaded files are made available to the blueprint designer using the [`workspace-directories`](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#workspace-directories) section and the **env-storage** store - [See details below](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#file-input-type).
  - ```input-source``` allows the environment end-user to select from a list of values provided by a dynamic source. The source is defined in the [`input-sources`](/admin-guide/input-sources) section.
- ```style``` (Optional): Defines how the input is presented to the user. For example:
  - ```radio``` displays the allowed values as radio buttons. This is useful for binary or mutually exclusive choices. The input `type` must be `string` when using this style.
  - ```multi-select``` displays the allowed values as a multi-select dropdown, allowing the user to select multiple values. The input `type` can be ```string```, `parameter` or `input-source`. The captured value is a JSON array of strings. This is useful for cases where multiple selections are needed, such as a list of IPs, Compute types or tags.

    **Example:**

    ```yaml
    spec_version: 2
    description: |
      Blueprint with multi-select input type
      All three examples allow users to select multiple GPU types, but differ in how the options are provided:
      - static list
      - dynamic source
      - parameter store
      
      The captured value is always a JSON array of strings.

    inputs:
      gpu-types:
        style: 'multi-select'
        type: 'string'
        description: 'GPU types'
        default: '["A100","L40"]'
        allowed-values:
          - 'H100'
          - 'H200'
          - 'A100'
          - 'L40'

      gpu-types-dynamic:
        style: 'multi-select'
        type: 'input-source'
        source-name: 'available-gpu-types'
        description: 'GPU types'

      gpu-types-paramerter-store:
        style: 'multi-select'
        type: 'parameter'
        parameter-name: 'gpu-types-list'
        description: 'GPU types'
    ```
- ```sensitive```: ```true``` masks the value behind asterisks in the UI and API. (Default is ```false```) 
- ```default``` - (Optional) Value to be used in the Torque UI and will be used in case no other value provided for the input. If a default value is not defined, the environment end-user will need to provide one when launching the environment.
- ```allowed-values``` converts the input into a dropdown list, allowing the environment end-user to select the appropriate value. If a ```default``` is specified, it must be included in the allowed values list. 
- ```quick``` is an optional boolean value. Setting it to "true" or omitting it will cause the input to be presented to the end user in the "quick links" section of the environment. Setting it to "false" means it will not appear in that section.
- ```pattern``` is an optional regular expression pattern that the input value must match. If provided, Torque will validate the user input against this pattern during environment launch and prevent launching if the input does not conform to the specified pattern.
- ```validation-description``` is an optional user-friendly message or description that will be shown to the user if the provided input value does not match the specified `pattern`. This helps provide better guidance to the user on the expected input format or constraints.

    **Example:**

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
      email_address:
        type: string
        description: "Enter a valid email address"
        pattern: '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
        validation-description: "The provided value is not a valid email address. Please enter an email in the format 'name@example.com'."
      debug-mode:
        type: string
        style: radio
        allowed-values: [true, false]
        description: "Enable or disable debug mode for the application"
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

#### File Input Type

The `file` input type allows users to upload files from the launch form. These files are made available to the blueprint designer using the [`workspace-directories`](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#workspace-directories) section and the `env-storage` store. This is useful for scenarios where the environment requires user-provided files (such as configuration, data, or scripts) at launch time.

**File input fields:**
- `type: file` (required)
- `max-size-MB`: Maximum allowed file size in megabytes (required)
- `max-files`: Maximum number of files that can be uploaded (required)
- `allowed-formats`: List of allowed file extensions (required)

**Example:**

```yaml
spec_version: 2
description: "Blueprint with file input type"

inputs:
  agent:
    type: 'agent'
  txt-files:
    type: 'file'
    max-size-MB: 1
    max-files: 2
    allowed-formats:
      - 'txt'

grains:
  print-txt-file:
    kind: 'shell'
    spec:
      agent:
        name: '{{.inputs.agent}}'
      workspace-directories:
        - source:
            name: 'SOURCE_DIR'
            store: 'env-storage/{{.inputs.txt-files}}'
      activities:
        deploy:
          commands:
            - 'echo $SOURCE_DIR/*'
            - 'echo print file content'
            - 'first_file=$(ls $SOURCE_DIR/*.txt | head -n 1) ; cat $first_file'
```

**How it works:**
- The user uploads up to 2 `.txt` files (each up to 1MB) when launching the environment.
- The files are made available in the environment as a workspace directory using the `env-storage` store and the input name.
- The grain can access the uploaded files using the specified directory name (e.g., `$SOURCE_DIR`).


### `outputs`
Outputs exposes information about your newly deployed environment and make it available for the environment's end-user or automation processes. Outputs will usually be available at the end of the environment's initialization and accessible throughout the environment lifecycle.

Outputs are a dictionary composed by the output name and the output value.

```yaml
outputs:
  website-url:
    value: 'https://application-name-{{ sandboxid | downcase }}.quali.click'
    quick: true # optional. default false
    kind: link
  db-hostname:
    value: '{{ .grains.mysql.outputs.hostname }}'
```

The ```quick: true``` attribute is optional and defaults to false. Setting it to `true` will cause the specific output to be presented in the __Quick Access__ section of the environment for ease of use.

:::info
The example above includes some of the Torque's YAML templating engine capabilities allowing the blueprint designer more flexibility and leads to less code that will require maintenance. More examples for templating will be described [Torque Templating engine](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#torque-templating-engine).
:::

The outputs section in the Torque blueprint YAML also supports spaces to make outputs more user friendly in the following way:

```yaml
outputs:
  Database Connection String:
    value: '{{ .grains.mysql.outputs.connection_string }}'
```

When using outputs with spaces in a nested blueprint, make sure encase the output name in the following way:

```yaml
outputs:
  Database Connection String:
    value: '{{ .grains.mysql.outputs.["Database Connection String"] }}'

grains:
  nested-bp:
    kind: blueprint
    spec: 
      outputs: 
        - "Database Connection String"
```


### `grains`
Grains are the basic building blocks of a blueprint utilizing infrastructure as code (IaC) assets or automation processes to orchestrate the desired environment. In many organization, the blueprint designers will have a predefined set of grains they can use in blueprints provided by the IT/Ops/DevOps or platform team. 

The basic grain template is composed out of the grain name, kind, inputs and output. specific grains might support other features that are technology specific.

```yaml 
grain_name:
    kind: terraform
    spec:
      source: 
        store: <connected repo name>
        path: <path to module>
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
Note that in auto-generated blueprints, the __grain_name.spec.agent.name__ is automatically published as a blueprint input, which the blueprint designer can use. As a best practice, it's recommended to remove the __agent.name__ input once the blueprint is published to the catalog.
:::


The following grains are available:
* [Terraform](/blueprint-designer-guide/blueprints/terraform-grain)
* [OpenTofu](/blueprint-designer-guide/blueprints/opentofu-grain)
* [Helm](/blueprint-designer-guide/blueprints/helm-grain)
* [Kubernetes](/blueprint-designer-guide/blueprints/kubernetes-grain)
* [Shell](/blueprint-designer-guide/blueprints/shell-grain)
* [Ansible](/blueprint-designer-guide/blueprints/ansible-grain)
* [CloudFormation](/blueprint-designer-guide/blueprints/cloudformation-grain)
* [Blueprint](/blueprint-designer-guide/blueprints/blueprint-grain)
* [CloudShell](/blueprint-designer-guide/blueprints/cloudshell-grain)

### `source`

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
        store: my-repo # connected repository name
        path: folder/my-app # path to module

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

### `agent`

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
  rds:
    kind: terraform
    spec:
      agent:
        name: '{{ inputs.agent_name }}'
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
* **isolated** - A boolean value (`true` or `false`) indicating whether the grain should run in isolation on a runner. If not defined, the default is determined internally based on the configuration (e.g., if agent's storage class supports `ReadWriteMany`, the default is `false`).

```yaml 
grains:
  # launch an RDS instance using Terraform
  rds:
    kind: terraform
    spec:
      agent:
        name: eks-ohio # Required
        storage-size: 800 # Optional
        runner-namespace: my-namespace # Optional
        service-account: torque-sa # Optional
        isolated: true # Optional
 ```   

You can add the `node-selector` and/or `pod-labels` sections to your grain and specify the node labels you want the target node(s) to have. The `node-selector` and its labels will be applied on the pod specification. Kubernetes only schedules the pod onto nodes that have each of the labels you specify. 

For example:

```yaml
grains:
  nginx:
    kind: helm
    spec: 
      source:
        ...
      agent:
        name:
        kubernetes:
          node-selector:
            - app: torque
          pod-labels:
            - app: torque
```

### `depends-on`
The need to deploy one IaC component before the other is common and usually required when 3rd party components, managed services and other teams need to provide the infrastructure. Using dependencies in the blueprint YAML Torque will evaluate and optimize the deployment process to make sure dependencies are respected and components with no dependencies will be deployed in parallel to maximize efficiency and reduce overall uptime.

In the example below, 3 grain in the blueprint will be deployed in the following order: rds and redis will be deployed in parallel - and my_app will be deployed next, only in case of a successful deployment.

```yaml 
grains:
  rds:
    # launch an AWS RDS instance using Terraform
    kind: terraform

grains:
  redis:
    # launch an AWS ElastiCache using CloudFormation
    kind: cloudformation

  my_app_demo:
    # launcing K8s based microservices application using Helm
    depends-on: rds, redis
    kind: helm
 ```   


:::info
The ability to use outputs from specific grain usually requires the grain deployment to finish successfully. designing a blueprint with output usually requires dependencies between the grains.
:::



### `labels`

The labels block in your blueprint YAML structure allows you to attach metadata to environments created from the blueprint. Each label is a key-value pair. 

Labels can be static, like `key: value`, or dynamic, using input variables like `version: '{{ .inputs.version }}'`. In the dynamic case, the value of the label is determined by the value provided for the version input when the blueprint is used to create an environment. This enables customization of environments based on user-defined inputs.

:::note
1. The labels are applied to the environment, not the blueprint itself, and won't appear as part of the catalog item's metadata. 
2. The environment labels will be merged with any blueprint labels already defined.
:::


```yaml
spec_version: 2
description: ...

labels:
  - key: value
  - version: '{{ .inputs.version }}'

inputs:
  version:
    type: string

grains: ...
```


### `layout`

Layout is a separate yaml that will be referenced from the blueprint yaml like so:

:::note
The layout yaml must reside inside a folder named "layouts".
:::

```yaml
spec_version: 2
description: ...
layout:
  source:
    store: <connected repo>
    path: <path to layout file>
  exclude-from-layout:  # optional
    - grain_name_1
    - grain_name_2
```

The **layout** element is where the blueprint references the layout that will be applied to environments created from it. To learn more, visit [layouts](blueprint-designer-guide/layouts/layouts.md)

The **exclude-from-layout** element is optional, use it in case you need to apply the layout only to part of the grains but not all of them.

### `metadata`

The metadata section allows you to define additional information about the blueprint that affects how it's presented and behaves in the Torque catalog. This section contains optional fields that enhance the blueprint's appearance and functionality.

```yaml
spec_version: 2
description: ...

metadata:
  self-service: true
  display-name: "My Custom Blueprint"
  icon: "database"

grains: ...
```

#### `self-service`

Controls whether the blueprint is available for self-service deployment by end users. When set to `true`, users can deploy environments from this blueprint directly. When set to `false`, the blueprint may require additional approval or administrative intervention.

```yaml
metadata:
  self-service: true  # Default: false
```

#### `display-name`

Specifies a user-friendly display name for the blueprint that will be shown in the Torque UI catalog. This allows you to provide a more descriptive name than the filename or internal identifier.

```yaml
metadata:
  display-name: "Production Web Application Stack"
```

#### `icon`

Defines the icon that will be displayed for the blueprint in the Torque catalog. This helps users quickly identify and distinguish between different blueprints.

```yaml
metadata:
  icon: "database"
```

## Grains inputs & outputs
Inputs and outputs are used both in the blueprint level and in the grains level. Grains can use inputs and outputs to pass data between IaC components, validate information and eventually lead to reducing the amount of IaC components that needs to be maintained by the organization.

In the below example, a Terraform deployment generates a connection string to a managed database that can then be utilized by the application itself using the ability to pass output from one grain as a input to the other.

```yaml 
grains:
  rds:
    # launch an RDS instance using Terraform
    kind: terraform
    spec:
      ...
      outputs:
        - connection_string

  my_app_demo:
    # launcing k8s based microservices application using HELM
    kind: helm
    depends-on: rds
    spec:
      ...
      inputs:
        - db.connectionString: '{{ .grains.rds.outputs.connection_string }}'
 ```    


### Complex inputs

In some cases, you may want to pass complex objects (such as nested dictionaries or JSON structures) as inputs to nested blueprints or grains. This is useful for passing Helm values, environment variables, or other structured data between blueprints and grains.

Below are two examples demonstrating how to pass complex inputs:

#### Example 1: Helm complex inputs

Root Blueprint:

```yaml
spec_version: 2
inputs:
  agent:
    type: agent    
  namespace:
    type: string
  tag:
    type: string
    default: stable

grains:
  mongodb:
    kind: blueprint
    spec: 
      outputs:
        - MONGO_URI

  application:
    kind: blueprint
    spec:
      source:
        path: blueprints/application.yaml
        store: blueprints-repo
      inputs:
        - agent: '{{.inputs.agent}}'
        - target_namespace: '{{.inputs.namespace}}'
        # Option 1
        - helm_values:
            mongodb.uri: '{{ .grains.mongodb.outputs.MONGO_URI }}'
            deployment.namespace: '{{.inputs.namespace}}'
            image.tag: '{{.inputs.tag}}'
        # Option 2
        # - helm_values: '{{.inputs.helm_values}}'
```

Nested (application) Blueprint:

```yaml
spec_version: 2

inputs:
  agent:
    type: agent    
  helm_version:
    default: '1.0'
  script_path:
    default: get-dns
  target_namespace:
    type: string
  helm_values:
    type: string
    default: '{ "deployment.namespace": "dev-namespace", "image.tag": "latest", "replicaCount": 2 }'

outputs:
  helm_output:
    value: '{{ .grains.helm-grain.scripts.post-helm-install.outputs.dns }}'

grains:
  helm-grain:
    kind: helm
    spec:
      source:
        path: helm/deployment
        store: application-repo
      agent:
        name: '{{ .inputs.agent }}'
      commands:
        - dep up helm/deployment     
      target-namespace: '{{ .inputs.target_namespace }}'
      command-arguments: '  --version {{ .inputs.helm_version }}  --debug  '
      inputs:
        - _: '{{ .inputs.helm_values }}' # Flatten the helm values
      scripts:
        post-helm-install:
          source:
            store: application-repo
            path: scripts/{{ .inputs.script_path }}.sh
          arguments: '{{ .inputs.helm_version }}'
          outputs:
            - dns
```

Default values.yaml:

```yaml
mongodb:
  uri: mongodb://mongo:27017
replicaCount: 1
image:
  repository: mongodb
  tag: stable
deployment:
  namespace: default
service:
  port: 80
```

#### Example 2: Shell complex inputs passing

Root Blueprint:

```yaml
spec_version: 2

inputs:
  agent:
    type: agent    
  tag:
    type: string
    default: stable
  env_var1:
    type: string
    default: some-env-var1
  env_var2:
    type: string
    default: some-env-var2

grains:
  health-check:
    kind: blueprint
    spec:
      source:
        path: blueprints/health-check.yaml
        store: blueprints-repo
      inputs:
        - agent: '{{.inputs.agent}}'
        - shell_env_vars:
            ENV_VAR1: '{{.inputs.env_var1}}'
            ENV_VAR2: '{{.inputs.env_var2}}'
```

Nested (inner) Blueprint:

```yaml
spec_version: 2

inputs:
  agent:
    type: agent
  shell_env_vars:
    type: string

grains:
  script:
    kind: shell    
    spec:
      agent:
        name: '{{ .inputs.agent }}'
      env-vars:
        - _: '{{ .inputs.shell_env_vars }}' # Flatten the env vars
      activities:
        deploy:
          commands:
            - echo printing env vars
            - env
```

These patterns allow you to pass structured data between blueprints and grains, enabling more flexible and reusable blueprint designs.

### Dynamic outputs

Dynamic outputs provide an advanced capability to capture and access all outputs produced by grains, including both explicitly declared outputs and additional outputs that may be generated by the underlying technology. This feature enables more flexible data flow between grains and blueprints through two key mechanisms:

1. **Capture Extra Outputs**: Automatically capture all outputs a grain produces, including non-declared ones
2. **Custom Liquid Filter**: Use the `keyaccess` filter to dynamically access specific keys within output objects

:::info
The availability of extra outputs depends on the grain technology. Some grains like Helm can only produce declared outputs, while others like Blueprint, Terraform, Terragrunt, and OpenTofu may generate additional outputs beyond those explicitly declared in the grain spec.
:::

#### Usage Examples

**Root Blueprint (root-blueprint.yaml)**:

```yaml
spec_version: 2
  
grains:
  # app1 is a nested blueprint that produces dynamic outputs
  app1:
    kind: blueprint
    spec:
      source:
        path: middle-layer-blueprint.yaml
      outputs:
        - middle-a-out
        - middle-a-extra
        - middle-b-extra

  # app2 accesses one of the internal outputs of app1 dynamically
  app2:
    depends-on: app1
    kind: blueprint
    spec:
      inputs:
        # Access a specific key in the dictionary using the 'keyaccess' filter
        # This works when middle-a-extra is a JSON string and the key exists
        - connection-string: '{{ .grains.app1.outputs.middle-a-extra | keyaccess: "mongo" }}'
  
  # app3 passes all internal outputs of app1 as a passthrough dictionary
  app3:
    depends-on: app1
    kind: terraform
    spec:
      inputs:
        # Pass the JSON representing all extra outputs
        # This will be flattened and passed as separate key-value pairs to terraform
        - _: '{{ .grains.app1.outputs.middle-b-extra }}'
```

**Middle Layer Blueprint (middle-layer-blueprint.yaml)**:

```yaml
spec_version: 2

outputs:
  middle-a-out:
    value: '{{ .grains.middle-a.outputs.out1 }}'
  middle-a-extra:
    # Assigns the value with the JSON string representing the serialized outputs dictionary
    value: '{{ .grains.middle-a.outputs }}'
  middle-b-extra:
    value: '{{ .grains.middle-b.outputs }}'

grains:
  middle-a:
    kind: blueprint
    spec:
      source:
        path: core-blueprint.yaml
      # Only 'sql' is declared explicitly, while 'mongo' and 'redis' are captured implicitly
      # and can be accessed dynamically using the 'outputs' object with the 'keyaccess' filter
      outputs:
        - sql

  middle-b:
    kind: blueprint
    spec:
      source:
        path: core-blueprint.yaml
      inputs:
        - redis: '{{ .grains.middle-a.outputs | keyaccess: "redis" }}'
        - all: '{{ .grains.middle-a.outputs }}'
      # All outputs ('sql', 'mongo', 'redis') are captured implicitly
```

**Core Blueprint (core-blueprint.yaml)**:

```yaml
spec_version: 2

outputs:
  mongo:
    value: '{{ .grains.mongo.outputs.connection-string }}'
    kind: link
  redis:
    value: '{{ .grains.redis.outputs.connection-string }}'
    kind: link
  sql:
    value: '{{ .grains.sql.outputs.connection-string }}'

grains:
  mongo:
    kind: blueprint
    spec:
      outputs:
        - connection-string

  redis:
    kind: blueprint
    spec:
      outputs:
        - connection-string

  sql:
    kind: blueprint
    spec:
      outputs:
        - connection-string
```

#### Key Syntax

- **Access all outputs**: `{{ .grains.grain_name.outputs }}` - Returns a JSON string of all outputs
- **Access specific key**: `{{ .grains.grain_name.outputs | keyaccess: "key_name" }}` - Extracts a specific key from the outputs object
- **Flatten outputs**: `_: '{{ .grains.grain_name.outputs }}'` - Passes all outputs as flattened key-value pairs

This dynamic output capability enables more sophisticated blueprint architectures where data can flow seamlessly between different layers and technologies while maintaining flexibility in how outputs are consumed and transformed.


## Torque Templating Engine
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
        store: assets
        path: s3
      agent:
        name: '{{ .inputs.agent_name }}'
      inputs:
        - bucket_name: '{{ .inputs.bucket_name | strip }}-bucket-{{ envid | downcase }}'
```

For details and examples of how to use the parameters from the parameter store inside blueprints, check [this article](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#parameters).

### Dynamic Attributes
Blueprint designers might need extra details about the account, space or environment during the environment's orchestration. Torque provides dynamic attributes which are pre-defined parameters blueprints designers can use. The currently supported dynamic attributes are:

- `envId`
- `blueprintName`
- `ownerEmail`
- `environmentName`
- `accountName`
- `spaceName`

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

The syntax is: ```{{ .params.param-value }}```

The syntax is the same for both account and space level parameters. A space-level parameter will take precedence over an account-level parameter with the same name.

```yaml 
grains:
  s3_bucket:
    kind: terraform
    spec:
      source:
        store: assets
        path: s3
      agent:
        name: '{{ .inputs.agent_name }}'
      inputs:
        - bucket_name: '{{ .params.my-bucket }}'
```

## Environment Variables
In many cases, passing information through environment variables is required for IaC modules to properly execute with the right data in mind. The environment variables provided under a specific grain will be accessible only during the grain lifecycle of the specific grain and can be used as a specific string or to be derived from a blueprint input or other grain output. 

:::note
The env-vars field is relevant only to concrete IaC grains (e.g., terraform, helm, ansible, shell, etc.) and does not apply to grains of kind 'blueprint'.
:::

```yaml 
  s3_bucket:
    kind: 
    spec:
      ...
      env-vars:
        - VAR_NAME1: value1
        - VAR_NAME2: '{{ .inputs.input_name }}'
        - VAR_NAME3: '{{ .grains.vm.outputs.agent_name }}'
```

## Disabling Auto-Retry
In some situations, Torque will automatically retry to deploy failed grains. This behavior is usually very beneficial but it might not be suitable in all cases.
In case you wish to exclude a specific grain from the auto-retry, include the following in the blueprint:

:::note
The auto-retry currently applies only to terraform grain. To learn more about auto retry, see [auto-retry](/environment-services/drift-and-update#auto-retry-failed-deployments)
:::


```yaml 
grains:
  s3:
    kind: terraform
    spec:
      source:
      ...
      auto-retry: false  # optional
```

The auto-retry element is optional . If not present, it defaults to "true". Can be "true" or "false".


## Workspace directories

:::note
The `workspace-directories` is supported for all grain types.
:::

The `workspace-directories` section allows you to specify a list of source repositories that will be checked out and made available in the workspace during the deployment process. These repositories can contain files that are required, such as configuration files, scripts, or any other supporting files.

### Configuring Workspace Directories

Within the `workspace-directories` section, you can specify one or more sources. Each source is defined as follows:

```yaml
grains:
  app:
    kind: helm
    spec:
      agent:  
      ...
      workspace-directories:
        - source:
            store: <connected repo name>
            name: DIRECTORY_NAME # used to access the checked-out files in the workspace
            tag: <tag> # can be replaced with branch: <branch name> or commit: <commit sha>
```

- `store`: The name of the store (repository) where the source files are located.
- `name`: The name that will be used to access the checked-out files in the workspace. This name will be available as an environment variable during the execution of commands.
- `tag`: The tag of the repository to be checked out. (can be replaced with `branch: <branch name>` or `commit: <commit sha>`)

### Accessing Workspace Directories

Taking Helm for example, during the execution of commands specified in the `commands` section, you can access the checked-out files from the workspace-directories using the environment variables that correspond to the `name` specified for each source.

For example, if you have defined two workspace directories with the names `APP_CONFIG_REPO` and `APP_VALUES_REPO`, you can access their contents using the `${APP_CONFIG_REPO}` and `${APP_VALUES_REPO}` environment variables, respectively.

```yaml
grains:
  app:
    kind: helm
    spec:
      agent:
      ...
      commands:
        - list && cp -R ${APP_CONFIG_REPO}/src/main/config ${WORK_DIR}
        - list && cp -R ${APP_VALUES_REPO}/global/config ${WORK_DIR}
```

In the above example, the `cp` command copies files from the `src/main/config` directory of the `APP_CONFIG_REPO` repository and the `global/config` directory of the `APP_VALUES_REPO` repository into the `${WORK_DIR}` directory.


In this case, the entire repository will be checked out, and the `name` specified (`ROOT_DIR`) can be used to access the root directory in the workspace.

### Working with Artifactory as Binary Repository

Artifactory is a popular binary repository manager that can store and manage various types of artifacts, including Docker images, Helm charts, and other binary files. In Torque, you can use Artifactory as a source for binary files that are required during the deployment process. This can be particularly useful for scenarios such as:

- Storing and managing Helm charts or other application configuration files
- Storing and managing Terraform state files or other infrastructure-related artifacts
- Storing and managing Docker images or other container-related artifacts

**Motivation and Scope**

Using Artifactory as a binary repository in Torque provides several benefits:

1. **Centralized Artifact Management**: Artifactory acts as a centralized repository for all your binary artifacts, making it easier to manage and distribute them across multiple environments.

2. **Version Control**: Artifactory supports versioning and tagging of artifacts, allowing you to track changes and roll back to previous versions if needed.

3. **Access Control**: Artifactory provides granular access control mechanisms, allowing you to control who can access and modify specific artifacts.

4. **Caching and Proxying**: Artifactory can cache and proxy remote repositories, reducing network traffic and improving performance.

5. **Integration with CI/CD Pipelines**: Artifactory integrates seamlessly with various CI/CD tools, making it easier to manage artifacts throughout the software delivery pipeline.

**Usage Example**

To use Artifactory as a binary repository in Torque, you need to configure it as a workspace directory within your blueprint. Here's an example:

```yaml title="Artifactory - Blueprint usage example"
vm-grain:
    kind: terraform
    spec:
      source:
        store: tf-modules
        path: aws/deploy_vm
      agent:
        name: '{{.inputs.agent}}'
      inputs:
        - name: '{{.inputs.vm_name}}'
      workspace-directories:
// highlight-start
        - source:
            name: file1            
            store: artifactory/my-artifactory-store # working with Artifactory
            path: helm/charts.tar.gz
        - source:
            name: file2
            store: artifactory/my-artifactory
            path: artifactory/tf/workspaces/jfrog-ws1/state.latest.json 
// highlight-end
        - source: 
            name: dir1
            store: my-repo # working with repositories
            commit: eb7bf547f916ff11f0f95e35fb1e8c6fd6535ce1
```

In this example, we have two workspace directories (`file1` and `file2`) that are configured to use Artifactory as the source. The `store` parameter specifies the Artifactory store name, which should be prefixed with `artifactory/`. The `path` parameter specifies the path within the Artifactory store where the desired artifact is located.

**Setup**

To use Artifactory with Torque, you need to configure an Artifactory credential in the Credentials Store. 

In Torque portal, navigate to the `Account Settings` and to the Credentials page. Click on the `Add Credentials` button and choose `JFrog Artifactory`.

Provide a `Name` and a `Description`, select the allowed `Spaces` that can use that Artifactory server, fill in the `Server URL` and the `Token` and hit the `Apply` button.

![artifactory](/img/artifactory.png)

You are also able to create an Artifactory credential using the Torque REST API as well. Here is an example on setting up Artifactory credentials on a space level:

```curl title="API call to setup Artifactory credentials on a space level"
POST {{host}}/api/spaces/{{space}}/settings/credentialstore
{
  "name": "my-artifactory",             # need to change
  "allowed_space_names": ["{{space}}"], # need to change
  "cloud_identifier": "artifactory", 
  "cloud_type": "artifactory",
  "credential_data": {
    "server_url": "https://artifactory.jfrog.io/artifactory", # need to change
    "token": "1234",                    # need to change
    "type": "artifactory"
  }
}
```

In this example, we're creating an Artifactory credential named `my-artifactory` with the server URL and a token for authentication. Currently, Torque supports Artifactory token authentication.

Once the Artifactory credential is configured, you can reference it in your blueprint's `workspace-directories` section using the `store` parameter, as shown in the usage example above.