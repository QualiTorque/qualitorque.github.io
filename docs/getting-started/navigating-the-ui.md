---
sidebar_position: 1
title: Navigating the UI
description: The top bar, the sidebar, and the Support drawer of Torque, and where the pages of the previous Torque interface moved.
---

# Navigating the UI

Torque has two navigation areas: the **top bar**, with the space selector and account-wide tools, and the **sidebar**, with the pages of the selected space or of the whole account.

<!-- SCREENSHOT: portal.qtorque.io/<space> — the sidebar with all groups expanded next to the top bar, with callouts for the space selector, Copilot, AI Integrations, Support, and the user menu -->

## Top bar

| Element | Description |
|---|---|
| Space selector | Shows the current space, or **All Spaces** when you work on account-level pages. Click it to switch to another space or to create one. The top bar takes on the color of the selected space. See [Working with Spaces](/admin-guide/spaces). |
| **Copilot** | Opens Torque Copilot. See [Using Torque Copilot](/getting-started/using-copilot). |
| **AI Integrations** | Opens the AI Integrations panel for connecting external AI tools to Torque. See [AI Integrations](/ai-integrations). |
| **Support** | Opens the Support drawer. See [Support](#support). |
| User menu | Shows your email and has **Log out**. Use **Account** to switch between the Torque accounts you belong to, **API Keys** to manage your API keys, and **Time Zone** to set the time zone in which Torque shows dates and times. See [API Tokens](/rest-api/api-tokens). |

Whether you see **Copilot**, **AI Integrations**, and the **Contact Us** section of the Support drawer depends on the permissions of your role. If a team member can't see them, review their role in **Admin > User Management**. See [Roles and Permissions](/governance/roles-and-permissions).

<!-- REVIEW (2026-11-06): the frontend shows Copilot, AI Integrations, and Contact Us to account admins and to roles with the matching view permissions (viewCopilot, viewAiIntegrations, viewContactUs); AI Integrations also requires the ztp_ai_integrations feature flag. Confirm with Yaniv whether these permissions can be set on custom roles, and name them here if so. -->

## Sidebar

The sidebar groups the pages by what you do with them. Click a group to expand or collapse it. The **Collapse** button at the top of the sidebar reduces it to icons; click **Expand** to restore it.

The items you see depend on whether a space or **All Spaces** is selected, and on your role. Pages that work only inside a space are disabled in the **All Spaces** view, with a tooltip that asks you to select a space.

| Group | Inside a space | In All Spaces |
|---|---|---|
| **Self-Service** | The [catalog](/getting-started/self-service-catalog) of blueprints and workflows published in the space. | The items published in all spaces. |
| **Environments** | The **Operation Hub**: the environments and workflow executions of the space. | The environments and executions of all spaces, with a **Space** column. |
| **Resources** | [Inventory](/getting-started/Resources-Inventory) and [Agents](/agent/Agent-Intro). | Same. |
| **Automation** | **Automation Inventory**, [Credentials](/admin-guide/credentials), and [Repositories](/admin-guide/source-control/source-control-github). | **Automation Inventory** is disabled. |
| **Governance** | [Policies](/governance/policies), **Approval Requests**, [Notifications](/admin-guide/notifications), **Users**, and [Tags](/governance/tags). | **Policies**, **Policy Repositories**, [Approval Channels](/governance/approval-channels), **Approval Requests**, **Notifications** (disabled), and **Tags**. |
| **Reports** | Opens the account-level [Reports](/reports/reports-overview) page and switches the selector to **All Spaces**. | The **Activity**, **Cost**, **Realized Savings**, **Opportunity Savings**, and **Inventory Utilization** tabs. |
| **Admin** | At the bottom of the sidebar: [Spaces](/admin-guide/spaces), **User Management**, [Configurations](/admin-guide/configurations), [Cost Configurations](/governance/cost-tracking/cost), **Account and Billing**, and [API Keys](/rest-api/api-tokens). Opening an Admin page switches the selector to **All Spaces**. | Same. |

<!-- SCREENSHOT: portal.qtorque.io/admin/spaces — the sidebar in the All Spaces view with the Governance and Admin groups expanded, to contrast with the in-space sidebar -->

:::tip
Page URLs follow the selection: the pages of a space start with `/<space-name>/`, and account-level pages start with `/admin/`. You can bookmark either.
:::

## Support

The **Support** icon in the top bar opens the **Support** drawer:

- **Ask Copilot**: **Start a New Chat with Copilot** opens a new Copilot chat. See [Using Torque Copilot](/getting-started/using-copilot).
- **Documentation**: **Explore Documentation** opens this documentation site.
- **Contact Us**: **Ask a question**, **Ready to share your feedback?**, and **Report a bug or an issue** open the **Contact Us** form on its **Question**, **Feedback**, or **Bug** tab. Each tab asks for a **Subject**, a description, and a **Severity level**, and lets you attach images. Click **Submit** to send the form, or **Cancel** to close it.
- **REST API**: **Explore REST API** opens the REST API reference. See [REST API](/rest-api).

<!-- SCREENSHOT: portal.qtorque.io/<space> with the Support drawer open — the Ask Copilot, Documentation, Contact Us, and REST API sections -->

## Where pages moved

<!-- TEMPORARY migration aid: remove this section once customers have moved to the current interface (after the mid-December 2026 cutover for dedicated deployments). -->

If you used the previous Torque interface, this table shows where its sidebar pages are now.

| Previous interface | Current interface |
|---|---|
| **Account Center** in the space list | **All Spaces** in the space selector |
| Self-Service | **Self-Service** |
| Operate > Operation Hub | **Environments** (the page is still titled **Operation Hub**) |
| Operate > Reports | **Reports** |
| Operate > Approval Requests | **Governance > Approval Requests** |
| Design > Automation Inventory | **Automation > Automation Inventory** |
| Design > Input Sources, Parameters | **Automation > Credentials**, on the **Input Sources** and **Parameters** tabs |
| Settings > Repositories | **Automation > Repositories** |
| Settings > Credentials | **Automation > Credentials** |
| Settings > Agents | **Resources > Agents** |
| Settings > Cost Configurations (Account Center) | **Admin > Cost Configurations** |
| Curate > Resources Inventory (Account Center) | **Resources > Inventory** |
| Governance > Tags, Policies, Users | **Governance > Tags**, **Policies**, **Users** |
| Governance > Notification Channels | **Governance > Notifications** |
| Governance > Policy Repositories, Approval Channels (Account Center) | **Governance > Policy Repositories**, **Approval Channels** |
| Governance > User Management (Account Center) | **Admin > User Management** |
| Admin > Spaces, Configurations, Account & Billing (Account Center) | **Admin > Spaces**, **Configurations**, **Account and Billing** |

<!-- REVIEW (2026-11-06): the previous interface also has Settings > Deployment Engines (space and Account Center) and Design > Workflows (Account Center). The current sidebar has no entry for either, although the routes /<space>/settings/deployment_engines, /admin/deployment_engines, and /admin/workflows still exist in the frontend. Ask Yaniv where these pages live now (or whether they are retired) and add rows for them. -->
