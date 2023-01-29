---
sidebar_position: 6
---

# Architecture

> ![Locale Dropdown](/img/torque-architecture.png)

Torque is purpose built with multiple types of components in mind: 

- __IaC & automation asset repositories__ are links from Torque's backend or agent to your existing source control repositories that contain the various IaC and Automation files that Torque will orchestrate including Terraform Modules, CloudFormation Stack templates, Helm charts, Kubernetes Manifest files and folders, Shell scripts, and Ansible playbooks. 

  - __Target cloud providers__ - By utilizing the above IaC & Automation technologies, Torque environments can be deployed on the following Cloud Providers: Amazon Web Services (AWS), Microsoft Azure Cloud, Google Cloud Platform (GCP), Oracle Cloud Infrastructure (OCI), VMWare virtual center (vCenter/vSphere), Kubernetes, and any unmentioned provider supported by these technologies (for Terraform, see [Terraform Providers](https://registry.terraform.io/browse/providers)). 

- __Torque execution agents (agents)__ are lightweight, container-based, instances of Torque's execution application. Agents communicate with the Torque backend servers to carry out tasks such as deploying environments, retrieving asset information, and cleaning up the environment's cloud infrastructure when the environment ends, and querying cost. Torque Agents can only be deployed on top of Kubernetes clusters (managed or unmanaged), while on-prem agents are deployed on Docker. Supported cluster providers include Amazon EKS, Microsoft Azure AKS, Google GKE, Oracle OKE, self-managed Kubernetes cluster, and Docker host (on-prem only).

  - __Torque built in "Quali" agent__ - Torque features a built-in, pre-configured and account specific execution agent marked as "Quali" that allows Torque environments that only contain Terraform or CloudFormation type grains to be deployed without needing to deploy your own Torque agent as a pre-requisite.

- __Notification engines__ are webhooks or connections from Torque to the chat or email platform of your choice, allowing you to automatically notify users of environment lifecycle events (Environment Started/Ended/Finished Provisioning) as well as changes to their environment (Drift/Updates detected, collaborator changes). Supported notification channels include Email, Microsoft Teams Channel, Slack Channel, custom webhook.

- __Developer eco-system intergrations__ are Developer or DevOps tools that can connect to Torque to automate the process of launching Torque environments and running tests or validations on top of them, as well as tools that help developers and blueprint designers interface with Torque during the development of environment blueprints.
  - __Continuous integration managers__ - Supported CI/pipeline managers include Azure DevOps, Jenkins, GitHub Actions, JetBrains TeamCity, Circle CI, Atlassian Bamboo CI, Spinnaker, and Tekton.

  - __Developer tools__ Torque's VSCode Extension and Torque's CLI interface. (Note: Torque also features a robust Torque REST API with a Live Reference accessible via Torque's Portal).

- __IT eco-system integrations (ITSM)__ are integrations between Torque and IT Service Management platforms that allow Torque to offload approval policies and flows. These include ServiceNow and BCM Remedy (coming soon).