---
sidebar_position: 2
title: GitLab Source Control
---

Torque supports connecting asset, blueprint, and policy repositories hosted on GitLab. Repositories are connected per space from the **Add Repository** wizard, and the credentials you provide are saved in the Torque [Credentials](/admin-guide/credentials) store so you can reuse them when you connect more repositories from the same provider.

**This article refers to the SAAS version of GitLab. If you're using self-hosted GitLab, select **Self Managed Repository** in the wizard and check [here](/admin-guide/source-control/Self%20Hosted%20Repositories/overview).**

## Prerequisites

* Read access to the GitLab project you want to connect.
* A GitLab [access token](https://docs.gitlab.com/user/profile/personal_access_tokens/) with read access to the repository.

## Connect a GitLab repository

1. Select the space in the space selection dropdown, go to **Automation > Repositories**, and click **Add Repository**.
2. In the **Select a Repository Provider** step, select **GitLab** and click **Next**.
3. In the **Connection** step, fill in the **Details**:
   * **Repository URL** - the HTTPS URL of the project, for example `https://gitlab.com/{group}/{project}`.
   * **Repository Name** - the name the repository will have in Torque.
   * **Branch** (optional) - the branch to use. If you leave it empty, Torque uses the repository's default branch.
   * **Auto-Track Environment Files** (optional) - automatically discover and track environment files from this repository.
   * **Self Managed Repository** - select this if your git server is hosted by you and not on the SAAS. For details, see [Self Hosted Repositories](/admin-guide/source-control/Self%20Hosted%20Repositories/overview).
4. Under **Credentials**, provide the access details:
   * If the credentials you need already exist in the Credentials store, choose **Select from Credentials Store** and pick them.
   * Otherwise, choose **Create New Credentials** (when the option is shown) and enter a **Credentials Name**, select the **Access Token Type**, and enter the **Personal Access Token** that grants Torque read access to the repository.
5. Click **Connect**.

   Torque connects to the repository, saves the credentials in the Credentials store, and discovers the repository's assets. The confirmation screen lists the number of assets discovered and lets you open them in the **IaC Assets** page.

:::tip
Once connected, the repository appears in **Automation > Repositories** with its default branch, assets, and last sync time. Use the repository's **⋮** (3-dot) menu to view its details, sync from git, or disconnect it.
:::
