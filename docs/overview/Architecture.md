---
title: Architecture
sidebar_position: 6
---

# Architecture

> ![Locale Dropdown](/img/torque-architecture.png)

Torque is purpose built with multiple types of components in mind: 

- __IaC & automation asset repositories__ are links from Torque's backend or agent to your existing source control repositories that contain the various IaC and Automation files that Torque will orchestrate including [Terraform](/blueprint-designer-guide/blueprints/terraform-grain.md) Modules, AWS CloudFormation](/blueprint-designer-guide/blueprints/cloudformation-grain.md) Stack templates, [Helm](/blueprint-designer-guide/blueprints/helm-grain.md) charts, [Kubernetes](/blueprint-designer-guide/blueprints/kubernetes-grain.md) Manifest files, [Shell](/blueprint-designer-guide/blueprints/shell-grain.md) scripts, and [Ansible](/blueprint-designer-guide/blueprints/ansible-grain.md) playbooks. 

  - __Target cloud providers__ - By utilizing the above IaC & Automation technologies, Torque environments can be deployed on the following Cloud Providers: [Amazon Web Services (AWS)](https://aws.amazon.com/), [Microsoft Azure](https://azure.microsoft.com/), [Google Cloud Platform (GCP)](https://cloud.google.com/), [Oracle Cloud Infrastructure (OCI)](https://www.oracle.com/cloud/), VMware virtual center (vCenter/vSphere), Kubernetes, and any unmentioned provider supported by these technologies (for Terraform, see [Terraform Providers](https://registry.terraform.io/browse/providers)). 

- __Torque execution agents (agents)__ are lightweight, container-based, instances of Torque's execution application. Agents communicate with the Torque backend servers to carry out tasks such as deploying environments, retrieving asset information, and cleaning up the environment's cloud infrastructure when the environment ends, and querying cost. Torque Agents can only be deployed on top of Kubernetes clusters (managed or unmanaged), while on-prem agents are deployed on Docker. Supported cluster providers include Amazon [Elastic Kubernetes Service](https://aws.amazon.com/eks/), Microsoft [Azure Kubernetes Service](https://azure.microsoft.com/en-us/products/kubernetes-service), Google [GCP Kubernetes Engine](https://cloud.google.com/kubernetes-engine), Oracle [OCI Kubernetes Engine](https://www.oracle.com/cloud/cloud-native/container-engine-kubernetes/), self-managed Kubernetes cluster, and Docker host (on-prem only).

  - __Torque built in "Quali" agent__ - Torque features a built-in, pre-configured and account specific execution agent marked as "Quali" that allows Torque environments that only contain [Terraform](/blueprint-designer-guide/blueprints/terraform-grain.md) or [AWS CloudFormation](/blueprint-designer-guide/blueprints/cloudformation-grain.md) type grains to be deployed without needing to deploy your own Torque agent as a pre-requisite.

- __Notification engines__ are webhooks or connections from Torque to the email or collaboration platform of your choice, allowing you to automatically notify users of environment lifecycle events (Environment Started/Ended/Finished Provisioning) and changes to their environment (Drift/Updates detected, collaborator changes). Supported notification channels include Email, [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software), [Slack](https://slack.com), or a [custom webhook](/admin-guide/notifications.md).

- __Developer eco-system intergrations__ are Developer or DevOps tools that can connect to Torque to automate the process of launching Torque environments and running tests or validations on top of them, as well as tools that help developers and blueprint designers interface with Torque during the development of environment blueprints.
  - __CI/CD Tooling__ - Supported solutions include [Azure DevOps](/eco-system/ci-cd-tooling/azure-devops.md), [CircleCI](/eco-system/ci-cd-tooling/circle-ci.md), [Jenkins](/eco-system/ci-cd-tooling/jenkins.md), [GitHub Actions](/eco-system/ci-cd-tooling/github-actions.md), [Spinnaker](/eco-system/ci-cd-tooling/spinnaker.md), Atlassian Bamboo CI, [TeamCity](/eco-system/ci-cd-tooling/teamcity.md), [Jenkins](/eco-system/ci-cd-tooling/jenkins.md).

  - __Developer tools__ Torque's [VSCode Extension](/eco-system/dev-tools/vs-plugin.md) and Torque's [CLI](/eco-system/dev-tools/torque-cli.md) interface. (Note: Torque also features a robust Torque [REST API](/rest-api/rest-api.md) with a Live Reference accessible via Torque's Portal).

- __IT eco-system integrations (ITSM)__ are integrations between Torque and IT Service Management platforms that allow Torque to offload approval policies and flows. These include ServiceNow and BCM Remedy (coming soon).