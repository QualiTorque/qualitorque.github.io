---
sidebar_position: 2
title: Providers Inventory
description: "The Providers tab of Resources > Inventory: metric cards, the provider list, filters, capability status, and row actions."
---

# Providers Inventory

The **Providers** tab of **Resources > Inventory** combines summary metrics with a searchable, filterable list of every connected provider.

<!-- SCREENSHOT: https://next.qtorque.io/<space>/resources_inventory — the Providers tab with the Providers Health, Inventory Types, and Capabilities Health cards above the list -->

## Toolbar

| Control | Description |
|---|---|
| **Search inventory** | Free-text search across provider names. |
| **Filters** | Narrow the list by **Provider type**, **Credentials**, **Capability**, **Agent**, or **Label**. |
| **Metrics** | Shows or hides the metric cards. |
| **N results** | Number of providers matching the current search and filters. |
| **Recent Collections** | Opens the collections drawer. See [Resource Discovery](./resource-discovery.md#recent-collections). |
| **Add Provider** | Starts the wizard. See [Adding a Provider](./adding-a-provider.md). |

## Metric cards

- **Providers Health** shows a ring chart of **Healthy** and **Unhealthy** providers, the total number of providers, and an overall status badge. A provider is healthy when its enabled capabilities are ready.
- **Inventory Types** breaks the providers down by type (AWS, Azure, vCenter, and so on) with counts and percentages. Less common types are grouped under **Others**.
- **Capabilities Health** shows, for **Discovery** and for **Deploy**, how many providers have the capability enabled and what share of them is ready.

## Provider list

| Column | Description |
|---|---|
| **Provider Name** | The alias given when the provider was added. |
| **Type** | The provider type with its icon. |
| **Capabilities** | Two icons: the rocket is **Deploy** and the stacked layers are **Discovery**. See [Reading capability status](#reading-capability-status). |
| **Labels** | Optional key:value labels for organizing and filtering providers. |
| **Environment spaces** | Shown in the **All Spaces** view only. The spaces the provider is shared with, or **All spaces**. |
| **Row menu (⋮)** | **View Resources** opens the provider's discovered resources. **Delete** removes the provider from all connected spaces. |

Use the pagination controls at the bottom right to page through a large inventory.

<!-- SCREENSHOT: https://next.qtorque.io/admin/resources_inventory — a provider row with the row menu open, showing View Resources and Delete -->

:::caution
Deleting a provider removes it from all connected spaces and cannot be undone. Blueprints that target the provider can no longer be launched until another provider is selected.
:::

## Reading capability status

The color of each capability icon tells you its state:

| Indicator | Meaning |
|---|---|
| Green | The capability is configured and ready. |
| Red | The capability failed its health check, for example because credentials are invalid or the agent is offline. |
| Grey, or **Not added** | The capability was not added to this provider. |
| **In Progress** | The capability is being set up or validated. |

Hover over the Discovery icon for details. When discovery is online, the tooltip offers **View Resources**. When discovery failed, it offers **Edit Credentials**, **Sync**, and **Discovery Details** so you can fix the connection and scan again.

## Provider details

Click a provider row to open its details panel. The panel has three tabs:

- **Details** shows the provider alias, type, connected spaces, and labels.
- **Deploy** and **Discovery** show the **Capability Status**, the credentials in use (**Edit Credentials**), and the **Selected Agent**. From here you can **Add** a capability the provider does not have yet, or **Remove** one it no longer needs.

See [Provider Capabilities](./provider-capabilities.md) for what each capability does.

<!-- SCREENSHOT: https://next.qtorque.io/<space>/resources_inventory with a provider selected — the provider details panel with its Details, Deploy, and Discovery tabs -->
