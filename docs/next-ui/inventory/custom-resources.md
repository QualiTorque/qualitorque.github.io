---
sidebar_position: 6
title: Custom Resources
description: Where custom resource types and instances live in next.qtorque.io, and how reservation status and exclusion work.
---

# Custom Resources

Custom Resources let you define your own resource types, such as GPU devices, licenses, or lab pods, create instances of them, and have blueprints reserve them when an environment launches. The feature itself is unchanged in the next UI; this page shows where it lives and what the tab displays. For setting up resource types and for the blueprint side, see [Custom Resources Setup](/getting-started/Resources-Inventory/custom-resources/setup) and [Use Cases](/getting-started/Resources-Inventory/custom-resources/use-cases).

In the next UI, custom resources are the **Custom Resources** tab of **Resources > Inventory**. The tab appears when **Custom Resources** is enabled in **Admin > Configurations > Resources Inventory**.

<!-- SCREENSHOT: https://next.qtorque.io/<space>/resources_inventory (Custom Resources tab) — the tab with the Reservation Status, Type, and Location cards and the resource table -->

## Toolbar

| Control | Description |
|---|---|
| **Search by keyword** | Finds resources by name. |
| **Filters** | Narrow the list by type, location, or reservation status. |
| **Metrics** | Shows or hides the metric cards. |
| **Refresh** | Reloads the list. |
| **Actions** | Manage resource types: create a new type or view all types. |
| **Create New Resource** | Creates an instance of an existing type. |

## Metric cards

- **Reservation Status** shows how many resources are **Available** and how many are **Reserved**.
- **Type** and **Location** break the resources down by resource type and by location.

## Resource list

| Column | Description |
|---|---|
| **Excluded** | Check to exclude the resource from reservation. Excluded resources stay in the inventory but are never picked when an environment launches, for example during maintenance. |
| **Name** | The resource instance name. |
| **Type** | The custom resource type. |
| **Location** | The location attribute, or **N/A**. |
| **Reservation Status** | **Available** or **Reserved**. |
| **Reserved By** | For reserved resources, the space and environment that hold the reservation, with a link to the environment. |
| **Row menu (⋮)** | Edit or remove the resource. |
