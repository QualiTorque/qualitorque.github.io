---
sidebar_position: 2
title: Navigating the Next UI
description: The sidebar, top bar, and Support drawer of next.qtorque.io, and where classic portal pages moved to.
---

# Navigating the Next UI

The next UI has two fixed navigation areas: a **top bar** for account-wide tools and a **sidebar** for the pages of the selected space or of the whole account.

<!-- SCREENSHOT: https://next.qtorque.io/<space> — the sidebar fully expanded (all groups open) next to the top bar, with callouts for the space selector, Copilot, AI Integrations, Support, and the user menu -->

## Top bar

| Element | What it does |
|---|---|
| **Torque logo** | Returns to the Self-Service catalog of the current space. |
| **Space selector** | Shows the current space, or **All Spaces** when you work on account-wide pages. Click it to search for and switch to another space, or to create a new one. See [Working with Spaces](./spaces.md). |
| **Copilot** | Opens the Torque AI chat panel. See [Torque Copilot](./torque-ai-copilot.md). |
| **AI Integrations** | Opens the AI Integrations panel for connecting external AI tools. A badge shows how many integrations you marked as connected. See [AI Integrations](/ai-integrations). |
| **Support** | Opens the Support drawer. See [Support](#support) below. |
| **User menu** | Shows your email and the account name, and lets you change your time zone, open [API Keys](./api-keys.md), and log out. |

The top bar is tinted with the color of the selected space, so you can tell spaces apart at a glance.

## Sidebar

The sidebar groups pages by what you do with them. Groups with a chevron expand and collapse. The **collapse** button at the top of the sidebar reduces it to icons only.

The items you see depend on two things: whether a space or **All Spaces** is selected, and your role and permissions. Items that require a space, such as Automation Inventory and Notifications, are disabled in the All Spaces view with a tooltip that asks you to select a space.

| Group | In a space | In All Spaces (account admins) |
|---|---|---|
| **Self-Service** | The space's catalog of published blueprints and workflows. | Published items from all spaces. |
| **Environments** | The **Operation Hub**: environments and workflow executions of the space. | Environments and executions across the account. |
| **Resources** | **Inventory** and **Agents**. | Same. |
| **Automation** | **Automation Inventory**, **Credentials**, **Repositories**. | Automation Inventory requires a space. |
| **Governance** | **Policies**, **Approval Requests**, **Notifications**, **Users**, **Tags**. | **Policies**, **Policy Repositories**, **Approval Channels**, **Approval Requests**, **Tags**. Notifications requires a space. |
| **Reports** | Activity and cost reports. | All report tabs, including Realized Savings, Opportunity Savings, and Inventory Utilization. |
| **Admin** | **Spaces**, **User Management**, **Configurations**, **Cost Configurations**, **Account and Billing**, **API Keys**. | Same. Opening an Admin page switches the selector to All Spaces. |

<!-- SCREENSHOT: https://next.qtorque.io/admin/spaces — the sidebar in the All Spaces view with the Governance and Admin groups expanded, to contrast with the in-space sidebar -->

:::tip
Page URLs follow the selection: pages of a space start with `/<space-name>/`, and account-wide pages start with `/admin/`. You can bookmark either.
:::

## Where classic portal pages moved

If you are used to the classic portal, this table maps its sidebar to the next UI.

| Classic portal | Next UI |
|---|---|
| Self-Service | **Self-Service** |
| Operate > Operation Hub | **Environments** |
| Operate > Reports | **Reports** |
| Operate > Approval Requests | **Governance > Approval Requests** |
| Design > Automation Inventory | **Automation > Automation Inventory** |
| Design > Input Sources, Parameters | **Automation > Credentials**. The page has tabs for credentials, parameters, and input sources. |
| Settings > Repositories | **Automation > Repositories** |
| Settings > Credentials | **Automation > Credentials** |
| Settings > Agents | **Resources > Agents** |
| Settings > Cost Configurations (Account Center) | **Admin > Cost Configurations** |
| Governance > Tags, Policies, Users | **Governance > Tags, Policies, Users** |
| Governance > Notification Channels | **Governance > Notifications** |
| Governance > Policy Repositories, Approval Channels, User Management (Account Center) | **Governance > Policy Repositories, Approval Channels** and **Admin > User Management** |
| Curate > Resources Inventory (Account Center) | **Resources > Inventory** |
| Admin > Spaces, Configurations, Account & Billing (Account Center) | **Admin > Spaces, Configurations, Account and Billing** |
| No equivalent | **Admin > API Keys**, **AI Integrations** |

## Support

The **Support** icon in the top bar opens a drawer with four sections:

- **Ask Copilot** starts a new Copilot chat. See [Torque Copilot](./torque-ai-copilot.md).
- **Documentation** opens this documentation site.
- **Contact Us** opens a form with three tabs: **Question**, **Feedback**, and **Bug**. A bug report includes a severity level and lets you attach up to two images. You can opt in to be contacted by email about the request.
- **REST API** opens the API reference. See [REST API](/rest-api).

<!-- SCREENSHOT: https://next.qtorque.io/<space> with the Support drawer open — the four sections of the Support drawer -->
