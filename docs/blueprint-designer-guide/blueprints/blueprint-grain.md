---
sidebar_position: 30
title: The Blueprint Grain
---

The Blueprint grain is Torque’s built-in support for allowing a Torque blueprint to be used as a grain in another Torque blueprint. This process is called "nesting" and such a blueprint will then be referred to as a "nested blueprint" within the context of the blueprint in which it is used as a grain. The blueprint containing the blueprint grain is called the “nesting blueprint”. 

Nesting a blueprint allows you to carry over (in a single grain) all of the nested blueprint’s grains, internal dependencies, and orchestration relationships, while only needing to provide the inputs for the nested blueprint, and specify the outputs expected to be received from it. These outputs can then be referred to by other grains in the blueprint. 

Note that the grain name of the blueprint grain __must exactly match__ the name of an existing blueprint within the Torque repository referenced in the “source: —> store:” attribute. This is the way the grain specifies which blueprint to use.

### source
The source section of a blueprint grain must contain the ```store:``` and ```path:``` attributes. ```store:``` defines the name of the git repository containing the blueprint, and ```path:``` is set to "blueprints", which is the mandatory name for the blueprints folder in a Torque blueprints repository. 

```yaml
grains:
  nginx:
    kind: blueprint
    spec:
      source:
        store: <space's blueprint repository>
        path: blueprints      
```

Please see [the grain source](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source) for more details.

### agent
The blueprint grain does not require an agent as Torque uses the agent defined in the referenced blueprint. However, you can specify the agent as an input of ```type: agent``` on the blueprint level, and reference it from the grain, both as an input and in the host section.

### inputs
Blueprint grain inputs are the names of the inputs of the nested blueprint, and the values being provided for each one when the blueprint is launched as a nested blueprint. These names must exactly match the input names in the ```inputs:``` section of the nested blueprint’s blueprint YAML.

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

### outputs 
Blueprint grain outputs are the names of the outputs of the nested blueprint, which will determine which outputs will be populated on the blueprint grain to be later referenced by other grains or by the nesting blueprint’s ```outputs``` section. These names must exactly match the input names in the ```outputs:``` section of the nested blueprint’s blueprint YAML.

__Example:__ Below is an example of a grains section of a nesting blueprint, containing a blueprint grain and a helm grain that depends on it:

```yaml 
grains:
  infra:
    kind: blueprint
    spec:
      source: 
        store: Assets
        path: blueprints
      inputs:
        - size: '{{ .inputs.db_size }}'
        - engine_version: '{{ .inputs.db_engine_version }}'
      outputs:
        - DB_hostname
        - connection_string
        - S3_bucket_arn

  K8sMicroservicesApp:
    kind: helm
    depends-on: infra
    spec:
      source:
        store: Assets
        path: assets/myHelmApp
      agent:
        name: my-torque-agent
      inputs:
        - hostname: 'myApp-{{ sandboxid | downcase }}'
        - domain: 'torque-demo.click'
        - version: '{{ .inputs.version }}'
        - connectionString: '{{ .grains.infra.outputs.connection_string }}'
        - objectStore.s3BucketArn: '{{ .grains.infra.outputs.S3_bucket_arn }}'
        - redis.storageClassName: gp2

```
