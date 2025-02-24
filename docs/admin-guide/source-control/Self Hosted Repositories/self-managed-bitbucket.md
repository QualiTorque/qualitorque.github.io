---
sidebar_position: 3
title: Self-Managed BitBucket
---

Torque supports connecting to self-managed BitBucket repositories, allowing you to discover and manage assets stored in your on-premises BitBucket instance.

## Prerequisites

1. **Agent Installation**: You must have the Torque Agent installed with access to your self-managed BitBucket instance.
2. **BitBucket Access Token**: You will need a BitBucket Personal Access Token with the following permission scopes:
   1.  `api`
   2.  `read.api`
   3.  `read.repository`
   
## Configuration

1. Navigate to `Space -> Design -> Repositories` and click the `Add a Repository` button.
2. Choose the `BitBucket` git provider.
3. Check the "Self Managed Repository" checkbox and provide the necessary repository details.
4. Once connected, you can discover the assets in the connected repository.
   - For more information on asset discovery, refer to [Discover Your Assets](/getting-started/Discover%20Your%20Assets). 

> ![Add a repository](/img/bitbucket-connect.png)

With a self-managed BitBucket repository configured in Torque, you can seamlessly manage and version control your assets stored in your on-premises BitBucket instance.