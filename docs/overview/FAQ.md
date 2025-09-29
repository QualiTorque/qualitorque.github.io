---
sidebar_position: 18
title: FAQ
# hide_table_of_contents: true
---

# Frequently Asked Questions

## Getting Started

#### Why should I use Torque if I can manage my application deployments directly on the cloud or through my CI/CD tool?
While you can manage deployments directly, Torque provides significant advantages across multiple dimensions. Here are the key factors that make Torque a valuable addition to your infrastructure toolkit:

**Core Capabilities:**
* **Lifecycle Management**: Complete environment lifecycle management from provisioning to decommissioning, including automated scheduling, renewal policies, and graceful shutdown procedures that ensure nothing is left behind on the cloud. Learn more about [scheduled environments](/environment-services/scheduled-environments) and [environment management](/environment-services/environment-publishing).

* **IaC Orchestration**: Torque provides sophisticated Infrastructure as Code orchestration that goes beyond basic deployment, managing complex dependencies and multi-technology stacks with ease across different cloud providers and tools. Explore our [blueprint designer guide](/blueprint-designer-guide/blueprint-quickstart-guide) and [multi-technology orchestration examples](/example-blueprints/Multi-Technology%20Orchestration).

* **Governance**: Unified security and policy management that protects your admin credentials within Torque agents, enables team collaboration through spaces, and enforces organizational standards and compliance requirements automatically across all deployments. Read about [policies](/governance/policies), [roles and permissions](/governance/roles-and-permissions), and [Torque agents](/torque-agent/Torque-Agent-Intro).

**Additional Capabilities:**
* **Cost Management**: Automatic cleanup of cloud resources when environments are no longer needed, plus comprehensive cost tracking with detailed analytics and forecasting. Torque attaches tags to every cloud resource for powerful monitoring and cost optimization. Learn more about [cost tracking](/governance/cost-tracking/configuring-cost-aws) and [cloud efficiency reports](/reports/cloud-efficiency).

* **Day 2 Automation with Context**: Unlike simple CI/CD pipelines, Torque understands the full context of your environments and automates ongoing operations like scaling, updates, and maintenance with full awareness of your infrastructure state. Explore [actions and workflows](/environment-services/actions-and-workflows) and [drift detection](/environment-services/drift-and-update).

* **Discovery and Curation**: Native capability to scan existing cloud environments and generate Infrastructure as Code representations of current resources, allowing you to bring brownfield infrastructure under management and standardize your deployments. Get started with [discovering your assets](/getting-started/asset-discovery) and [importing cloud resources](/getting-started/import-cloud-resources).

* **Usage Visibility**: Comprehensive visibility into resource usage, costs, and environment health with detailed analytics and reporting that help optimize your infrastructure spend and performance. View [reports overview](/reports/reports-overview) and [activity and adoption reports](/reports/activity-and-adoption).

* **Lower Error Rate → Higher Adoption**: By providing standardized, tested deployment patterns and automated validation, Torque significantly reduces deployment errors, leading to higher developer confidence and faster adoption of infrastructure automation practices. See our [blueprint quickstart guide](/blueprint-designer-guide/blueprint-quickstart-guide) and [getting started guides](/getting-started/getting-started-with-terraform).

---

## Deployment and Security

#### Where are the applications deployed?
For security and performance reasons, we designed Torque to deploy applications on Kubernetes (EKS on AWS EC2 and AKS on Azure). Support for additional cloud providers is currently in development and will be released soon.

#### Can I automate the deployment of Torque blueprints through a CI/CD process?
Absolutely! Torque supports integration with some of the leading CI/CD tools out there, including:
- GitHub Actions
- Azure DevOps
- GitLab CI
- Jenkins
- CloudBees
- TeamCity
- CircleCI
- Bamboo
- And more

Click [here](/overview/supported-platforms#cicd-tooling) and follow our documentation to set up your pipelines and start seeing value.

#### How do you protect my access credentials?
It's no secret that working with the cloud requires the use of very powerful admin credentials, which can cause some serious damage if they fall in the wrong hands. In Torque, your admin credentials are safely tucked away in the system, within what we call **Torque agents**, which allow Torque to access and use the Kubernetes cluster on the cloud. 

The blueprints reference the agents but otherwise cannot access the credentials. Same goes for the end-user and CI/CD tool - the end-users who launch the environments don't have access to the actual Azure keys from the token.

Learn more about [Torque agents](/torque-agent/Torque-Agent-Intro), [service accounts for AWS](/torque-agent/service-accounts-for-aws), [service accounts for Azure](/torque-agent/service-accounts-for-azure), and [advanced security settings](/torque-agent/advanced-settings).

---

## Environment Management

#### What happens when I no longer need the environment?
Torque environments have a duration period, which automatically ends the environment, deleting all the environment's cloud artifacts from the cluster. In addition, Torque allows you to manually end the environment at any time directly from the Torque application. The bottom line is that nothing from the environment is left on the cloud.

Learn more about [scheduled environments](/environment-services/scheduled-environments) and [environment lifecycle management](/environment-services/environment-publishing).

#### Can I limit the duration of environments?
Of course! The blueprint designer reserves the right to set a duration policy, per blueprint, which sets the maximum duration for that particular blueprint. So you can limit the blueprint to a certain time frame, which is especially useful for high-cost blueprints, or let it run indefinitely for environments that need to be online at all times.

See our guide on [policies](/governance/policies) and [blueprint configuration](/blueprint-designer-guide/blueprints/blueprints-yaml-structure).

---

## Scaling and Performance

#### How does Torque handle scaling and concurrency beyond limits of traditional tools like Terraform Cloud?
Torque is highly elastic and scalable through the use of **runners**. Runners are pods (when running on Kubernetes) that handle the execution and life-cycle of Terraform runs. The scalability depends on several factors such as:

- Cluster capacity
- Runner configuration (stateless vs stateful)
- Executor type (docker, kubernetes, etc.)

Torque can scale to hundreds of concurrent jobs, and can be configured to handle thousands of concurrent jobs. There are no additional costs associated with increased concurrency, as Torque runners are self-hosted. The native concurrency of Terraform is limited to a single operation per workspace, but Torque can manage multiple workspaces concurrently.

#### How does Torque prevent job queuing under heavy load?
Torque's architecture is designed to prevent job queuing under heavy load by:

- Distributing jobs across multiple runners
- Using a queue system to manage job execution

There is no hard limit for the level of concurrency while using the platform, as long as you stay within the boundaries of the licensing capacity and model.

---

## Flexibility and Control

#### How can platform engineering teams extend Torque with custom solutions?
Torque is designed to be highly flexible and extensible. It allows platform engineering teams to create **Blueprints** and **Workflows**, which are reusable modules (Building Blocks) that can encapsulate best practices and "golden paths". These Blueprints can be shared and versioned, allowing teams to evolve their infrastructure over time.

Learn more about [blueprint design](/blueprint-designer-guide/blueprint-quickstart-guide) and [workflows](/workflows/workflows-overview).

#### Does Torque offer API-first integration capabilities?
Yes! Torque offers a robust API-first approach, allowing for seamless integration with other tools and systems. This is critical for machine-to-machine interaction and building future integration layers.

---

## Brownfield & Day 2 Operations

#### Can Torque discover and generate IaC code from existing cloud resources?
Yes. This is natively supported through Torque's **Curate** feature. Curate can scan existing cloud environments and generate Terraform code that represents the current state of the resources. 

Currently, the generated code is in Terraform format. While there is no native support for converting it to Kubernetes-native formats like Crossplane, the generated Terraform code can be used as a starting point for further customization.

Torque also supports native Kubernetes resources through its Helm and Kubernetes grains/runners.

Get started with [discovering your assets](/getting-started/asset-discovery) and [importing cloud resources](/getting-started/import-cloud-resources).

#### How does Torque handle continuous reconciliation and drift detection?
Torque periodically checks the state of the resources against the desired state defined in the Terraform code. Continuous reconciliation is handled through Torque's **Drift Detection** feature and is executed using Torque's runners. This allows the platform to automatically detect and correct configuration drift in live environments.

Learn more about [drift detection and updates](/environment-services/drift-and-update) and [Day 2 operations](/environment-services/actions-and-workflows).

#### Does Torque support Kubernetes Resources?
Yes. Torque supports Kubernetes resources through its Helm and Kubernetes grains/runners. The platform can act as a control plane for Kubernetes resources, allowing users to manage and provision these resources through the Torque interface. This enables integration with Custom Resources and supports Kubernetes-native platform engineering experiences.

See our [Kubernetes getting started guide](/getting-started/getting-started-with-kubernetes) and [Kubernetes as a Service example](/example-blueprints/k8s-as-a-service).
