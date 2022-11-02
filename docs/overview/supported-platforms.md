---
sidebar_position: 10
title: Supported Platforms
---

## Cloud vendors
Torque supports installation of an execution host over the following platforms:

* Microsoft Azure via Azure Kubernetes Service (AKS) 
* Amazon Web Services (AWS) via Elastic Kubernetes Service (EKS)
* Google Cloud Platform (GCP) via GCP Kubernetes Engine (GKE)
* Oracle Cloud Infrastructure (OCI) via OCI Kubernetes Engine (OKE)
* Self-managed Kubernetes Cluster
* Docker-based execution host on VMWare vCenter

## Infrastructure-as-code
Torque provides native support for IaC assets residing in a git repository. When connecting an IaC asset repository to Torque, Torque maps your repository's assets, prompts you to select the ones you would like to use in Torque, and auto-creates working blueprints out of the selected assets. Additionally, Torque allows you to insert custom Linux-script based automation as a component of a blueprint.

Torque supports the following IaC assets:
* Terraform
* Helm
* Native K8s
* Cloudformation
* Shell (asset-agnostic grain that allows you to run bash/python3 commands as part of your environment’s launch and/or teardown)

For details, see [Blueprint YAML](/blueprint-designer-guide/blueprints).