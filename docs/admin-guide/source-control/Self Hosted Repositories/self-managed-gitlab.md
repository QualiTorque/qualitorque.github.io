---
sidebar_position: 2
title: Self-Managed GitLab
---

Torque supports connecting to self-managed GitLab repositories, allowing you to discover and manage assets stored in your on-premises GitLab instance. Communication with the server happens through a Torque agent installed on your network, as described in [Using Self-Managed source control providers](/admin-guide/source-control/Self%20Hosted%20Repositories/overview).

## Prerequisites

1. **Agent**: a Torque [agent](/agent/Install-and-connect-self-hosted-agent) connected to the space, with network access to your self-managed GitLab instance.
2. **Access token**: a GitLab personal access token with the following permission scopes:
   * `api`
   * `read_api`
   * `read_repository`

> ![GitLab PAT](/img/gitlab-pat.png)

## Configuration

1. Select the space in the space selection dropdown, go to **Automation > Repositories**, and click **Add Repository**.
2. In the **Select a Repository Provider** step, select **GitLab** and click **Next**.
3. In the **Connection** step, fill in the **Details**: the **Repository URL** on your GitLab server, a **Repository Name**, and optionally a **Branch**.
4. Select **Self Managed Repository**.
5. Under **Credentials**, enter a **Credentials Name** (or pick existing credentials from the store) and the **Personal Access Token** (and the matching **Access Token Type**).
6. Under **Available Agents**, select the agent (or agents) that can reach your GitLab server, or turn on **All Agents**.
7. Click **Test Connection** to verify that the agent can reach the repository, then click **Connect**.
8. Once connected, Torque discovers the assets in the repository. For more information on asset discovery, refer to [Discover Your Assets](/getting-started/asset-discovery).

> ![Add a repository](/img/gitlab-connect.png)

With a self-managed GitLab repository configured in Torque, you can seamlessly manage and version control your assets stored in your on-premises GitLab instance.
