---
sidebar_position: 1
---

# The Torque Termonilogy


**Blueprint** - An offline plan or template of an environment. A blueprint is built from *grains*. A grain represents a specific workload (for example, a terraform module or a helm chart). The blueprint defines the orchestration between the grains (order, dependency, etc.) The blueprint is defined to deploy a whole environment, from infrastructure to application. Blueprints are defined in source-controlled YAML files.

**Grain** - The Torque representation of an asset (Terraform module or helm chart). Contains the information required to deploy the asset such as inputs, versions, etc as well as a reference to the location of the asset code (repository).

**Environment** - The infrastructure and application that were deployed from a blueprint.

**Space** - A work area for a team to work on a specific project. In includes the team members, the team's assets (terraform modules and/or helm charts), the blueprints and the cloud accounts where the team's application and infrastructure will be deployed. 

**Tag** - Torque deploys infrastructure and applications to the cloud. It will automaticallt tag any resource created in the cloud with the cloud provider tags. There are 2 types of tags: System tags, and custom tags. System tags are tags that are defined bt Torque (for example, environment id, space name etc) while custom tags are defined by the users accodring to their needs. 