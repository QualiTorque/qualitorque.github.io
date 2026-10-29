---
sidebar_position: 10
title: Self-Managed Quali CloudShell
---

Torque supports connecting asset, blueprint, and policy repositories hosted on Quali CloudShell. Repositories are connected per space from the **Add Repository** wizard, and the credentials you provide are saved in the Torque [Credentials](/admin-guide/credentials) store so you can reuse them when you connect more repositories from the same provider.


## Prerequisites

Torque supports connecting Quali CloudShell as an asset repository. CloudShell blueprints are treated as assets in Torque and can be referenced using the `CloudShell` grain type.

1. A CloudShell user with at least **External Extended** permissions in the CloudShell domains that you want to use.
2. A self-hosted Torque agent that can reach the Sandbox API of your CloudShell instance.
3. CloudShell version 2021.2 or higher.

## Connect a Quali CloudShell repository

1. Select the space in the space selection dropdown, go to **Automation > Repositories**, and click **Add Repository**.
2. In the **Select a Repository Provider** step, select **CloudShell** and click **Next**.
3. In the **Connection** step, fill in the **Details**:
   * **Repository URL** - the URL of your CloudShell instance.
   * **Repository Name** - the name the repository will have in Torque.
   * **Branch** (optional) - the branch to use. If you leave it empty, Torque uses the repository's default branch.
   * **Auto-Track Environment Files** (optional) - automatically discover and track environment files from this repository.
4. Under **Credentials**, provide the access details:
   * If the credentials you need already exist in the Credentials store, choose **Select from Credentials Store** and pick them.
   * Otherwise, choose **Create New Credentials** (when the option is shown) and enter a **Credentials Name**, the CloudShell **Server Address**, optionally a **Token TTL**, and the **User Name** and **Password** of the CloudShell user from the prerequisites.
5. Click **Connect**.

   Torque connects to the repository, saves the credentials in the Credentials store, and discovers the repository's assets. The confirmation screen lists the number of assets discovered and lets you open them in the **IaC Assets** page.

:::tip
Once connected, the repository appears in **Automation > Repositories** with its default branch, assets, and last sync time. Use the repository's **⋮** (3-dot) menu to view its details, sync from git, or disconnect it.
:::
