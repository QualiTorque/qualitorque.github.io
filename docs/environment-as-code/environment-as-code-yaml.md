---
sidebar_position: 1
title: The Environment YAML
---

Torque environments are executions of a Torque blueprint, launched for a specific business purpose. Environments can be launched using the Environment as code YAML for teams practicing GitOps, or using the Torque self-service portal.

:::tip__Note__
Environments are written in YAML files that reside in a __/environments__ folder within a source control repository onboarded to Torque (the folder name is case-sensitive and must be "environments"). Environments kept in the  __/environments__  folder must be of type ".yaml" and not ".yml" to be used in Torque.
:::

When environments are being launched from the Torque self-service portal, the environment YAML will be "stored in Torque" and it will be possible to download it and save it in Git when needed.

In the below example, GitHub repository is used for managing environments in a GitOps manner. <br />

![Environment as Code YAML](/img/eac-yaml-folder.png)

# Environment YAML Structure

The Torque's blueprint YAML is the main blueprint definition file. It contains general information about the environment as well as the grains that make up the environment's applications and services. The blueprint YAML is published to end-users in Torque's blueprint catalog. 

:::info
Any Torque environment is based on an environment.yaml that can be managed in Git repository or to be viewed and managed through the Torque self-service UI.

Here is a Torque environment yaml that was launched from the Torque UI.
```yaml
kind: environment                               
environment_name: "Event microservice Production"
description: "Kubernetes based deployment of the event-ms optimized for production"
state: active
owner_email: user@quali.com
blueprint:                                      
  name: "test-workstation"
  repository_name: "cloud-native-application"
  branch: "main"
  commit: "697d1a81fed31adf2eb9e75349def8245f80f87d"
inputs:
  service-account: "app-sa"
  agent: "demo-prod"
grains:
  create-ec2:
      source:
        commit: 697d1a81fed31adf2eb9e75349def8245f80f87d
  configure-workstation:
      source:
        commit: 697d1a81fed31adf2eb9e75349def8245f80f87d
```
:::


### kind
Torque environments should be set with the environment kind to indicate to torque that they should be operated automatically by the Environment as code engine.

```yaml
kind: environment  
```

### Description
The environment description is an optional but recommended field. Environment description will be presented in the Torque's UI and API so users consuming the environment will have more information about it.

```yaml
kind: environment
description: "Production instance of events-ms in GCP"

```

### Environment name
The name of the environment that will be presented in the Torque portal and API. Note that the environment name is not unique in Torque.

```yaml
kind: environment
description: "Production instance of events-ms in GCP"
environment_name: "name"

```


### Environment state
The desired state of the environment. Setting this key to 'active' will start the orchestration process of the environment to launch the required infrastructure and application. Setting this key to 'inactive' will start the termination process of the environment.

```yaml
kind: environment
description: "Production instance of events-ms in GCP"
environment_name: "name"
state: active ## active / inactive

```

### Environment owner
The user email of the owner of the environment.

```yaml
kind: environment
description: "Production instance of events-ms in GCP"
environment_name: "name"
state: active 
owner_email: example@example.com

```

### Environment collaborators
Additional users that can access the environment.

```yaml
kind: environment
...

owner_email: example@example.com
collaborators:
  collaborators_emails:
    - collaborator1@example.com
    - collaborator2@example.com

```

### Environment blueprint
The underlying blueprint that defines the environment grains and inputs. The blueprint is not required to be published in the catalog.
As the blueprint name in Torque is not unique across multiple repositories and spaces, the environment YAML requires both the blueprint name and repository. The branch name and commit will help select the blueprint's specific "point-in-time" version.

```yaml
kind: environment
...

blueprint:                                      
  name: "test-workstation"
  repository_name: "cloud-native-application"
  branch: "main"
  commit: "697d1a81fed31adf2eb9e75349def8245f80f87d"

```


### Environment inputs
Environment inputs are key-value pairs of metadata defined in the blueprint allowing the user to provide data when the environment is launched.

```yaml
kind: environment
...

blueprint:                                      
    ....

inputs:
  service-account: "app-sa"
  agent: "demo-prod"

```


### Environment grains
The environment grains section should contain the list of grains defined in the blueprint including the specific commit. Changes in the environment will usually be scoped to a new version of a grain that can be updated manually or GitOps based changes.

```yaml
kind: environment
...

grains:
  create-ec2:
      source:
        commit: 697d1a81fed31adf2eb9e75349def8245f80f87d
  configure-workstation:
      source:
        commit: 697d1a81fed31adf2eb9e75349def8245f80f87d

```