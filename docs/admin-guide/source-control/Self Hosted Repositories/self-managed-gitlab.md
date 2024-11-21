---
sidebar_position: 2
title: Self-Managed GitLab
---

Torque supports connecting to self-managed GitLab repositories, allowing you to discover and manage assets stored in your on-premises GitLab instance.

## Prerequisites

1. **Agent Installation**: You must have the Torque Agent installed with access to your self-managed GitLab instance.
2. **GitLab Access Token**: You will need a GitLab Personal Access Token with the following permission scopes:
   1.  `api`
   2.  `read_api`
   3.  `read_repository`
   
> ![GitLab PAT](/img/gitlab-pat.png)


## Configuration

1. Navigate to `Space -> Design -> Repositories` and click the `Add a Repository` button.
2. Choose the GitLab git provider.
3. Check the "Self Managed Repository" checkbox and provide the necessary repository details.
4. Once connected, you can discover the assets in the connected repository.
   - For more information on asset discovery, refer to [Discover Your Assets](/getting-started/Discover%20Your%20Assets). 

> ![Add a repository](/img/gitlab-connect.png)

With a self-managed GitLab repository configured in Torque, you can seamlessly manage and version control your assets stored in your on-premises GitLab instance.