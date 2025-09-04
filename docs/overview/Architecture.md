---
title: Architecture
sidebar_position: 6
---

# Architecture

![Locale Dropdown](/img/torque-arch.png)

Torque is a comprehensive environment-as-a-service platform designed to bridge the gap between infrastructure complexity and user accessibility. The platform operates across three core domains that work together to deliver governed, self-service infrastructure and application deployment capabilities.

## Core Domains

### 1. Curate
The curation domain focuses on connecting to existing automation and Infrastructure as Code (IaC), establishing cloud connectivity, and ingesting resources into a comprehensive inventory to create reusable building blocks.

**Key Capabilities:**
- **Asset Repository Integration**: Connect to existing source control repositories containing [Terraform](/blueprint-designer-guide/blueprints/terraform-grain.md) modules, [AWS CloudFormation](/blueprint-designer-guide/blueprints/cloudformation-grain.md) templates, [Helm](/blueprint-designer-guide/blueprints/helm-grain.md) charts, [Kubernetes](/blueprint-designer-guide/blueprints/kubernetes-grain.md) manifests, [Shell](/blueprint-designer-guide/blueprints/shell-grain.md) scripts, and [Ansible](/blueprint-designer-guide/blueprints/ansible-grain.md) playbooks
- **Cloud Provider Connectivity**: Seamless integration with [Amazon Web Services (AWS)](https://aws.amazon.com/), [Microsoft Azure](https://azure.microsoft.com/), [Google Cloud Platform (GCP)](https://cloud.google.com/), [Oracle Cloud Infrastructure (OCI)](https://www.oracle.com/cloud/), VMware vCenter/vSphere, and Kubernetes clusters
- **Resource Inventory**: Comprehensive discovery and cataloging of existing cloud and on-premises resources
- **Blueprint Creation**: Transform individual assets into reusable blueprints for standardized deployments across all environments

### 2. Operate
The operation domain leverages Quali agents deployed on customer premises (or Quali-managed) to handle resource provisioning, environment state management, and lifecycle orchestration with governed access controls.

**Key Capabilities:**
- **Torque Execution Agents**: Lightweight, container-based instances deployed on Kubernetes clusters or Docker hosts that communicate with Torque backend to execute deployment tasks
  - **Agent Deployment Options**: [Amazon EKS](https://aws.amazon.com/eks/), [Azure Kubernetes Service](https://azure.microsoft.com/en-us/products/kubernetes-service), [Google GKE](https://cloud.google.com/kubernetes-engine), [Oracle OKE](https://www.oracle.com/cloud/cloud-native/container-engine-kubernetes/), self-managed Kubernetes, and Docker hosts (on-premises)
  - **Built-in Quali Agent**: Pre-configured execution agent for [Terraform](/blueprint-designer-guide/blueprints/terraform-grain.md) and [AWS CloudFormation](/blueprint-designer-guide/blueprints/cloudformation-grain.md) deployments without requiring custom agent deployment
- **Environment Lifecycle Management**: Complete state management from provisioning through decommissioning
- **Day-2 Operations**: Ongoing environment management including updates, drift detection, and maintenance workflows
- **Governed Access**: Role-based access controls and policy enforcement throughout the operational lifecycle

### 3. Self-Service
The self-service domain provides a governed catalog with policy-driven access controls, enabling users to deploy cloud and on-premises infrastructure with one-click simplicity.

**Key Capabilities:**
- **Governed Catalog**: Rich environment catalog with built-in governance through policies, approval flows, and strong RBAC
- **One-Click Deployment**: Simplified deployment of complex infrastructure and services including:
  - Cloud and on-premises infrastructure
  - Container deployments and orchestration
  - Application lifecycle management
- **Policy Engine**: Comprehensive governance framework ensuring compliance and cost control
- **Approval Workflows**: Customizable approval processes integrated with IT Service Management platforms
- **Developer Ecosystem Integration**: Native integration with CI/CD tools, developer environments, and DevOps workflows

## Multi-Environment Support

Torque supports comprehensive deployment across all infrastructure types:
- **Public Cloud**: AWS, Azure, GCP, Oracle Cloud
- **Private Cloud**: VMware vCenter/vSphere, OpenStack
- **Hybrid Cloud**: Mixed cloud and on-premises deployments
- **Container Platforms**: Kubernetes, Docker, container orchestration platforms
- **On-Premises**: Physical infrastructure, virtualized environments

## Deployment Models

Torque is available in three flexible deployment models to meet diverse organizational requirements:

### 1. Multi-Tenant SaaS
- **Shared Infrastructure**: Cost-effective solution with shared Torque backend services
- **Rapid Deployment**: Fastest time-to-value with minimal setup requirements
- **Managed Operations**: Fully managed by Quali with automatic updates and maintenance
- **Scalable**: Shared resource pooling for optimal cost efficiency

### 2. Single-Tenant SaaS
- **Dedicated Infrastructure**: Isolated Torque backend services for enhanced security and performance
- **Customization**: Greater configuration flexibility and customization options
- **Compliance**: Enhanced compliance capabilities for regulated industries
- **Managed Operations**: Fully managed by Quali with dedicated support

### 3. Private Instance (On-Premises)
- **Complete Control**: Full control over infrastructure, data, and operations
- **Air-Gapped Support**: Deployment in disconnected or highly secure environments
- **Custom Integration**: Deep integration with existing enterprise systems and workflows
- **Self-Managed**: Customer-controlled deployment, maintenance, and operations

## Integration Ecosystem

### Notification Engines
Automated notifications for environment lifecycle events through:
- Email notifications
- [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software) integration
- [Slack](https://slack.com) integration
- [Custom webhooks](/admin-guide/notifications.md) for third-party systems

### Developer Tools
- **CI/CD Integration**: [Azure DevOps](/eco-system/ci-cd-tooling/azure-devops.md), [CircleCI](/eco-system/ci-cd-tooling/circle-ci.md), [Jenkins](/eco-system/ci-cd-tooling/jenkins.md), [GitHub Actions](/eco-system/ci-cd-tooling/github-actions.md), [Spinnaker](/eco-system/ci-cd-tooling/spinnaker.md), TeamCity, Bamboo CI
- **Development Interface**: [VSCode Extension](/eco-system/dev-tools/vs-plugin.md), [Torque CLI](/eco-system/dev-tools/torque-cli.md), comprehensive [REST API](/rest-api/rest-api.md)

### ITSM Integration
Enterprise-grade integration with IT Service Management platforms:
- ServiceNow integration for approval workflows
- BCM Remedy support (coming soon)
- Custom ITSM integration capabilities