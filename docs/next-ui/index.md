---
sidebar_position: 1
title: What's New in next.qtorque.io
sidebar_label: Overview
description: Overview of the next-generation Torque UI at next.qtorque.io and what changed compared to the classic portal.
---

# What's New in next.qtorque.io

**next.qtorque.io** is the next-generation user interface for Torque. It runs on the same backend as the classic portal at portal.qtorque.io, so it shows the same account, spaces, blueprints, environments, and settings. Nothing is migrated or copied: anything you create or launch in one interface appears in the other.

Quali recommends switching to next.qtorque.io. This section describes what is new in the interface and links to the existing documentation for everything that has not changed.

<!-- SCREENSHOT: https://next.qtorque.io/<space> (Self-Service) — the full next UI with the sidebar expanded, showing the dark theme, the space selector, and the top-bar icons -->

## Signing in

Open [https://next.qtorque.io](https://next.qtorque.io) and sign in with the same credentials you use for the classic portal (email, social login, or SSO). You land in the Self-Service catalog of your default space.

:::info
There is no switch between the two interfaces inside the product. Keep both URLs bookmarked if you move between them, and share the next.qtorque.io URL with your team when you adopt it.
:::

## What changed

| Area | What is new | Learn more |
|---|---|---|
| **Navigation** | A redesigned sidebar grouped into Self-Service, Environments, Resources, Automation, Governance, Reports, and Admin, and a top bar with the space selector, Copilot, AI Integrations, and Support. | [Navigating the Next UI](./navigation.md) |
| **Spaces** | A space selector that also offers an **All Spaces** view for account-wide pages, and an **Admin > Spaces** page for space management. | [Working with Spaces](./spaces.md) |
| **Self-Service catalog** | A filter panel with label counts, editable quick filters, Favorites, Group by, sorting, and a **Clone** action on blueprint cards. | [Self-Service Catalog](./self-service-catalog.md) |
| **Inventory** | **Resources > Inventory** centralizes providers and discovered resources. Each provider has **Discovery** and **Deploy** capabilities, health metrics, and a drill-down into the resources it manages. | [Inventory](./inventory/index.md) |
| **Provider capabilities and the deploy target** | Providers with a Deploy capability can be selected directly in a launch form through the new `target` input type, replacing separate agent and credentials inputs. | [Provider Capabilities](./inventory/provider-capabilities.md), [Target input type](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#target-input-type) |
| **Copilot** | A conversational assistant, **Torque AI**, with chat history, focus modes, approval modes, and model and reasoning selection. | [Torque Copilot](./torque-ai-copilot.md) |
| **AI Integrations** | Connect Claude Cowork, OpenAI Codex, VS Code, any MCP-compatible client, and the Torque Skills Pack from a single panel in the top bar. | [AI Integrations](/ai-integrations) |
| **API Keys** | A dedicated **Admin > API Keys** page to generate, rename, and revoke keys for the REST API and AI integrations. | [API Keys](./api-keys.md) |
| **Dynamic cards** | Blueprint designers can define custom cards for the environment page. These cards render only in the next UI. | [Dynamic Cards](/blueprint-designer-guide/dynamic-cards-environment-layout) |

## What has not changed

The next UI changes how you navigate and operate Torque, not how Torque works. The following areas behave exactly as documented elsewhere in this site:

- Blueprint and workflow YAML, grains, inputs, outputs, and templating. See the [Blueprint Designer Guide](/blueprint-designer-guide/blueprint-quickstart-guide) and [Workflows](/workflows/workflows-overview).
- Policies, approval channels, tags, roles, and permissions. See [Governance](/governance/policies).
- Agents, repositories, credentials, parameters, and input sources. See [Administration](/admin-guide/configurations).
- Cost tracking and reports. See [Cost](/governance/cost-tracking/cost) and [Reports](/reports/reports-overview).
- The REST API. See [REST API](/rest-api).

The **Operation Hub**, the page that lists your environments and workflow executions, is also the same page as in the classic portal. In the next UI you open it from the **Environments** item in the sidebar.

## Terminology

The next UI uses the same terms as the classic portal: **environments** are launched from **blueprints**, run on **agents**, and live in **spaces**. If you also use Stack Automation, note that the next UI does not use the Stack Automation terms "deployment" or "management server".

## Availability of Copilot and AI Integrations

Copilot and AI Integrations are enabled on every Torque account. Whether a given user sees them depends on the user's role and permissions. Account admins always have access. If a team member cannot see the Copilot or AI Integrations icons in the top bar, review their role in **Admin > User Management**. See [Roles and Permissions](/governance/roles-and-permissions).

## Giving feedback

Click the **Support** icon (question mark) in the top bar and choose **Contact Us** to ask a question, share feedback, or report a bug directly from the interface. See [Navigating the Next UI](./navigation.md#support).
