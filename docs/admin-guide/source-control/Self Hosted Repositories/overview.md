---
sidebar_position: 1
title: Using Self-Managed source control providers
---
Torque can integrate with any source control provider, whether it's a public SaaS platform (e.g., github.com) or a self-managed instance running on your premises. When using a self-managed source control provider, the communication between Torque and the source control server is fully contained within your site, happening between the Torque agent installed on your cluster and the source control server installed on your premises.

> ![Self-Hosted Repositories](/img/self-hosted-repos.png)


There are three steps when configuring Torque to read from a self-hosted source control provider:

1. **Install an Agent**
2. **Generate a Personal Access Token**
3. **Add your repositories to Torque** (Can be done from the Torque UI, API, or Torque Terraform Provider)


See the following sections with specific details how to configure each self-managed source control provider:

1. [GitHub Enterprise (on-premise)](/admin-guide/source-control/self-hosted-repositories/self-managed-github.md)
2. [GitLab on-premise](/admin-guide/source-control/self-hosted-repositories/self-managed-gitlab.md)
3. [BitBucket Enterprise (on-premise)](/admin-guide/source-control/self-hosted-repositories/self-managed-bitbucket)
4. Azure Repositories on-premise - Supported, Please contact support for detailed instructions

With a self-managed source control provider configured in Torque, you can securely manage and version control your assets stored in your on-premises source control system, while keeping all communication within your network boundaries.