---
title: Resource Discovery
sidebar_label: Resource Discovery
sidebar_position: 3
description: Drilling into a provider to browse discovered resources, usage metrics, filters, and resource details.
---

# Resource Discovery (Provider Drill-Down)

For providers that support Discovery, clicking the provider row (or **View Resources** in its row menu) opens its resource view: **Inventory → &lt;Provider Name&gt;**. This page lists every resource discovered under the provider, with metrics and filtering.

## Usage metrics

Two metric cards summarize consumption for the provider's resources:

- **Usage vs. Capacity (On-prem)** — utilization of on-premises resources such as CPU, RAM, GPU, Storage, and Network Ports.
- **Usage vs. Quota (Cloud)** — utilization against cloud quotas for CPU, RAM, GPU, and Storage.

:::note
Some metric panels may be marked **Coming Soon** while the capability is being rolled out.
:::

<!-- ![Provider drill-down — Usage vs. Capacity and Usage vs. Quota metric cards](./images/resource-metrics.png) -->

<!-- REVIEW (2026-11-06): the Usage vs. Capacity / Usage vs. Quota cards did not appear on the drill-down of the Sample-Azure provider. Confirm with Yaniv which provider types show them. -->

## Resource list

The resource grid lists discovered items. The columns depend on the provider type; for cloud providers they are:

| Column | Description |
|--------|-------------|
| **Resource Name** | The discovered resource's name. Click to open its details (where available). |
| **Type** | The resource type in the provider (e.g., `Microsoft.Compute/virtualMachines`). |
| **IaC Status** | **Managed** (managed by Torque), **Codified** (managed by your own IaC), or **Unmanaged** (created manually). |
| **Location** | Where the resource resides (e.g., a data center or region). |
| **Last Modified** | Timestamp of the most recent change detected for the resource. |

Other provider types can show columns such as **Model**, **Version**, **Namespace**, or **Compute**.

<!-- ![Provider drill-down — discovered resource list (Resource Name, Type, IaC Status, Location, Last Modified)](./images/resource-list.png) -->

## Searching, filtering, and selecting

- **Search by keyword** — find resources by name.
- **Filters** — narrow by **Type**, **Location**, **Tags**, or **Attributes**, and reset with **Clear Filters**.
- **Selection** — use the row checkboxes to add resources to the current **Collection**, then click **Collection** to codify or curate them. See [Codifying and Curating Resources](./cloud-resources#codifying-and-curating-resources).
- **Sorting** — sort columns such as Last Modified to surface recent changes.
- **Pagination** — page through large result sets with the bottom-right controls.
