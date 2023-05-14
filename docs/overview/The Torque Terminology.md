---
sidebar_position: 3
title: Terminology
---

Before you start on your Torque journey, please take a moment to familiarize yourself with Torque's key concepts and infrastructure components. This article lists the main concepts you will come across in Torque, while the [**Architecture**](/overview/architecture) article that follows provides a diagram of the Torque architecture and its main components.

* [**Blueprint**](/blueprint-designer-guide/blueprints/blueprints-overview) - An offline plan (template) for an environment that defines the applications, cloud infrastructure, networking and policies that make up the environment. Blueprints are defined in source-controlled YAML files and contain *grains*. Each grain represents a specific workload (for example, a Terraform module or a Helm chart). The blueprint defines the orchestration between the grains (order, dependency, etc.), and deploys a whole environment, from infrastructure to application. You can have Torque discover (or create) blueprints out of your Terraform, Helm, or other supported IaC assets, or write more complex ones that deploy several assets. For details, see [Blueprint Quickstart Guide](/blueprint-designer-guide/blueprint-quickstart-guide).

    * [**Grain**](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#grains) - The Torque representation of an asset (e.g. Terraform module or Helm chart). Each grain contains all the information required to deploy the asset, such as inputs and versions, as well as a reference to the location of the asset's code (repository).

    * [**Environment**](/getting-started/Launch-environment) - An environment is a live instance of a blueprint. It contains the cloud infrastructure and application(s) that were deployed from the blueprint. The environment has a defined duration that can be manually extended or ended, as well as links to its applications, automation commands to run on the different cloud resources.

    * **Repository** - A git-based folder containing the IaC assets, container files and multi-asset blueprints that make up the Torque self-service catalog, and are consumed by your end-users. For details, see [Architecture](/overview/architecture).

* **Policies** - Torque policies allow setting an additional layer of governance on top of blueprints and the environments they deploy. These include:
    * [Blueprint policies](/blueprint-designer-guide/Policies) allow blueprint designers to set maximum duration guardrails (for high-cost environments perhaps).
    * [Policies](/governance/policies) allow the Torque account admin to set account-level limitations on AWS-created environments.

* [**Space**](/getting-started/Create%20your%20space) - A logically separate area that contains an association to one or more agents, asset repositories, a blueprint repository and Ci/CD plugins. Spaces can be used to logically separate between teams, projects, or even development lifecycle stages and allow the relevant end-users, administrators and blueprint designers to access only the relevant blueprints and environments.

* [**Tag**](/governance/tags) - A key-value pairing that is set by Torque to all of the resources and infrastructure entities provisioned by an environment (example: Owner = John.D@somecompany.com) There are 2 types of tags: System tags and custom tags. System tags are tags that are defined by Torque (for example, environment id, space name, etc) while the users define the custom tags according to their needs.

* **Agent** - A Torque automation agent that runs as a pod inside your designated Kubernetes cluster. This agent communicates with the Torque backend and is permitted to perform certain actions on your Kubernetes cluster. For more details, see [Architecture](/overview/architecture).