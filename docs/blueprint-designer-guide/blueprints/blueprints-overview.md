---
sidebar_position: 1
title: Blueprint YAML Overview
---

Torque blueprints are reusable components designed to model a required environment from the infrastructure to the application. **Blueprint designers** utilize Torque's VSCode plugin or the Torque's self-service UI to build a YAML based imperative blueprints that aimed to fulfill business requirements in a self-service manner for their end-users. 

:::tip__Note__
Blueprints are written in YAML files that reside in a __/blueprints__ folder within a Github, Gitlab or BitBucket repository (the folder name is case-sensitive and must be "blueprints"). The __/blueprints__ folder must be defined as the blueprint repository in the space's __Settings > Repositories__ page. Blueprints file type must be ".yaml" and not ".yml". 

For enhanced asset discovery and organization, see [Torque Assets Markers](/blueprint-designer-guide/torque-assets-markers).
:::

Common example will be a platform team or a DevOps team building Dev, Test and staging environments for their development, QA and product teams. With Torque, the DevOps team can focus on design, best practices, and security for environment, while their end users are being self-served from the torque UI, API or eco-system integrations based on governance and policies without having the 'keys-to-the-cloud'.

## Grain Categories

Torque provides different types of grains per use case:

- **Core Blueprint Structure**: Blueprint YAML first
- **Configuration Management**: Ansible
- **CI/CD and GitOps**: ArgoCD
- **Nested Blueprints**: Blueprint Grain
- **Infrastructure as Code**: CDK, CloudFormation, OpenTofu, Terraform, Terragrunt
- **Platform Integration**: CloudShell
- **Container Orchestration**: Helm, Kubernetes
- **Custom Solutions**: Custom Grain, Shell

## In this section
* [Torque's Blueprint YAML](/blueprint-designer-guide/blueprints/blueprints-yaml-structure)
* [The Ansible Grain](/blueprint-designer-guide/blueprints/ansible-grain)
* [The ArgoCD Grain](/blueprint-designer-guide/blueprints/argocd-grain)
* [The Blueprint Grain](/blueprint-designer-guide/blueprints/blueprint-grain)
* [The CDK Grain](/blueprint-designer-guide/blueprints/cdk-grain)
* [The CloudFormation Grain​](/blueprint-designer-guide/blueprints/cloudformation-grain)
* [The CloudShell Grain](/blueprint-designer-guide/blueprints/cloudshell-grain)
* [Custom Grain](/blueprint-designer-guide/blueprints/custom-grain)
* [The Helm Grain](/blueprint-designer-guide/blueprints/helm-grain)
* [The Kubernetes Grain​](/blueprint-designer-guide/blueprints/kubernetes-grain)
* [The OpenTofu Grain](/blueprint-designer-guide/blueprints/opentofu-grain)
* [The Shell Grain](/blueprint-designer-guide/blueprints/shell-grain)
* [The Terraform Grain](/blueprint-designer-guide/blueprints/terraform-grain)
* [The Terragrunt Grain](/blueprint-designer-guide/blueprints/terragrunt-grain)