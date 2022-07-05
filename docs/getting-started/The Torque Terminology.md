---
sidebar_position: 1
title: Main Concepts
---

Before you start on your Torque journey, please take a moment to familiarize yourself with the following key concepts:
* **Blueprint** - An offline plan (template) of an environment. A blueprint contains *grains*. Each grain represents a specific workload (for example, a Terraform module or a Helm chart). The blueprint defines the orchestration between the grains (order, dependency, etc.), and deploys a whole environment, from infrastructure to application. Blueprints are defined in source-controlled YAML files.

* **Environment** - The cloud infrastructure and application(s) that were deployed from a blueprint.

* **Execution Host** - A system or location where the blueprint is launched from. For example, a Kubernetes cluster can be an execution host, and the IaC commands such as "terraform apply" or "helm install" would be run from the cluster.

* **Grain** - The Torque representation of an asset (Terraform module or Helm chart). Each grain contains all the information required to deploy the asset such as inputs, versions, etc, as well as a reference to the location of the asset's code (repository).

* **Space** - A work area for a team to work on a specific project. In includes the team's members, assets (Terraform modules and/or Helm charts), the blueprints and the cloud accounts where the team's applications and cloud infrastructure will be deployed. 

* **Tag** - Torque deploys infrastructure and applications to the cloud. It automatically tags any resource created in the cloud with the cloud provider tags. There are 2 types of tags: System tags and custom tags. System tags are tags that are defined by Torque (for example, environment id, space name, etc) while custom tags are defined by the users according to their needs. 
