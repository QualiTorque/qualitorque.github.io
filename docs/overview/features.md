---
sidebar_position: 9
title: Torque Features and Capabilities
---

## Orchestration

* __Blueprint YAML__: Environment plans are stored in YAML files. Torque can generate and single-asset blueprint YAMLs for each IaC or container technology file in your repository, while multi-asset blueprints can easily be written in YAML files stored in your source control repositories.
    * Liquid: See Parameter Store below.
* __Policies__: [Limit environment durations](/blueprint-designer-guide/Policies) and apply [OPA security policies](/admin-guide/governance/policies) to environments.
* __Spaces__ and __Role-based Access Control (RBAC)__: Set up [spaces](/getting-started/Create%20your%20space) for different business units, teams, and projects. Assign assets, [users and roles](/admin-guide/governance/roles-and-permissions) to the users, limiting capabilities based on their needs and access only to the environments that apply to that space. 
* Secret management in Torque: Torque manages Secrets in 3 different ways 
    * __Parameter Store__: Torque contains a built-in Parameter Store that allows space admins and account admins to store both sensitive and non-sensitive key-value based information in a centralized location that can be accessed by blueprint designers via the Liquid engine. 
    * __Credential Store__: Torque contains a built-in Credentials Store that allows account admins to safely store cloud account credentials (or Role ARNs for assumable roles) that can later be used for authentication with the provider in an IaC grain (such as Terraform or CloudFormation). 
    * Secret providers in IaC: Torque allows blueprint and asset designers to rely on secret management capabilities of the supported IaC technologies. For example retreiving a KMS decryption key or AWS Secret Store Secret via AWS, an Azure Secret from Azure Vault, or a Secret or Sensitive information stored in Hashicorp Vault.
* __Approval flows__: Define an approval process for production/high-cost environments and review pending requests.
* __Auto-shutdown and cleanup__: Automatic cleanup of environment's cloud resources when environment ends, cutting costs and ensuring nothing is left behind.

## Automation
Torque provides out-of-the-box support for Terraform modules, Helm charts, CloudFormation templates, Kubernetes manifests, shell scripts, and Ansible, allowing Torque to discover your assets and create working blueprints, which can be used as single-asset blueprints or integrated into multi-asset blueprints with dependencies and interconnections. 

## Self-service
* __Self-service blueprint catalog__: Publish blueprints to a self-service catalog where your teams can find and deploy the environments needed for their current activities via UI, API or CLI.
* __High scalability__: Torque environments run on Kubernetes, providing you with the built-in flexibility to scale up or down on a needs basis.


## GitOps
* __Update assets on push/merge__: Torque supports the use of git repositories on GitHub, GitLab, BitBucket and Azure DevOps. When changes are merged into the space's repository, the appropriate blueprints are immediately updated with the changes.
* __[Automatic drift detection](/getting-started/Launch-environment#drift)__: See what external changes have occurred to your environment and its resources, revert the changes to bring your environment back to its initial state.

## Monitoring and control
* __[Cost management and estimation](/admin-guide/cost-tracking/cost)__: Easily view the cloud costs of your environments, as well as current/estimated spending by blueprint, environment or space.
* __[Introspection](/getting-started/Launch-environment)__: Drill-down into each environment's cloud resources, elements and metadata directly from Torque.
* __[CI/CD Integration](/eco-system/Integrations/ci-cd)__: Configure environments to be spun up and tested as part of a CI/CD process using some of the leading tools on the market, including Jenkins, Azure DevOps, CircleCI, Bamboo, and more.
* __[Slack and Teams notifications](/admin-guide/notifications)__: Get notifications for different environment lifecycle phases to the Teams/Slack channel of your choice.