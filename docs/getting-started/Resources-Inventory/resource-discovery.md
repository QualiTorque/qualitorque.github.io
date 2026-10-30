---
title: Resource Discovery
sidebar_label: Resource Discovery
sidebar_position: 3
description: Drilling into a provider to browse discovered resources, usage metrics, filters, and resource details.
---

# Resource Discovery (Provider Drill-Down)

For providers that support Discovery, clicking the provider name opens its resource view: **Inventory → &lt;Provider Name&gt;**. This page lists every resource discovered under the provider, with metrics and filtering.

## Usage metrics

Two metric cards summarize consumption for the provider's resources:

- **Usage vs. Capacity (On-prem)** — utilization of on-premises resources such as CPU, RAM, GPU, Storage, and Network Ports.
- **Usage vs. Quota (Cloud)** — utilization against cloud quotas for CPU, RAM, GPU, and Storage.

:::note
Some metric panels may be marked **Coming Soon** while the capability is being rolled out.
:::

<!-- ![Provider drill-down — Usage vs. Capacity and Usage vs. Quota metric cards](./images/resource-metrics.png) -->

## Resource list

The resource grid lists discovered items with the following columns:

| Column | Description |
|--------|-------------|
| **Resource Name** | The discovered resource's name. Click to open its details (where available). |
| **Type** | The resource category (e.g., VM, cluster, cloud object). |
| **Model** | The hardware or instance model (e.g., `t3.large`). |
| **Location** | Where the resource resides (e.g., a data center or region). |
| **Last Modified** | Timestamp of the most recent change detected for the resource. |

<!-- ![Provider drill-down — discovered resource list (Resource Name, Type, Model, Location, Last Modified)](./images/resource-list.png) -->

## Searching, filtering, and selecting

- **Search by keyword** — find resources by name.
- **Filters** — narrow by type, model, location, or other attributes.
- **Selection** — use the row checkboxes to select one or more resources for bulk actions.
- **Sorting** — sort columns such as Last Modified to surface recent changes.
- **Pagination** — page through large result sets with the bottom-right controls.
