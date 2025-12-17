---
sidebar_position: 18
title: FAQ
# hide_table_of_contents: true
---

# Frequently Asked Questions

## Getting Started

#### Why should I use <ProductName /> if I can manage my application deployments directly on the cloud or through my CI/CD tool?
While you can manage deployments directly, <ProductName /> provides significant advantages across multiple dimensions. Here are the key factors that make <ProductName /> a valuable addition to your infrastructure toolkit:

**Core Capabilities:**
* **Lifecycle Management**: Complete environment lifecycle management from provisioning to decommissioning, including automated scheduling, renewal policies, and graceful shutdown procedures that ensure nothing is left behind on the cloud. Learn more about [scheduled environments](/environment-services/scheduled-environments) and [environment management](/environment-services/environment-publishing).

* **IaC Orchestration**: <ProductName /> provides sophisticated Infrastructure as Code orchestration that goes beyond basic deployment, managing complex dependencies and multi-technology stacks with ease across different cloud providers and tools. Explore our [blueprint designer guide](/blueprint-designer-guide/blueprint-quickstart-guide) and [multi-technology orchestration examples](/example-blueprints/application-orchestration).

* **Governance**: Unified security and policy management that protects your admin credentials within <ProductName /> agents, enables team collaboration through spaces, and enforces organizational standards and compliance requirements automatically across all deployments. Read about [policies](/governance/policies), [roles and permissions](/governance/roles-and-permissions), and [<ProductName /> agents](/torque-agent/<ProductName />-Agent-Intro).

**Additional Capabilities:**
* **Cost Management**: Automatic cleanup of cloud resources when environments are no longer needed, plus comprehensive cost tracking with detailed analytics and forecasting. <ProductName /> attaches tags to every cloud resource for powerful monitoring and cost optimization. Learn more about [cost tracking](/governance/cost-tracking/configuring-cost-aws) and [cloud efficiency reports](/reports/cloud-efficiency).

* **Day 2 Automation with Context**: Unlike simple CI/CD pipelines, <ProductName /> understands the full context of your environments and automates ongoing operations like scaling, updates, and maintenance with full awareness of your infrastructure state. Explore [actions and workflows](/environment-services/actions-and-workflows) and [drift detection](/environment-services/drift-and-update).

* **Discovery and Curation**: Native capability to scan existing cloud environments and generate Infrastructure as Code representations of current resources, allowing you to bring brownfield infrastructure under management and standardize your deployments. Get started with [discovering your assets](/getting-started/asset-discovery) and [importing cloud resources](/getting-started/import-cloud-resources).

* **Usage Visibility**: Comprehensive visibility into resource usage, costs, and environment health with detailed analytics and reporting that help optimize your infrastructure spend and performance. View [reports overview](/reports/reports-overview) and [activity and adoption reports](/reports/activity-and-adoption).

* **Lower Error Rate → Higher Adoption**: By providing standardized, tested deployment patterns and automated validation, <ProductName /> significantly reduces deployment errors, leading to higher developer confidence and faster adoption of infrastructure automation practices. See our [blueprint quickstart guide](/blueprint-designer-guide/blueprint-quickstart-guide) and [getting started guides](/getting-started/getting-started-with-terraform).

---

## Deployment and Security

#### Where are the applications deployed?
For security and performance reasons, we designed <ProductName /> to deploy applications on Kubernetes (EKS on AWS EC2 and AKS on Azure). Support for additional cloud providers is currently in development and will be released soon.

#### Can I automate the deployment of <ProductName /> blueprints through a CI/CD process?
Absolutely! <ProductName /> supports integration with some of the leading CI/CD tools out there, including:
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
It's no secret that working with the cloud requires the use of very powerful admin credentials, which can cause some serious damage if they fall in the wrong hands. In <ProductName />, your admin credentials are safely tucked away in the system, within what we call **<ProductName /> agents**, which allow <ProductName /> to access and use the Kubernetes cluster on the cloud. 

The blueprints reference the agents but otherwise cannot access the credentials. Same goes for the end-user and CI/CD tool - the end-users who launch the environments don't have access to the actual Azure keys from the token.

Learn more about [<ProductName /> agents](/torque-agent/<ProductName />-Agent-Intro), [service accounts for AWS](/torque-agent/service-accounts-for-aws), [service accounts for Azure](/torque-agent/service-accounts-for-azure), and [advanced security settings](/torque-agent/advanced-settings).

---

## Environment Management

#### What happens when I no longer need the environment?
<ProductName /> environments have a duration period, which automatically ends the environment, deleting all the environment's cloud artifacts from the cluster. In addition, <ProductName /> allows you to manually end the environment at any time directly from the <ProductName /> application. The bottom line is that nothing from the environment is left on the cloud.

Learn more about [scheduled environments](/environment-services/scheduled-environments) and [environment lifecycle management](/environment-services/environment-publishing).

#### Can I limit the duration of environments?
Of course! The blueprint designer reserves the right to set a duration policy, per blueprint, which sets the maximum duration for that particular blueprint. So you can limit the blueprint to a certain time frame, which is especially useful for high-cost blueprints, or let it run indefinitely for environments that need to be online at all times.

See our guide on [policies](/governance/policies) and [blueprint configuration](/blueprint-designer-guide/blueprints/blueprints-yaml-structure).

---

## Scaling and Performance

#### What scale can <ProductName /> support in production environments?

<ProductName />'s elastic architecture has been proven to handle enterprise-scale workloads across multiple dimensions in production:

**User Scale:**
- **Multi-tenant SaaS**: Supports hundreds of thousands of users across the platform
- **Enterprise Organizations**: Large customers managing thousands of developers and infrastructure teams
- **Concurrent Operations**: Real-world deployments handling 7,000+ concurrent environments weekly

**Infrastructure Scale:**
- **Resource Management**: Platform manages 100+ million cloud resources in production
- **Environment Volume**: 10+ million environments created and managed
- **Multi-Cloud Footprint**: Spans AWS, Azure, GCP, and hybrid cloud deployments at massive scale

**Performance in Production:**
- **Concurrent Environments**: Enterprise customers routinely run 7,000 concurrent environments per week
- **Resource Density**: Each environment averages 2-5 compute resources, demonstrating efficient resource orchestration
- **Horizontal Scaling**: Linear scaling based on Kubernetes cluster capacity with no architectural bottlenecks

**Technical Scalability:**
- **No Concurrency Limits**: Unlike traditional tools, there are no hard limits on concurrent operations within licensing boundaries
- **Self-Hosted Runners**: Zero additional costs for increased concurrency due to customer-controlled runner infrastructure
- **Stateless Design**: Enables unlimited horizontal scaling of execution capacity

**Enterprise-Grade Operations:**
- **Multi-Tenant Isolation**: Secure space-based segregation supporting large organizational structures
- **API-First Integration**: Handles machine-to-machine operations at enterprise scale
- **Governance at Scale**: Policy enforcement and compliance across thousands of environments and users

The platform's proven track record demonstrates it can support organizations of any size, from small teams to Fortune 500 enterprises managing complex, multi-cloud environments with millions of resources and thousands of concurrent operations.

#### How does <ProductName /> efficiently handle external service integrations at scale?

<ProductName />'s architecture is designed to minimize stress on external services while maintaining high performance through intelligent resource management:

**Git Repository Management:**
- **Intelligent Caching**: Local repository caching reduces Git server load and improves blueprint retrieval performance
- **Incremental Updates**: Only fetches changes since last sync, minimizing bandwidth and repository server impact
- **Connection Pooling**: Reuses Git connections across multiple operations to reduce authentication overhead

**Cloud API Optimization:**
- **API Rate Limiting**: Built-in rate limiting and backoff strategies prevent overwhelming cloud provider APIs
- **Batch Operations**: Groups multiple API calls where possible to reduce total request volume
- **Regional Distribution**: Leverages regional endpoints to minimize latency and distribute load
- **Intelligent Retry Logic**: Exponential backoff with jitter prevents API thundering herd scenarios
- **Resource State Caching**: Maintains local state cache to reduce unnecessary API polling

**Database Efficiency:**
- **Connection Management**: Sophisticated connection pooling prevents database connection exhaustion
- **Query Optimization**: Efficient queries and indexing strategies minimize database load
- **Read Replicas**: Distributes read operations across multiple database replicas for high availability
- **Bulk Operations**: Batch database operations where possible to improve throughput
- **Asynchronous Processing**: Non-blocking database operations prevent performance bottlenecks

**Cost-Effective Resource Management:**
- **Elastic Scaling**: Resources scale based on demand, preventing over-provisioning during low usage periods
- **Resource Sharing**: Multiple operations share infrastructure resources efficiently
- **Cleanup Automation**: Automatic cleanup of temporary resources prevents cost accumulation
- **Monitoring and Alerts**: Proactive monitoring ensures optimal resource utilization and cost management

This approach ensures that even at enterprise scale with thousands of concurrent operations, <ProductName /> maintains excellent performance while being a good citizen to external services and keeping operational costs predictable and manageable.

#### How does <ProductName /> handle scaling and concurrency beyond limits of traditional tools like Terraform Cloud?
<ProductName /> is highly elastic and scalable through the use of **runners**. Runners are pods (when running on Kubernetes) that handle the execution and life-cycle of Terraform runs. The scalability depends on several factors such as:

- Cluster capacity
- Runner configuration (stateless vs stateful)
- Executor type (docker, kubernetes, etc.)

<ProductName /> can scale to hundreds of concurrent jobs, and can be configured to handle thousands of concurrent jobs. There are no additional costs associated with increased concurrency, as <ProductName /> runners are self-hosted. The native concurrency of Terraform is limited to a single operation per workspace, but <ProductName /> can manage multiple workspaces concurrently.

#### How does <ProductName /> prevent job queuing under heavy load?
<ProductName />'s architecture is designed to prevent job queuing under heavy load by:

- Distributing jobs across multiple runners
- Using a queue system to manage job execution

There is no hard limit for the level of concurrency while using the platform, as long as you stay within the boundaries of the licensing capacity and model.

---

## Flexibility and Control

#### How can platform engineering teams extend <ProductName /> with custom solutions?
<ProductName /> is designed to be highly flexible and extensible. It allows platform engineering teams to create **Blueprints** and **Workflows**, which are reusable modules (Building Blocks) that can encapsulate best practices and "golden paths". These Blueprints can be shared and versioned, allowing teams to evolve their infrastructure over time.

Learn more about [blueprint design](/blueprint-designer-guide/blueprint-quickstart-guide) and [workflows](/workflows/workflows-overview).

#### Does <ProductName /> offer API-first integration capabilities?
Yes! <ProductName /> offers a robust API-first approach, allowing for seamless integration with other tools and systems. This is critical for machine-to-machine interaction and building future integration layers.

---

## Brownfield & Day 2 Operations

#### Can <ProductName /> discover and generate IaC code from existing cloud resources?
Yes. This is natively supported through <ProductName />'s **Curate** feature. Curate can scan existing cloud environments and generate Terraform code that represents the current state of the resources. 

Currently, the generated code is in Terraform format. While there is no native support for converting it to Kubernetes-native formats like Crossplane, the generated Terraform code can be used as a starting point for further customization.

<ProductName /> also supports native Kubernetes resources through its Helm and Kubernetes grains/runners.

Get started with [discovering your assets](/getting-started/asset-discovery) and [importing cloud resources](/getting-started/import-cloud-resources).

#### How does <ProductName /> handle continuous reconciliation and drift detection?
<ProductName /> periodically checks the state of the resources against the desired state defined in the Terraform code. Continuous reconciliation is handled through <ProductName />'s **Drift Detection** feature and is executed using <ProductName />'s runners. This allows the platform to automatically detect and correct configuration drift in live environments.

Learn more about [drift detection and updates](/environment-services/drift-and-update) and [Day 2 operations](/environment-services/actions-and-workflows).

#### Does <ProductName /> support Kubernetes Resources?
Yes. <ProductName /> supports Kubernetes resources through its Helm and Kubernetes grains/runners. The platform can act as a control plane for Kubernetes resources, allowing users to manage and provision these resources through the <ProductName /> interface. This enables integration with Custom Resources and supports Kubernetes-native platform engineering experiences.

See our [Kubernetes getting started guide](/getting-started/getting-started-with-kubernetes) and [Kubernetes as a Service example](/example-blueprints/k8s-as-a-service).
