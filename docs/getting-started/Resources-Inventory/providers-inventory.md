---
title: Providers Inventory
sidebar_label: Providers Inventory
sidebar_position: 0
description: The central inventory grid — summary metrics, the provider list, search, filters, and capability status.
---

# Providers Inventory

The Providers Inventory page (**Resources → Inventory**, **Providers** tab) is the central hub. It combines summary metrics with a searchable, filterable list of every connected provider.

## Toolbar

| Control | Description |
|---------|-------------|
| **Search inventory** | Free-text search across provider names. |
| **Filters** | Narrow the list by **Provider type**, **Credentials**, **Capability**, **Agent**, or **Label**. |
| **Metrics** | Shows or hides the metric cards. |
| **Results count** | The number of providers that match the search and filters (e.g., "13 results"). |
| **Recent Collections** | Opens the **Recent Collections** panel with your previous **Codifications** and **Curations**. See [Codifying and Curating Resources](./cloud-resources#codifying-and-curating-resources). |
| **Add Provider** | Starts the Add Provider wizard. See [Adding a Provider](./adding-a-provider). |

## Summary metrics

Three metric cards sit above the provider list and update as providers are added or change state. Toggle them with the **Metrics** button next to the search bar.

- **Providers Health** — a donut chart and counts showing how many providers are Healthy vs. Unhealthy, with an overall status badge.
- **Inventory Types** — a breakdown of providers by type (for example AWS, Azure, vCenter, and Others) with per-type counts and percentages.
- **Capabilities Health** — progress bars summarizing the health of the Discovery and Deploy capabilities across all providers (e.g., Discovery 52%, Deploy 86%).

<!-- ![Inventory metrics cards — Providers Health, Inventory Types, Capabilities Health](./images/inventory-metrics.png) -->

## Provider list

Each row represents one provider. The columns are:

| Column | Description |
|--------|-------------|
| **Provider Name** | The provider alias defined at creation. Click a row to drill into the provider's discovered resources (when Discovery is supported). See [Resource Discovery](./resource-discovery). |
| **Type** | The provider type with its icon (AWS, Azure, vCenter, Kubernetes, etc.). |
| **Capabilities** | Icons indicating Discovery and Deploy. A green icon means the capability is healthy; a red icon means it is unavailable or unhealthy. |
| **Labels** | Optional key/value labels applied to the provider for organization and filtering. |
| **Environment spaces** | The spaces the provider is shared with (e.g., "All spaces"). Shown when you view the inventory at the **All Spaces** level. |
| **Actions (⋮)** | Row-level menu with **View Resources** and **Delete**. |

Use the page controls at the bottom right to navigate large inventories.

<!-- ![Provider list rows showing Type, Capabilities icons, and Labels](./images/provider-list.png) -->

:::caution
**Delete** removes the provider from all connected spaces and cannot be undone. Deleting a Custom provider also permanently deletes its custom resources and releases any of them that are reserved.
:::

## Reading capability status at a glance

In the Capabilities column, the rocket icon represents **Deploy** and the stacked-layers icon represents **Discovery**. Color communicates state:

| Indicator | Meaning |
|-----------|---------|
| 🟢 Green icon | Capability is configured and healthy. |
| 🔴 Red icon | Capability is unavailable, misconfigured, or failing health checks. |
| ⚪ Grey | The capability has not been added to this provider. |

Hover over the Discovery icon for details:

- When discovery is online, the tooltip offers **Discovery Details** and **View Resources**.
- When discovery failed, the tooltip shows the error and offers **Edit Credentials**, **Sync** (scan again), and **Discovery Details**.

## Provider details

Click **Discovery Details** in the Discovery tooltip to open the provider's details panel. The panel has three tabs:

- **Details**: the provider type, **Provider Alias Name**, **Connected Space(s)** (with **Share with all spaces**), and **Labels**.
- **Deploy** and **Discovery**: the **Capability Status** of that capability (and, on the **Discovery** tab, when it was **Last Synced**), any error, the **Provider Integration** credentials, which you can change with **Edit Credentials**, and, for providers that run through an agent, the **Selected Agent**. A tab of a capability the provider does not have offers **Add Deploy Capability** or **Add Discovery Capability**; a configured capability can be removed with **Remove Deploy Capability** or **Remove Discovery Capability**. See [Provider Capabilities](./provider-capabilities).

Click **Apply changes** to save your edits, or **Discard** to close the panel without saving.

<!-- SCREENSHOT: portal.qtorque.io/admin/resources_inventory with the provider details panel open on the Discovery tab (Capability Status, Last Synced, Provider Integration, Edit Credentials) -->
