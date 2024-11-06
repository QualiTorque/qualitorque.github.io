---
sidebar_position: 1
title: The Environment YAML
---

If you know how to write Torque blueprints, you can write Environment as Code (EaC) YAML files. 
The structure of an EaC YAML file is similar to a blueprint, with the addition of an 'environment' section that defines the properties of the specific environment instance.


:::tip__Note__
Environments are written in YAML files that reside in a __/environments__ folder within a source control repository onboarded to Torque (the folder name is case-sensitive and must be "environments"). Environments kept in the  __/environments__  folder must be of type ".yaml" and not ".yml" to be used in Torque.
:::

Environment YAML files must be placed under the 'environments' directory in the repository. Torque periodically scans this directory for environment YAML files and stores them internally.

For the Blueprint example above, the directory structure is:

```bash
environments/
    production.yaml
    staging.yaml
    devbox.yaml
```

When a new environment YAML file is detected or an existing one is modified, Torque performs validations on the file. If the file is valid, a snapshot is saved, which will be used to create or reconcile the environment. If the file is invalid, it will not affect the existing snapshot or the environment.

If a user modifies the environment YAML file, the changes will be applied to the corresponding environment.

Possible applicable changes:
- Add/remove grains
- Change commit/tag
- Environment inputs
- Grain inputs

:::tip__info__
All sources must contain a commit hash or tag.
:::
   

### complete example

Here's an example of a Torque environment YAML file:

```yaml
spec_version: 2

environment:
  environment_name: eac-env-name
  owner_email: me@quali.com
  state: active
  labels:
    label-key: label-value
    label-key2: # for key with not value
     
inputs:
  agent:
    type: agent
    default: production-k8s

  tf_input:
    type: string
    default: default_input
    
outputs:
  tf_output: 
    value: '{{ .grains.tf1.outputs.output2 }}'
    quick: true
    
grains:
  tf1:
    kind: terraform
    tf-version: 1.5.5
    spec:
      source:
        store: iac-repo
        path: terraform/complex-references1
        tag: v1.0.1 
      agent:
        name: '{{ .inputs.agent }}'
      inputs:
        - test_input1: '{{ .inputs.tf_input }}'
        - test_input2: "input2"
      outputs:
        - output2

  tf2:
    kind: terraform
    tf-version: 1.5.5
    spec:
      source:
        store: iac-repo
        path: terraform/complex-references2
        tag: v1.0.2
      agent:
        name: '{{ .inputs.agent }}'
      inputs:
        - test_input1: '{{.inputs.tf_input}}'
        - test_input2: "input2"
      outputs:
        - output2
      scripts: 
        pre-tf-init:
          source:
            store: scripts-repo
            path : scripts/user_script.sh
          arguments: "value"
        pre-tf-destroy:
          source:
            store: scripts-repo
            path : scripts/user_script.sh
          arguments: "value"
  
  bp1:
    kind: blueprint
    spec:
      source:
        store: iac-repo
        path: blueprints/building-block.yaml
        tag: official-1.0.1
      inputs:
        - agent: '{{ .inputs.agent }}'
```

In this example, the `environment` section defines the environment name, description, owner email, and state. The `inputs` and `outputs` sections define the environment-level inputs and outputs, respectively.

The `grains` section contains the list of grains that make up the environment, similar to a blueprint. Each grain specifies its kind (e.g., `terraform`, `blueprint`, etc.), version, and other configuration details specific to that grain type.

By following this structure, users can define and manage their environments as code, allowing for version control, collaboration, and automated deployments using Torque's Environment as Code (EaC) functionality.

### environment
Torque environment section contains all of the specific data related to the environment instance.

```yaml
environment:
  environment_name: eac-env
  description: eac example
  owner_email: me@quali.com
  state: active # desired state: active/inactive
  collaborators: 
    collaborators_emails:
      - collaborator1@quali.com
      - collaborator2@quali.com
  spaces:
    - spaceA
    - spaceB
  tags:
    key1: value1
    key2: value2
```
