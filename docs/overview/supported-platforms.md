---
sidebar_position: 12
title: Supported Platforms
---

## Cloud and Infrastructure Providers
Torque supports installation of an agent over the following platforms:

* Microsoft Azure via [Azure Kubernetes Service](https://azure.microsoft.com/en-us/products/kubernetes-service) (AKS) 
* Amazon Web Services (AWS) via [Elastic Kubernetes Service](https://aws.amazon.com/eks/) (EKS)
* Google Cloud Platform (GCP) via [GCP Kubernetes Engine](https://cloud.google.com/kubernetes-engine) (GKE)
* Oracle Cloud Infrastructure (OCI) via [OCI Kubernetes Engine](https://www.oracle.com/cloud/cloud-native/container-engine-kubernetes/) (OKE)
* Self-managed Kubernetes Cluster
* Docker-based agent on VMWare vCenter

## Infrastructure as Code Frameworks
Torque provides native support for IaC assets residing in a git repository. When connecting an IaC asset repository to Torque, Torque maps your repository's assets, prompts you to select the ones you would like to use in Torque, and auto-creates working blueprints out of the selected assets. Additionally, Torque allows you to insert custom Linux-script based automation as a component of a blueprint.

Torque supports the following IaC frameworks:
* [Terraform](/blueprint-designer-guide/blueprints/terraform-grain.md)
* [Kubernetes](/blueprint-designer-guide/blueprints/kubernetes-grain.md)
    * [Helm](/blueprint-designer-guide/blueprints/helm-grain.md)
* [AWS CloudFormation](/blueprint-designer-guide/blueprints/cloudformation-grain.md)
* [Ansible](/blueprint-designer-guide/blueprints/ansible-grain.md)
* [Shell](/blueprint-designer-guide/blueprints/shell-grain.md) - (asset-agnostic grain that allows you to run bash/python3 commands as part of your environment’s launch and/or teardown)

For details, see [Blueprint YAML](/blueprint-designer-guide/blueprints/blueprints-overview).

## CI/CD Tooling
Torque enables you to integrate with various leading CI/CD tools such as Bamboo, Jenkins and TeamCity, to facilitate your application development activities.

* [Azure DevOps](/eco-system/ci-cd-tooling/azure-devops.md)
* [CircleCI](/eco-system/ci-cd-tooling/circle-ci.md)
* [GitHub Actions](/eco-system/ci-cd-tooling/github-actions.md)
* [Spinnaker](/eco-system/ci-cd-tooling/spinnaker.md)
* [TeamCity](/eco-system/ci-cd-tooling/teamcity.md)
* [Jenkins](/eco-system/ci-cd-tooling/jenkins.md)
* Bamboo (coming soon)
* Jira (coming soon)
