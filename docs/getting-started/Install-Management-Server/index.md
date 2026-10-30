---
id: install-the-management-server
title: Install the Agent
sidebar_label: Install the Agent
sidebar_position: 2
description: Quickly onboard an agent so Torque can create and manage your environment resources.
---

# Install the Torque Agent

An **agent** is the component that communicates with your Torque tenant and creates the required environment resources. It executes, manages, and monitors the workloads that Torque deploys on your behalf.

This quick-start guide walks you through the fastest path to get Torque up and running: connecting a single agent. Unlike blueprint-driven onboarding, an agent does **not** require a space or a repository — you can install it on its own and associate it with spaces and repositories later.

In this guide we will cover:

- Where an agent can be installed (cloud or on-premises)
- Generating the deployment for your agent
- Installing the agent and verifying that it is connected
- (Optional) Associating the agent with a space and launching blueprints from a repository

:::info What is an agent?
The agent is a lightweight orchestration component deployed in your own environment. Once connected, it appears in **Resources → Agents**, where you can monitor its **health** (Connected / Disconnected), **type**, **version**, and **IP**. Torque supports several agent types, including virtual machine images (**OVA**), managed Kubernetes (for example **EKS**), **Docker**, and self-managed Kubernetes.
:::

---

## Step #1: Open the Agents page

1. Navigate to **Resources → Agents**.
2. Review the list of existing agents. The page shows an at-a-glance **Health** and **Type** breakdown, plus a table with each agent's **Name**, **Status**, **Type**, **Version**, and **IP**.
3. Click **New Agent** in the top-right corner to open the **Connect an Agent** wizard.

![Agents list page with the New Agent button](/img/management-servers-list.png)

---

## Step #2: Choose where to install (Setup)

In the **Setup** step, select where you would like to install your agent:

| Option | Description |
| --- | --- |
| **Cloud** | Install into a public or GPU cloud. After choosing this option, select **Public Cloud** or **GPU Cloud**. |
| **On-Premises** | Install as a virtual machine (**VM**) in your own datacenter. After choosing this option, select the **VM** type and then the hypervisor: **VMWare**, **Redhat KVM**, or **Nutanix**. |

![Setup step: choose Cloud or On-Premises](/img/setup-cloud-or-onprem.png)

Make your selection and click **Next**.

:::note
The remaining steps depend on your choice. Installing on **VMware** adds an optional **Add Credentials** step for your vCenter (covered below). Cloud installations skip that step and go straight to the installation instructions.
:::

This guide follows the **On-Premises → VM → VMWare** path as an example.

---

## Step #3: Generate the agent (Generate Agent)

In the **Generate Agent** step, fill in the details Torque needs to build the deployment for your agent.

![Generate Agent details form](/img/generate-agent-details.png)

| Field | Required | Description | Example |
| :--- | :--- | :--- | :--- |
| **Agent Name** | Yes | A unique, human-readable name for the agent. | `mgmt-vcenter-97` |
| **VM Hostname** | Yes | The hostname to assign to the deployed virtual machine. | `mgmt-vcenter-97` |
| **IP Address** | Yes | The static IP address the agent will use. | `192.168.1.10` |
| **Gateway** | Yes | The default gateway IP address for the VM's network. | `192.168.1.1` |
| **Subnet Mask Bits (CIDR Notation)** | Yes | The subnet mask expressed as CIDR bits. | `24` |
| **NTP Servers** | Yes | One or more NTP servers (comma-separated) used to keep the VM's clock in sync. | `pool.ntp.org,pool2.ntp.org` |
| **DNS Server** | No | The DNS server IP address the VM should use for name resolution. | `192.168.1.53` |
| **Location** | No | The geographic location of the agent, selected from the city search. | `Austin, United States` |
| **Proxy** | No | Toggle on to route the agent's outbound traffic through an HTTP/HTTPS proxy, then provide the proxy details. | — |

When all required fields are complete, click **Next**.

:::tip
Hover over the ⓘ icon next to any field for inline guidance. Use a static IP that is reserved for the agent so its address does not change after deployment.
:::

---

## Step #4: Add vCenter credentials (VMware only, optional)

For the VMware path, the wizard adds an **Add vCenter Credentials (Optional)** step (shown as **Add Credentials** in the step list). It lets you store the vCenter credentials that Torque will later use when this vCenter is added as a target [Provider](/getting-started/Resources-Inventory/adding-a-provider).

This step is optional: you can skip it now and add the target credentials later from **Resources → Inventory**. Adding them now can save time if the agent is deployed in a network with access to your internal vCenter, because you complete the setup in one flow instead of returning later to create the same credentials.

:::note
Credential connectivity can be tested only after the agent is deployed and connected to Torque. Choose an account scoped to the target datacenter or cluster rather than a full administrator account where possible.
:::

Enter the credentials (or leave the step empty) and click **Next**.

---

## Step #5: Install the agent (Installation Instructions)

The final **Installation Instructions** step prepares the agent appliance for your chosen target:

1. **SSH private key** - Torque generates an SSH key for authenticating to the appliance. Copy and save it now; it is not accessible after you close the wizard.
2. **Download Agent File** - Torque builds the agent OVA file (this takes approximately two minutes). Click **Download** to save it. **Finish** stays disabled until the OVA file has been downloaded.
3. Follow the on-screen **Instructions** to deploy the appliance:
   1. Go to your ESX server.
   2. Click **Create or Register a VM** and follow the steps.
   3. Select the downloaded `.ova` file and make sure the network adapter that allows external connectivity is selected before you click **Finish**.

For **cloud** targets, this step instead shows a command (for example a `kubectl`-based command for Kubernetes) that you run against your cluster, followed by a **Connections Status** panel.

:::info
It may take up to a couple of minutes for a freshly deployed agent to start up and register. Wait for the **Connected** indication before continuing.
:::

### Verify the connection

Return to **Resources → Agents**. Your new server should appear in the list with a green **Connected** status. If it still shows **Disconnected** after a few minutes, confirm that the VM is powered on and that it has outbound network access (and correct proxy settings, if configured) to reach your Torque tenant.

🎉 That's it — your agent is connected and ready to deploy blueprints from the Self-Service Catalog.

---

## What's next (optional)

A connected agent is fully functional on its own, but to start deploying from blueprints you'll typically pair it with a space and a repository.

### Associate the agent with a space

Spaces are logically separate areas that group agents, repositories, and permitted users. To let a space deploy through your new agent:

1. From the agent's actions menu (or the post-connection dialog), choose **Associate to space**.
2. Select the target space.
3. Set the **default namespace** and **service account** that Torque will use to deploy workloads through this server. These defaults can be changed later in **Resources → Agents**.

### Launch blueprints from a repository

Once an agent is associated with a space, you can connect a repository to that space, discover its automation assets, and generate blueprints from them. Publishing a blueprint to the space catalog lets end-users launch environments — Torque will execute those environments through the associated agent.

For the full workflow, see the guides on creating a space, connecting a repository, and launching an environment.
