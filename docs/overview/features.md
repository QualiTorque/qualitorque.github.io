---
sidebar_position: 12
title: Torque Features
---

## Orchestration
* __Multiple public/private cloud vendors__: Deploy your environment on AWS, Azure, GCP, OCI, vCenter, and more.
* __IaC and container technologies__: Torque provides out-of-the-box support for Terraform modules, Helm charts, CloudFormation templates, Kubernetes manifests, and more, allowing Torque to discover your assets and create working blueprints, which can be used as single-asset blueprints or integrated into multi-asset blueprints with dependencies and interconnections. 


## Self-service
* __Self-service blueprint catalog__: Publish blueprints to a self-service catalog where your teams can find and deploy the environments needed for their current activities via UI, API or CLI.
* __High scalability__: Torque environments run on Kubernetes, providing you with the built-in flexibility to scale up or down on a needs basis.


## GitOps
* __Update assets on push/merge__: Torque supports the use of git repositories on GitHub, GitLab, BitBucket and Azure DevOps. When changes are merged into the space's repository, the appropriate blueprints are immediately updated with the changes.
* __[Automatic drift detection](/getting-started/Launch-environment#drift)__: See what external changes have occurred to your environment and its resources, revert the changes to bring your environment back to its initial state.

## Governance and workflows
* __Granular RBAC__: Set up [spaces](/getting-started/Create%20your%20space) for different business units, teams, and projects. Assign assets, [users and roles](/admin-guide/governance/roles-and-permissions) to the users, limiting capabilities based on their needs and access only to the environments that apply to that space. 
* __Parameter/Secret store support__: Set up an account or space-level [parameter store](/admin-guide/general/params) and save sensitive or recurring values too, allowing Torque blueprints to dynamically pull the relevant details without saving them to the source control repository.
* __Governance policies__: [Limit environment durations](/blueprint-designer-guide/Policies) and apply [OPA security policies](/admin-guide/governance/policies) to environments.
* __Approval flows__: Define an approval process for production/high-cost environments and review pending requests.
* __Auto-shutdown and cleanup__: Automatic cleanup of environment's cloud resources when environment ends, cutting costs and ensuring nothing is left behind.


## Monitoring and control
* __[Cost management and estimation](/admin-guide/cost-tracking/cost)__: Easily view the cloud costs of your environments, as well as current/estimated spending by blueprint, environment or space.
* __[Introspection](/getting-started/Launch-environment)__: Drill-down into each environment's cloud resources, elements and metadata directly from Torque.
* __[CI/CD Integration](/eco-system/Integrations/ci-cd)__: Configure environments to be spun up and tested as part of a CI/CD process using some of the leading tools on the market, including Jenkins, Azure DevOps, CircleCI, Bamboo, and more.
* __[Slack and Teams notifications](/admin-guide/notifications)__: Get notifications for different environment lifecycle phases to the Teams/Slack channel of your choice.









