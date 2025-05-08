---
sidebar_position: 7
title: The Blueprint Grain
---

## Reusable building-blocks

The Blueprint grain is Torque’s built-in support for allowing a Torque blueprint to be used as a grain in another Torque blueprint. This process is called "nesting" and such a blueprint will then be referred to as a "nested blueprint" within the context of the blueprint in which it is used as a grain. The blueprint containing the blueprint grain is called the “nesting blueprint”. 

Nesting a blueprint allows you to carry over (in a single grain) all of the nested blueprint’s grains, internal dependencies, and orchestration relationships, while only needing to provide the inputs for the nested blueprint, and specify the outputs expected to be received from it. These outputs can then be referred to by other grains in the blueprint.

## Usage example 

Below is an example of a grains section of a nesting blueprint, containing a blueprint grain and a helm grain that depends on it:

```yaml
spec_version: 2

inputs:
  db_size:
    type: string
    allowed-values:
    - Small
    - Medium
    - Large
    description: |
      Small: 20 GiB to 100 GiB (suitable for lightweight applications or testing)
      Medium: 100 GiB to 1 TiB (common for moderate workloads or production databases)
      Large: 1 TiB to 64 TiB (designed for high-performance, data-intensive applications)
  
  db_engine_version:
    type: string
    - "PostgreSQL 16.3"
    - "PostgreSQL 15.7"
    - "PostgreSQL 14.12"

  version:
    type: string
    default: "1.0.0"

grains:
  infra:
    kind: blueprint
    spec:
      source: 
        store: assets
        path: blueprints/aws-infra-blueprint.yaml
      inputs:
        - size: '{{ .inputs.db_size }}'
        - engine_version: '{{ .inputs.db_engine_version }}'
      outputs:
        - db_hostname
        - connection_string
        - s3_bucket_arn

  k8s-app:
    kind: helm
    depends-on: infra
    spec:
      source:
        store: assets
        path: assets/helm-app
      agent:
        name: '{{ .inputs.agent }}'
      inputs:
        - domain: 'torque-demo.click'
        - redis.storageClassName: gp2
        - hostname: 'app--{{ sandboxid | downcase }}'
        - version: '{{ .inputs.version }}'
        - connectionString: '{{ .grains.infra.outputs.connection_string }}'
        - objectStore.s3BucketArn: '{{ .grains.infra.outputs.s3_bucket_arn }}'

```

## The Grain spec

### `source`
The source section of a blueprint grain must contain the ```store``` and ```path``` attributes. 

* ```store```: Defines the name of the git repository containing the blueprint
* ```path```: Is set to the references blueprint

```yaml
grains:
  nginx:
    kind: blueprint
    spec:
      source:
        store: blueprint-repository
        path: blueprints\nginx-blueprint.yaml      
```

Please see [the grain source](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source) for more details.

### `agent`
The blueprint grain does not require an agent as Torque uses the agent defined in the referenced blueprint. However, you can specify the agent as an input of ```type: agent``` on the blueprint level, and reference it from the grain, both as an input and in the host section.

### `inputs`
Blueprint grain inputs are the names of the inputs of the nested blueprint, and the values being provided for each one when the blueprint is launched as a nested blueprint. These names must exactly match the input names in the ```inputs``` section of the nested blueprint’s blueprint YAML.

__Example:__

```yaml
grains:
  nginx:
    kind: blueprint
    spec:
      source:
        ...
      inputs:
        - instance_id: '{{ .inputs.instance_id }}'
        - application_port: '{{ .inputs.application_port }}'
```

### `outputs`
Blueprint grain outputs are the names of the outputs of the nested blueprint, which will determine which outputs will be populated on the blueprint grain to be later referenced by other grains or by the nesting blueprint’s ```outputs``` section. These names must exactly match the input names in the ```outputs``` section of the nested blueprint’s blueprint YAML.
