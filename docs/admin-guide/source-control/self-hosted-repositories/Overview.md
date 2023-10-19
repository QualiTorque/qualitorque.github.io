---
sidebar_position: 1
title: Using Self-Managed source control providers
---

Torque can integrate with any source control provider - whether it's on the public SAAS platform (e.g. github.com) or if you are managing your own instance of source control provider on your own.

When you're managing your own source control server, and not using the public SAAS provider, the communication between Torque and the source control server is fully contained on your site, between the Torque agent which is installed on your cluster, and the source control server which is also installed on your premises.

> ![Locale Dropdown](/img/self-hosted-repos.png)

There are 2 steps when configuring Torque to read from self-hosted source control provider:

1. Perform a one-time API call to register the source control provider with Torque
2. Add your repositories to Torque - this is done from the Torque UI and you can connect as many repositories as you like.

See the following sections with specific details how to configure each self-managed source control provider:

1. [GitHub Enterprise (on-premise)](/admin-guide/source-control/self-hosted-repositories/self-managed-github.md)
2. [GitLab on-premise](/admin-guide/source-control/self-hosted-repositories/self-managed-gitlab.md)
3. Azure Repositories on-premise - Supported, Please contact support for detailed instructions
4. BitBucket Enterprise (on-premise) - Supported, Please contact support for detailed instructions