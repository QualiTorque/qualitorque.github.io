---
sidebar_position: 1
title: Main Concepts
---

Before you start on your Torque journey, please take a moment to familiarize yourself with the following key concepts:
* [**Blueprint**](/blueprint-designer-guide/blueprints) - An offline plan (template) of an environment that defines the applications, cloud infrastructure, networking and policies that make up the environment. Blueprints are defined in source-controlled YAML files and contain *grains*. Each grain represents a specific workload (for example, a Terraform module or a Helm chart). The blueprint defines the orchestration between the grains (order, dependency, etc.), and deploys a whole environment, from infrastructure to application. You can have Torque discover (or create) blueprints our of your Terraform and Helm assets, or write more sophisticated ones that deploy several assets. For details, see [Blueprint Quickstart Guide](/blueprint-designer-guide/blueprint-quickstart-guide).

* [**Environment**](/getting-started/Launch-environment) - An environment is a live instance of a blueprint. It contains the cloud infrastructure and application(s) that were deployed from the blueprint.

* [**Execution Host**](/getting-started/Connect%20an%20Execution%20Host) - A system or location where the blueprint is launched from. For example, a Kubernetes cluster can be an execution host, and the IaC commands such as "terraform apply" or "helm install" would be run from the cluster.

* [**Grain**](/blueprint-designer-guide/blueprints#grains) - The Torque representation of an asset (Terraform module or Helm chart). Each grain contains all the information required to deploy the asset such as inputs, versions, etc, as well as a reference to the location of the asset's code (repository).

* **Policies** - Torque policies allow setting an additional layer of goverhance on top of blueprints and the environments they deploy. Theese include:
    * [Blueprint policies](/blueprint-designer-guide/Policies) allow blueprint designers to set maximum duration guardrails (for high-cost environments perhaps).
    * [Security policies](/admin-guide/security-policies) allow the Torque account admin to set account-level limitations on AWS-created environments.

* [**Space**](/getting-started/Create%20your%20space) - A work area for a team to work on a specific project. In includes the team's members, assets (Terraform modules and/or Helm charts), the blueprints and the cloud accounts where the team's applications and cloud infrastructure will be deployed. 

* [**Tag**](/admin-guide/tags) - Torque deploys infrastructure and applications to the cloud. It automatically tags any resource created in the cloud with the cloud provider tags. There are 2 types of tags: System tags and custom tags. System tags are tags that are defined by Torque (for example, environment id, space name, etc) while custom tags are defined by the users according to their needs. 
