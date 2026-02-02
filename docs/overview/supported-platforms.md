---
sidebar_position: 12
title: Supported Platforms
---

## Cloud and Infrastructure Providers
<ProductName /> supports installation of an agent over the following platforms:

* Microsoft Azure via [Azure Kubernetes Service](https://azure.microsoft.com/en-us/products/kubernetes-service) (AKS) 
* Amazon Web Services (AWS) via [Elastic Kubernetes Service](https://aws.amazon.com/eks/) (EKS)
* Google Cloud Platform (GCP) via [GCP Kubernetes Engine](https://cloud.google.com/kubernetes-engine) (GKE)
* Oracle Cloud Infrastructure (OCI) via [OCI Kubernetes Engine](https://www.oracle.com/cloud/cloud-native/container-engine-kubernetes/) (OKE)
* Self-managed Kubernetes Cluster
* Docker-based agent on VMWare vCenter

## Infrastructure as Code Frameworks
<ProductName /> provides native support for IaC assets residing in a git repository. When connecting an IaC asset repository to <ProductName />, <ProductName /> maps your repository's assets, prompts you to select the ones you would like to use in <ProductName />, and auto-creates working blueprints out of the selected assets. Additionally, <ProductName /> allows you to insert custom Linux-script based automation as a component of a blueprint.

<ProductName /> supports the following IaC frameworks:
* [Terraform](/blueprint-designer-guide/blueprints/terraform-grain.md)
* [Kubernetes](/blueprint-designer-guide/blueprints/kubernetes-grain.md)
    * [Helm](/blueprint-designer-guide/blueprints/helm-grain.md)
* [AWS CloudFormation](/blueprint-designer-guide/blueprints/cloudformation-grain.md)
* [Ansible](/blueprint-designer-guide/blueprints/ansible-grain.md)
* [CloudShell](/blueprint-designer-guide/blueprints/cloudshell-grain.md)
* [Shell](/blueprint-designer-guide/blueprints/shell-grain.md) - (asset-agnostic grain that allows you to run bash/python3 commands as part of your environment’s launch and/or teardown)


This table lists the capabilities supported for each IaC or container technology. 

|              | Terraform | Helm      | K8S native | CloudFormation | Ansible | OpenTofu 
| ------------ | --------- | --------- | ---------  | ---------      | ------- | --------
|Inputs/Outputs|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
|Tags|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
|Update|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:||:heavy_check_mark:|
|Drift|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:*||:heavy_check_mark:|
|Technology specific Policies|:heavy_check_mark:|||||:heavy_check_mark:|
|Consumption Policies|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
|Discovery|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|||
|Logs/infra|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
|Introspection|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:||:heavy_check_mark:|
|Scripts (extensibility)|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:||:heavy_check_mark:|:heavy_check_mark:|
|Day-2|:heavy_check_mark:|||:heavy_check_mark:||:heavy_check_mark:|:heavy_check_mark:|
|Secret management|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:||:heavy_check_mark:|

For more details, see [Blueprint YAML](/blueprint-designer-guide/blueprints/blueprints-overview).

\* Cloudformation drift reconciliation is in beta 

## CI/CD Tooling
<ProductName /> enables you to integrate with various leading CI/CD tools such as Bamboo, Jenkins and TeamCity, to facilitate your application development activities.

* [Azure DevOps](/eco-system/ci-cd-tooling/azure-devops.md)
* [CircleCI](/eco-system/ci-cd-tooling/circle-ci.md)
* [GitHub Actions](/eco-system/ci-cd-tooling/github-actions.md)
* [Spinnaker](/eco-system/ci-cd-tooling/spinnaker.md)
* [TeamCity](/eco-system/ci-cd-tooling/teamcity.md)
* [Jenkins](/eco-system/ci-cd-tooling/jenkins.md)
* Bamboo (coming soon)
* Jira (coming soon)
